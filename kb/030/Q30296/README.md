---
layout: page
title: "Q30296: When Can a Call to GlobalLock() Fail?"
permalink: /kb/030/Q30296/
---

## Q30296: When Can a Call to GlobalLock() Fail?

{% raw %}

	Article: Q30296
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
	
	The following can cause a call to GlobalLock() to fail:
	
	1. Attempting to Lock an invalid handle.
	
	2. Attempting to Lock an object that has been discarded. (This will occur if the
	  object was allocated as discardable and the system has discarded it due to
	  low memory.)
	
	3. When an application attempts to lock a DDE object that is in expanded memory
	  under low memory conditions. (This act will cause GlobalLock() to fail if
	  there is not enough memory below 1 megabyte to allow Windows to make a copy
	  of the object that the application wishes to lock. If this problem occurs,
	  the program should free some of its Global memory and then try the
	  GlobalLock() again.)
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
