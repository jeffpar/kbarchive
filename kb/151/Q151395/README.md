---
layout: page
title: "Q151395: XCON: MTA Terminates After Receiving Mail from Zoomit Gateway"
permalink: /kb/151/Q151395/
---

## Q151395: XCON: MTA Terminates After Receiving Mail from Zoomit Gateway

	Article: Q151395
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 20-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange message transfer agent (MTA) may terminate unexpectedly
	after receiving a message over an X.400 connector from a Zoomit gateway. The
	following sequence of events may be logged in the application event log:
	
	  Event ID:200
	  Source:MSExchangeMTA
	  Type:Warning
	  Category:X.400 Service
	  Description:
	  An error occurred while ASN.1 was decoding an object (dump reference 674).
	  [child length exceeds given maximum 85 2921 1msev 674 MTA XFER-IN 21 98] (14)
	
	  Event ID:2050
	  Source:MSExchangeMTA
	  Type:Error
	  Category:Internal Processing
	  Description:
	  A fatal internal MTA error occurred. Contact Microsoft Product Support
	  Services.
	  An illegal PUT to element 1C87FF00 occurred at offset 31081. [BASE XFER- IN 21
	  9] (16)
	
	  Event ID:9405
	  Source:MSExchangeMTA
	  Type:Error
	  Category:Field Engineering
	  Description:
	  An unexpected error has occurred which may cause the MTA to terminate.
	  Error: Error writing AAT: obj 87. [BASE XFER-IN 21] (16)
	
	  Event ID:9405
	  Source:MSExchangeMTA
	  Type:Error
	  Category:Field Engineering
	  Description:
	  An unexpected error has occurred which may cause the MTA to terminate.
	  Error: Error writing AAT: obj 87. [BASE XFER-IN 21] (16)
	
	CAUSE
	=====
	
	The Zoomit gateway may have sent a message with an improperly encoded content
	length. Improperly encoded messages may cause the MTA to terminate
	unexpectedly.
	
	RESOLUTION
	----------
	
	To resolve this problem, obtain the latest service pack for Microsoft Exchange
	Server version 4.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q158693 XGEN: How to Obtain Exchange Server 4.0 Service Pack 4
	
	This problem can also be resolved by obtaining Reliable Transport Service (RTS)
	version 2.4.0 from Microsoft. If you currently have a Zoomit support contract,
	you can request a copy of RTS version 2.4.0 by sending email to
	RTS@Microsoft.com.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was first corrected in Microsoft Exchange Server 4.0
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	Zoomit gateways are manufactured by Zoomit Corporation, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
