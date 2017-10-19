---
layout: page
title: "Q149749: PRB: DIM() Intrinsic Function does not Support Complex Numbers"
permalink: /kb/149/Q149749/
---

## Q149749: PRB: DIM() Intrinsic Function does not Support Complex Numbers

	Article: Q149749
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortran
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to use complex numbers as DIM() input arguments results in the
	following compilation error:
	
	  error FOR2325: wrong data type for argument number of intrinsic procedure DIM
	
	The DIM() intrinsic function returns the difference between two input arguments
	if their difference is positive, or it returns zero otherwise. The DIM()
	intrinsic function no longer supports the use of complex numbers as input
	arguments. Note only the real part of the complex numbers is used to calculate
	the difference between the two input arguments.
	
	RESOLUTION
	==========
	
	Obtain the real part of the complex number, and use it as the DIM() intrinsic
	function input argument.
	
	-or-
	
	Compile the source file using the /4fps1 compiler option.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Sample Code to Illustrate Problem and Resolution
	------------------------------------------------
	
	  ! Compile options needed: none
	
	        real*8 d
	        complex c1, c2
	        c1 = (4.0, -1.0)
	        c2 = (1.0, 4.2E3)
	  ! comment the following line for first resolution
	        d = DIM( c1, c2 )
	  ! uncomment the following line for second resolution
	  !      d = DIM( real(c1), real(c2) )
	        print *, d
	        end
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
