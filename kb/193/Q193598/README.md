---
layout: page
title: "Q193598: IP Conflict After Installing Windows NT Load Balancing Service"
permalink: /kb/193/Q193598/
---

## Q193598: IP Conflict After Installing Windows NT Load Balancing Service

	Article: Q193598
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Load Balancing Service 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing Windows NT Load Balancing Service (WLBS) and restarting a
	cluster host, the following Windows NT system error is received:
	
	  The system has detected an IP address conflict with another system on the
	  network.
	
	CAUSE
	=====
	
	Probable causes are as follows:
	
	1. Two different cluster primary IP addresses were entered in the TCP/IP
	  configuration in the Windows NT Network dialog box on different hosts.
	
	2. Two different cluster network addresses were entered in the WLBS Setup dialog
	  box on different hosts.
	
	3. One or more of the cluster network interface cards (NICs) could not change
	  its network address. This problem only occurs when using a unicast network
	  address (instead of a multicast address).
	
	RESOLUTION
	==========
	
	To resolve these issues, use the corresponding resolutions below:
	
	1. Be sure to use one primary cluster IP address for all cluster hosts.
	
	2. Be sure to use one cluster network address for all cluster hosts.
	
	3. You should either switch to a different type of NIC or use WLBS's multicast
	  support.
	
	Additional query words: Convoy WLBS
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTLBSSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
