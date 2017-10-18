---
layout: page
title: "Q246274: XCLN: The Originator Does Not Have Permission to Submit Message"
permalink: kb/246/Q246274/
---

## Q246274: XCLN: The Originator Does Not Have Permission to Submit Message

	Article: Q246274
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send an e-mail message through a Microsoft Exchange or Microsoft
	Outlook client of Microsoft Exchange Server 5.0, you may receive the following
	non-delivery report (NDR) even though the Delivery Restrictions-Accept From list
	correctly lists your mailbox:
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject: test
	  Sent: 9/30/99 1:01:20 PM
	
	  The following recipient(s) could not be reached:
	  Doe, Jane on 9/30/99 1:01:22 PM
	
	  The originator does not have permission to submit message
	  MSEXCH:MSExchangeIS:Machine200:ServerName
	
	Such NDRs may appear randomly, originating from the information store, from the
	Internet Mail Service, or from other Microsoft Exchange Server components.
	
	CAUSE
	=====
	
	If the intended destination of the message is a .pst file instead of an inbox,
	this behavior can occur when the .pst file is corrupted.
	
	RESOLUTION
	==========
	
	To resolve this problem, at the client, reconfigure the account to deliver mail
	to an Inbox instead of a personal folder. You can also run the Inbox Repair tool
	to attempt to fix the .pst file.
	
	Additional query words: corruption
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	
