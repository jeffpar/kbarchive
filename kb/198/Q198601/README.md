---
layout: page
title: "Q198601: WLBS Convergence Event Log Appears As Comma-Delimited or Binary"
permalink: /kb/198/Q198601/
---

## Q198601: WLBS Convergence Event Log Appears As Comma-Delimited or Binary

{% raw %}

	Article: Q198601
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Load Balancing Service 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In larger clusters (16 or more computers), the list of hosts in convergence
	event log messages changes from a comma-delimited list of host IDs to a binary
	representation of cluster membership.
	
	MORE INFORMATION
	================
	
	The binary representation appears as in the following example:
	
	  WLBS : host 1 converged with host(s) 11111110111111111111100000000000 as part
	  of the cluster.
	
	In smaller clusters (fewer than 16 computers), the list of hosts appears in
	comma-delimited format, as in this example:
	
	  WLBS : host 1 converged as DEFAULT host with host(s)
	  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15 as part of the cluster.
	
	
	Please note that Windows NT Load Balancing Service (WLBS) Cluster Software does
	not report converged events that list more than 16 hosts.
	
	Additional query words: Convoy
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbWinNTS400 kbWinNTLBSSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
