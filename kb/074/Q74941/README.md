---
layout: page
title: "Q74941: Determining Free Memory in Windows Enhanced Mode"
permalink: kb/074/Q74941/
---

## Q74941: Determining Free Memory in Windows Enhanced Mode

	Article: Q74941
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
	
	When an application requires memory for a particular purpose, it should request
	that amount of memory from the system. If a given request fails, the application
	can present an error message to the user, or make a smaller request.
	
	In the MS-DOS (non-Windows) environment, it is customary for an application to
	request that the operating system determine how much memory is free and report
	that information. The application can then allocate that amount of memory and
	scale its capacity limits accordingly. This is acceptable in an environment
	where only one application is running at any given time, which has complete
	access to all system resources available.
	
	However, in the Windows cooperative multitasking environment, applications must
	share system resources with other applications running simultaneously.
	
	MORE INFORMATION
	================
	
	In enhanced-mode Windows, determining the amount of free system memory is a very
	complex problem because Windows uses virtual memory. There are also a number of
	different types of memory that are used for specific purposes. The following
	list enumerates some of these memory options:
	
	  DDE share
	  Discardable
	  Fixed
	  Movable
	  Page locked
	  Pageable
	  Provided by GlobalDOSAlloc
	
	The presence of any of these attributes will affect the amount of free memory.
	
	It has been suggested that to attempt an allocation and then properly handle
	failure by potentially trying another allocation is too slow. However, it is
	doubtful that any method of calculating available memory will be any faster (if
	such a calculation was even possible). An overriding complication is that any
	memory use in another application or in a virtual machine will invalidate any
	computed value.
	
	An excellent discussion about dealing with varying amounts of system memory is in
	Chapter 18 of "Peter Norton's Windows 3 Power Programming Techniques" (Bantam
	Books, 1990) beginning on page 661. Given the caveats above, it is possible to
	obtain a very rough estimate of free system memory. Two routines report this
	information: the GlobalCompact() API and the MS-DOS Protected Mode Interface
	(DPMI) function 0500h (get free memory information).
	
	There are two pools of memory in enhanced-mode Windows:
	
	1. The DPMI memory pool managed by the WIN386 paging memory manager. Use DPMI
	  function 0500h to determine the size of this pool.
	
	2. The global heap memory pool(s) managed by KRNL386.EXE (the Windows
	  enhanced-mode Kernel. Use the GlobalCompact(-1) function to determine the
	  size of this pool.
	
	A rough estimate of available memory can be computed by placing the following
	code fragment into an application:
	
	    FreeMemEst = max(GlobalCompact(-1),
	               (DPMI_Call_AX_0500h->MaxUnlockedPageAlloc - 1L) * 4096L);
	    FreeMemEst = min(FreeMemEst, (16L * 1024L * 1024L) - (64L * 1024L));
	
	The first line of code determines available memory according to both memory
	managers. The second line accounts for the limitation imposed by the
	GlobalAlloc() API, which sets the maximum size of a segment at (16 megabytes
	minus 64 kilobytes). The GlobalCompact() API does require a lot of processing
	time, especially in standard (286 protect) mode.
	
	Additional query words: no32bit 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
