---
layout: page
title: "Q199768: XFOR: USELSX Error w/Exchange Server 5.5 Notes Config. Utility"
permalink: /kb/199/Q199768/
---

## Q199768: XFOR: USELSX Error w/Exchange Server 5.5 Notes Config. Utility

	Article: Q199768
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 15-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Exchange Server 5.5 and use the Exchange Connectivity
	product according to the documentation, you may run into errors when you attempt
	to configure the Exchange Notes Connector.
	
	After you load the Notes Configuration Utility, you need to create a New
	Configuration Document, according to the documentation. After you run the Notes
	Configuration Utility, you see the following error messages, multiple times, on
	the screen.
	
	  Unknown Lotus Script Error
	  Error loading Use or Uselsx module
	  Invalid Abstract Data Type
	
	WORKAROUND
	==========
	
	If the client version is incorrect, you have two options to work around this
	problem.
	
	The first option allows the configuration document to open, however, you still
	receive a number of error messages. You need to enable debugging. To do so, from
	the Notes Configuration Utility, click the File menu, click Tools, and then
	click Debug LotusScript.
	
	The second option is to configure Notes manually. This should be done by
	customers very familiar with the Notes administration utility.
	
	MORE INFORMATION
	================
	
	Ensure that you are running the proper version of the Notes Client when you run
	the Notes Configuration Utility. This utility requires Notes Client version
	4.52. The third-party products discussed in this article are manufactured by
	vendors independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
