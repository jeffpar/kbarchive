---
layout: page
title: "Q112340: DOC: QuickWin Does Not Support Run Time in a DLL (/MD)"
permalink: /kb/112/Q112340/
---

## Q112340: DOC: QuickWin Does Not Support Run Time in a DLL (/MD)

	Article: Q112340
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbdocfix kbFortranPS kbLangFortran
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 23 of the Microsoft FORTRAN PowerStation 32 for Windows NT "Programmer's
	Guide" incorrectly states that a QuickWin application can be built with the run
	time in a dynamic-link library (DLL). Both the README.TXT and QUICKWIN.TXT files
	correctly state that QuickWin applications cannot be compiled to use the
	run-time library in a DLL (using /MD).
	
	This was corrected in Fortran PowerStation 4.0, per the manual page 346.
	
	Additional query words: 1.00 4.00 docerr
	
	======================================================================
	Keywords          : kbdocfix kbFortranPS kbLangFortran 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT
	Version           : :1.0
	
	=============================================================================
	
