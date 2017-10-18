---
layout: page
title: "Q99010: Multimedia Err Msg: This AVI File Is too Big..."
permalink: kb/099/Q99010/
---

## Q99010: Multimedia Err Msg: This AVI File Is too Big...

	Article: Q99010
	Product(s): Miscellaneous Software Development Kits
	Version(s): 1.0,2.0,2.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer, versions 1.0, 2.0, 2.0a 
	- the operating system: Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to play Audio Visual Interface (AVI) animations in Microsoft
	multimedia applications the following error messages may occur:
	
	  Multimedia Viewer MCI: This AVI file is too big to be played in the selected
	  VGA mode
	
	  256 Color VGA not available
	
	CAUSE
	=====
	
	This occurs because some video drivers cannot run AVI animations with the [MCI]
	Microsoft Video for Windows driver set to Full Screen.
	
	
	WORKAROUND
	==========
	
	1. In the Drivers section of Windows Control Panel, choose [MCI] Microsoft Video
	  for Windows.
	
	2. Choose the Setup button.
	
	3. In the Video Mode selection box, choose the Window option.
	
	4. Choose the Set Default button.
	
	5. Choose the Close button in the Drivers dialog box.
	
	6. Close the Windows Control Panel.
	
	This problem is known to occur with the following:
	
	- Tseng Labs ET4000 video card
	
	- Diamond Speedstar 24X video card
	
	- ATI Ultra Pro Mach 32 with 2 MB of video memory in any resolution
	
	- Cirrus Logic (5426) video card
	
	- COMPAQ video card on a COMPAQ Presario CDS724 with the CL 5434 Windows
	  driver.
	
	NOTE: This problem may also occur with other video cards. It generally occurs
	with cards containing either 512KB or 1MB of video memory.
	
	
	Additional query words: Windows 3.10 Encyclopedia Animation Visual install run large multimedia multi media multi-media movie setup usage dev/drv video encarta 1995 1994 mmtitles wfw
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbZNotKeyword6 kbMMViewer100 kbMMViewer200 kbMMViewer200a kbOSWin310 kbOSWin311
	Version           : :1.0,2.0,2.0a,3.1,3.11
	
	=============================================================================
	
