---
layout: page
title: "Q198888: Telnet and Browsing to Systems Outside the WLBS Cluster Fail"
permalink: kb/198/Q198888/
---

## Q198888: Telnet and Browsing to Systems Outside the WLBS Cluster Fail

	Article: Q198888
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Load Balancing Service 1.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you telnet to or browse a system outside the Windows NT Load Balancing
	Service (WLBS) cluster from a WLBS cluster host, you do not receive a response,
	but you can ping the outside system.
	
	CAUSE
	=====
	
	The TCP/IP configuration is incorrect on the WLBS cluster host
	
	RESOLUTION
	==========
	
	If you are using a single network interface card (NIC), the dedicated IP address
	must be entered before the cluster IP address or addresses in the TCP/IP
	configuration within the Windows NT Network dialog box. Otherwise, the cluster
	IP address may be selected as the source address, and the outside system will
	respond to the cluster IP address instead of to the dedicated IP address. In
	this case, responses will be directed only to the default host.
	
	NOTE: You will not observe this problem on the default host.
	
	Check the TCP/IP configuration to make sure that the dedicated IP address is
	first in the list.
	
	You can also use multiple NICs to avoid this problem.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTLBS100 kbWinNTLBSSearch
	Version           : winnt:1.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
