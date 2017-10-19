---
layout: page
title: "Q118341: FIX: MATHERRQQ: Access Violation on C8ARG1 and C16ARG1"
permalink: /kb/118/Q118341/
---

## Q118341: FIX: MATHERRQQ: Access Violation on C8ARG1 and C16ARG1

	Article: Q118341
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): kberrmsg kbFortranPS kbLangFortran
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows NT, Dr. Watson reports an access violation when parts of MATHERRQQ's
	INFO record are passed to other routines. The problem occurs when passing
	MTH$E_INFO members: C8ARG1, C8ARG2, C16ARG1, or C16ARG2.
	
	In MS-DOS (Windows, version 3.1), the error message is:
	
	  DOSXMSF : fatal error DX1020: unhandled exception:
	  General Protection Fault.
	
	RESOLUTION
	==========
	
	Do not pass C8ARG1, C8ARG2, C16ARG1, or C16ARG2 directly to another routine.
	Assign the value to a temporary variable and pass the variable instead.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was corrected in Microsoft FORTRAN PowerStation
	32, version 4.0.
	
	MORE INFORMATION
	================
	
	To reproduce the problem, compile and run the sample code below.
	
	To use the program without error, comment out the four lines that print C8ARG1,
	C8ARG2, C16ARG1, and C16ARG2.
	
	Sample Code
	-----------
	
	  c compile options needed: none
	
	        include 'flib.fi'
	        implicit none
	        include 'flib.fd'
	        complex a,b,c
	        call LCWRQQ(#133F)
	        a=(233.75875785857,145.8498498998989)
	        b=(345.84984984900,298.849849849989)
	        c=a**b
	        write(*,*)'****** successful completion ******'
	        end
	
	        SUBROUTINE MATHERRQQ(name, length, info, retcode)
	        INCLUDE 'FLIB.FD'
	        INTEGER*2 length
	        CHARACTER name(length)
	        RECORD / MTH$E_INFO / info
	        INTEGER*2 retcode
	        PRINT *, 'Entered MATHERRQQ'
	        PRINT *, 'Failing function: ', name, '      Length: ', length
	        PRINT *, 'Error Type: ', info.errcode
	
	        SELECT CASE (info.errcode)
	        CASE (MTH$E_OVERFLOW)
	           PRINT *, 'OVERFLOW'
	        CASE DEFAULT
	           PRINT *, 'UNKNOWN'
	        END SELECT
	
	        SELECT CASE (info.ftype)
	        CASE (TY$CMPLX8)
	           PRINT *, 'Type: COMPLEX*8'
	           PRINT *, 'Argument1: ', info.c8arg1
	           PRINT *, 'Argument2: ', info.c8arg2
	           info.c8res = 0.0
	           retcode = 1
	        CASE (TY$CMPLX16)
	           PRINT *, 'Type: COMPLEX*16'
	
	           PRINT *, 'Argument1: ', info.c16arg1
	           PRINT *, 'Argument2: ', info.c16arg2
	           info.c16res = 0.0
	           retcode = 1
	        END SELECT
	        END
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          : kberrmsg kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
