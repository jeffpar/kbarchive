---
layout: page
title: "Q84778: Memory Use Limitations in Microsoft Windows"
permalink: kb/084/Q84778/
---

## Q84778: Memory Use Limitations in Microsoft Windows

	Article: Q84778
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
	
	Windows 3.0 can access up to 16 megabytes (MB) of physical memory. With the
	release of version 3.1, Windows can access more than 16 MB of physical memory.
	This article discusses the factors that influence the amount of memory available
	to applications in the Windows environment.
	
	MORE INFORMATION
	================
	
	In enhanced mode, Windows versions 3.0 and 3.1 can use features of the Intel 386
	(and compatible) microprocessors to supplement the installed physical RAM memory
	with virtual memory in a disk-based swap file. As physical memory fills, Windows
	sends the least-recently used pages of memory to disk. When this data is later
	accessed, Windows pages it back in from disk. This activity is transparent to
	applications in the system.
	
	Windows 3.0 cannot address any memory with an address higher than 100000h (16
	MB). Windows 3.1 can address at most 256 MB of physical RAM memory, and the
	largest swap file Windows 3.1 will ever create is 256 MB. To be used by Windows
	3.1, all physical RAM memory must have an address lower than 7FC00000h (2,044
	MB).
	
	While the combination of 256 MB of physical RAM memory coupled with a 256 MB swap
	file provides a theoretical limit of 512 MB, the actual maximum is somewhat less
	than 512 MB.
	
	The architecture of the Intel 386 processor defines a Local Descriptor Table
	(LDT), which is used in the memory protection scheme. Windows 3.1 uses one LDT
	that provides 8192 descriptors. Each descriptor can describe a block of memory
	containing at most 64 KB. While multiplying the number of descriptors by the
	maximum amount of memory yields the 512 MB theoretical limit again, Windows will
	not access this much memory for the following two reasons:
	
	- Windows reserves some descriptors for its own use.
	
	- Most memory allocations that use a descriptor do not allocate the 64K maximum
	  allowed.
	
	Both of these factors reduce the number of available descriptors and the amount
	of memory that Windows can use.
	
	While the About dialog box in the Program Manager reports an estimate of the
	amount of memory available, Windows does not maintain sufficient information to
	accurately report the amount of free memory at any given time. Maintaining more
	accurate information regarding the amount of free memory would seriously degrade
	system performance because memory is allocated and freed very frequently.
	
	The values reported by the GetFreeSpace and GlobalCompact functions are less than
	or equal to the amount of free memory available in the system. Because of their
	imprecise nature, an application should use the value reported by one of these
	functions only for an informational display. The application must not assume
	that it is possible to allocate that much memory.
	
	The largest block of memory that an application can allocate is affected by the
	degree of memory fragmentation. Memory available in fixed portions of memory may
	be available for allocation only as a fixed block. For example, consider the
	case where the GetFreeSpace function returns 100K available, and 64K of the
	available space is located in the fixed portion of the heap with the remainder
	in the movable and discardable portion of the heap. An attempt to allocate a
	100K block of movable and discardable memory will most likely fail.
	
	Additional query words: no32bit 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
