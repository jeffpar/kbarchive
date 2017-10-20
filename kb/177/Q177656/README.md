---
layout: page
title: "Q177656: Windows NT IP Router Loses Learned Routes"
permalink: /kb/177/Q177656/
---

## Q177656: Windows NT IP Router Loses Learned Routes

{% raw %}

	Article: Q177656
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Your Windows NT server that is running either Routing Information Protocol (RIP)
	for IP or Routing and Remote Access Service (RRAS) may lose its routing table
	after a few minutes. There are no event logs or other messages to indicate a
	problem.
	
	CAUSE
	=====
	
	The other routers with which your Windows NT router is communicating are sending
	RIP v1 announcements to the "all zeros" subnet of the network instead of the
	"all ones" subnet.
	
	RESOLUTION
	==========
	
	To resolve this issue, you will need to configure your other routers to use an
	"all ones" broadcast address. Please consult the documentation that came with
	your routers for information on how to do this.
	
	
	MORE INFORMATION
	================
	
	Traditionally the broadcast address to which a RIP v1 router sends its routing
	table is the .255, or "all ones" subnet. With a network number of 191.23.107.0
	the broadcast address would be 191.23.107.255, assuming normal subnetting. Some
	older network operating systems use the .0, or "all zeros," subnet for their
	broadcasts and those systems broadcast to an address that is identical to the
	network number.
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
