---
layout: page
title: "Q75359: PRB: One Cause of Fatal Exit 0x0140 &quot;Local Heap Is Busy&quot;"
permalink: /kb/075/Q75359/
---

## Q75359: PRB: One Cause of Fatal Exit 0x0140 &quot;Local Heap Is Busy&quot;

{% raw %}

	Article: Q75359
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
	
	The debugging version of Windows reports Fatal Exit 0x0140.
	
	CAUSE
	=====
	
	A module with no heap (such as a no-data dynamic-link library) uses LocalAlloc
	to allocate local memory. Even if the application does not call LocalAlloc
	directly, application startup code in the C run-time libraries allocates memory
	to store the command-line arguments.
	
	RESOLUTION
	==========
	
	Make sure that the proper library is specified on the LINK command line.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
