---
layout: page
title: "Q83481: Error When Running Setup from MS-DOS SHELL"
permalink: /kb/083/Q83481/
---

## Q83481: Error When Running Setup from MS-DOS SHELL

	Article: Q83481
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When installing the Microsoft Windows operating system version 3.1, the
	following error message may appear if MS-DOS Shell is resident in memory and the
	Task Swapper option is enabled:
	
	  You are attempting to run Setup from within Windows. You need to quit
	  Windows, and then run Setup from the MS-DOS command prompt. Press F3 to quit
	  Setup.
	
	To prevent this error message, close Shell before installing Windows 3.1.
	
	MORE INFORMATION
	================
	
	To correct this problem, use the following steps:
	
	1. Press F3 to exit Windows Setup.
	
	2. Type "exit" (without the quotation marks), and press ENTER. (This returns you
	  to Shell.)
	
	3. Press ALT+F4 to close Shell and exit to the MS-DOS command prompt.
	
	4. Run Windows Setup.
	
	If you run SETUP.EXE from within Shell with Task Swapper enabled, the
	aforementioned error message may occur, or your system may hang. Setup may run
	without error in conjunction with the Shell if Task Swapper is disabled;
	however, it may cause problems, depending on other MS-DOS Environment Settings.
	
	Microsoft does not recommend running Windows Setup from MS-DOS Shell or any type
	of menu or shell program.
	
	Additional query words: 3.10 dosshell
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
