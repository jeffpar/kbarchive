---
layout: page
title: "Q152919: XFOR: SMTP CRs Routed to Home Site Before Going Out IMC"
permalink: /kb/152/Q152919/
---

## Q152919: XFOR: SMTP CRs Routed to Home Site Before Going Out IMC

	Article: Q152919
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Mail addressed to Microsoft Exchange SMTP custom recipients will not be sent by
	an alternate Microsoft Exchange Internet Mail Connector (IMC) if the Microsoft
	Exchange Server at their home Site is down.
	
	CAUSE
	=====
	
	All Microsoft Exchange SMTP custom recipients are assigned a home Site, and all
	mail sent to them must first travel to the home Site before it is sent out over
	the IMC. In fact, message tracking will show the mail addressed as
	'exchangeuser@exchangeserver' while it is en route to the home Site. The home
	Site is responsible for resolving the Microsoft Exchange mail type to an SMTP
	mail type.
	
	If the Microsoft Exchange Server at the home Site is down, then the mail will not
	go out to the external user through another IMC because it hasn't been resolved
	to an SMTP mail type (it is still addressed as 'exchangeuser@exchangeserver'),
	even if another IMC is available.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
