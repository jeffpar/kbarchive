---
layout: page
title: "Q123281: Low Virtual Memory Errors with FoxPro 2.6 In Windows NT"
permalink: kb/123/Q123281/
---

## Q123281: Low Virtual Memory Errors with FoxPro 2.6 In Windows NT

	Article: Q123281
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbinterop
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	When running Microsoft FoxPro for Windows version 2.6 under Windows NT
	version 3.5, you may receive low virtual memory errors when you attempt to
	start another application.
	
	When FoxPro 2.6 for Windows loads it attempts to use as much of the paging
	file as possible. This can prevent other applications from loading when
	FoxPro is running. You can work around this by using the following entry in
	the CONFIG.FPW FoxPro configuration file:
	
	  MEMLIMIT=<percentage>,<minmem>,<maxmem>
	
	where <percentage> is the percentage of memory available under Windows,
	<minmem> is the minimum amount of memory allocated to FoxPro, and <maxmem>
	is the maximum amount of memory allocated to FoxPro. MEMLIMIT defaults to
	1.5 MB if the MEMLIMIT command is not included in the configuration file.
	For example, to allocate 20% of Windows memory, a minimum of 4 MB, and a
	maximum of 8 MB use the following syntax:
	
	  MEMLIMIT=20,4096,8192
	
	For more information on the MEMLIMIT entry, consult the FoxPro for Windows
	version 2.6 documentation.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
