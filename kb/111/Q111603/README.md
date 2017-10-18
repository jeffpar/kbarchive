---
layout: page
title: "Q111603: BUG: GlobalCompact() May Return an Inaccurate Value"
permalink: kb/111/Q111603/
---

## Q111603: BUG: GlobalCompact() May Return an Inaccurate Value

	Article: Q111603
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	GlobalCompact() may return a very inaccurate value when paging is enabled.
	
	CAUSE
	=====
	
	This is the value that is returned by a DPMI call. It is simply the largest hole
	in the linear address space and is not necessarily the largest block that can be
	allocated.
	
	RESOLUTION
	==========
	
	Allocate only as much memory as needed, and always check the return value from a
	call to a memory allocation routine.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
