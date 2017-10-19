---
layout: page
title: "Q254101: Network Adapter Teaming and Server Clustering"
permalink: /kb/254/Q254101/
---

## Q254101: Network Adapter Teaming and Server Clustering

	Article: Q254101
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware w2000mscs kbClustering
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are network adapters and accompanying drivers available from some hardware
	manufacturers to provide fault tolerance. This technology allows you to group
	network adapter ports for a connection to a single physical segment. If
	connectivity through one port is not working, another port is activated
	automatically. This operation is transparent to the operating system and other
	devices on the network.
	
	Support for the fault-tolerant technology (the hardware and the drivers) is
	provided by the hardware manufacturer.
	
	MORE INFORMATION
	================
	
	The use of teaming on the private interconnect of a server cluster is not
	supported because of delays that could possibly occur in the transmission and
	receipt of heartbeat packets between the nodes. For best results when you want
	redundancy for the private interconnect, disable teaming and use the available
	ports to form a second private interconnect. This achieves the same end result
	and provides dual, robust communication paths for the nodes to communicate
	over.
	
	Using teaming on the public or client networks is acceptable. However, if
	problems or issues seem to be related to teaming, Microsoft Product Support
	Services will require that teaming be disabled. If this resolves the problem or
	issue, you must seek assistance from the hardware manufacturer.
	
	
	For more information, see the online documentation about hardware compatibility
	tests on the Microsoft Web site.
	
	Additional query words: mscs nic teaming compaq server cluster netflex
	
	======================================================================
	Keywords          : kbhw kbHardware w2000mscs kbClustering 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbwin2000Search kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
