---
layout: page
title: "Q183588: XFOR: cc:Mail User Receives NDR When replying to POP3 Sender"
permalink: kb/183/Q183588/
---

## Q183588: XFOR: cc:Mail User Receives NDR When replying to POP3 Sender

	Article: Q183588
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a cc:Mail user replies to a message sent from an Exchange POP3 user, the
	cc:Mail user may receive the following non-delivery-report:
	
	  Your message was not delivered to all recipients.
	   Subject: <subject>
	   Sent:    <Date, Time>
	
	  The message was not delivered to the following recipient(s):
	  ,<User name>
	  The recipient name is not recognized
	  MSEXCH:IMS:<Org>:<Site>:<servername> 0 (000C05A6) Unknown Recipient
	
	A closer examination of the recipient address shows a comma in front of the user
	name.
	
	CAUSE
	=====
	
	The POP3 sender's e-mail Address or reply address (configured in the POP3
	client) does not match the Exchange users SMTP address (located in the Exchange
	Admin <user> properties, E-mail addresses tab, SMTP address type).
	
	RESOLUTION
	==========
	
	In the POP3 client, set the "E-Mail Address" or "Reply Address" configuration to
	the same SMTP address found in the Exchange Admin <user> properties,
	E-mail addresses tab, SMTP address type.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
