---
layout: page
title: "Q253917: XADM: MAPI Read Receipt Functionality over Internet Mail Service"
permalink: /kb/253/Q253917/
---

## Q253917: XADM: MAPI Read Receipt Functionality over Internet Mail Service

{% raw %}

	Article: Q253917
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
	
	When Microsoft Outlook MAPI clients request a read receipt for a message going
	to another Outlook MAPI client, a read receipt may not be generated if the
	message travels over an Exchange Server Internet Mail Service.
	
	In order to receive read receipts between Outlook MAPI clients over the Internet
	Mail Service, it is necessary to properly configure the Internet Mail Service
	properties.
	
	It is important to note that this functionality is different between Outlook and
	Microsoft Outlook Express. There is limited interoperability when requesting
	read receipts between these clients. Typically, Outlook Express recognizes a
	read receipt request from Outlook, but Outlook does not recognize a read receipt
	from Outlook Express.
	
	Outlook Express uses a different message property for read receipts and simply
	ignores the property used by the Outlook MAPI client. Outlook Express uses this
	property for read receipt requests:
	
	Disposition-Notification-To:
	
	Outlook uses this property for read receipt requests:
	
	Return-Receipt-To:
	
	MORE INFORMATION
	================
	
	In order for read receipt functionality to work properly between MAPI clients
	communicating via the Microsoft Internet Mail Service, the settings below have
	to be in place on the Outgoing Internet Mail Service properties page. Otherwise,
	the read receipt request will be stripped during the message conversion
	process.
	
	1. Click the Internet Mail tab, and then click "Message Content(Attachments
	  Outbound)". Select either MIME or UUENCODE.
	
	2. On the Internet Mail tab, click Advanced Options, and then click Send
	  Microsoft Exchange Rich Text Formatting. (This is the setting that controls
	  the read receipt functionality). Select Always.
	
	3. On the Internet Mail tab, click "Disable Automatic Replies to the Internet".
	  Select Optional.
	
	  This setting does not limit read receipt generation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
