---
layout: page
title: "Q142493: BUG: Cannot Cast Double to int for Use in an Array Declarator"
permalink: kb/142/Q142493/
---

## Q142493: BUG: Cannot Cast Double to int for Use in an Array Declarator

	Article: Q142493
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC500bug
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 4.0, 4.1, 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler generates the following error when you type cast a 'const float' or
	'const double' to 'const int' in an array declarator:
	
	  error C2057: expected constant expression
	
	RESOLUTION
	==========
	
	To work around this problem, use a #defined double value in place of a const
	double. See the "Workaround Sample Code" section for an example.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code to Demonstrate Problem
	----------------------------------
	
	     /* Compile options needed: /c
	     */ 
	
	     const double d_max = 5.55;
	     int arr[(const int) d_max];   // Gives C2057 here
	
	     // The following code also gives the error:
	     const double d_max = 5.55;
	     const int imax = (const int) d_max;
	
	     int arr[imax];   // Gives C2057 here
	
	Workaround One - Sample Code
	----------------------------
	
	     #define D_MAX 5.55
	     const int imax = (const int) D_MAX;
	     int arr[imax];
	
	Workaround Two - Sample Code
	----------------------------
	
	     #define D_MAX 5.55
	     int arr[(const int) D_MAX];
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC500bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :4.0,4.1,4.2,5.0
	Issue type        : kbbug
	
	=============================================================================
	
