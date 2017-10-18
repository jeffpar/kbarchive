---
layout: page
title: "Q169646: XADM: Simeon 4.1.1 Does Not Support Multipart/Related Messages"
permalink: kb/169/Q169646/
---

## Q169646: XADM: Simeon 4.1.1 Does Not Support Multipart/Related Messages

	Article: Q169646
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The Simeon Mail client version 4.1.1 does not support multipart/related messages
	delivered by an Exchange Server computer. The Simeon user will see a message
	indicating that this will be supported in a future release.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	Administrators of Exchange Server should configure the mailbox of a Simeon user
	for plain text:
	
	1. In the Exchange Server Administrator program, bring up the mailbox of the
	  Simeon client user and select the Protocols tab.
	
	2. Select IMAP4 (Mail) and clear the from "Use Protocol Defaults" check box.
	  Under MIME Encoding, select the "Provide Message Body as Plain Text" check
	  box
	
	When future versions of Simeon support multipart/related messages, these settings
	can be changed.
	
	MORE INFORMATION
	================
	
	Simeon Mail client version 4.1.1 is manufactured by Simeon, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
