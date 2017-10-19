---
layout: page
title: "Q10641: Heap and Stack Usage Within Windows"
permalink: /kb/010/Q10641/
---

## Q10641: Heap and Stack Usage Within Windows

	Article: Q10641
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
	
	The following information clarifies heap and stack usage within a segment versus
	heap and stack usage within the application as a whole, for Windows versions 3.0
	and 3.1.
	
	MORE INFORMATION
	================
	
	An application gets a single default data segment, from which the stack is
	allocated. The remainder of the data segment is used for static data and the
	dynamic local heap.
	
	The STACKSIZE keyword in the .DEF file specifies the size of the application's
	stack; it is allocated from DGROUP and therefore is limited to a maximum size of
	(64K - heap size - static data) bytes. The stack size is not dynamically
	enlarged or reduced.
	
	The HEAPSIZE keyword in the .DEF file specifies the initial default local heap
	size. Windows attempts to enlarge the heap size when local allocations fail;
	however, the heap is limited to a maximum size of (64K - stack size - static
	data).
	
	The sum of the static data, stack, and local heap cannot exceed 64K.
	
	Multiple local heaps can be managed using the LocalInit() call and swapping the
	DS register as needed. For more information on this technique, query on the
	following words:
	
	  handle and limit and globalalloc and register
	
	
	Chapter 18 (pages 707-724) of "Windows 3.0 Power Programming Techniques," by Paul
	Yao and Peter Norton (Bantam Computer Books), contains more details about this
	technique.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
