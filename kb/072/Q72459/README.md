---
layout: page
title: "Q72459: Shorthand Notation for Memory Allocation Flags"
permalink: /kb/072/Q72459/
---

## Q72459: Shorthand Notation for Memory Allocation Flags

	Article: Q72459
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
	
	Some flags have been defined in the WINDOWS.H file [distributed with the Windows
	Software Development Kit (SDK)] that are designed to be used instead of common
	flag combinations for memory allocations. Included below is an explanation of
	these flags:
	
	Global Memory Allocations
	-------------------------
	
	There are two flags defined for global memory allocation: GHND and GPTR. Both are
	to be used for the wFlags parameter of the GlobalAlloc function.
	
	  Flag      Definition
	  ----      ----------
	
	  GHND      (GMEM_MOVEABLE | GMEM_ZEROINIT)
	  GPTR      (GMEM_FIXED | GMEM_ZEROINIT)
	
	Local Memory Allocations
	------------------------
	
	Similarly, there are two flags defined for local memory allocation: LHND and
	LPTR. Both are to be used for the wFlags parameter of the LocalAlloc function:
	
	  Flag      Definition
	  ----      ----------
	
	  LHND     (LMEM_MOVEABLE | LMEM_ZEROINIT)
	  LPTR     (LMEM_FIXED | LMEM_ZEROINIT)
	
	The LPTR flag returns a pointer that can be used immediately (no need to call the
	LocalLock function); whereas with the GPTR flag, the GlobalLock function still
	must be used on the handle that is returned.
	
	For more information on the GlobalAlloc and LocalAlloc functions, refer to the
	"Microsoft Windows Software Development Kit Reference Volume 1".
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
