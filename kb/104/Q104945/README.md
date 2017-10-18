---
layout: page
title: "Q104945: DOCERR: BEEPQQ and SLEEPQQ Deal in Milliseconds and Hz"
permalink: kb/104/Q104945/
---

## Q104945: DOCERR: BEEPQQ and SLEEPQQ Deal in Milliseconds and Hz

	Article: Q104945
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft FORTRAN PowerStation "Language Guide" describes the BEEPQQ
	subroutine on page 214 as follows:
	
	   BEEPQQ(duration, frequency)
	        duration
	           (Integer*4; input)   Length of the beep in microseconds.
	        frequency
	           (Integer*4; input)   Frequency of the tone in KHz.
	
	The documentation on SLEEPQQ on page 496 is as follows:
	
	     SLEEPQQ(duration)
	        duration
	           (Integer*4; input)   The number of microseconds to sleep (delay
	                                program execution).
	
	The above information is incorrect. The arguments for BEEPQQ are in the wrong
	order. The duration should be in milliseconds and the frequency in hertz (Hz).
	The online help for these two run-time subroutines is correct.
	
	RESOLUTION
	==========
	
	Make the following modifications on page 214 of your documentation:
	
	   
	     BEEPQQ(frequency, duration)
	        frequency
	           (Integer*4; input)    Frequency of the tone in Hz.
	        duration
	           (Integer*4; input)    Length of the beep in milliseconds.
	
	     Remarks
	        BEEPQQ does not return before the sound terminates.
	
	Similarly, page 496 should be modified to reflect the following:
	
	     SLEEPQQ(duration)
	        duration
	           (Integer*4; input)    The number of milliseconds to sleep (delay
	                                 program execution).
	
	Sample Code
	-----------
	
	  C No compiler options required
	         include 'flib.fi'
	         include 'flib.fd'
	         print *, 1
	         call beepqq(262,1000)
	         print *, 2
	         call sleepqq(1000)
	         print *, 3
	         end
	
	Additional query words: nofpsnt 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
