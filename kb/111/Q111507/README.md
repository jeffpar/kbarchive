---
layout: page
title: "Q111507: PRB: Generate Command on Program Menu Is Disabled"
permalink: kb/111/Q111507/
---

## Q111507: PRB: Generate Command on Program Menu Is Disabled

	Article: Q111507
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b; MS-DOS:2.0,2.5,2.5a,2.5b; WINDOWS:2.5,2.5a,2.5b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Generate command on the Program menu, which is used to generate program code
	for the Screen Builder and Menu Builder, is disabled. In Visual FoxPro, the
	Generate option under the Menu pad is disabled.
	
	CAUSE
	=====
	
	- A program is currently running.
	
	> -or-
	
	- The Screen Builder or Menu Builder window is not the active window.
	
	-or-
	
	- The _GENMENU or _GENSCRN system memory variable has been set to null.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	- Cancel execution of the program that is currently running. Open the Program
	  menu. If the Cancel command is available (not disabled), then a program is
	  currently running. Choose Cancel to stop execution of the program.
	
	-or-
	
	- Click the Screen Builder or Menu Builder window (or icon if the window has
	  been minimized) to make it the active window (or icon). Look for the window
	  or icon with either the .SCX (screen) or .MNX (menu) extension.
	
	-or-
	
	- Set the _GENMENU or _GENSCRN system memory variable to the appropriate path
	  and file. For example, assuming FoxPro is installed in the FOXPROW directory
	  on drive C, type one of the following commands in the Command window to
	  restore the appropriate system memory variable:
	
	        _GENSCRN = "C:\FOXPROW\GENSCRN.PRG"
	
	        _GENMENU = "C:\FOXPROW\GENMENU.PRG"
	
	NOTE: The memory variables _GenMenu and _GenScrn may be reset by FoxPro after
	generating a screen or menu to the compiled version of GENSCRN.PRG and
	GENMENU.PRG (GENSCRN.FXP and GENMENU.FXP). Either memory variable (.PRG or .FXP)
	is acceptable and you should not be concerned when the file changes to .FXP
	format. This is normal functionality.
	
	STATUS
	======
	
	This behavior is by design.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: MBuilder FoxMac FoxDos FoxWin vFoxWin grayed greyed dimmed unavailable akz
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : MACINTOSH:2.5b; MS-DOS:2.0,2.5,2.5a,2.5b; WINDOWS:2.5,2.5a,2.5b,3.0
	
	=============================================================================
	
