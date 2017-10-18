---
layout: page
title: "Q79194: Using Huge Pointers with Blocks of Memory Larger Than 64K"
permalink: kb/079/Q79194/
---

## Q79194: Using Huge Pointers with Blocks of Memory Larger Than 64K

	Article: Q79194
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
	
	The GlobalAlloc() function can be used to allocate memory blocks larger than 64
	kilobytes (64K). This memory can then be accessed using "huge" pointers. For
	more information on huge pointers, see your Microsoft C compiler documentation.
	
	MORE INFORMATION
	================
	
	GlobalAlloc() always returns a single contiguous block of memory, if it is
	possible to satisfy the request. This block can be accessed using huge pointers.
	Huge pointers are composed of a segment:offset address (real mode), or a
	selector:offset address (standard mode or 386 enhanced mode), just like a far
	pointer. Huge pointers allow access to more than 64K, by adjusting the segment
	or selector part of the address, as well as the offset.
	
	In real mode, the segment address increases or decreases by 0x1000 every time the
	offset crosses the 64K boundary. In standard mode or 386 enhanced mode, memory
	is addressed using selectors instead of segments. When GlobalAlloc() allocates a
	block of memory, it also creates selectors to access that block. If the block of
	memory is larger than 64K, GlobalAlloc() will create a set of tiled selectors.
	The first selector in the set provides access to the first 64K of the block.
	Subsequent selectors provide access to additional 64K portions of the memory
	block.
	
	Tiled selectors are allocated in a predefined pattern; the value of the second
	selector equals the value of the first selector plus the value of __AHINCR, and
	so forth. Therefore, when the offset of a huge pointer crosses a 64K boundary in
	standard mode or 386 enhanced mode, the value of the selector is increased or
	decreased by the value of __AHINCR.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
