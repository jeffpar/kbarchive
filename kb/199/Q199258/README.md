---
layout: page
title: "Q199258: XFOR: IMS Message Counts in  Admin. Not Reflected in Queues"
permalink: kb/199/Q199258/
---

## Q199258: XFOR: IMS Message Counts in  Admin. Not Reflected in Queues

	Article: Q199258
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 15-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you view the message count and message resources for the Internet Mail
	Service in the Microsoft Exchange Server 5.5 Administrator program, you find
	counts of messages existing in the Internet Mail Service mailbox of the
	information store. Viewing the Internet Mail Service queues, you do not see any
	messages in any of the queues. If you use the Mdbvue32 tool included on the
	Exchange Server 5.5 CD, you find no messages in the Internet Mail Service
	mailbox in the information store.
	
	MORE INFORMATION
	================
	
	This problem has been reported to the Microsoft development team and feedback
	shows that this anomaly results from optimization of gateway mailbox queues.
	These message counts can be safely ignored. Moreover, you can choose to run the
	Isinteg utility to recalculate the real message count and message resources for
	the Internet Mail Service.
	
	Additional query words: imc resources mdbview mdbvu
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
