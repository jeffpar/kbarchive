---
layout: page
title: "Q150828: XFOR: Dirsync Role/Number of Servers can Change DXA Addresses"
permalink: kb/150/Q150828/
---

## Q150828: XFOR: Dirsync Role/Number of Servers can Change DXA Addresses

	Article: Q150828
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Directory Synchronization agent (DXA) can have different
	email addresses depending on how many instances of the service exist in a single
	site and the role it plays in directory synchronization. This is allowable by
	the Microsoft Mail directory synchronization protocol.
	
	MORE INFORMATION
	================
	
	When you install the first MSMail Connector component in a site, the DXA is
	assigned the MSMail alias $SYSTEM. For example:
	
	  First server:  <organization>/<site>/$SYSTEM
	
	When you add additional MSMail Connectors to the site, $SYSTEM is replaced by
	SYSTEMx, where x starts with 1 and is incremented by 1 with each additional
	MSMail connector installed. For example:
	
	  Second Server: <organization>/<site>/SYSTEM1
	  Third Server:  <organization>/<site>/SYSTEM2
	
	However, if Microsoft Exchange Server is a directory synchronization requestor,
	the SYSTEMx address will be used, even if this is the first Microsoft Exchange
	Server in the site. This is because we don't know if there will be another
	Microsoft Exchange Server in the site that will act as a directory
	synchronization server, in which case the address must be $SYSTEM.
	
	If a Microsoft Exchange Server that acts as a directory synchronization server is
	later changed to be a directory synchronization requestor, the DXA address will
	be modified to SYSTEM1. If a SYSTEM1 address already exists in the same site,
	SYSTEM2 will be used and so forth.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
