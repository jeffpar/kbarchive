---
layout: page
title: "Q152056: BUG: Using Intrinsic Versions of log10 and fmod"
permalink: /kb/152/Q152056/
---

## Q152056: BUG: Using Intrinsic Versions of log10 and fmod

	Article: Q152056
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbCodeGen kbCompiler kbVC500bug
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1, 4.2 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some cases, using the intrinsic versions of log10 and fmod together in a
	program may produce incorrect results. The sample code below illustrates the
	problem.
	
	When the result of log10 is a negative whole number that is divided by 1.0 using
	fmod, the result of fmod will be -1.0 rather than 0.0. This only occurs when the
	compiler generates the intrinsic versions of these functions. You need to use
	the /Oi compiler option to have the compiler generate intrinsic versions of
	functions.
	
	RESOLUTION
	==========
	
	When using log10 and fmod together in a function, as in the sample code, do not
	use the /Oi compiler option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /* Compile options needed: /Oi
	     */ 
	     #include <math.h>
	     #include <stdio.h>
	
	     void main()
	     {
	         double dValue, theLog, theMod;
	
	         dValue = 0.01;
	         theLog = log10( dValue );
	         theMod = fmod( theLog, 1.0 );
	
	         printf( "The log10 of %f is %f\n", dValue, theLog );
	         printf( "The fmod of (%f,1.0) is %f\n", theLog, theMod );
	         printf( "for  all x, fmod(x, 1.0) should always be 0.0\n" );
	     }
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbCodeGen kbCompiler kbVC500bug 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC32bitSearch kbVC500Search
	Version           : :4.0,4.1,4.2,5.0
	Issue type        : kbbug
	
	=============================================================================
	
