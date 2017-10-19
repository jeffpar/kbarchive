---
layout: page
title: "Q148288: XADM: Microsoft Exchange TP4 Transport Stack"
permalink: /kb/148/Q148288/
---

## Q148288: XADM: Microsoft Exchange TP4 Transport Stack

	Article: Q148288
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbnetwork exc4 exc5 exc55
	Last Modified: 16-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	TP4 is an OSI (Open Systems Interconnect) connection-oriented protocol used with
	a Connectionless Network Protocol (CLNP). TP4 includes the following features:
	
	- Uses CLNP network service provider based on ISO 8348
	
	- Provides guaranteed reliable delivery of packets using sequence numbers
	
	- Ensures data integrity by using checksums
	
	- Re-transmits corrupted or lost packets
	
	- Similiar to TCP
	
	This protocol is available for Microsoft Windows NT Server on the Microsoft
	Exchange Server version 4.0 compact disc in the \TP4SETUP directory.
	
	MORE INFORMATION
	================
	
	To install the TP4 protocol, copy all the platform-specific files under the
	TP4SETUP directory to your hard drive. In Control Panel Network, click Add
	Software. For Network Software, select "<Other> Requires disk from
	manufacturer" (without quotes) and specify the location of the T4 protocol
	files.
	
	One way to troubleshoot a TP4 connectivity problem is to use a network analyzer,
	such as a Network General Sniffer. Microsoft Network Monitor currently does not
	include a TP4 parser. However, a TP4 capture is displayed as LLC frames, which
	can be used to diagnose any problem. No TP4 Ping utilities are included on the
	Exchange Server 4.0 compact disc.
	
	
	Additional query words: cd faq
	
	======================================================================
	Keywords          : kbnetwork exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
