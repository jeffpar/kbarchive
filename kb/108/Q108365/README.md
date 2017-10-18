---
layout: page
title: "Q108365: FIX: Strange Character in Warning for Illegal Edit List"
permalink: kb/108/Q108365/
---

## Q108365: FIX: Strange Character in Warning for Illegal Edit List

	Article: Q108365
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): kbCompiler kbFL32 kbFortranPSkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to compile a program that contains a FORMAT statement with the
	illegal edit list may fail with the following warning
	
	  warning F4989: 'X' : unexpected character in format
	
	where 'X' is an extended ASCII character or no character at all. The character
	displayed should be a character from the edit list.
	
	RESOLUTION
	==========
	
	Correcting the edit list in the format statement eliminates the warning message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft FORTRAN PowerStation
	32 for Windows NT, version 1.0 and for MS-DOS, versions 1.0 and 1.0a. This
	problem was fixed in FORTRAN PowerStation 32 version 4.0.
	
	MORE INFORMATION
	================
	
	The following program illustrates the problem:
	
	Sample Code
	-----------
	
	  C Compile options needed: none
	  301   format(O6) ! O not valid here
	        end
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          : kbCompiler kbFL32 kbFortranPS kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
