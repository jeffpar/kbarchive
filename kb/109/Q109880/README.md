---
layout: page
title: "Q109880: FIX: Incorrect &#36;DEBUG Reference to Include File"
permalink: kb/109/Q109880/
---

## Q109880: FIX: Incorrect &#36;DEBUG Reference to Include File

	Article: Q109880
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): kberrmsg kbLangFortran
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under some circumstances, a $DEBUG message may incorrectly give the name of an
	include file instead of the name of the program where the trapped run- time
	error occurred. For example, the code sample shown below deliberately references
	the array "nums" beyond its bounds. With the $DEBUG metacommand at the top of
	the program, the run-time error is reported as:
	
	  C:\FPSNT\INCLUDE/flib.fd(7) : run-time error F6096: $DEBUG
	  - array subscript expression out of range
	
	  Execution traceback:
	  from main program in C:\FPSNT\INCLUDE/flib.fd(7)
	
	Note that the filename refers to the include file FLIB.FD, but the line number
	(7) correctly indicates the location in the main program where the error
	occurred.
	
	This can also happen with user-defined include files.
	
	RESOLUTION
	==========
	
	If the $DEBUG metacommand is moved to below the include statements, then the
	correct filename will be referenced.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article. This problem was corrected in FORETRAN PowerStation
	32, version 4.0.
	
	MORE INFORMATION
	================
	
	This situation also exists with Microsoft FORTRAN version 5.1.
	
	Sample Code
	-----------
	
	  C Compile options needed: NONE
	  $DEBUG
	        include 'flib.fi'
	        include 'flib.fd'
	        integer*4 nums(7)
	        do i = 1, 10
	          nums(i) = i
	          write(*,*) nums(i)
	        end do
	        end
	
	Additional query words: 1.00 5.10
	
	======================================================================
	Keywords          : kberrmsg kbLangFortran 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
