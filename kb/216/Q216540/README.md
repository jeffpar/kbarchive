---
layout: page
title: "Q216540: User-mode Programs Cannot Allocate Blocks of Virtual Memory"
permalink: kb/216/Q216540/
---

## Q216540: User-mode Programs Cannot Allocate Blocks of Virtual Memory

	Article: Q216540
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	User-mode programs are unable to allocate blocks of virtual memory (calls to
	VirtualAlloc() do not succeed). This may result in the inability to create
	threads, mutexes, critical sections, and so on.
	
	
	CAUSE
	=====
	
	This problem occurs when a VirtualAlloc() critical section object is being
	called to initialize part of the structure (DebugInfo). VirtualAlloc() reserves
	virtual memory on a 64 KB boundary. However, this structure only allocates 4 KB
	(reserve and commit) blocks of virtual memory, thereby leaving 60 KB unused.
	Over time, this results in fragmentation of virtual memory and may reduce the
	size of contiguous blocks available to user-mode programs.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 5.
	
	
	Additional query words: critsec
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
