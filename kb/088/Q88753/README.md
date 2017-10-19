---
layout: page
title: "Q88753: Windows Err Msg: Unable to Install TrueType Fonts"
permalink: /kb/088/Q88753/
---

## Q88753: Windows Err Msg: Unable to Install TrueType Fonts

	Article: Q88753
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Path statement in the AUTOEXEC.BAT file does not contain the Windows
	directory and drive letter, you may receive the following error message if you
	install TrueType fonts from a logical drive other than the one containing
	Windows.
	
	  Unable to Create File:
	
	  Unable to install the <Font Name> font. The font file may be damaged.
	  Check with your font vendor about obtaining a new file.
	
	CAUSE
	=====
	
	This error message can occur under the following conditions:
	
	- The Path statement in the AUTOEXEC.BAT file does not contain the Windows
	  directory and driver letter.
	
	  -or-
	
	- Your CONTROL.EXE file is corrupt.
	
	WORKAROUND
	==========
	
	Check the AUTOEXEC.BAT file to be sure that your Windows directory and drive
	letter are in the Path statement. If they are missing, add them.
	
	If the Path statement is okay, your CONTROL.EXE file may be corrupt. Use the
	EXPAND utility to copy this file from the original Windows disks to your Windows
	directory. From the MS-DOS prompt, enter a command similar to the following
	
	  expand <a>:control.ex_ <c>:\<windows>\control.exe
	
	where <a>: is your floppy drive letter, <c> is your hard drive
	letter, and <windows> is your Windows directory.
	
	MORE INFORMATION
	================
	
	If you attempt to install TrueType fonts from the same logical drive and the
	drive letter for the WINDOWS directory is not included, then the FOT and TTF
	files are be placed in the WINDOWS directory instead of the SYSTEM
	subdirectory.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q112857 WFWG 3.11: Errors Reinstalling Fonts
	
	Additional query words: 3.10 3.11 ttf tt true type
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
