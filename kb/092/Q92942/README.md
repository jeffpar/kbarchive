---
layout: page
title: "Q92942: GlobalReAlloc() and GMEM_ZEROINIT Clarified"
permalink: /kb/092/Q92942/
---

## Q92942: GlobalReAlloc() and GMEM_ZEROINIT Clarified

	Article: Q92942
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
	
	GlobalReAlloc() is documented in the Windows API's reference manuals. This is a
	clarification of one of the flags you can set for GlobalReAlloc(). Under one
	circumstance, when GlobalReAlloc() is used with GMEM_ZEROINIT, it may not zero
	out all of the reallocated memory. This situation occurs when GlobalReAlloc() is
	called to shrink a block of memory and then enlarge it.
	
	MORE INFORMATION
	================
	
	When GlobalReAlloc() is used with GMEM_ZEROINIT to increase the size of a block
	of memory in the global heap, it will zero out only the bytes it adds to the
	memory object; it does not initialize any of the memory that existed before the
	call.
	
	Windows allocates memory from the global heap in multiples of 32 bytes; enhanced
	mode allocates memory on even 32-byte boundaries, and standard mode allocates
	memory on odd 32-byte boundaries (that is, /E allocates 32/64/96 bytes, /S
	allocates 16/48/80 bytes).Thus, when 10 bytes are requested, enhanced Windows
	actually allocates 32 bytes; when 55 bytes are requested, enhanced Windows
	allocates 64 bytes.
	
	Suppose we have the following sequence of calls in Windows enhanced mode:
	
	  HGLOBAL hMem ;
	
	        // 32 bytes are actually allocated, not 10 because Windows
	        // allocates global memory in multiples of 32 bytes. All
	        // 32 bytes are initialized to zero.
	  hMem = GlobalAlloc(GMEM_ZEROINIT | GMEM_FIXED, 10);
	
	        // Here, we allocate 32 more bytes and add them to the end of
	        // the first 32 bytes. ReAllocating to 40 bytes will cause the
	        // block to be 64 bytes long. Only the second 32
	        // bytes are initialized to zero. The first 32 bytes are left
	        // alone.
	  hMem = GlobalReAlloc(hMem, 40, GMEM_ZEROINIT | GMEM_FIXED);
	
	        // Copy 39 bytes into the memory block. The first 39 bytes
	        // will contain the string.
	  lstrcpy((LPSTR)GlobalLock(hMem), "This is a big enough string for our job")
	
	        // Now we shrink the block to 10 bytes. After the call, the
	        // block will be 32 bytes long; the second 32 bytes are freed
	        // and will no longer exist. The first 32 bytes will still
	        // contain the same characters as before the call.
	  hMem = GlobalReAlloc(hMem, 10, GMEM_ZEROINIT | GMEM_FIXED) ;
	
	        // Now, we enlarge the block back to 40 bytes.  After the call,
	        // the block will be 64 bytes long, and the second 32 bytes
	        // will be initialized to zero. The first 32 bytes will be left
	        // alone, however. The area between bytes 10 and 32 does *not*
	        // get initialized!
	  hMem = GlobalReAlloc(hMem, 40, GMEM_ZEROINIT | GMEM_FIXED) ;
	
	When GlobalReAlloc() is called to shrink the block, we told it that we wanted
	only 10 bytes; that's all we should use. Then when we enlarge it back to 40
	bytes, GlobalReAlloc() only initializes the memory it adds to the current
	block--which is from bytes 33 to 64. The bytes between 10 and 40 were previously
	used, but GlobalReAlloc() did not initialize them because it did not allocate
	them.
	
	As a result, applications that call GlobalReAlloc() to shrink and then re-
	enlarge a block of previously used data should not expect that all the bytes
	will be initialized to zero.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
