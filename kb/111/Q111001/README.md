---
layout: page
title: "Q111001: BUG: PEEKCHARQQ Incorrectly Returning .TRUE."
permalink: kb/111/Q111001/
---

## Q111001: BUG: PEEKCHARQQ Incorrectly Returning .TRUE.

	Article: Q111001
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a FORTRAN PowerStation application, PEEKCHARQQ may return a value of .TRUE.
	even though there is no keystroke waiting in the keyboard buffer.
	
	CAUSE
	=====
	
	If GETCHARQQ is not called at least once in the program before calling
	PEEKCHARQQ, a call to PEEKCHARQQ will always return .TRUE.. Even after first
	calling GETCHARQQ, PEEKCHARQQ, when called repeatedly, may incorrectly return
	that a keystroke is available.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN PowerStation 32 for
	Windows NT, version 1.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The sample program below should print stars until a key is pressed. However,
	after entering a keystroke to start the PEEKCHARQQ loop, stars will stop
	printing if no key is pressed. If the call to GETCHARQQ is removed, only one
	star will print.
	
	Sample Code
	-----------
	
	  C Compile options needed: none
	  C
	
	        include 'flib.fi'
	        include 'flib.fd'
	        character*1 key
	        logical pressed/.false./ 
	        write(*,*) 'Enter a key to begin test'
	        key = GETCHARQQ()      ! Must call GETCHARQQ first
	        do while (.NOT. pressed)
	           write (*, 900) '*'  ! Print stars until a key is pressed
	           pressed = PEEKCHARQQ()
	        end do
	  900   format (1X, A, \)
	        end
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT
	Version           : :1.0
	
	=============================================================================
	
