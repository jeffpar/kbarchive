---
layout: page
title: "Q112477: _PDRIVER Incorrectly Documented in FoxPro 1.02"
permalink: kb/112/Q112477/
---

## Q112477: _PDRIVER Incorrectly Documented in FoxPro 1.02

	Article: Q112477
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:1.02
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for MS-DOS, version 1.02 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documented functionality of the _PDRIVER variable on page C5-21 in the
	"Commands & Functions" manual is incorrect. Microsoft FoxPro version 1.02
	does not use any printer drivers; therefore, the _PDRIVER variable is
	meaningless to the program.
	
	MORE INFORMATION
	================
	
	The second paragraph on page C5-21 states:
	
	  _PDRIVER contains a character value that determines which printer driver will
	  be used when printing. The default value contained in this variable is the
	  default printer driver specified when FoxPro was installed.
	
	  <expC> MUST contain the name of one of the printer drivers supplied with
	  FoxPro (see the Appendix for a complete list). The printer driver file name
	  that you provide must be valid and must contain a path of the requested
	  driver is not in the current default directory.
	
	This text contains several inaccuracies. First, the Appendix does not contain a
	list of printer drivers. Second, FoxPro 1.02 does not prompt you for a specific
	printer during installation; therefore, no value is stored to the _PDRIVER
	variable. Finally, FoxPro 1.02 does not ship with any printer drivers.
	
	The _PDRIVER variable was originally supposed to contain a printer driver.
	However, printer drivers were never shipped for FoxPro 1.02.
	
	Additional query words: FoxDos docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbZNotKeyword3
	Version           : MS-DOS:1.02
	
	=============================================================================
	
