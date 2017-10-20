---
layout: page
title: "Q49838: PRB: GlobalUnlock() Can Cause Fatal Exit 0x02F0"
permalink: /kb/049/Q49838/
---

## Q49838: PRB: GlobalUnlock() Can Cause Fatal Exit 0x02F0

{% raw %}

	Article: Q49838
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
	
	Under the debugging version of Windows, when an application calls the
	GlobalUnlock() API, a FatalExit 0x02F0 "GlobalUnlock: Object usage count
	underflow" error occurs.
	
	CAUSE
	=====
	
	The application called the GlobalUnlock() API more times that it called the
	GlobalLock() API. Under the retail version of Windows, the function returns the
	normal value 0 in these circumstances.
	
	RESOLUTION
	==========
	
	Match each GlobalLock() call with a GlobalUnlock() call.
	
	Additional query words: 3.00 3.10 fatal exit 2F0 02F0 2F0h
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
