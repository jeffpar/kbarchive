---
layout: page
title: "Q149517: BUG: /Ox and /4Ya Options Together Cause Incorrect Results"
permalink: /kb/149/Q149517/
---

## Q149517: BUG: /Ox and /4Ya Options Together Cause Incorrect Results

	Article: Q149517
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbCodeGenkbbuglist
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling source code that performs arithmetic calculations along with the /Ox
	and /4Ya compiler options together creates object code that may produce
	incorrect arithmetic calculation results at run time.
	
	RESOLUTION
	==========
	
	Do not use the /Ox and /4Ya compiler options together.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code to Illustrate Problem
	---------------------------------
	
	  C Compile options needed: /Ox /4Ya
	
	     REAL*8 a(3), x, y
	
	     a(1) = -1.D0
	     a(2) = -2.D0
	     a(3) = -3.D0
	
	     x = 0.D0
	     y = 0.23D0
	
	     a(3) = 1.D0/SQRT(1.D0+x*x+y*y)
	     a(1) = x*a(3)
	     a(2) = y*a(3)
	
	     PRINT *,'a(1) = ',a(1)
	     PRINT *,'a(2) = ',a(2)
	     PRINT *,'a(3) = ',a(3)
	
	     END
	
	Correct Output
	--------------
	
	  a(1) = 0.000000000000000E+000
	  a(2) = 2.241476929214269E-001
	  a(3) = 9.745551866148997E-001
	
	Output with /Ox /4Ya
	--------------------
	
	  a(1) = 0.000000000000000E+000
	  a(2) = 2.241476929214269E-001
	  a(3) = 2.241476929214269E-001
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbCodeGen kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
