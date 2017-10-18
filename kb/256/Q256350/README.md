---
layout: page
title: "Q256350: XCON: MTA Event 246 w. PR_CONTENT_CORRELATOR More Than 2 Bytes"
permalink: kb/256/Q256350/
---

## Q256350: XCON: MTA Event 246 w. PR_CONTENT_CORRELATOR More Than 2 Bytes

	Article: Q256350
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you send messages produced by MAPI applications that use the
	PR_CONTENT_CORRELATOR MAPI property, the messages may not be delivered to other
	Exchange Server computers, and no non-delivery report (NDR) is returned. The
	following error message may be logged in the application event log:
	
	  Event ID: 246
	  Source: MSExchangeMTA
	  Type: Error
	  Category: Internal Processing
	
	  Description:
	  An internal MTA error occurred. An attempt has been made to read beyond the
	  end of an object. Attribute ID: 36. Object at fault: 06000033. Offset
	  reached: 114. Contact Microsoft Technical Support. [MTA DISP:FANOUT 9 223]
	  (14)
	
	CAUSE
	=====
	
	This issue can occur if the Exchange Server message transfer agent (MTA)
	incorrectly encodes the message in the MTA database when the Exchange Server
	information store submits the message to the MTA for delivery. When the message
	is read out of the MTA database for transmission, a read failure is produced
	during the attempt to decode the message data.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
