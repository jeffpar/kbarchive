---
layout: page
title: "Q123687: Enabling CTRL+C and CTRL+BREAK by Using PeekcharQQ"
permalink: /kb/123/Q123687/
---

## Q123687: Enabling CTRL+C and CTRL+BREAK by Using PeekcharQQ

	Article: Q123687
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To break out of a long running program, it is customary to use CTRL+C or
	CTRL+BREAK. However, MS-DOS only checks for CTRL+C or CTRL+BREAK when processing
	keyboard input. If there is no keyboard input in a loop (it contains only
	calculations), the program is likely to ignore CTRL+C and CTRL+BREAK.
	
	The PeekcharQQ() function performs keyboard input processing and should not
	significantly slow down your program, if used cautiously.
	
	MORE INFORMATION
	================
	
	When you call PeekcharQQ() in a long loop, MS-DOS checks the keyboard for input.
	If CTRL+C or CTRK+BREAK was pressed, the program terminates.
	
	In the sample code in this article, PeekcharQQ() is called thousands of times a
	second. In an actual application, this would noticeably slow the program. It is
	usually sufficient to place calls to PeekcharQQ() so that it is called at most a
	few times a second.
	
	NOTE: Sometimes the following simple code will break on a CTRL+C even without the
	call to PeekcharQQ(). However, more complex code will require adding calls to
	PeekcharQQ() to allow CTRL+C or CTRL+BREAK processing.
	
	Sample Code
	-----------
	
	  C Compile Options needed: none
	
	        include'flib.fi'
	        include'flib.fd'
	
	        logical l
	
	        do i=1,1000000
	           x = sqrt(i)
	           l = peekcharqq()
	        end do
	        end
	
	Additional query words: kbinf nofpsnt 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
