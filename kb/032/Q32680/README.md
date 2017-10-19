---
layout: page
title: "Q32680: ValidateFreeSpaces(), GlobalCompact(), and Wild Pointers"
permalink: /kb/032/Q32680/
---

## Q32680: ValidateFreeSpaces(), GlobalCompact(), and Wild Pointers

	Article: Q32680
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
	
	The ValidateFreeSpaces() function does not work as documented on page 4-454 of
	the "Microsoft Windows Software Development Kit Reference Volume 1" for version
	3.0. On page 964 of the "Programmer's Reference, Volume 2: Functions" manual
	from the Windows 3.1 SDK, the ValidateFreeSpaces() function is correctly
	documented.
	
	MORE INFORMATION
	================
	
	ValidateFreeSpaces() returns a void, not a LPSTR, as documented. Under the
	debugging kernel, ValidateFreeSpaces() will RIP if it finds overwritten free
	space; under the retail kernel, it does nothing.
	
	To use ValidateFreeSpaces(), the WIN.INI file must include the following
	statements:
	
	  [KERNEL]
	  EnableHeapChecking=1
	  EnableFreeChecking=1
	
	If an application calls ValidateFreeSpaces() and it discovers an error, it will
	RIP with a fatal exit code of 0x00ff, "FREE MEMORY OVERWRITE AT," and the
	address of the byte that was overwritten as Segment:Offset.
	
	To build a fairly solid detector of wild pointers, an application writer can use
	the following statements in the [KERNEL] section:
	
	1. EnableHeapChecking=1 to cause the kernel to regularly check the global arena.
	
	2. EnableFreeChecking=1 to let ValidateFreeSpaces() check global free space.
	
	3. EnableSegmentChecksum=1 to cause the kernel to check for corrupted code
	  segments.
	
	If the application then calls ValidateFreeSpaces() and GlobalCompact(-1)
	regularly, it will catch almost all wild global pointers. ValidateFreeSpaces()
	checks for any overwritten free blocks, and GlobalCompact(-1) moves and discards
	memory, thereby forcing heap and checksum checking.
	
	Please note the following:
	
	- CCh is used for the free-space fill byte because it will cause the debugger
	  to breakpoint if a jump into free space is executed.
	
	- If EnableSegmentChecksum=1 is used, setting breakpoints may cause spurious
	  0x0409 RIPs.
	
	- Setting all of these checks will noticeably slow the system.
	
	- If bad free spaces exist, check for fatal exit FFs and LLLLLLLs before the
	  address actually appears. A few fatal exits may have to be ignored before the
	  address appears.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
