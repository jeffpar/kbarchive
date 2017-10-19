---
layout: page
title: "Q76686: BUG: Protected-Mode GlobalCompact() Return Not Free Memory"
permalink: /kb/076/Q76686/
---

## Q76686: BUG: Protected-Mode GlobalCompact() Return Not Free Memory

	Article: Q76686
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Windows is running in one of its protected modes, the value returned by the
	GlobalCompact() API does not accurately reflect the amount of free memory
	available in the system.
	
	In enhanced mode, Windows can swap memory objects to disk. This process takes a
	long time relative to accessing an object in memory. Therefore, GlobalCompact()
	returns the amount of memory available without performing any paging.
	
	In standard mode, GlobalCompact() never reports more than 1 megabyte (MB) of
	memory free because of a memory allocation limit on the 80286 chip.
	
	STATUS
	======
	
	Microsoft has confirmed that this problem occurs in Windows versions 3.0 and
	3.1. We are researching this problem and will post new information here as it
	becomes available.
	
	Additional query words: buglist3.00 buglist3.10 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSDKSearch kbWinSDKSearch
	Version           : WINDOWS:
	
	=============================================================================
	
