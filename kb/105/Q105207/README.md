---
layout: page
title: "Q105207: PRB: KRNL386: Unable to Enter Protected Mode"
permalink: kb/105/Q105207/
---

## Q105207: PRB: KRNL386: Unable to Enter Protected Mode

	Article: Q105207
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 3.1 fails to boot and returns to MS-DOS with a "KRNL386: Unable to enter
	Protected Mode" error message. This usually occurs after switching to the debug
	version of Windows.
	
	CAUSE
	=====
	
	Windows 3.1 was started with old files left over from an upgraded installation
	of Windows 3.0 with the Windows 3.0 Software Development Kit (SDK).
	
	RESOLUTION
	==========
	
	Replace the old files with the correct versions. The files of importance are
	KRNL386.*, KRNL286.*, GDI.*, and USER.*. The old files are from 1990 and the new
	files are from 1992. Sort by date, and replace these old files with the correct
	versions.
	
	MORE INFORMATION
	================
	
	It's generally a good idea to start with a fresh installation of Windows in a
	clean directory when this problem occurs. This ensures that other obsolete files
	are cleared from the upgraded 3.0 installation.
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
