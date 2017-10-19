---
layout: page
title: "Q221164: XFOR: Outlook Express Using IMAP4 Doesn't Display Attachments"
permalink: /kb/221/Q221164/
---

## Q221164: XFOR: Outlook Express Using IMAP4 Doesn't Display Attachments

	Article: Q221164
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using a mail client, for example Microsoft Outlook 98, to send messages,
	you may have enabled Transport Neutral Encapsulation Format (TNEF) to guard
	against information loss when sending mail. Because of this setting, Internet
	Mail recipients (POP3 and IMAP4) report that these attachments aren't being
	displayed. Upon viewing the Message Source information of the message, you see
	the attachment information, but it is not displayed within the message itself.
	
	CAUSE
	=====
	
	When TNEF is enabled by selecting Rich Text Format (RTF) as your Send option,
	attachments are handled by this format. The Internet standards for encoding and
	attaching files such as Multipart Internet Mail Extensions (MIME) and UUENCODE
	are not invoked while TNEF is active; therefore, e-mail clients that do not read
	TNEF in the message do not receive an attachment.
	
	RESOLUTION
	==========
	
	1. Start the Exchange Administrator program, and double-click the POP3 and IMAP4
	  object from either the Site or Server location.
	
	2. Select the Message Format tab.
	
	3. Click to clear the Use Microsoft Exchange rich-text format check box.
	
	4. Stop and restart the information store. You will now be able to see the
	  attachments using Outlook Express configured to use POP3 and IMAP4.
	
	MORE INFORMATION
	================
	
	By disabling the Use Microsoft Rich-Text Format option on the Message Format tab
	for the IMAP4 protocol, all IMAP4 clients that request and receive messages will
	receive them without TNEF in the message, and can interpret the MIME or UUENCODE
	as they normally would.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
