---
layout: page
title: "Q76682: Properly Using Dynamic-Link Libraries"
permalink: /kb/076/Q76682/
---

## Q76682: Properly Using Dynamic-Link Libraries

{% raw %}

	Article: Q76682
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
	
	Many application developers try to use a dynamic-link library (DLL) as a second
	application. However, DLLs are designed to provide resources to applications.
	
	Two problems typically arise with the use of DLLs:
	
	1. A DLL opens a file and leaves it open.
	
	2. The DLL improperly allocates memory.
	
	This article addresses these two issues.
	
	MORE INFORMATION
	================
	
	When a DLL opens a file, the file handle is stored in the task database (TDB).
	The TDB is similar to, but not the same as the program segment prefix (PSP) used
	by applications that are not based on Windows. Because the DLL does not have a
	TDB, the handle is stored in the TDB of the application that called the DLL.
	
	If the file is left open when the application terminates, the handle is freed and
	becomes invalid. A future attempt to use the handle results in an attempt to
	access an invalid file handle.
	
	Files should be opened, read from or written to, and closed as quickly as
	possible within the application.
	
	When a DLL allocates global memory, the handle is stored in the TDB of the
	calling application. For similar reasons to the file case, if a DLL allocates
	global memory and the application that caused the allocation terminates, the
	global memory block is freed. An attempt to use the memory block will result in
	a general protection violation, usually reported as an unrecoverable application
	error (UAE).
	
	To avoid this problem, global memory allocations from a DLL should specify the
	GMEM_DDESHARE flag. When this flag is specified, the allocated memory is bound
	to the DLL code segment, not an application. Because the DLL owns the memory,
	when the application that caused the allocation terminates, the memory remains
	valid.
	
	When the DLL terminates, the memory block is freed.
	
	Additional query words: no32bit 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
