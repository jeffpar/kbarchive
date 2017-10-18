---
layout: page
title: "Q101188: Order of Object Initialization Across Translation Units"
permalink: kb/101/Q101188/
---

## Q101188: Order of Object Initialization Across Translation Units

	Article: Q101188
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:7.0; :1.0,1.5,2.0,4.0
	Operating System(s): 
	Keyword(s): kbLangCPP kbVC
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ for MS-DOS, version 7.0 
	- Microsoft Visual C++, versions 1.0, 1.5 
	- Microsoft Visual C++, versions 2.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The order of initialization of global objects is undefined across translation
	units. For example, if your application consists of three C++ modules and each
	module declares an object of xyz class, there is no guarantee during program
	initialization which of these objects will be constructed first.
	
	In addition to not relying on the order of initialization, you should not use one
	object's address in another object's initialization when the two objects are
	contained in different translation units.
	
	AT&T 2.1 does not define the order of initialization for global objects
	across translation units. The order of initialization is
	implementation-dependent.
	
	Additional query words: kbinf 7.00 1.00 1.50 2.00 4.00
	
	======================================================================
	Keywords          : kbLangCPP kbVC 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbCVC700DOS kbVC200
	Version           : MS-DOS:7.0; :1.0,1.5,2.0,4.0
	
	=============================================================================
	
