---
layout: page
title: "Q11467: Reference Counts for Windows Dynamic Libraries"
permalink: kb/011/Q11467/
---

## Q11467: Reference Counts for Windows Dynamic Libraries

	Article: Q11467
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
	
	Libraries are reference counted and remain resident in memory until they cease
	to be referenced.
	
	When a task module is started and is dynamically linked to the library, the
	reference count is incremented by 1 (one). When the task module is terminated,
	the reference count is decremented by 1 (one).
	
	Two functions, LoadLibrary() and FreeLibrary(), affect the reference count.
	LoadLibrary() increments the reference count by one while FreeLibrary()
	decrements the reference count by one.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
