---
layout: page
title: "Q136458: NetBIOS Datagrams Sent to Group Names Are Not Broadcast"
permalink: /kb/136/Q136458/
---

## Q136458: NetBIOS Datagrams Sent to Group Names Are Not Broadcast

	Article: Q136458
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	NetBIOS applications that send datagrams to group names may fail to work
	correctly with the TCPIP-32 version 3.11b release.
	
	CAUSE
	=====
	
	When a NetBIOS application sends a datagram to a group name over the TCP/IP
	protocol stack, it is normally sent to a broadcast address. In version 3.11b of
	the TCPIP-32 stack, datagrams sent to group names are sent to a specific host
	address rather than a broadcast address.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in TCP/IP-32 for Windows for A
	supported fix is now available, but is not fully regression-tested and should be
	applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the service pack release containing this fix. Contact Microsoft Product
	Support Services for more information. Microsoft does not recommend implementing
	this fix at this time. Contact Microsoft Product Support Services for more
	information on the availability of this fix.
	
	
	Additional query words: prodtcp32 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
