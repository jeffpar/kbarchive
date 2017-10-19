---
layout: page
title: "Q319023: XCON: Cannot Forward Messages Received Through an SAP Connector"
permalink: /kb/319/Q319023/
---

## Q319023: XCON: Cannot Forward Messages Received Through an SAP Connector

	Article: Q319023
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5, used with:
	   - Microsoft Outlook 2000 
	   - Microsoft Outlook 2002 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Outlook to forward a message that you received through an
	SAP Connector to a recipient who is not on the local store or if you route such
	a message to another message transfer agent (MTA) you may receive the following
	non-delivery report (NDR):
	
	  From: System Administrator
	  To: <'Testmailbox'>
	  Sent: Thursday, February 28, 2002 5:00 PM
	  Subject: Undeliverable: <Testmail>
	  Your message did not reach some or all of the intended recipients.
	
	  Subject: <Testmail>
	  Sent: 02/28/02 5:00 PM
	
	  The following recipient(s) could not be reached:
	
	  <'Test Recipient'> on 02/28/02 5:00 PM
	  The maximum time for delivering the message expired
	  MSEXCH:MSExchangeMTA:DTKSITE:DTKORG
	
	CAUSE
	=====
	
	This behavior occurs if the expiry date of the message is set to a date later
	than 12/31/2050.
	
	WORKAROUND
	==========
	
	To work around this behavior, configure the SAP Connector to use an expiry date
	that is not later than 12/31/2050.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When the Exchange Server 5.5 message transfer agent (MTA) processes a message
	the Exchange Server 5.5 MTA examines the expiry date in which the year is stored
	as a single byte. Values that are more than 50 are assumed to indicate the
	twentieth century, and that values that are less than 50 indicate the
	twenty-first century. Therefore, the MTA delivers an NDR for every message that
	has an expiry date after the date 01/01/2051.
	
	The behavior does not occur when you use Microsoft Outlook 97, because messages
	that are created by using Outlook 97 do not contain the attribute
	R_LATEST_DELIVERY_TIME, which contains the expiry date. If the MTA receives a
	message in which this attribute is not set, the MTA uses the "expiry delivery
	time", which you can set by using the registry. These default times include:
	
	- Urgent - 2 days
	
	- Normal - 7 Days
	
	- Non-urgent - 10 days
	
	For additional information about how to edit the registry to adjust message
	timeouts for the Exchange MTA, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q178539 XCON: How to Adjust Message Timeouts for the Exchange MTA
	
	Microsoft introduced the expiry date setting in Microsoft Outlook 2000 so that
	users can configure the expiry on a per-message basis.
	
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
