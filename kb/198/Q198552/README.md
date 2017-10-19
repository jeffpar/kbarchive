---
layout: page
title: "Q198552: Windows NT Load Balancing Service Cluster Is Not Load Balancing"
permalink: /kb/198/Q198552/
---

## Q198552: Windows NT Load Balancing Service Cluster Is Not Load Balancing

	Article: Q198552
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
	
	SYMPTOMS
	========
	
	Windows NT Load Balancing Service (WLBS) is not load balancing an application or
	applications, and the default host handles all network traffic.
	
	CAUSE
	=====
	
	This problem occurs because a port rule is missing. By default, WLBS directs all
	incoming network traffic for the cluster IP address to the default host. This
	ensures that applications you do not want load balanced will behave properly.
	
	RESOLUTION
	==========
	
	To load balance an application across the cluster, you should create a port rule
	on every cluster host for the TCP/IP port or ports serviced by the application.
	
	Additional query words: Convoy
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbWinNTS400 kbWinNTLBSSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
