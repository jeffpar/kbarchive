---
layout: page
title: "Q184699: XADM: Store.exe Working Set Performance Counter Keeps Growing"
permalink: kb/184/Q184699/
---

## Q184699: XADM: Store.exe Working Set Performance Counter Keeps Growing

	Article: Q184699
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Working Set performance counter keeps increasing under a moderate load. When
	the load has subsided, the counter remains constantly high. It does not decrease
	memory used.
	
	CAUSE
	=====
	
	The Store.exe process has a counter called "Working Set." This counter displays
	the current amount of RAM used by the information store code and its related
	data. When memory is reserved, it does not free until the process is stopped and
	restarted; however, if Windows NT swaps some of these pages from RAM to disk,
	the performance monitor value will decrease to reflect the change in the amount
	of RAM being used by the information store.
	
	This is by design.
	
	MORE INFORMATION
	================
	
	This memory is just reserved, not allocated. If the server is under stress from
	another application, these pages will be swapped to the page file to free up
	RAM, which will reduce the Working Set size.
	
	Additional query words: PerfMon MSEXHCHANGEIS Information Store
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	
