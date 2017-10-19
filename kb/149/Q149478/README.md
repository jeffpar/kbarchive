---
layout: page
title: "Q149478: BUG: F1001 Error /4fps1 and /Ox with Exponent Calculation"
permalink: /kb/149/Q149478/
---

## Q149478: BUG: F1001 Error /4fps1 and /Ox with Exponent Calculation

	Article: Q149478
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
	
	Using the /4fps1 and /Ox compiler options together and performing a calculation
	involving raising an integer constant to the power of a negated integer variable
	causes the following internal compiler error:
	
	  fatal error F1001: INTERNAL COMPILER ERROR
	  (compiler file '..\..\\P2\confold.c', line 296)
	
	  Please choose the Technical Support command on the Developer Studio Help menu,
	  or open the Technical Support help file for more information
	
	RESOLUTION
	==========
	
	Make the INTEGER constant part a REAL constant.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code to Illustrate Problem
	---------------------------------
	
	  ! Compile options needed: /4fps1 /Ox
	
	        i = 6
	        test = 10**(-i)    ! Comment this line for workaround
	  !      test = 10.0**(-i) ! Uncomment this line for workaround
	        print *, test
	        end
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
