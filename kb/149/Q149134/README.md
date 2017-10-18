---
layout: page
title: "Q149134: BUG: EN and ES Edit Descriptors Cause Incorrect Output"
permalink: kb/149/Q149134/
---

## Q149134: BUG: EN and ES Edit Descriptors Cause Incorrect Output

	Article: Q149134
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
	
	Writing formatted REAL output using the EN or ES edit descriptor causes the
	output to be formattted incorrectly.
	
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
	
	        real*8 :: a = 0.0001
	
	        WRITE (*,'(1X,A,EN15.4)')    'EN descriptor:  ', a
	        WRITE (*,'(1X,A,ES15.4)')    'ES descriptor:  ', a
	        WRITE (*,'(1X,A,E15.4)')     'E descriptor:   ', a
	
	        END
	
	Program Output
	--------------
	
	  EN descriptor: 100.000E-05
	  ES descriptor: 10.000E-04
	  E descriptor: .1000E-03
	
	Correct Ouput
	-------------
	
	  EN descriptor: 10.000E-05
	  ES descriptor: 1.0000E-04
	  E descriptor: .1000E-03
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
