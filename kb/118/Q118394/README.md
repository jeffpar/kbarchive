---
layout: page
title: "Q118394: &#36;DEBUG Modifies Behavior of SELECT CASE in PowerStation 1.0"
permalink: /kb/118/Q118394/
---

## Q118394: &#36;DEBUG Modifies Behavior of SELECT CASE in PowerStation 1.0

	Article: Q118394
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): kberrmsg kbFortranPS kbLangFortran
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The description of the SELECT CASE construct in the "Language Guide" states that
	if the test expression does not match any of the cases and there is no default
	case, execution proceeds after the END SELECT. However, the documents fail to
	mention that $DEBUG modifies this behavior. The description for $DEBUG states
	that an error message is generated for test expressions that do not match any of
	the CASEs; this error message reads as follows:
	
	  run-time error F6105 $DEBUG
	  - no matching CASE found for SELECT CASE
	
	MORE INFORMATION
	================
	
	To generate the debug message, compile and run the sample code below. Type
	anything other than 0 or 1 at the prompt. The program runs without error if the
	CASE DEFAULT lines are uncommented.
	
	NOTE: You can use compiler option /4Yb instead of the $DEBUG metacommand.
	
	Sample Code
	-----------
	
	  c compile options needed: none
	
	     $DEBUG
	           INTEGER I
	           write (*,'(A,\)') ' Enter selection <0 or 1>: '
	           READ (*,*) I
	           SELECT CASE (I)
	           CASE (0)
	              WRITE(*,*) 'First case: I =',i
	           CASE (1)
	              WRITE(*,*) 'Second case: I =',i
	     c      CASE DEFAULT
	     c         WRITE(*,*) 'Default case I =',i
	           END SELECT
	           END
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          : kberrmsg kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
