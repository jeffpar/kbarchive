---
layout: page
title: "Q149506: BUG: /4fps1 and /Ox Compiler Options with Complex Calculations"
permalink: /kb/149/Q149506/
---

## Q149506: BUG: /4fps1 and /Ox Compiler Options with Complex Calculations

	Article: Q149506
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the /4fps1 and /Ox compiler options together with source code containing
	complex number calculations causes the results of those calculations to be
	erroneous.
	
	RESOLUTION
	==========
	
	If you are performing complex number calculations, do not use the /4fps1 and /Ox
	compiler options together.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code to Illustrate Problem
	---------------------------------
	
	  C Compile options needed: none
	
	        COMPLEX A, B
	
	        C = 3.1415926535897932384626434
	        D = 3.0/2.0
	
	        B = CMPLX(COS(1.5), SIN(D)) ** 3
	        WRITE(*,*) B
	
	        A = B - CMPLX(COS(4.5), -SIN(4.5 + C))
	        WRITE(*,*) A
	
	        END
	
	Correct Output
	--------------
	
	  (-2.107958E-01,-9.775301E-01)
	  (9.473733E-09,0.000000E+00)
	
	Output using /4fps1 /Ox
	-----------------------
	
	  (-3.537882E-05,6.484614E-05)
	  (2.107604E-01,9.775950E-01)
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
