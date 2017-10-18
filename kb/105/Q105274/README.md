---
layout: page
title: "Q105274: Solving the &quot;Insufficient Memory to Run&quot; Situation"
permalink: kb/105/Q105274/
---

## Q105274: Solving the &quot;Insufficient Memory to Run&quot; Situation

	Article: Q105274
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Each task under Windows requires a data structure allocated below 1 megabyte
	(MB) called the Task Data Base (TDB). Under the debug version of Windows,
	failure of a TDB's allocation shows up as:
	
	  t Kernel: GlobalAlloc(200) failed for ????
	
	This error occurs within the context of LoadModule as it attempts to start a new
	task under a low conventional memory condition.
	
	The most common cause of low conventional memory is fixed allocations made on
	behalf of a dynamic-link library (DLL). Fixed allocations should be used only
	for code and data touched at interrupt time. All other allocations should be
	made with the moveable attribute.
	
	MORE INFORMATION
	================
	
	The Windows heap consists of all conventional and XMS memory available after
	WIN.COM and WIN386.EXE/DOSX.EXE are loaded by MS-DOS. These two physically
	separate blocks are combined into a single linear address space to make up the
	global heap.
	
	Windows allocates fixed objects with a bottom up/first fit algorithm. As more
	fixed objects are allocated from the heap, conventional memory gets pinched.
	Eventually, even a small allocation for the TDB fails resulting in LoadModule
	returning 0 (zero).
	
	The HEAPWALK.EXE utility provides a view onto the global heap to determine what
	is using up conventional memory. The Sort Address menu item sorts the main heap
	with lower addresses at the top of the list. Any object with an address of 9FFFF
	or below is in conventional memory. An object with an "F" set in the FLG column
	is fixed. Any fixed object owned by an application or its dependent dynamic-link
	libraries that is not a TDB (TYPE Task in HEAPWALK) should be considered
	suspect.
	
	The module definition (.DEF) file should mark CODE MOVEABLE DISCARDABLE and DATA
	MOVEABLE. Any allocations should contain the GMEM_MOVEABLE attribute. The
	EXEHDR.EXE utility can be used to indentify modules that use the fixed attribute
	for their code or data segments. Segments without the <moveable> attribute
	in the "flags" column of EXEHDR's output are fixed.
	
	Additional query words: no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
