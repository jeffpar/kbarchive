---
layout: page
title: "Q195630: Unable to Fail-Back the Disk Resource After a Fail-Over"
permalink: /kb/195/Q195630/
---

## Q195630: Unable to Fail-Back the Disk Resource After a Fail-Over

{% raw %}

	Article: Q195630
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a fail-over, you may be unable to fail-back the disk resource. The disk
	resource continues cycling between online pending and failed. The event log
	returns errors regarding the inability to read the disk signature on the quorum,
	with Event ID: 2052.
	
	CAUSE
	=====
	
	Some Digital Equipment Corp. cluster solutions with the StorageWorks RAID Array
	310 may ship with a version of the Hszdisk.sys driver prior to version 4.0. For
	best results, use the Hszdisk.sys driver version 4.0 or later, or as recommended
	by the manufacturer.
	
	RESOLUTION
	==========
	
	To resolve this problem, get an updated driver from Digital Equipment Corp.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: DEC, failover, Clustering, RA310, hszdisk, driver, MSCS
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
