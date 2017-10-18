---
layout: page
title: "Q167367: XFOR: Routing Exchange DXA Updates Over SNADS Backbone"
permalink: kb/167/Q167367/
---

## Q167367: XFOR: Routing Exchange DXA Updates Over SNADS Backbone

	Article: Q167367
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.2; winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Routing Exchange Server DXA updates over a SNADS backbone requires custom
	configuration of LinkAge Message Exchange.
	
	A new section, [Q-DXAMEX.IN] has been added to the LinkAge Configuration file
	(Linkage.ini) which allows the Exchange Server DXA to use the SNADS address type
	for routing in order to accommodate SNADS Backbone Routing. This is required if
	the LDE configuration includes any DXA that uses LinkAge Level 1 Message
	Exchange Format (MIF). LDE configurations that include only Level 3 MIF agents
	do not require the use of the SNADS address type for routing.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbLinkAgeSearch kbLinkAge320
	Version           : WINDOWS:3.2; winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
