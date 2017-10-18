---
layout: page
title: "Q130769: FIX: Negative Value Passed to mktime() Generates Wrong Date"
permalink: kb/130/Q130769/
---

## Q130769: FIX: Negative Value Passed to mktime() Generates Wrong Date

	Article: Q130769
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1
	Operating System(s): 
	Keyword(s): kbList kbCompiler
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The wrong date is returned when a negative value is passed for the month to the
	mktime() function.
	
	For example, in the sample code in this article, -1 is passed for the month, so
	the mktime() function should return December 15, 1994. However, it incorrectly
	returns January 16, 1995.
	
	RESOLUTION
	==========
	
	Verify that the value for the month is greater than or equal to zero, when
	calling the mktime() function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	     /* Compile options needed: none
	     */ 
	
	     #include <time.h>
	     #include <stdio.h>
	
	     void main() {
	         time_t   CurrentTime, NewTime;
	         struct tm TimeStruct;
	
	         time ( &CurrentTime );
	         TimeStruct = *localtime(&CurrentTime);
	         TimeStruct.tm_mday = 15;
	         TimeStruct.tm_mon  = -1;
	         TimeStruct.tm_year = 95;
	
	         NewTime = mktime (&TimeStruct);
	         printf("%s", asctime( &TimeStruct));
	     }
	
	Additional query words: 9.00 9.10
	
	======================================================================
	Keywords          : kbList kbCompiler 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :2.0,2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
