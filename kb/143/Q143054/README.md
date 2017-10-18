---
layout: page
title: "Q143054: Err Msg: RUNDLL32.EXE Has Caused an Error in COMMCTRL.DLL"
permalink: kb/143/Q143054/
---

## Q143054: Err Msg: RUNDLL32.EXE Has Caused an Error in COMMCTRL.DLL

	Article: Q143054
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive one of the following error messages and Windows 95 may stop
	responding (hang) or run with limited functionality:
	
	- 
	
	  RUNDLL32.EXE has caused an error in COMMCTRL.DLL
	
	- 
	
	  The COMCTL32.DLL file cannot start.
	
	CAUSE
	=====
	
	These errors can occur if the Commctrl.dll file is missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Command Prompt Only from the Startup menu.
	
	2. Type the following commands, pressing ENTER after each line:
	
	  cd \windows\system
	  ren commctrl.dll commctrl.old
	
	3. Use the Extract tool to extract the Kommctrl.dll file from the Precopy1.cab
	  file on disk 1 of your Windows 95 disks or in the Win95 folder on the Windows
	  95 CD-ROM to the Windows\System folder.
	
	  NOTE: The Precopy1.cab file also contains a Commctrl.dll file. This file is
	  used only by Setup. If you extract this file instead of the Kommctrl.dll
	  file, Windows 95 will not run.
	
	  For information about using the Extract tool, please see the following article
	  in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	4. Type the following lines, pressing ENTER after each line:
	
	  cd \windows\system
	  ren kommctrl.dll commctrl.dll
	
	5. Type the following line, and then press ENTER:
	
	  copy commctrl.dll c:\windows\sysbckup
	
	  When you are prompted to overwrite the existing file, press Y.
	
	6. Restart your computer.
	
	Additional query words: corrupt
	
	======================================================================
	Keywords          : kberrmsg kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
