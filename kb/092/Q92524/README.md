---
layout: page
title: "Q92524: PRB: Setup Toolkit's SETUP.EXE Does Not Launch Windows"
permalink: kb/092/Q92524/
---

## Q92524: PRB: Setup Toolkit's SETUP.EXE Does Not Launch Windows

	Article: Q92524
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SETUP.EXE, from the Setup toolkit, displays the message "This program requires
	Microsoft Windows" when run from the MS-DOS prompt. At other times, SETUP.EXE
	successfully launches Windows and runs.
	
	CAUSE
	=====
	
	The MS-DOS stub program for SETUP.EXE attempts to launch WIN.COM. The stub
	program can do this only if the length of the path to WIN.COM is less than or
	equal to the length of the path to SETUP.EXE, rounded up to the nearest multiple
	of 16. If the path to WIN.COM is longer than this, then the stub program
	displays the message above and returns.
	
	RESOLUTION
	==========
	
	Run the Setup program from Windows.
	
	Additional query words: 3.10 MSSETUP no32bit tool kit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	
