---
layout: page
title: "Q137571: SRV.SYS Error 2023"
permalink: /kb/137/Q137571/
---

## Q137571: SRV.SYS Error 2023

	Article: Q137571
	Product(s): Microsoft Windows NT
	Version(s): 3.51 SP1,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51 SP1, 4.0 
	- Microsoft Windows NT Server version 3.51 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On your multi-processor computer running Windows NT 3.51 and Service Pack 1 this
	error message is logged in the system log (as shown in the Event Viewer):
	
	  Error 2023: The server is unable to find a raw work item <X> times in
	  the last 60 seconds.
	
	CAUSE
	=====
	
	On multi-processor computers, Windows NT evenly distributes RawModeWorkItems
	over the processors. With Service Pack 1 installed, if a computer is getting
	most of its server requests on one processor, it can run out of RawModeWorkItems
	on that processor's queue.
	
	RESOLUTION
	==========
	
	Microsoft has modified the file, SRV.SYS, so that when a processor runs out of
	RawModeWorkItems, it borrows them from another processor's queue.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A fix
	to this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: prodnt 3.51 affinity
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTSsearch kbWinNTS351search kbWinNTS351sp1 kbWinNTW351SP1
	Version           : :3.51 SP1,4.0
	
	=============================================================================
	
