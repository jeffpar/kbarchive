---
layout: page
title: "Q182202: XADM: Clean Mailbox Progress Bar Displays Incorrect Message Coun"
permalink: /kb/182/Q182202/
---

## Q182202: XADM: Clean Mailbox Progress Bar Displays Incorrect Message Coun

	Article: Q182202
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During the Clean Mailbox process, the progress bar always displays 0 even though
	messages are being deleted.
	
	CAUSE
	=====
	
	This behavior occurs when the number of messages is less than 200
	(approximately).
	
	This is by product design
	
	MORE INFORMATION
	================
	
	The progress bar displayed by the Clean Mailbox function is driven by MAPI
	calls, which are only updated periodically. When less than a certain number of
	messages (200+) are found, the callback either never happens or happens only
	once (right before the transition to deleting messages), in which case you never
	see the actual number. If you delete a larger number of messages, the status bar
	will not be zero.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	
