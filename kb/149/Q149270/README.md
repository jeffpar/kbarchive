---
layout: page
title: "Q149270: How Routers Handle IPX Type 20 NetBIOS Packets"
permalink: kb/149/Q149270/
---

## Q149270: How Routers Handle IPX Type 20 NetBIOS Packets

	Article: Q149270
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NetBIOS provides session-layer services like packet assembly-disassembly and
	named addressing for Microsoft's NWLink protocol. NetBIOS, like SPX, also
	provides guaranteed packet delivery and packet sequencing on the Transport
	layer. For NetBIOS to operate within an NWLink environment, routers must be able
	to propagate NetBIOS packets across the network. This is done by defining a
	specific IPX packet for NetBIOS. Since IPX is a derivative of XNS's IDP
	protocol, it follows the assigned packet types given by Xerox as shown below:
	
	  Protocol                 Packet type (hex)
	  ------------------------------------------
	  Unknown                            00
	  Routing information                01
	  Echo                               02
	  Error                              03
	  Packet exchange protocol (PEP)     04
	  Sequence packet exchange (SPX)     05
	  Experimental                       10
	  NetWare core protocol              11
	  NetBIOS                            14
	
	Packet type 20 (0x14) identifies a NetBIOS packet and is designated as a
	propagated packet. The Destination Node field in the IPX header is set to
	0xFFFFFFFFFFFF. When this packet is received by a router, the router checks the
	IPX header Packet Type field. If the Packet Type is 20 (0x14), the router
	examines the Transport Control field. If the Transport Control field is more
	than 8, the router will discard the packet. (A type 20 packet is propagated over
	a maximum of 8 networks.) The router then compares the value in the Network
	Number field with the network number of the segment it received the packet from.
	If these match, the router discards the packet to prevent it from being sent
	over the same segment twice. The router then puts the network number of the
	segment it received the packet from in the next available Network Number field
	and increments the Transport Control field before broadcasting the packet to all
	directly connected network segments not represented in the Network Number
	fields.
	
	Additional query words: IPX NWLINK TYPE 20 ROUTER ROUTING ntfaqmax
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWin95search kbWinNT310Search kbWinNTW310Search kbZNotKeyword3
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
