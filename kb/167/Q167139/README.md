---
layout: page
title: "Q167139: XFOR: MSMI Reports Errors 2563 and 2450"
permalink: kb/167/Q167139/
---

## Q167139: XFOR: MSMI Reports Errors 2563 and 2450

	Article: Q167139
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Mail Connector interchange (MSMI) may report the following error
	messages when processing Internet mail using the Russian character set KOI8-R.
	
	  Event     2563
	  Source    MSExchangeMSMI
	  Type      Error
	  Category  Session Error
	  An out of memory condition is detected.
	
	  Event     2450
	  Source    MSExchangeMSMI
	  Type      Error
	  Category  Session Error
	  MS Mail Connector Interchange has failed processing message from
	  Exchange.
	  The message is left in the delivery queue. Use the MS Exchange
	  Administrator
	  to view the details for this message or remove it from the queue. This
	  message is from <sender>.  This error message will be logged again the
	  next time MS  Connector is restarted if the message is not removed from
	  the queue.
	
	These messages will not be delivered and will remain queued to the Microsoft Mail
	Connector.
	
	CAUSE
	=====
	
	The MSMI process cannot deliver messages created with the Russian character set
	KOI8-R.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server 5.0. This
	problem was corrected in the latest Microsoft Exchange Server 5.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: IMS MSMI KOI8-R 2563 2450
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
