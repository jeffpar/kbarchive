---
layout: page
title: "Q149324: FIX: Modifying Const Temporary Object Doesn't Generate Error"
permalink: /kb/149/Q149324/
---

## Q149324: FIX: Modifying Const Temporary Object Doesn't Generate Error

	Article: Q149324
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler generates the following error when you invoke a non-const member
	function on a const object:
	
	  error C2662: 'Set' : cannot convert 'this' pointer from 'const struct A *' to
	  'struct A *const '
	
	However, it does not generate this error when you invoke a non-const member
	function on a const object that is returned by a function.
	
	RESOLUTION
	==========
	
	To work around this problem, make the function return a reference to const.
	
	STATUS
	======
	
	This bug was corrected in Microsoft Visual C++, version 6.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /* Compile options needed: None
	  */ 
	
	  truct A {
	
	   int m_i;
	
	   A() { m_i = 0; };
	
	   void Set() {m_i = 5;}
	  };
	
	  truct B {
	
	   A m_a;
	
	   // Change the return type to 'const A &' to work around
	   const A GetMember() const {return m_a;}
	  };
	
	  void TestFunc(const B & b)
	  {
	   const A a;
	
	   // Next line correctly generates:
	   // error C2662: 'Set' : cannot convert 'this' pointer from
	   // 'const struct A *' to 'struct A *const '
	
	   // a.Set(); // Uncomment this line to get the error
	
	   // Next line does not generate the error even though
	   // B::GetMember returns const A object.
	   // Change the return type of B::GetMember to 'const A &'
	   // to get the error.
	
	   b.GetMember().Set();
	
	  }
	
	  void main()
	  {
	   B b;
	
	   TestFunc(b);
	
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
