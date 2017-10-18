---
layout: page
title: "Q136694: Memory Management in Visual FoxPro"
permalink: kb/136/Q136694/
---

## Q136694: Memory Management in Visual FoxPro

	Article: Q136694
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes memory management in Visual FoxPro. Memory is allocated
	in a page pool and a handle pool.
	
	MORE INFORMATION
	================
	
	Handle Pool
	-----------
	
	The handle pool contains memory that is used for various Visual FoxPro objects
	such as windows, menus, classes, objects, cursors, sessions, and so on. Unlike
	previous versions of FoxPro, this pool has no arbitrary limit. It is bound only
	by the amount of virtual memory available from the underlying operating system
	as set by the user using the operating system's virtual memory settings. Thus,
	the size and complexity of a user's form or application is limited only by
	available virtual memory, not available physical memory.
	
	Page Pool
	---------
	
	The page pool contains memory used for file caching (to perform read buffering),
	internal sorting, and query execution. For these purposes, it is critical that
	the memory be physical, not virtual. In other words, Visual FoxPro needs memory
	that won't be swapped to disk. While it can't guarantee this, it can try to
	ensure this by limiting the size of the page pool so that it will all fit in
	physical memory. The size of the page pool can also be set manually by using
	SYS(3050).
	
	Note that MEMLIMIT is not used in Visual FoxPro. The handle pool is limited by
	available virtual memory, and the page pool can be dynamically resized using
	SYS(3050).
	
	Additional query words: VFoxWin crash insufficient RAM swapfile
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	
