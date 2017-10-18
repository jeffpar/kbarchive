---
layout: page
title: "Q75000: PRB: Windows SDK Tools Group Icons Incorrect"
permalink: kb/075/Q75000/
---

## Q75000: PRB: Windows SDK Tools Group Icons Incorrect

	Article: Q75000
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Program Manager, when the Windows Software Development Kit (SDK) Tools
	group is opened, generic, blank Windows icons are displayed for the individual
	tools.
	
	CAUSE
	=====
	
	Windows was run after installing the Windows (SDK) without rebooting the
	computer to reset the PATH environment variable to include the Windows SDK
	subdirectory.
	
	RESOLUTION
	==========
	
	To resolve this problem, copy the SDKTOOLS.GRP file from the Development Tools
	disk into the Windows directory on the hard disk. Shutdown and restart the
	computer, and then start Windows.
	
	MORE INFORMATION
	================
	
	Since the Windows SDK Setup program does not run under Windows, it cannot use
	DDE (dynamic data exchange) to create a program group in the Program Manager. To
	create a program group, the Windows SDK comes with a existing group file which
	does not contain the path or icon information for the individual tools.
	
	The Setup program modifies the PROGMAN.INI file to use this group file. If
	Windows is run without restarting the computer after installing the Windows SDK,
	then the Windows SDK subdirectory will not be listed in the PATH environment
	variable. When this occurs, the Program Manager cannot find any of the tools on
	the hard disk. Consequently, the Program Manager assigns each of the tools the
	blank (generic) icon.
	
	When Windows is closed, the Program Manager saves the icon information into the
	group file, which causes the generic icons to then be shown.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
