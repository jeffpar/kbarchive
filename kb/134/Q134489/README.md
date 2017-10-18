---
layout: page
title: "Q134489: Cannot Start a Windows-Based Program from MS-DOS Prompt"
permalink: kb/134/Q134489/
---

## Q134489: Cannot Start a Windows-Based Program from MS-DOS Prompt

	Article: Q134489
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start a Windows-based program from an MS-DOS prompt by typing
	
	  START <winapp>
	
	  -or-
	
	  <winapp>
	
	where <winapp> is the name of the program, the program does not run, and
	you receive the following error message:
	
	  This program cannot be run in DOS mode.
	
	CAUSE
	=====
	
	The MS-DOS window is configured to prevent MS-DOS based programs from detecting
	Windows.
	
	RESOLUTION
	==========
	
	Change the configuration of the MS-DOS window. To change the configuration,
	follow these steps:
	
	1. Start MS-DOS Prompt.
	
	2. In the MS-DOS Prompt dialog box, click the Properties button.
	
	3. In the MS-DOS Prompt Properties dialog box, click the Program tab, and then
	  click the Advanced button.
	
	4. In the Advanced Program Settings dialog box, make sure the "Prevent
	  MS-DOS-based programs from detecting Windows" box is not checked, and then
	  click the OK button.
	
	5. Quit MS-DOS, and then restart it.
	
	Additional query words: start begin box execute
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
