---
layout: page
title: "Q119782: Problems Accessing or Writing to the SYSTEM.INI File"
permalink: /kb/119/Q119782/
---

## Q119782: Problems Accessing or Writing to the SYSTEM.INI File

	Article: Q119782
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	- Programs that modify the SYSTEM.INI file during installation stop responding
	  (hang) or produce an error message similar to the following:
	
	  Cannot read file <path> SYSTEM.INI
	
	- When you use MS-DOS Editor (EDIT.COM) in an MS-DOS session to edit the
	  SYSTEM.INI file, the system hangs.
	
	- You are unable to modify the virtual-memory settings on your computer.
	
	CAUSE
	=====
	
	Close-Up version 6.0 from Norton-Lambert assigns write protection to the
	SYSTEM.INI file so that other applications cannot write to it.
	
	WORKAROUND
	==========
	
	The only work around is to disable Close-Up with the following steps:
	
	1. Open the AUTOEXEC.BAT file using a text editor, such as Windows Notepad.
	
	2. Remark out (using the REM command) the statement that loads CHOST.EXE.
	
	  Change
	
	       <path>\chost.exe
	
	  to:
	
	        rem <path>\chost.exe
	
	3. Save your changes and reboot your computer.
	
	MORE INFORMATION
	================
	
	Close-Up version 6.0 from Norton-Lambert is a modem host program that uses
	"unobtrusive technology." This technology allows Close-Up to operate without
	having its setup program make changes to the SYSTEM.INI file. After Close-Up is
	running, it makes changes to the copy of the SYSTEM.INI file that is in memory.
	Close-Up then locks the SYSTEM.INI file so that no other changes can be made.
	
	Close-Up is manufactured by Norton-Lambert, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: setup err msg chost
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
