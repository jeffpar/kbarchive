---
layout: page
title: "Q182758: XCON: X.25 Cards Supported Through Direct Hardware Interface"
permalink: kb/182/Q182758/
---

## Q182758: XCON: X.25 Cards Supported Through Direct Hardware Interface

	Article: Q182758
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft Exchange Server supports Eicon X.25 cards by communicating directly
	with the hardware, rather than communicating with the hardware through a device
	driver. This makes it difficult to add support for additional X.25 cards,
	because Microsoft Exchange Server must be modified to support additional cards.
	
	Most other devices are supported by communicating with the hardware through a
	device driver, which makes it relatively easy to add support for additional
	devices. Support for additional devices is provided by additional device
	drivers, which can easily be installed on an existing Microsoft Exchange Server
	computer.
	
	MORE INFORMATION
	================
	
	Microsoft recognizes the need for Exchange Server to support additional X.25
	cards. We have modified the Microsoft Exchange Server 5.5 message transfer agent
	(MTA) so that X.25 cards are supported by communicating with the hardware
	through the Windows sockets API (Winsock). Support for additional X.25 cards can
	now be provided by Winsock-compatible device drivers supplied by the hardware
	manufacturer. This feature is included in the latest Microsoft Exchange Server
	version 5.5 U.S. Service Pack. For information about obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	The Exchange Server documentation states that the Eicon cards are the only X.25
	cards supported by Exchange Server. This is not true; in some cases, X.25 cards
	manufactured by Cirel and SAT are also supported. For additional information
	about X.25 support for Cirel and SAT cards in Exchange Server, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q169667 XCON: X.25 Support for Cirel Cards
	
	  Q169668 XCON: X.25 Support for SAT Cards
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
