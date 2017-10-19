---
layout: page
title: "Q131497: BUG: Error in ELSEIF References Line Number for Matching IF"
permalink: /kb/131/Q131497/
---

## Q131497: BUG: Error in ELSEIF References Line Number for Matching IF

	Article: Q131497
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a,5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN Compiler for MS-DOS, version 5.1 
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A run-time error that occurs on a line with an ELSEIF statement is reported to
	have occurred on the line where the starting IF is located.
	
	NOTE: The /4Yb 'Extended error handling' option needs to be used in order for the
	line numbers to be displayed along with the error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	NOTE: This behavior does not occur with FORTRAN PowerStation 32.
	
	MORE INFORMATION
	================
	
	Sample Code to Demonstrate Problem
	----------------------------------
	
	  C
	  C  Compile options needed: /4Yb
	  C
	  C  This program should give error F6096 when run
	        PROGRAM ElseIfTest
	
	  C  Declare the variables
	        INTEGER*4 A(8)
	        INTEGER*4 I
	        INTEGER*4 S
	
	  C  Initialize the variables
	        A = 0
	        I = 0
	        S = 2
	
	  C  Begin the IF statement
	        IF (S .EQ. 1) THEN              !  Error reported on this line
	            PRINT *,'Equals One'
	        ELSEIF (A(I) .GT. 1) THEN       !  Error occurs on this line
	            PRINT *,''
	        ENDIF
	
	        END
	
	Additional query words: 5.10 nofpsnt 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRAN510DOS kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a,5.1
	
	=============================================================================
	
