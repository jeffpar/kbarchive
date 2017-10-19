---
layout: page
title: "Q148604: BUG: F1001 Error If Undeclared Namelist Variable in Subroutine"
permalink: /kb/148/Q148604/
---

## Q148604: BUG: F1001 Error If Undeclared Namelist Variable in Subroutine

	Article: Q148604
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using an undeclared variable in a NAMELIST statement in an internal subroutine
	when the undeclared variable has the same name as one used in the superceding
	program unit in another NAMELIST statement may cause the following internal
	compiler error:
	
	  fatal error F1001: INTERNAL COMPILER ERROR
	  (compiler file '..\..\\P2\main.c', line 374)
	
	  Please choose the Technical Support command on the Developer Studio Help menu,
	  or open the Technical Support help file for more information
	
	RESOLUTION
	==========
	
	Explicitly declare all NAMELIST variables in your internal subroutines.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code to Illustrate Problem
	---------------------------------
	
	  C Compile options needed: none
	
	        PROGRAM IOLIST
	        INTEGER I
	        NAMELIST /MAIN_LIST/ I
	        I = 1
	        CALL LOCAL()
	        CONTAINS
	          SUBROUTINE LOCAL()
	  C         INTEGER I       ! Uncommenting this line prevents the error
	            NAMELIST /SUB_LIST/ I
	            I = 2
	          END SUBROUTINE LOCAL
	        END PROGRAM IOLIST
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
