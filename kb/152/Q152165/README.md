---
layout: page
title: "Q152165: XCON: IMS Queues Back Up to Hosts with Multiple MX Records"
permalink: /kb/152/Q152165/
---

## Q152165: XCON: IMS Queues Back Up to Hosts with Multiple MX Records

	Article: Q152165
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are running Microsoft Exchange Server 5.0 with the Internet Mail Service
	(IMS) installed, your server may experience slow delivery to hosts that have
	multiple MX records of equal weight. Internet hosts supporting multiple IP
	addresses are often the same hosts receiving high volumes of mail.
	
	CAUSE
	=====
	
	When host addresses are resolved by Domain Name Service (DNS), a list of records
	is returned if the site has multiple MX records defined. The IMS attempts to
	randomize its choice of the available MX records. This is done to spread the
	load evenly over the sites' MX hosts. The randomization code is behaves poorly
	for sites with more than a few MX records of equal weight.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange 5.0
	Server U.S. Service Pack. For information on obtaining the service pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: america online aol.com
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	
	=============================================================================
	
