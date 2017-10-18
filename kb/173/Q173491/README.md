---
layout: page
title: "Q173491: XFOR: Message to IMC via Telnet with Year 1900"
permalink: kb/173/Q173491/
---

## Q173491: XFOR: Message to IMC via Telnet with Year 1900

	Article: Q173491
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you receive an inbound Simple Mail Transfer Protocol (SMTP) message with
	the year dated 00 in the message header, it will be displayed as the year 1900.
	
	CAUSE
	=====
	
	The inbound conversion logic for the year 00 in the date header is being mapped
	to the year 1900.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: Internet Mail Service IMS Connector
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Solution Type     : kbfix
	
	=============================================================================
	
