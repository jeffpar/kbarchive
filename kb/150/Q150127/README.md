---
layout: page
title: "Q150127: BUG: PEEKCHARQQ Fails in QuickWin or Standard Graphics Program"
permalink: kb/150/Q150127/
---

## Q150127: BUG: PEEKCHARQQ Fails in QuickWin or Standard Graphics Program

	Article: Q150127
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,4.0
	Operating System(s): 
	Keyword(s): kbprogramming kbFortranPS kbLangFortran
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the PEEKCHARQQ() run-time function to check the keystroke buffer for
	keyboard characters will fail, causing .false. to be returned as the function's
	result.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Using the sample code listed below, create a QuickWin or Standard Graphics
	  application.
	
	2. Run the application. Running the application causes the message "Press any
	  key to exit" to be displayed 100 times. Then the application quits.
	
	NOTE: Pressing any key does not halt the application because PEEKCHARQQ() always
	returns .false. in a QuickWin or Standard Graphics program.
	
	Sample Code
	-----------
	
	  ! Compile options needed: /MW or /MWs
	
	        INCLUDE 'FLIB.FI'
	        INCLUDE 'FLIB.FD'
	
	        INTEGER COUNT
	        LOGICAL DONE
	
	        COUNT = 0
	        DONE = .FALSE.
	
	  10    DO WHILE( (.NOT. DONE) .AND. (COUNT .LT. 100) )
	           WRITE(*, *) 'Press any key to exit'
	           IF ( PEEKCHARQQ() ) THEN
	              DONE = .TRUE.
	              GOTO 10
	           END IF
	           COUNT = COUNT + 1
	        END DO
	        WRITE(*,*) 'Program terminated...'
	        END
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT kbFORTRANPower400NT
	Version           : :1.0,4.0
	Issue type        : kbbug
	
	=============================================================================
	
