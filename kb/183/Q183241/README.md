---
layout: page
title: "Q183241: Host Account Cache Database Shows High CPU Utilization"
permalink: /kb/183/Q183241/
---

## Q183241: Host Account Cache Database Shows High CPU Utilization

	Article: Q183241
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Host Account Cache database service (Snaudb.exe) may get into a state where
	it shows a very high CPU utilization. Tools such as Windows NT Performance
	Monitor or Task Manager can be used to view CPU utilization for active
	processes.
	
	CAUSE
	=====
	
	The Host Account Cache database service can get into a loop when one of its
	timeout routines tries to access a memory block that had been released with a
	free() call. CPU utilization for this service jumps while it is stuck in this
	loop.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 4.0.
	
	This problem was corrected in the latest SNA Server version 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
