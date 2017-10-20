---
layout: page
title: "Q74040: Ownership of Global Memory Allocated by a DLL"
permalink: /kb/074/Q74040/
---

## Q74040: Ownership of Global Memory Allocated by a DLL

{% raw %}

	Article: Q74040
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
	
	In the Microsoft Windows environment, when a function in a dynamic- link library
	(DLL) calls the GlobalAlloc function without specifying the GMEM_DDESHARE flag
	in the wFlags parameter, the returned global memory object belongs to the
	currently active instance of the application that called the DLL. If that
	instance of the application terminates, the memory is freed. If the DLL is
	unloaded before the application terminates, the memory remains allocated.
	
	If the function specifies the GMEM_DDESHARE flag when calling the GlobalAlloc
	function, the DLL owns the returned memory object. The memory is freed when the
	DLL is unloaded, not when any application terminates.
	
	This behavior will continue for 16-bit applications in all future versions of the
	Microsoft Windows graphical environment. However, applications written for
	Windows NT may be required to free GMEM_DDESHARE memory explicitly by calling
	the GlobalFree function. In other words, the system may not free GMEM_DDESHARE
	memory when either the DLL or the application terminates.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
