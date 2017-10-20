---
layout: page
title: "Q263851: XADM: MSExchaneIS Private Object Send Queue Size Counter"
permalink: /kb/263/Q263851/
---

## Q263851: XADM: MSExchaneIS Private Object Send Queue Size Counter

{% raw %}

	Article: Q263851
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you view the Send Queue Size counter for the MSExchangeIS Private object in
	Microsoft Windows NT Performance Monitor, the Send Queue Size counter may
	contain a value that is consistently greater than 0. The Send Queue Size counter
	is the number of messages that have been configured with the Deferred Delivery
	or Submission property.
	
	This article describes how to use diagnostic logging in Exchange Server to
	generate events that relate to the size of the Send queue and the scheduled
	delivery time of each message in the Send queue.
	
	MORE INFORMATION
	================
	
	To enable diagnostic logging on the Exchange Server computer:
	
	1. Start the Exchange Server Administrator program, click the Exchange Server
	  object, and then click Properties on the File menu.
	
	2. Click the Diagnostics Logging tab, and then click to expand MSExchangeIS in
	  the Services pane.
	
	3. In the Services pane, click Private, and then change Transport Sending to a
	  logging level of Maximum.
	
	4. Click OK to close the server properties.
	
	After you enable the preceding settings, the following event messages will be
	logged in the application event log:
	
	  Event Type: Information
	  Event Source: MSExchangeIS Private
	  Event Category: Transport Sending
	  Event ID: 2009
	  Description:
	  The sending queue size is 1.
	
	  Event Type: Information
	  Event Source: MSExchangeIS Private
	  Event Category: Transport Sending
	  Event ID: 2012
	  Description:
	  The message with message ID 1-2E37 will not be sent until 5/24/00 10:00:00 PM.
	
	For additional information about deferred delivery and submission, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q188696 XCLN: Deferred Delivery Options for Exchange/Outlook Clients
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
