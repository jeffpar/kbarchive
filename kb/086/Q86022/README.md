---
layout: page
title: "Q86022: Windows Err Msg: You Cannot Run This Application in a Window"
permalink: kb/086/Q86022/
---

## Q86022: Windows Err Msg: You Cannot Run This Application in a Window

	Article: Q86022
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to run an MS-DOS-based application in a window or in the
	background under Microsoft Windows you may receive the following error message:
	
	  You cannot run this application in a window or in the background. You can
	  display it in a window, but it will be suspended until you run it full
	  screen. Check the PIF settings to ensure they are correct.
	
	CAUSE
	=====
	
	This problem is most commonly caused by one of the following:
	
	- You are loading the Microsoft MS-DOS level mouse driver version 7.04 or later
	  in the AUTOEXEC.BAT (MOUSE.COM) or in the CONFIG.SYS file (MOUSE.SYS).
	
	- Windows has low system resources. Closing one or more applications may free
	  up enough resources to run the program in a window or in the background.
	
	RESOLUTION
	==========
	
	If you are loading the Microsoft Mouse driver 7.04 or later modify the command
	line for the driver:
	
	1. Edit AUTOEXEC.BAT or CONFIG.SYS with a standard ASCII text editor such as
	  Notepad.
	
	2. Add "/Y" (without the quotation marks) to the end of the mouse line:
	
	  c:\windows\mouse.com /y
	
	  -or-
	
	  device=c:\windows\mouse.sys /y
	
	If Windows is low on system resources, close one or more applications.
	
	Additional query words: 3.10 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
