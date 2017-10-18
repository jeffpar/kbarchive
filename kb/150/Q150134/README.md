---
layout: page
title: "Q150134: BUG: FOR4165 Warning Underflow of Smallest Positive REAL&#42;8"
permalink: kb/150/Q150134/
---

## Q150134: BUG: FOR4165 Warning Underflow of Smallest Positive REAL&#42;8

	Article: Q150134
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling a source file that contains an assignment of the smallest positive
	REAL*8 literal constant to a REAL*8 or DOUBLE PRECISION variable causes the
	following compiler warning message:
	
	  warning FOR4165: underflow in REAL literal constant 2.225073858507201D-308
	
	RESOLUTION
	==========
	
	Use the TINY() intrinsic function to convert a number to the smallest positive
	REAL*8 value, and then use the result in your calculations.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code to Illustrate Problem and Workaround
	------------------------------------------------
	
	  C Compile options needed: none
	
	        REAL*8 dx
	        DOUBLE PRECISION dy
	        dx = 2.225073858507201D-308  ! Warning - 0.000000000000000 assumed
	        write (*,*) dx
	        dy = tiny(1.d0)   ! work-around - dy = 2.225073858507201d-308
	        write (*,*) dy
	        END
	
	Program Output
	--------------
	
	  0.000000000000000E+000
	  2.225073858507201E-308
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
