---
layout: page
title: "Q72196: Mouse Movement Is Erratic in Dosshell with Windows"
permalink: /kb/072/Q72196/
---

## Q72196: Mouse Movement Is Erratic in Dosshell with Windows

	Article: Q72196
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may experience erratic mouse movements if you run the MS-DOS 4.01 Dosshell
	program (DOSSHELL.BAT) from within Microsoft Windows version 3.0. The mouse
	driver used in the DOSSHELL.BAT file does not function properly under Windows.
	
	To solve this problem, the mouse driver in DOSSHELL.BAT should be removed.
	
	MORE INFORMATION
	================
	
	Dosshell is a file management program supplied with MS-DOS version 4.01.
	Dosshell provides an easy to use interface to MS-DOS. Files can be copied,
	moved, renamed, and deleted without having to remember the MS-DOS commands.
	
	The mouse driver used in DOSSHELL.BAT does not function properly under Windows.
	To solve this problem, remove the driver from the "@SHELLC" line, and use
	MOUSE.SYS (in CONFIG.SYS) or MOUSE.COM (in AUTOEXEC.BAT) instead.
	
	The possible drivers used in DOSSHELL.BAT are:
	
	  MOS:PCIBMDRV.MOS
	  MOS:PCMSPDRV.MOS
	  MOS:PCMSDRV.MOS
	
	DOSSHELL.BAT can be found in the DOS directory. It can be edited with any text
	editor, such as Edlin or Windows Notepad. Look for a line similar to the
	following:
	
	     @SHELLC MOS:PCIBMDRV.MOS/TRAN/COLOR/DOS/MENU/MUL/SND
	        /MEU:SHELL.MEU/CLR:SHELL.CLR/PROMPT/MAINT/EXIT/SWAP/DATE
	
	After removing the mouse driver, the line should be similar to the following:
	
	     @SHELLC/TRAN/COLOR/DOS/MENU/MUL/SND/MEU:SHELL.MEU
	        /CLR:SHELL.CLR/PROMPT/MAINT/EXIT/SWAP/DATE
	
	Additional query words: 3.00 win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
