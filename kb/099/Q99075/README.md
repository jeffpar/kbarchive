---
layout: page
title: "Q99075: NWLink--Network Numbers, and &quot;Seeing&quot; Netware File"
permalink: kb/099/Q99075/
---

## Q99075: NWLink--Network Numbers, and &quot;Seeing&quot; Netware File

	Article: Q99075
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	SUMMARY
	=======
	
	This article explains how NWLink determines or assigns network numbers, and how
	to tell if NT using SQL Server can "see" a NetWare file server.
	
	NETWORK NUMBERS
	---------------
	
	When NWLink loads, it sends out a routing information protocol (RIP) request for
	a network number to be used for addressing at the IPX level. NetWare servers
	respond with a RIP packet containing the network number of the local network. If
	there is no RIP response, NWLink uses 0 for the network number and says the IPX
	packet is for the local subnet. This is perfectly OK.
	
	"SEEING" A NETWARE FILE SERVER
	------------------------------
	
	The SQL Server for NT supplies a DLL that talks to SPX (and IPX) Windows sockets.
	When SQL Server is started with this DLL as the interface to the transport, it
	sends out a service advertising protocol (SAP) packet by means of the IPX
	interface. The SAP gets picked up by a NetWare file server and put in the
	bindery.
	
	The MS-DOS/Windows client SPX netlib can then use standard NetWare API calls (for
	example, ScanBinderyObject()) to get a list of servers, which includes the SQL
	Server for NT. An SPX session can then be made from the MS-DOS/Windows client to
	the SQL Server on NT, which is listening on an SPX socket.
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
