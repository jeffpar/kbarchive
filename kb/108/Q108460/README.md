---
layout: page
title: "Q108460: FIX: Carriage Control 1 Prints an Ankh Symbol to Screen"
permalink: /kb/108/Q108460/
---

## Q108460: FIX: Carriage Control 1 Prints an Ankh Symbol to Screen

	Article: Q108460
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using a carriage control of 1 when writing to the screen prints an Ankh symbol.
	The appropriate output should be a blank line.
	
	CAUSE
	=====
	
	The ASCII form-feed character (decimal 12) is displayed as an Ankh symbol. The
	symbol is not being backspaced over as documented.
	
	RESOLUTION
	==========
	
	The 1 carriage control is not supposed to function when writing to the screen
	(see page 99 of the "Programmer's Guide"). Because it performs no function,
	don't use it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft FORTRAN PowerStation
	32 for Windows NT, version 1.0. This problem was fixed in Fortran PowerStation
	for Windows NT, Version 1.0 with the release of Windows NT, Version 3.51, and in
	Fortran PowerStation 32, version 4.0.
	
	MORE INFORMATION
	================
	
	The following sample code illustrates the symptoms described above:
	
	Sample Code
	-----------
	
	  C Compile options needed: none
	
	        write (6, "(A)") "1"
	        end
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
