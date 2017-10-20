---
layout: page
title: "Q265391: XADM: Exchange Server Honors Message Expiry Even If Incorrect"
permalink: /kb/265/Q265391/
---

## Q265391: XADM: Exchange Server Honors Message Expiry Even If Incorrect

{% raw %}

	Article: Q265391
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Messages that come into an Exchange Server site may be rejected without
	notification to the sender if the message has an expiry time and it is earlier
	than the Exchange Server computer's current date and time.
	
	MORE INFORMATION
	================
	
	Users of Internet mail can set a message expiry time. This defines how long the
	message will stay in the recipient's Inbox. If the expiry time of the incoming
	message is earlier than the Exchange Server computer's current date and time,
	the message is discarded without notification because the Exchange Server
	computer recognizes the message as already expired.
	
	This behavior is by design. E-mail clients set message expiry. Simple Mail
	Transfer Protocol (SMTP) e-mail users should not stamp an outbound message with
	expiry, and when they do SMTP e-mail clients act unexpectedly if the message
	expiry has the current date and time as the message.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Component         : SMTP
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
