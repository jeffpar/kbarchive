---
layout: page
title: "Q143082: FIX: Wrong Pointer Value When Nested Classes Have Same Name"
permalink: kb/143/Q143082/
---

## Q143082: FIX: Wrong Pointer Value When Nested Classes Have Same Name

	Article: Q143082
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnokeyword kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbVC500bu
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a class is derived from multiple classes such that two or more of the base
	classes are nested classes of the same name, pointers to either of the nested
	base classes point to the same address. Consider a class D which is derived from
	both B1::Nested and B2::Nested. Given an object d, which is of type D, then
	(B1::Nested *)&d and (B2::Nested *)&d will both resolve to the same
	address. If either of the nested base class' names are changed to be unique, the
	behavior is normal.
	
	RESOLUTION
	==========
	
	This happens only when the nested classes have the same name. Change the names,
	for example "A::NestedA" and "B::NestedB".
	
	STATUS
	======
	
	This bug was corrected in Microsoft Visual C++, version 6.0.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce Error
	------------------------------
	
	  // Compile option needed: none
	
	  // File test.cpp
	
	  truct A {
	
	     struct Nested {
	         virtual void A_Func() = 0;
	     };
	
	  };
	
	  truct B {
	
	     struct Nested {
	         virtual void B_Func() = 0;
	     };
	
	  };
	
	  truct MyClass : public A::Nested, public B::Nested
	  {
	
	     void A_Func() { cout << "A_Func() called" << endl; }
	     void B_Func() { cout << "B_Func() called" << endl; }
	  };
	
	  void main()
	  {
	
	     MyClass m;
	     cout << "(A::Nested*)&m = " << (void*)(A::Nested*)&m << endl;
	     cout << "(B::Nested*)&m = " << (void*)(B::Nested*)&m << endl;
	     ((A::Nested*)&m)->A_Func();
	     ((B::Nested*)&m)->B_Func();
	
	  }
	
	In this example, the compiler confuses (A::Nested*) and (B::Nested*), so the same
	values are printed for both ((A::Nested*)&m) and ((B::Nested*)&m) when
	they should be different. This also causes the call to B_Func on the last line
	to call A_Func instead.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
