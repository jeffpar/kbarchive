---
layout: page
title: "Q161933: XFOR: MSMI Message Sent Time Stamp Is Incorrect"
permalink: /kb/161/Q161933/
---

## Q161933: XFOR: MSMI Message Sent Time Stamp Is Incorrect

	Article: Q161933
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Messages that come from a Microsoft Mail postoffice (PO) that must go through
	Microsoft Exchange Server and over an X.400 connector to another Microsoft Mail
	PO have the Sent time changed to the current time.
	
	CAUSE
	=====
	
	The Microsoft Mail Connector changes the time stamp during the conversion from
	Microsoft Mail format to the Microsoft Exchange Server format.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The most likely way you will see this problem is if the message coming from the
	Microsoft Mail PO is not delivered in a timely manner. For example, if the PCMTA
	or Microsoft Mail Connector is down for a period of time, the message from the
	Microsoft Mail PO waits for these services to be restarted. When the message
	does get processed by the Microsoft Mail Connector, the Sent time is changed to
	the current time.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
