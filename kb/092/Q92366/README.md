---
layout: page
title: "Q92366: Changing MS-DOS Command Prompt Under Windows"
permalink: /kb/092/Q92366/
---

## Q92366: Changing MS-DOS Command Prompt Under Windows

	Article: Q92366
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can display a custom MS-DOS prompt when you run MS-DOS Prompt from Program
	Manager.
	
	Changing the MS-DOS Prompt Under Windows 3.1 and 3.11
	-----------------------------------------------------
	
	Under Windows 3.1 you can change the look of the MS-DOS command prompt inside of
	Windows because the WINPMT environment variable was added to Windows. You can
	change this variable by using the SET command in the AUTOEXEC.BAT file. For
	example:
	
	       SET WINPMT=Windows Shell - $p$g
	
	Changing the MS-DOS Prompt Under Windows 3.0 and 3.0a
	-----------------------------------------------------
	
	To change the MS-DOS command prompt in Windows 3.0 and 3.0a, you must create a
	batch file to modify the PROMPT environment variable. You can then start the
	batch file instead of COMMAND.COM. The following is a sample batch file:
	
	     @echo off
	     prompt Windows Shell - $p$g
	     command.com
	
	After making the batch file, change the MS-DOS Prompt icon's program name from
	COMMAND.COM to the name of the batch file from the Program Item Properties
	dialog box.
	
	Additional query words: 3.00 3.00a 3.10 dos box prompt prmt pmtwinprompt winprompt= winprmt= winpmt=
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
