---
layout: page
title: "Q40620: Communicating Between Windows Virtual Machines with DDE"
permalink: /kb/040/Q40620/
---

## Q40620: Communicating Between Windows Virtual Machines with DDE

	Article: Q40620
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 286 supported DDE (dynamic data exchange) for MS-DOS (non-Windows)
	applications; however, Windows/386 and Windows versions 3.x do not include this
	functionality. There are no plans to add this functionality in future versions
	of Windows.
	
	The following are methods descrive several different ways for an MS-DOS- based
	application to communicate with a Windows-based application:
	
	1. The Clipboard. MS-DOS-based applications can read from or write to the
	  Clipboard. The methods for doing this are documented in the Windows SDK
	  (Software Development Kit). Microsoft Word incorporates this capability. This
	  is the preferred method of communication.
	
	2. A shared file. To improve performance, SMARTDRV or a RAM disk can be used.
	  SHARE.EXE should be loaded before starting Windows to allow for proper file
	  sharing and locking
	
	3. MS-DOS TSR (terminate-and-stay-resident) program. Another method that can be
	  used is to start an MS-DOS TSR program with a buffer at a fixed location that
	  can be read/written to by different applications. For this method to work,
	  the memory region used must be below the load point of Windows 3.x, otherwise
	  the different virtual machines will have their own private copies of the
	  address space.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
