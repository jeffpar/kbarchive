---
layout: page
title: "Q263589: BUG: Pointer to Member Allows Non-const Method Call on const Obj"
permalink: kb/263/Q263589/
---

## Q263589: BUG: Pointer to Member Allows Non-const Method Call on const Obj

	Article: Q263589
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC600bug
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	No error or warning message is generated if you try to call a non-const member
	function on a const class object by using a member pointer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample code demonstrates the bug:
	
	  //test.cpp
	  //compiler option needed: none
	  class A
	  {
	    int  m_val;
	   public:
	     A(int i=0) : m_val(i) {}
	     void Add(int val) { m_val+=val; }
	  };
	   
	  int main()
	  {
	  	void(A::*MFptr)(int) = &A::Add;
	  	const A ca;      //const object
	   	(ca.*MFptr)(5);  //no error here
	  	return 0;
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:6.0
	Issue type        : kbbug
	
	=============================================================================
	
