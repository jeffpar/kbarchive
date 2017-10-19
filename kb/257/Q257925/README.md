---
layout: page
title: "Q257925: Cluster Server Does Not Detect Network Problems in Windows NT"
permalink: /kb/257/Q257925/
---

## Q257925: Cluster Server Does Not Detect Network Problems in Windows NT

	Article: Q257925
	Product(s): Microsoft Windows NT
	Version(s): 4.0; winnt:1.0
	Operating System(s): 
	Keyword(s): kbhw kbnetwork kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Cluster Server in Windows NT Server 4.0, Enterprise Edition, does not detect
	network problems. Disconnecting the network cable from the active node does not
	cause an IP address or group to failover. Also, simulated network adapter
	failures may not cause an IP address to stop working, or cause Cluster Server to
	declare that an adapter is down.
	
	CAUSE
	=====
	
	The Cluster service verifies that the IP address is online by checking the
	network stack to make sure that it is functioning. A network problem does not
	invalidate the IP addresses that are registered on that adapter. This causes the
	IP address to stay online even though the route is down.
	
	This functionality is included in Microsoft Windows 2000 Advanced Server.
	
	STATUS
	======
	
	This behavior is by design for Windows NT Server 4.0, Enterprise Edition.
	
	MORE INFORMATION
	================
	
	For additional information about related topics, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q242600 Network Failure Detection and Recovery in a Server Cluster
	
	  Q254101 Network Adapter Teaming and Server Clustering
	
	  Q239924 How to Disable Media Sense for TCP/IP in Windows 2000
	
	  Q254651 Cluster Network Role Changes Automatically
	
	  Q176320 Impact of Network Adapter Failure in a Cluster
	
	Additional query words: MSCS
	
	======================================================================
	Keywords          : kbhw kbnetwork kbHardware 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : :4.0; winnt:1.0
	Issue type        : kbprb
	
	=============================================================================
	
