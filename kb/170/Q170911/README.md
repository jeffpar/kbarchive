---
layout: page
title: "Q170911: XADM: Clean Mailbox Utility Deletes Msgs Not Archived"
permalink: kb/170/Q170911/
---

## Q170911: XADM: Clean Mailbox Utility Deletes Msgs Not Archived

	Article: Q170911
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage exc5
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Clean Mailbox utility in the Microsoft Exchange Server
	Administrator program, modified messages are deleted unexpectedly.
	
	CAUSE
	=====
	
	Every message has properties that track time properties of the message, such as
	the delivery time of a message and the time the message was last modified. The
	Clean Mailbox utility in the Microsoft Exchange Server Administrator program
	determines the message age on the basis of the MAPI property
	PR_MESSAGE_DELIVERY_TIME, that is, the date the message was received. However,
	Outlook auto-archive determines message age on the basis of the MAPI property
	PR_LAST_MODIFICATION_TIME, that is, the date the message was last modified.
	
	This difference may result in problems. For example, if you plan to auto- archive
	messages after they reach a certain age, and you then delete messages using the
	Clean Mailbox utility, some messages may be deleted that have not yet been
	auto-archived because the last modification date may be changed.
	
	For information about how might the last modification date be changed, please
	reference the following article in the Microsoft Knowledge Base:
	
	  Q161808 Message Modification Date Determines Archive Date
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc5 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
