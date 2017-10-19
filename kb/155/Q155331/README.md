---
layout: page
title: "Q155331: How To Enable VfW 1.1 CAPSCRN.EXE to Work in Windows 95"
permalink: /kb/155/Q155331/
---

## Q155331: How To Enable VfW 1.1 CAPSCRN.EXE to Work in Windows 95

	Article: Q155331
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 1.1
	Operating System(s): 
	Keyword(s): kbmm
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Video for Windows Development Kit, version 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	CAPSCRN.EXE and its associated driver SCRNCAP.DRV are installed during Video for
	Windows (VfW) video tools (WINVIDEO) setup. To run this application under
	Windows 95, the following line should be added under [drivers] section of
	SYSTEM.INI file:
	
	  MSVIDEO#=<full path name to>SCRNCAP.DRV
	
	where # may be any number between 1 and 8 that does not conflict with existing
	MSVIDEO entries.
	
	If SCRNCAP.DRV is copied into <Windows 95 directory>\system folder, you may
	omit the full path. For instance,
	
	  MSVIDEO1=SCRNCAP.DRV
	
	MORE INFORMATION
	================
	
	CAPSCRN.EXE is a tool that conveniently allows recording of screen activities
	into an AVI file. When executing CAPSCRN.EXE, it is minimized on start up. Under
	Windows 95, click the right mouse button to bring up the application menu. This
	is different in Windows 3.x platform where the left mouse button is used.
	
	The Win32 SDK includes a Windows 95 update to the Screen Capture program
	(CAPSCRN.EXE) from Video for Windows. The updated version of CAPSCRN.EXE (and
	SCRNCAP.DRV, which it also requires) can be found on the MSDN Win32SDK CD in
	\mstools\bin\win95.
	
	Additional query words: 4.00 kbdsd
	
	======================================================================
	Keywords          : kbmm 
	Technology        : kbAudDeveloper kbVideoSearch kbSDKSearch kbVideoDK110
	Version           : :1.1
	
	=============================================================================
	
