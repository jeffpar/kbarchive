---
layout: page
title: "Q247425: XADM: MSExchangeIS Private Event ID 8526"
permalink: /kb/247/Q247425/
---

## Q247425: XADM: MSExchangeIS Private Event ID 8526

	Article: Q247425
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 02-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following warning may be logged in the application event log:
	
	  Event ID: 8526
	  Source: MSExchangeIS Private
	  Type: Warning
	  Category: Transport General
	  Description: The delivery of a message failed because messages are embedded
	  too deeply within this message. The details are:
	
	  From:/O=<ORGANIZATIONNAME>/OU=<SITENAME>/CN=<RECIPIENTS>/CN=<RECIPIENT>
	  Subject:<Subject> Message Id:<Message ID>
	
	  In addition, the sender of the message will receive a non-delivery report
	  (NDR) similar to the following:
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject: <Subject>
	  Sent: <Date and Time>
	
	  The following recipient(s) could not be reached:
	
	  <Exchange User> on <Date and Time>
	  Either the message size exceeds the maximum allowed for the recipient or the
	  transport, or you have exceeded the storage limit on your mailbox.
	  MSEXCH:MSExchangeIS:<SiteName>:<ServerName>
	
	CAUSE
	=====
	
	This event ID is logged if a message has been embedded over 100 times and is
	sent through the message transfer agent. This event ID does not apply to
	messages that are sent from one mailbox to another mailbox on the same server.
	
	MORE INFORMATION
	================
	
	This problem may occur as a result result of Inbox rules, autoreplies, and so
	on.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
