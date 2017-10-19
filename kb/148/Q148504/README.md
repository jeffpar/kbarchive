---
layout: page
title: "Q148504: FIX: C2371: Cast to Struct Ptr in Default Arg of Class Member"
permalink: /kb/148/Q148504/
---

## Q148504: FIX: C2371: Cast to Struct Ptr in Default Arg of Class Member

	Article: Q148504
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC500fix
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When encountering a cast to a structure pointer in the default argument of a
	class member function, the Visual C++ compiler generates the following error:
	
	  error C2371: 'MyClass' : redefinition; different basic types
	
	This error does not occur if the function declaration is not a member of a class.
	
	RESOLUTION
	==========
	
	If you are casting from an integral literal, remove the cast. For example,
	change this:
	
	     MyFunc (struct MyStruct *p = (struct MyStruct*)0);  //C2371 error
	
	to this:
	
	     MyFunc (struct MyStruct *p = 0);                    //no error
	
	If you are casting from a different structure type, remove the struct keyword
	from the cast. For example, change this:
	
	     yFunc (struct MyStruct *p = (struct MyStruct*)x);  //C2371 error
	
	to this:
	
	     MyFunc (struct MyStruct *p = (MyStruct*)x);         //no error
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
