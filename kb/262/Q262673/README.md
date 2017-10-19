---
layout: page
title: "Q262673: XADM: Modified Deferred Delivery Messages Are Never Sent"
permalink: /kb/262/Q262673/
---

## Q262673: XADM: Modified Deferred Delivery Messages Are Never Sent

	Article: Q262673
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5; :
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Outlook 2000 allows you to send a message marked for deferred
	delivery. This message remains in your Outbox folder until the delivery time has
	expired, at which point the message is sent. If you modify and then simply close
	the message, the message is not sent. For deferred delivery to be successful,
	you must click Send after you make any modifications to the message.
	
	MORE INFORMATION
	================
	
	In the Outlook 2000 Outbox, a deferred delivery message is represented by a
	sealed envelope icon, and its title is displayed in italics. After the message
	is opened, the icon changes to an open letter and the message title is no longer
	italicized. These changes indicate that the message has been either read or
	modified and then closed. This message is not sent when the deferred delivery
	time expires.
	
	To send this message, you must re-open it and then click Send. After you do this,
	the message title is italicized and the sealed envelope icon returns. This
	message is sent when the deferred delivery time expires.
	
	If the deferred delivery time expires while the message is marked with an
	open-letter icon, you must update the delivery time to a future time value
	before clicking Send.
	
	
	Additional query words: deferred delivery submission
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbZNotKeyword3
	Version           : winnt:5.5; :
	Issue type        : kbinfo
	
	=============================================================================
	
