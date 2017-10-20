---
layout: page
title: "Q68644: DOCERR: Segment and Handle Limits and Protected Mode Windows"
permalink: /kb/068/Q68644/
---

## Q68644: DOCERR: Segment and Handle Limits and Protected Mode Windows

{% raw %}

	Article: Q68644
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
	
	Page 16-25 of the "Microsoft Windows Software Development Kit Guide to
	Programming" for Windows 3.0 and page 350 of the "Windows Software Development
	Kit Guide to Programming" for Windows 3.1 state:
	
	  Under the Windows standard mode and 386 enhanced mode memory configurations,
	  there is a system-wide limit of 8192 global memory handles, only some of
	  which are available to any given application.
	
	With regard to standard mode, this statement is incorrect. The limit is 4096
	global memory handles when Microsoft Windows runs in standard mode and 8192 when
	Windows runs in enhanced mode. Standard mode uses two LDT entries for each
	memory handle while enhanced mode uses one LDT entry for each memory handle.
	
	MORE INFORMATION
	================
	
	Each memory block has an associated handle that Windows and applications running
	in the Windows environment use to access the block. The Intel 80286 or higher
	microprocessor maintains records of each segment using a descriptor, which
	describes the attributes of each memory block such as its base address, size,
	attributes (read, write, execute), and privilege level. In enhanced mode, each
	memory block has one handle and at least one descriptor. In standard mode, each
	memory block has at least two descriptors. Because Windows and its applications
	run in 16-bit protected mode, global memory blocks larger than 64K (the maximum
	segment size in 16- bit protected mode) use several descriptors.
	
	The architecture of the Intel CPUs requires that each descriptor table fit into
	its own 64K segment. Because each descriptor is 8 bytes long, each descriptor
	table can hold a maximum of 8192 descriptors (64K divided by 8 bytes equals 8K).
	Therefore, each descriptor table can manage up to 8192 segments. For more
	information, see the "386 DX Microprocessor Programmer's Reference Manual,"
	(Intel Corporation).
	
	Windows creates a global descriptor table (GDT) for the system, and one local
	descriptor table (LDT) for itself and all applications running under Windows.
	Because all applications use the same LDT, a maximum of 8192 descriptors are
	available to Windows and applications. Enhanced mode can manage a maximum of
	8192 segments because each segment requires one descriptor. Standard mode can
	manage a maximum of 4096 segments because each segment requires two descriptors.
	Because descriptors are used for code, data, and resource segments, the maximum
	number of descriptors available for applications to use for global memory blocks
	is considerably less than 8192 and 4096.
	
	Windows does not provide a way to determine how many selectors are available for
	a given application to use. All Windows API functions fail when there is not
	enough free memory to satisfy a given request, or when there are not enough
	descriptors available. Either way, Windows is unable to satisfy the
	application's memory request. It is important that selectors be used with
	deliberation because each Windows-based application must cooperate with other
	Windows-based applications. Instead of allocating many small blocks from the
	global heap, an application should allocate fewer blocks that are larger in
	size. The application can then divide each larger memory block into pieces for
	its own use.
	
	If small memory blocks are required by the application, use the local
	memory-management routines provided by Windows. A local handle does not impact
	the selector limit at all because a local memory block is allocated inside a
	global memory block. For example, the LocalAlloc() function allocates a memory
	block from an application's or a dynamic-link library's (DLL's) local heap.
	
	In some circumstances, it may be advantageous to employ a more sophisticated
	memory-management scheme called multiple FAR heaps. This technique is useful if
	the application requires a number of blocks of memory, say 100, and the total
	number of bytes in each block is not above 64K. Chapter 18 (pages 602-617) of
	"Windows 3.1 Power Programming Techniques", 2nd edition by Peter Norton and Paul
	Yao, contains more details on this technique. In this chapter, Norton and Yao
	state the steps necessary to perform local heap allocation in a dynamically
	allocated segment. This chapter effectively describes the technique of using
	multiple FAR heaps and also provides some sample code.
	
	This technique involves four steps:
	
	1. Globally allocate a block of memory with GlobalAlloc().
	
	2. Lock the block of memory with GlobalLock().
	
	3. Initialize the block of memory by calling LocalInit().
	
	4. Modify the local memory-management routines so each updates the DS register
	  to point to the new heap just before a call to a local memory- management
	  routine. When access to the new heap is complete, immediately restore the DS
	  register.
	
	Overall, this technique uses fewer global handles and less memory overhead with
	each call.
	
	Additional query words: 3.00 no32bit 3.10 docerr
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
