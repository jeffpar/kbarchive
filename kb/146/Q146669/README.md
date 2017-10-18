---
layout: page
title: "Q146669: XFOR: SMTP Log Reports Rescheduled Delivery When Retries=0"
permalink: kb/146/Q146669/
---

## Q146669: XFOR: SMTP Log Reports Rescheduled Delivery When Retries=0

	Article: Q146669
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an outgoing SMTP message delivery fails due to an SMTP error, the SMTP log
	file for the Microsoft Exchange Internet Mail Connector (IMC)reports that a
	resend will be scheduled. This will be reported in the SMTP log even if resends
	are disabled on the IMC.
	
	MORE INFORMATION
	================
	
	In the properties pages for the IMC it is possible to set the Connector Message
	Queues Retry Interval for message retries. The default values are .25 (15
	minutes), .5 (30 minutes), 1 (one hour), and 4 (four hours). If this value is
	set to 0 (zero) no retries will be attempted.
	
	If an SMTP message cannot be delivered and SMTP Protocol logging is enabled a
	message like the following will be written to the SMTP log:
	
	  <SMTP error message> Message subject: <subject of message>.
	  Rescheduling delivery for later.
	
	This entry is made even though retries are disabled and no additional delivery
	attempt will be made.
	
	SMTP transactions are logged in the file L000000x.LOG in the Exchange
	Server\IMCDATA\LOGS subdirectory. Logging is enabled on the Diagnostic Logging
	page of the IMC properties pages.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
