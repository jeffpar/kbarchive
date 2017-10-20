---
layout: page
title: "Q86230: PRB: Avoiding &quot;Insufficient Memory to Run&quot; Errors"
permalink: /kb/086/Q86230/
---

## Q86230: PRB: Avoiding &quot;Insufficient Memory to Run&quot; Errors

{% raw %}

	Article: Q86230
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbprogramming kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the process of loading an application, Microsoft Windows displays an
	application execution error message box with the following message:
	
	  Insufficient memory to run this application; close one or more Windows
	  applications and try again.
	
	CAUSE
	=====
	
	One of the reasons this message is displayed is that the system has no memory
	available with an address less than 1 megabyte (MB). When Windows loads an
	application, it calls the GlobalDosAlloc() API to allocate memory in the address
	space below 1 MB for the application's task database. If the GlobalDosAlloc()
	call fails, Windows displays the application execution error message.
	
	RESOLUTION
	==========
	
	Use as little memory below 1 MB as possible.
	
	MORE INFORMATION
	================
	
	A common situation that leads to an insufficient memory error regards an
	application developed using a large memory model that includes many extra data
	segments and/or very large extra data segments. When Windows loads the
	application, it allocates fixed memory to hold the extra data segments. In
	Windows 3.0, these fixed memory blocks are also page locked, which prevents the
	memory manager from moving the blocks to disk as memory fills.
	
	Fixed memory is allocated from the bottom of the global heap, which starts at the
	lowest possible memory address. If all the memory below 1 MB is filled with page
	locked memory blocks, Windows cannot move blocks in memory or swap blocks to
	disk to free any memory. When Windows cannot allocate a task database for a new
	task, it displays the error message box discussed above.
	
	
	An application can determine whether all memory addressed below 1 MB is in use by
	attempting to allocate a small block of memory with the GlobalDosAlloc function.
	(Windows 3.0 requires 512 bytes of low memory for the task database of each
	application.) If the allocation fails, Windows will not be able to start another
	program. Even if the allocation is successful, the failure of another memory
	allocation required by the application may prevent it from loading.
	
	One way to address this problem is to remove the page lock from an application's
	extra data segments. However, memory accessed by an interrupt service routine
	must be page locked to keep its data available at all times. An application can
	use the services of the tool helper dynamic-link library (TOOLHELP.DLL) and a
	few Windows functions to modify the flags on the extra data segments. After
	modification, the data segments are movable and not page locked.
	
	Use the GlobalFirst() and GlobalNext() functions provided by the tool helper
	library to walk the global heap looking for memory blocks owned by the
	application. If a memory block is page locked (the wcPageLock field of the
	GLOBALENTRY data structure is not zero), call the GlobalPageUnlock function to
	change the lock count for the memory block. Calling GlobalRealloc() to change
	the block from fixed to movable memory might also be desirable.
	
	For more information on the tool helper library, see Chapter 8 of the "Microsoft
	Windows Software Development Kit: Programmer's Reference, Volume 1: Overview"
	version 3.1 manual.
	
	Another method to unlock data segments uses the GlobalPageUnlock() and
	GlobalUnfix() functions. For more information on this technique, please see the
	following article(s) in the Microsoft Knowledge Base:
	
	  Q83363 Sample Code Unlocks Large-Model Extra Data Segments
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
