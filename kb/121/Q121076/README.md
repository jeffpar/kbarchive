---
layout: page
title: "Q121076: Video for Windows DK Setup Script Function VflatdPresent"
permalink: /kb/121/Q121076/
---

## Q121076: Video for Windows DK Setup Script Function VflatdPresent

	Article: Q121076
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1; :1.1,1.1d,1.1e
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Video for Windows Development Kit, versions 1.1, 1.1d, 1.1e 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Video for Windows Runtime setup script (SETUP.MST) contains calls
	to a number of functions. All the functions are documented except for the
	VflatdPresent() function.
	
	The VflatdPresent() function detects whether the line "device=dva.386" exists in
	the SYSTEM.INI file. If the line doesn't exist, the CreateSysIniKey() function
	creates the entry. This code is necessary to avoid the possibility of having two
	identical entries in the SYSTEM.INI file, which would result in a warning being
	generated during setup. The DVA.386 file is the virtual device driver that
	provides direct video access internally to Video for Windows.
	
	Additional query words: 3.10 1.10 1.10d 1.10e VfW DVA no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbVideoSearch kbSDKSearch kbWinSDKSearch kbWinSDK310 kbVideoDK110
	Version           : WINDOWS:3.1; :1.1,1.1d,1.1e
	
	=============================================================================
	
