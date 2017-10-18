---
layout: page
title: "Q12244: Fatal Error Messages 0x0140 and 0x0240"
permalink: kb/012/Q12244/
---

## Q12244: Fatal Error Messages 0x0140 and 0x0240

	Article: Q12244
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FatalExit messages "Local heap is busy" (0x0140) and "Critical section
	problems" (0x0240) indicate internal errors in Windows's memory management
	routines; 0x0140 indicates an incorrect attempt to enter or leave a critical
	section in the local memory manager; 0x0240 indicates that the total number of
	free handles doesn't match up.
	
	These errors shouldn't occur unless something gets destroyed; this is usually an
	indication that an application is destroying memory by writing to an area where
	it shouldn't.
	
	Additional query words: 3.00 3.10 rip dgroup
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
