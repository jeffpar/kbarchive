---
layout: page
title: "Q167348: FIX: Non-const Member Function Call Via const Object Allowed"
permalink: kb/167/Q167348/
---

## Q167348: FIX: Non-const Member Function Call Via const Object Allowed

	Article: Q167348
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbcode kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix
	Last Modified: 13-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A compiler error is not generated when a non-const member function is called via
	a temporary const object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.This problem was corrected in Microsoft
	Visual C++ version 6.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /* Compile Options Needed: None */ 
	     class myClass
	     {
	     public:
	       const myClass f();
	       const myClass g();
	     };
	
	     int main( )
	     {
	       myClass mc;
	
	       mc.f().g();     // The return value of f() is const, but g()
	                       // is not a const member function. Therefore,
	                       // an error should be generated.
	       return 0;
	
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:4.0,4.1,4.2,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
