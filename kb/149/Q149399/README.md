---
layout: page
title: "Q149399: Multiple IP Addresses on a Single NIC"
permalink: /kb/149/Q149399/
---

## Q149399: Multiple IP Addresses on a Single NIC

	Article: Q149399
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A computer with two IP addresses assigned to its interface is unable to connect
	to computers across a router.
	
	CAUSE
	=====
	
	A single network interface card (NIC) configured with multiple IP addresses
	defined on different logical subnets will always use the first IP address
	defined in the TCP/IP configuration as its source address, regardless of the
	destination.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Windows NT Workstation and Server version
	4.0.
	
	The problem does not occur if the computer has one NIC per IP address (two NICs).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in Windows NT Workstation or Server version
	4.0.
	
	MORE INFORMATION
	================
	
	Consider the following scenario:
	
	A computer with a single NIC and two IP addresses--the first is 130.0.3.2, the
	second 130.1.7.200--is on the same segment where two routers are present, router
	1 with IP address 130.0.7.1 and router 2 with IP address 130.1.7.100.
	
	The route table is as follows:
	
	Network Address  Netmask         Gateway Address  Interface   Metric
	0.0.0.0          0.0.0.0         130.1.7.1        130.0.3.2   1
	0.0.0.0          0.0.0.0         130.0.7.1        130.0.3.2   1
	127.0.0.0        255.0.0.0       127.0.0.1        127.0.0.1   1
	130.0.0.0        255.255.0.0     130.0.3.2        130.0.3.2   1
	130.0.3.2        255.255.255.255 127.0.0.1        127.0.0.1   1
	130.0.255.255    255.255.255.255 130.0.3.2        130.0.3.2   1
	130.1.0.0        255.255.0.0     130.1.7.200      130.0.3.2   1
	130.1.7.200      255.255.255.255 127.0.0.1        127.0.0.1   1
	140.1.0.0        255.255.0.0     130.1.7.100      130.0.3.2   1
	(Previous entry is an added static route)
	224.0.0.0        224.0.0.0       130.0.3.2         130.0.3.2   1
	255.255.255.255  255.255.255.255 130.0.3.2         130.0.3.2   1
	
	Note that the interface is always 130.0.3.2. Network 140.1.0.0 is on the other
	side of router 2 (130.1.7.100) and a static route was added for it. With this
	configuration, connectivity to any host on the local subnet with an IP address
	of 130.0.x.x or 130.1.x.x is possible. Connectivity to any host on the other
	side of router 1 (130.0.3.2) is also possible. Connectivity to anything beyond
	router 2 is not possible. A network trace shows that the source IP address is
	130.0.3.2 when trying to reach a destination over router 2. Router 2 only knows
	about network 130.1.0.0 and doesn't have a route defined for network 130.0.0.0.
	
	Note:
	
	- A static route can be added in router 2 to fix this problem (i.e. route add
	  130.0.7.1 130.1.7.100).
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
