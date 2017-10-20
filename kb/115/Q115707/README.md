---
layout: page
title: "Q115707: FIX: C2857 Error Incorrectly Generated Using /Yc Option"
permalink: /kb/115/Q115707/
---

## Q115707: FIX: C2857 Error Incorrectly Generated Using /Yc Option

{% raw %}

	Article: Q115707
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,6.0,7.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC410fix
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the /Yc option is used to create a precompiled header from a header file
	which contains a syntax error, as shown in the code below, the compiler will
	incorrectly generate the following error:
	
	  
	
	 error C2857: '#include' statement specified with the /Yctest.h
	              command line option was not found in the source file
	
	This error is generated after the header file syntax errors are listed and after
	all lines of the source file have been processed.
	
	RESOLUTION
	==========
	
	Correct the syntax errors contained in the header file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed above.
	This bug was corrected in Visual C++ version 4.1.
	
	MORE INFORMATION
	================
	
	The following code can be used to demonstrate this problem.
	
	Sample Code
	-----------
	
	     /* Compile options needed: /Yctest.h /c
	     */ 
	
	  TEST.H
	  ------
	
	     x int;  /* This file is intentionally given an error */ 
	             /* to demonstrate the problem in the article */ 
	
	  TEST.CPP
	  --------
	
	     #include "test.h"
	
	     void main(void)
	     {
	     }
	
	Additional query words: kbVC400bug 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC410fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,2.0,4.0,6.0,7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
