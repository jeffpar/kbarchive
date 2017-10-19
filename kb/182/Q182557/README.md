---
layout: page
title: "Q182557: XADM: NDR Occurs When Sending To A Mailbox With Receive Limits"
permalink: /kb/182/Q182557/
---

## Q182557: XADM: NDR Occurs When Sending To A Mailbox With Receive Limits

	Article: Q182557
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 13-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive a non-delivery report (NDR) similar to the following:
	
	  Your message did not reach some or all of the intended recipients.
	
	     Subject:   Subject of the Message
	     Sent:   3/10/98 11:40 PM
	
	  The following recipient(s) could not be reached:
	
	     RecipientName on 3/10/98 11:40 PM
	     The recipient was unavailable to take delivery of the message
	     MSEXCH:MSExchangeIS:SITENAME:SERVERNAME
	
	CAUSE
	=====
	
	This problem can occur when you send a message to a mailbox that has receive
	restrictions.
	
	WORKAROUND
	==========
	
	Verify the Properties of the the recipient's mailbox. If there are restrictions,
	the administrator can either remove or decrease the restictions; the recipient
	can also be notified to clean out his/her mailbox.
	
	To check receive restrictions, perform the following steps:
	
	1. Start Exchange Administrator.
	
	2. Get Properties on the mailbox to which you are sending the message.
	
	3. Click the Limits tab to configure the Prohibit Send and Receive (K)
	  restriction.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
