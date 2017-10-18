---
layout: page
title: "Q129005: Sockets Applications Do Not Switch to Second NIC if One"
permalink: kb/129/Q129005/
---

## Q129005: Sockets Applications Do Not Switch to Second NIC if One

	Article: Q129005
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a computer running Windows NT has multiple network adapters, each connected
	to the same physical subnet through additional hardware (such as a switch),
	sockets applications use only one of the adapters to communicate over the
	network. In addition, if the intermediate hardware fails, sockets applications
	do not detect the failure and do not attempt to recover by using another
	adapter/switch combination.
	
	MORE INFORMATION
	================
	
	You can use network hardware in parallel configurations to provide fault
	tolerance. For example, you can put two network adapters in the same computer,
	connected to the same physical subnet, so that if one adapter fails the other
	can take over. If you need intermediate hardware, such as a switch, to connect
	each adapter to the network, you can attach one switch to each adapter, rather
	than connecting all the adapters to the same switch.
	
	This strategy assumes that the applications communicating over the network can
	detect the failure of one set of network hardware and automatically start using
	the other one. Unfortunately, many sockets applications do not detect hardware
	failure, and will not automatically use the other set of hardware. For example,
	you run the LPR print monitor on a Windows NT print server with two network
	adapters, each with its own switch. When LPR initializes, it makes sockets calls
	that complete correctly as long as one of the network adapters is functioning,
	even if the switch connecting that adapter to the network has failed. LPR has no
	way to determine if the failure is with the switch, rather than with other
	hardware on the network. Therefore, LPR has no reason to try the other
	adapter/switch combination. While LPR is running it can tell when it loses
	connections with LPD servers, but it does not know why. If also doesn't know to
	try using another adapter to work around the problem.
	
	NOTE: This problem applies to hardware connecting the computer to the network,
	not to other devices on the network, such as routers. For example, if there are
	multiple routes from the Windows NT LPR client to an LPD server, and one route
	fails, TCP/IP will automatically use a different route, and LPR will continue
	sending its print jobs.
	
	Additional query words: 3.10 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
