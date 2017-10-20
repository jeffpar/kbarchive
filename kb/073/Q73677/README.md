---
layout: page
title: "Q73677: Allocation Limit on WINMEM32 Global32Alloc() Function"
permalink: /kb/073/Q73677/
---

## Q73677: Allocation Limit on WINMEM32 Global32Alloc() Function

{% raw %}

	Article: Q73677
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
	
	WINMEM32 is a dynamic-link library (DLL) that is designed to support the 32-bit
	flat memory model under Windows enhanced mode.
	
	The largest block of memory that Global32Alloc() can request is (16 megabytes --
	64K). Global32Alloc() allocates memory through the Windows kernel, which imposes
	this particular size limitation.
	
	Adding the ability to process larger allocations is under consideration for a
	future version of Windows.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
