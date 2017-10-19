---
layout: page
title: "Q120965: FIX: C1001: 'e:&#92;b_bld&#92;c2&#92;P2&#92;main.c', line 374 with /Zi Switch"
permalink: /kb/120/Q120965/
---

## Q120965: FIX: C1001: 'e:&#92;b_bld&#92;c2&#92;P2&#92;main.c', line 374 with /Zi Switch

	Article: Q120965
	Product(s): Microsoft C Compiler
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling an application that uses a local temporary static union, as does the
	sample code shown in the More Information section below, may cause the following
	internal compiler error when built with debug information only:
	
	  TEST.CPP(9) : fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'e:\b_bld\c2\P2\main.c', line 374)
	  Please choose the Technical Support command on the Visual C++ Help menu, or
	  open the Technical Support help file for more information
	
	TEST.CPP is the sample code file given in the More Information section below.
	
	RESOLUTION
	==========
	
	Use either of these two workarounds:
	
	- Remove the /Zi compiler option.
	
	-or-
	
	- Create an object to represent the local static union:
	
	        static union { int z;} tmp;
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Visual C++, 32-bit Edition,
	version 4.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	
	  /* Compile options needed: /Zi
	  */ 
	
	  static union { int i; };
	  static union { int k; };
	
	  void local()
	  {
	     union { int x; };
	     union { int y; };
	     static union { int z; };
	  }
	
	
	Additional query words: 2.00 9.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
