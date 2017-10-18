---
layout: page
title: "Q61777: Why GlobalAlloc() Returns a Handle to a 0-Byte Segment"
permalink: kb/061/Q61777/
---

## Q61777: Why GlobalAlloc() Returns a Handle to a 0-Byte Segment

	Article: Q61777
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
	
	When Calling GlobalAlloc() with a segment of size 0 (zero), Windows returns a
	handle to the memory. Attempting a GlobalLock() using that handle returns a NULL
	pointer. Since a 0-byte block of memory is treated by the system as if it is
	discarded, the following explains how these memory handles can be reused.
	
	Consider the following scenario:
	
	1. hMemory = GlobalAlloc (GMEM_MOVEABLE, 0L);
	
	  This returns a handle to a block of memory of length 0 (zero).
	
	2. wFlags = GlobalFlags (hMemory);
	
	  wFlags is 0x4000, which is GMEM_DISCARDED. Thus, the memory object is thought
	  of as if it has already been discarded.
	
	3. lpszMemory = GlobalLock (hMemory);
	
	  This fails. lpszMemory == 0.
	
	4. hMemory = GlobalReAlloc (hMemory, 1L, GMEM_MOVEABLE);
	
	  This returns the handle, and sets the size of the block to 1 byte.
	
	5. wFlags = GlobalFlags (hMemory);
	
	  wFlags = 0 (zero), which is GMEM_FIXED (Windows protected mode or in Windows
	  3.1, GMEM_FIXED and GMEM_MOVEABLE are the same).
	
	6. lpszMemory = GlobalLock (hMemory);
	
	  This returns a valid far pointer to a 1-byte buffer.
	
	When the lock count of a GMEM_DISCARDABLE object reaches 0 (zero), it is a
	candidate for discarding. If it has been discarded, it cannot be locked or used
	because the memory it refers to has been deallocated. However, it can be
	reallocated and then locked. As a result, the memory handles are reused after
	having been discarded.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
