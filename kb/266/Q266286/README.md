---
layout: page
title: "Q266286: XCLN: IMAP Clients Unable to See Attachments"
permalink: kb/266/Q266286/
---

## Q266286: XCLN: IMAP Clients Unable to See Attachments

	Article: Q266286
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 29-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an Internet Message Access Protocol (IMAP) e-mail client to view a
	message that was sent from an Exchange Server computer, you may notice that
	attachments are not visible. You can view the attachments correctly with
	Messaging Application Programming Interface (MAPI) and Post Office Protocol
	version 3 (POP3) clients and Microsoft Outlook Web Access (OWA). This issue
	affects messages that are sent to another Exchange Server site by site
	connectors or X.400 Connectors. Recipients in the site can see the attachments
	properly.
	
	CAUSE
	=====
	
	This issue can occur if Internet Message Access Protocol, Version 4rev1 (IMAP4)
	is configured to use Microsoft Exchange rich-text format on the sender's
	Exchange Server computer. This prevents IMAP clients from viewing the
	attachments; the messages look like messages that do not contain attachments
	when you view the messages in the IMAP mail viewer.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. In the Exchange Server Administrator program, open the properties of the
	  IMAP4 protocol object.
	
	2. Click the Message Format tab, and then make sure that the Use Microsoft
	  Exchange rich-text Format check box is clear.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
