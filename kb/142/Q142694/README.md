---
layout: page
title: "Q142694: CPU Write-Back Cache Disabled on Certain Cyrix Processors"
permalink: /kb/142/Q142694/
---

## Q142694: CPU Write-Back Cache Disabled on Certain Cyrix Processors

	Article: Q142694
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When initializing certain Cyrix processors, Windows NT 4.0 will disable the CPU
	write-back cache to prevent serious system problems.
	
	MORE INFORMATION
	================
	
	Certain Cyrix processors are known to cause serious problems with Windows NT
	4.0.
	
	
	If Windows NT detects certain Cyrix processor steppings, it will disable the L1
	w/b (write-back) cache.
	
	This will reduce performance but will guard against systemwide problems caused by
	the write-back cache, thus preventing data-loss.
	
	The Cyrix products discussed here are manufactured by Cyrix Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodnt cyrix write-back processor
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
