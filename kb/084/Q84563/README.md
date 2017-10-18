---
layout: page
title: "Q84563: Windows Err Msg: You Are Already Running Enhanced Mode..."
permalink: kb/084/Q84563/
---

## Q84563: Windows Err Msg: You Are Already Running Enhanced Mode...

	Article: Q84563
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the command WIN or WIN.COM is located in the WINSTART.BAT file, the following
	error message may be displayed when you start Windows version 3.1 in enhanced
	mode:
	
	  You are already running enhanced mode Windows.
	
	- Press ALT+ENTER to switch this MS-DOS prompt between a window and a full
	  screen.
	
	- Type Exit and press Enter to quit this MS-DOS prompt and return to Windows.
	
	- Press ALT+TAB to switch to Windows or another application.
	
	This message appears after the Windows 3.1 logo screen and before Program Manager
	loads. The message appears only for a few seconds before Windows 3.1 starts in
	386 enhanced mode.
	
	CAUSE
	=====
	
	WINSTART.BAT is a batch file that instructs Windows to load terminate-
	and-stay-resident (TSR) programs when Windows starts in enhanced mode. If there
	is a line in the batch file that includes an instruction to start Windows, the
	above error message is displayed if you are operating or attempting to operate
	Windows in enhanced mode.
	
	WINSTART.BAT should not contain any references to commands that start Windows.
	
	WORKAROUND
	==========
	
	If the above error message is displayed when you start Windows, search the path
	for WINSTART.BAT. If you find one, remove any lines that contain "WIN," If
	Windows is installed on a network, it may also be necessary to search the file
	server for this file.
	
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
