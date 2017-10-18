---
layout: page
title: "Q108345: DOCERR: GetCharQQ Not Accepting Direction Keys in QuickWin"
permalink: kb/108/Q108345/
---

## Q108345: DOCERR: GetCharQQ Not Accepting Direction Keys in QuickWin

	Article: Q108345
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,4.0
	Operating System(s): 
	Keyword(s): kbcode kbFortranPS kbLangFortran
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, versions 1.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Page 553 of the Microsoft FORTRAN PowerStation 32 "Programmer's Guide" states
	that GetCharQQ will not accept function keys under QuickWin. The manual fails to
	state that direction keys are also not accepted by GetCharQQ under QuickWin.
	
	CAUSE
	=====
	
	QuickWin uses the direction keys to scroll the active window. The direction keys
	are trapped by QuickWin before GetCharQQ has a chance to interpret them.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft FORTRAN PowerStation
	32 version 1.0. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	NOTE: Under FORTRAN PowerStation 4.0, GetCharQQ will accept function keys under
	QuickWin. Direction keys are still trapped by QuickWin for scrolling the active
	window.
	
	MORE INFORMATION
	================
	
	The sample program below, built as a QuickWin application, does not work with
	the direction keys. The same program built as a console application can identify
	direction keys. This is done by using the extended code obtained by calling
	GetCharQQ a second time.
	
	Sample Code
	-----------
	
	  C Compile options needed: /MW (to duplicate problem)
	
	        INCLUDE 'flib.fi'
	        INCLUDE 'flib.fd'
	        CHARACTER*1 key / 'A' / 
	        WRITE (*,*) ' Type a key; (or q to quit)'
	  C     Read and display keys until ESC is pressed.
	        DO WHILE (ICHAR(key) .NE. 27)
	        key = GETCHARQQ()
	  C     If extended key, its control or function key
	        IF ((ICHAR(key) .EQ. 0) .OR.
	       +       (ICHAR(key) .EQ. 224)) THEN
	              key = GETCHARQQ()
	              WRITE (*,900) 'ASCII: no    Char: NA    '
	  C     Otherwise, there's only one key
	        ELSE
	              WRITE (*,900) 'ASCII: yes   Char: '
	              WRITE (*,900) key
	        END IF
	              WRITE (*, 901) ICHAR(key), ICHAR(key)
	        IF (key .EQ. 'q') EXIT
	        END DO
	  900   FORMAT (1X, A, \)
	  901   FORMAT (1X, 'Decimal: ', I3, '   Hex: ',Z4, /)
	        END
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kbcode kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT kbFORTRANPower32400NT
	Version           : :1.0,4.0
	
	=============================================================================
	
