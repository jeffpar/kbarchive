---
layout: page
title: "Q150547: Clients Cannot Connect to Server with SysKonnect FDDI Adapter"
permalink: kb/150/Q150547/
---

## Q150547: Clients Cannot Connect to Server with SysKonnect FDDI Adapter

	Article: Q150547
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbhw kbnetwork kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Network clients using the NetBEUI protocol cannot connect to a server with a
	SysKonnect FDDI network adapter. The client computer may display the following
	error message:
	
	  Error 53: The network path was not found
	
	while the Server receives the following event when the SysKonnect driver is
	logged:
	
	  Event 5007 Timed out during an operation
	
	If the event is logged while the server is running, other protocols (such as
	TCP/IP and NWLink) resume operation. If you perform a network trace, you notice
	that the server no longer responds to NetBIOS name resolution broadcasts.
	
	CAUSE
	=====
	
	When the SysKonnect driver cannot access the FDDI ring for 15 seconds, the Event
	5007 is logged and the card is reset. This is normally a hardware problem with
	interrupt or DMA settings or an unplugged cable. When the ring is operational
	again, a client using the NetBEUI protocol cannot reconnect as the driver does
	not re-register the NetBIOS multicast address.
	
	RESOLUTION
	==========
	
	Please contact SysKonnect for an updated driver that may correct this problem.
	
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbhw kbnetwork kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	
