---
layout: page
title: "Q197863: WLBS Cluster Servers Show Multiple Default Hosts"
permalink: /kb/197/Q197863/
---

## Q197863: WLBS Cluster Servers Show Multiple Default Hosts

{% raw %}

	Article: Q197863
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition 
	- Microsoft Windows NT Load Balancing Service 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you start the cluster hosts, the hosts report that convergence has
	completed, but more than one host is a default.
	
	CAUSE
	=====
	
	Probably causes are as follows:
	
	1. The cluster hosts have become subnetted so that all hosts are not reachable
	  on the same network.
	
	2. Different network addresses are being used across the cluster, and the
	  cluster's primary IP address was not entered into the TCP/IP configuration
	  for the Windows NT Load Balancing Service (WLBS) Virtual NIC.
	
	3. Different clusters are running on the same subnet.
	
	RESOLUTION
	==========
	
	To resolve these issues, use the corresponding resolutions below:
	
	1. Be sure that all cluster hosts can communicate with each other.
	
	2. In the case of different network addresses being used, TCP/IP will not detect
	  an address conflict, and multiple clusters will exist. Be sure to use one
	  cluster primary IP address and a corresponding network address on all hosts
	  within the same cluster, and be sure to enter the primary IP address in the
	  TCP/IP configuration for the WLBS Virtual NIC.
	
	3. If you use different primary IP addresses, each with unique corresponding
	  network addresses, on various cluster hosts, you can create multiple clusters
	  on the same subnet. This is a not a problem unless this behavior was not
	  intended.
	
	Additional query words: Convoy
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTS400search kbWinNTS400 kbWinNTLBSSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
