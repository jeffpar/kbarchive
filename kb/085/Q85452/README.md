---
layout: page
title: "Q85452: Windows Err Msg: Error Loading SYSTEM.DRV"
permalink: kb/085/Q85452/
---

## Q85452: Windows Err Msg: Error Loading SYSTEM.DRV

	Article: Q85452
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11,95
	Operating System(s): 
	Keyword(s): win31 win95
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Windows, the following error message may be displayed:
	
	  Error Loading SYSTEM.DRV
	
	you are then returned to the MS-DOS command prompt.
	
	When you try to start Control Panel, the following error message is displayed:
	
	  Cannot find the Control Panel Components (files with .CPL extension). Verify
	  that they are installed in your Windows SYSTEM directory.
	
	CAUSE
	=====
	
	The KRNL386.EXE and/or KRNL286.EXE files are located in the wrong directory. The
	first message appears if KRNL386.EXE and KRNL286.EXE files are located in the
	Windows directory. The second message appears if the Windows SYSTEM subdirectory
	is in your path and the KRNL386.EXE file is in the Windows directory.
	
	RESOLUTION
	==========
	
	KRNL386.EXE and KRNL286.EXE should be located in the Windows SYSTEM
	subdirectory. To successfully load Windows, move these files from the Windows
	directory to the Windows SYSTEM subdirectory.
	
	In Windows 95, the error can also occur if the KRNL386.EXE file is in the
	Windows\Command subdirectory or in the root directory. This file should be in
	the Windows\System subdirectory. Note that there is no KRNL286.EXE file in
	Windows 95.
	
	If you still receive the error message after moving the file(s) to the correct
	location, see the following article in the Microsoft Knowledge Base:
	
	  Q70467 Windows Err Msg: Cannot Find KRNLxxx.EXE
	
	Additional query words: 3.10 3.1 3.11
	
	======================================================================
	Keywords          : win31 win95 
	Technology        : kbAudDeveloper kbWin3xSearch kbWin95search kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11,95
	
	=============================================================================
	
