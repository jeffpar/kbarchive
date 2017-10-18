---
layout: page
title: "Q152544: XADM: GWART Shows Site Has Routing to Itself"
permalink: kb/152/Q152544/
---

## Q152544: XADM: GWART Shows Site Has Routing to Itself

	Article: Q152544
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 17-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create:
	
	- A Microsoft Exchange Site, site1, with a country/region code of "A".
	
	- A Microsoft Exchange Site, site2, with a country/region code of "B".
	
	- An X.400 connector from site1 to site2.
	
	- An X.400 connector from site2 to site1
	
	and then you change the country/region code of site1 to "B" on the Site
	Addressing property page in the Microsoft Exchange Administrator program, the
	Gateway Address Routing Table (GWART) on site1 will have X.400 routing to
	itself. This will be over the X.400 connector from site1 to site2 and then the
	X.400 connector from site2 to site1. It will have a cost of 2.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of Microsoft
	Exchange. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
