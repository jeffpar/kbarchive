---
layout: page
title: "Q41451: PRB: Windows FatalExit 0x0280 Error Caused by FAR WinMain"
permalink: kb/041/Q41451/
---

## Q41451: PRB: Windows FatalExit 0x0280 Error Caused by FAR WinMain

	Article: Q41451
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
	
	When an application is launched, a FatalExit 0x0280 (ERR_GMEMHANDLE, invalid
	global handle) error occurs in Windows 3.0, or a general protection (GP) fault
	occurs in Windows 3.1.
	
	CAUSE
	=====
	
	The application declares the WinMain function as a FAR function. The design of
	the Microsoft Windows kernel assumes that an application's entry point is a near
	function rather than a far function.
	
	RESOLUTION
	==========
	
	Remove the FAR keyword from the declaration of the WinMain function.
	
	Additional query words: 3.00 3.10 rip gpf gp-fault
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
