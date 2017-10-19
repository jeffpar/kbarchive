---
layout: page
title: "Q193599: Windows NT Load Balancing Service Cluster Fails to Converge"
permalink: /kb/193/Q193599/
---

## Q193599: Windows NT Load Balancing Service Cluster Fails to Converge

	Article: Q193599
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Load Balancing Service 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you start the cluster hosts, the hosts start converging but never report
	that convergence has completed.
	
	CAUSE
	=====
	
	Either a different number of port rules or incompatible port rules on different
	cluster hosts were entered. This will inhibit convergence.
	
	-or-
	
	Two or more Windows NT Load Balancing Service (WLBS) hosts have the same priority
	number.
	
	RESOLUTION
	==========
	
	To work around this problem, run the WLBS Setup dialog box on each cluster host
	and verify that all hosts have identical port rules and that no two hosts have
	the same priority number.
	
	Additional query words: Convoy WLBS
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTLBSSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
