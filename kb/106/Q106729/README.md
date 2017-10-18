---
layout: page
title: "Q106729: FIX: EOF and BACKSPACE Cause GP Fault When the Unit Isn't Open"
permalink: kb/106/Q106729/
---

## Q106729: FIX: EOF and BACKSPACE Cause GP Fault When the Unit Isn't Open

	Article: Q106729
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Passing an unopened unit number to the EOF intrinsic function or the BACKSPACE
	command generates the run-time error:
	
	FORTRAN PowerStation for MS-DOS
	-------------------------------
	
	  DOSXMSF : fatal error DX1020: unhandled exception: General protection fault;
	
	FORTRAN PowerStation 32 for Windows NT
	--------------------------------------
	
	  Application Error
	
	  The instruction at "0x0001316e" referenced memory at 0x00000000". The memory
	  could not be "read".
	
	CAUSE
	=====
	
	The following run-time error should be produced:
	
	  run-time error F6420: EOF()
	  - unknown unit number
	
	RESOLUTION
	==========
	
	Only use the EOF function and BACKSPACE command on units that are currently
	open.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was fixed in FORTRAN PowerStation,
	version 4.0.
	
	MORE INFORMATION
	================
	
	The following sample code generates a DX1020 error (GPF) when run:
	
	Sample Code
	-----------
	
	  C Compile options: None
	        logical l
	        open(2,file='test.out')
	        l = EOF(1)
	        end
	
	Additional query words: 1.00 4.0 gpf gp-fault
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
