---
layout: page
title: "Q198783: XCON: Receipt Behavior with Message Journaling"
permalink: kb/198/Q198783/
---

## Q198783: XCON: Receipt Behavior with Message Journaling

	Article: Q198783
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Message Journaling is a feature included with Exchange Server 5.5 Service Pack
	1. The behavior is documented in the Readme file included with the service pack.
	The documentation is not very clear about the behavior of this feature with
	read, non-read, delivery, and non-delivery receipts.
	
	Message Journaling will journal read receipts but not delivery receipts. When an
	Exchange Server mailbox or public folder is used as the journal recipient, no
	read or delivery receipts will be generated to the original sender from the
	journal recipient.
	
	MORE INFORMATION
	================
	
	This is by product design. For customers that use a custom recipient (SMTP,
	X.400, MS Mail, and so on) for the journal recipient, that foreign system may
	generate receipt notification to the user, and as such, may be alarming to the
	user.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
