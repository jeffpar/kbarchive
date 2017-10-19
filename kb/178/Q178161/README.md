---
layout: page
title: "Q178161: Unable to Send Private Message to Exchange Recipient"
permalink: /kb/178/Q178161/
---

## Q178161: Unable to Send Private Message to Exchange Recipient

	Article: Q178161
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send a private message to a Microsoft Exchange Server recipient
	who has a designated alternate recipient, you may receive the following
	non-delivery report (NDR):
	
	  From: System Administrator
	  Subject: Undeliverable: test message
	
	  Your message did not reach some or all of the intended recipients.
	
	     Subject: test message
	     Sent: 12/1/97 12:00 PM
	
	  The following recipient(s) could not be reached:
	
	     John Doe on 12/1/97 12:00 PM
	
	     Unable to deliver the message because the originator prohibited
	     redirection to an alternate recipient or the message was encrypted
	
	     MSEXCH:MSExchangeMTA:<SiteName>:<ServerName>
	
	CAUSE
	=====
	
	This is by design. Private messages sent to a specific recipient are not
	intended to be received by an alternate recipient.
	
	WORKAROUND
	==========
	
	To prevent this behavior, disable the use of alternate recipients on the
	mailbox. Alternate recipients are designated in the Microsoft Exchange
	Administrator program by selecting the Delivery Options tab of the recipient's
	mailbox.
	
	In Microsoft Outlook, you can assign delegate permissions for your mailbox to
	other users. This enables private messages to be delivered to your mailbox, but
	delegates cannot view these private messages.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
