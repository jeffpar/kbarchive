---
layout: page
title: "Q246388: XCON: Event ID 290 and NDR Returned When Sending to Large DL"
permalink: /kb/246/Q246388/
---

## Q246388: XCON: Event ID 290 and NDR Returned When Sending to Large DL

	Article: Q246388
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a user attempts to send a message to a Distribution List (DL), the originator
	of the message may receive the following non-delivery report (NDR):
	
	  From: System Administrator
	  Sent: Tuesday, November 16, 1999 4:26 PM
	  To: <Originator of message>
	  Subject: Undeliverable: Check this out!
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject: Check this out!
	  Sent: 11/16/99 4:26 PM
	
	  The following recipient(s) could not be reached:
	
	  EVERYONE_ALL_DL on 11/16/99 4:26 PM
	  The content length of the message is too long for the recipient to take
	  delivery
	  MSEXCH:MSExchangeMTA:corporate:EXCHSERV
	
	The application log also shows an Event ID 290. There are no message size
	restrictions on the MTA or user mailbox.
	
	CAUSE
	=====
	
	This is caused by a message size limit placed on the DL. It is a common practice
	to put a message size limit on large DLs to prevent users from sending large
	attachments to many people, thus overburdening the network and delaying mail
	flow.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
