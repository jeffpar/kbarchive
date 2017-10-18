---
layout: page
title: "Q74197: Minimizing Lock and Unlock Calls in Protected Mode"
permalink: kb/074/Q74197/
---

## Q74197: Minimizing Lock and Unlock Calls in Protected Mode

	Article: Q74197
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Microsoft Windows is running in protected mode (standard mode or enhanced
	mode), the selector of a movable memory block does not change even though
	Windows may move the block in physical (standard mode, enhanced mode) or linear
	(enhanced mode) memory.
	
	Applications that run only in protected mode can take advantage of this behavior
	to minimize the number of GlobalLock() and GlobalUnlock() calls.
	
	MORE INFORMATION
	================
	
	The following code demonstrates how to allocate a global memory object:
	
	     HANDLE hMem;
	     LPSTR lpstr;
	
	     if ((hMem = GlobalAlloc(GMEM_MOVEABLE, cb)) != NULL)
	        if ((lpstr = GlobalLock(hMem)) != (LPSTR)NULL)
	           {
	           // use the memory
	           }
	
	The following code demonstrates how to free the global memory object allocated
	above:
	
	     if (GlobalUnlock(hMem) != (HANDLE)NULL)
	        GlobalFree(hMem);
	
	Leaving movable global memory objects locked does not impose a memory consumption
	penalty in protected mode.
	
	This technique is not appropriate for an application that runs in real mode under
	versions of Windows prior to version 3.1. In real mode, Windows manages a
	limited amount of memory (less than 640K) by moving and discarding memory
	blocks. When an application locks a memory block, Windows cannot move or discard
	the block. Therefore, an application that runs in real mode must lock an object
	only while the object is in use.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
