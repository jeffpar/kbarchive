---
layout: page
title: "Q182519: XADM: cc:Mail Addresses Not Created for 4.0 Site Recipients"
permalink: kb/182/Q182519/
---

## Q182519: XADM: cc:Mail Addresses Not Created for 4.0 Site Recipients

	Article: Q182519
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to get an Exchange Server 4.0 site to use an Exchange Server 5.0
	site's Exchange Connector for Lotus cc:Mail, the cc:Mail addresses are not
	automatically created for Exchange Server 4.0 site recipients.
	
	CAUSE
	=====
	
	The Microsoft Exchange Connector for Lotus cc:Mail does not have an address
	generator for Exchange Server 4.0 computers. Also, the cc:Mail address generator
	that is included in Exchange Server 5.0 is not backward- compatible with
	Exchange Server 4.0 and cannot be copied or placed on an Exchange Server 4.0
	computer.
	
	WORKAROUND
	==========
	
	To enable Exchange Server 4.0 sites to use the cc:Mail address generator, place
	an Exchange Server 5.0 computer with a cc:Mail connector in the Exchange Server
	4.0 site. Note that the Exchange Server 4.0 site must have Version 4.0 Service
	Pack 2 loaded.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
