---
layout: page
title: "Q182128: XCON: Site Connector Address Spaces Do Not Appear in GWART"
permalink: /kb/182/Q182128/
---

## Q182128: XCON: Site Connector Address Spaces Do Not Appear in GWART

	Article: Q182128
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 03-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Address spaces that are added or modified on a site connector that connects two
	replicated sites will not appear in the Gateway Address Routing Table (GWART) or
	Site Addressing Routing list.
	
	CAUSE
	=====
	
	This is by design. Address spaces on a site connector are only used if the sites
	being connected are not replicated. After the sites are replicated, all of the
	address spaces on the site connector (except for Local/Subsite restricted
	spaces) are ignored, and the remote site's replicated GWART is used to define
	the address spaces that the remote site supports.
	
	RESOLUTION
	==========
	
	X.400 Connector address spaces are not limited by directory replication and can
	be implemented in lieu of the site connector. The additional address space can
	then be defined for the X.400 Connector.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : 4.0,5.0,5.5
	
	=============================================================================
	
