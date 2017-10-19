---
layout: page
title: "Q77698: How to Determine if Multimedia Windows Is Running"
permalink: /kb/077/Q77698/
---

## Q77698: How to Determine if Multimedia Windows Is Running

	Article: Q77698
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Microsoft Multimedia Windows is run, certain drivers, such as MMSOUND.DRV
	and MMSYSTEM.DLL, are loaded immediately. An application can use this
	information to determine whether Multimedia Windows is running, as follows:
	
	     hModule = GetModuleHandle("mmsystem.dll");
	     if (!hModule)
	        {
	        bMultimedia = FALSE;
	        MessageBox(NULL,
	             "This application should be run with MMWindows",
	             "Alert", MB_OK);
	        }
	
	GetModuleHandle() attempts to retrieve the "module instance" handle to the
	MMSYSTEM dynamic-link library (DLL). The return value is zero if MMSYSTEM has
	not been loaded and greater than zero if MMSYSTEM is loaded. Therefore, when
	hModule is zero, Multimedia Windows is not running; otherwise, Multimedia
	Windows is running.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
