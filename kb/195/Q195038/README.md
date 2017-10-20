---
layout: page
title: "Q195038: XFOR: Read Receipts Translated to Delivery Receipts"
permalink: /kb/195/Q195038/
---

## Q195038: XFOR: Read Receipts Translated to Delivery Receipts

{% raw %}

	Article: Q195038
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Read receipts are not supported in RFC 822 (Basic SMTP Mail). In Exchange Server
	5.5 and 5.5 Service Pack 1, if a user marks a message for a read receipt,
	Exchange Server changes the read receipt request to a delivery receipt request,
	but the delivery receipt is never delivered.
	
	This is an attempt at best-effort delivery. Since read receipts are not
	supported, the next-best alternative is to supply a delivery receipt. If you
	look at the message in the receiver's Inbox, the message is marked for delivery
	receipt, but the delivery receipt is never delivered.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5
	Service Pack 1.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
