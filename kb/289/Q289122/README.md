---
layout: page
title: "Q289122: XADM: How Mailbox Manager Calculates the Age of a Message"
permalink: kb/289/Q289122/
---

## Q289122: XADM: How Mailbox Manager Calculates the Age of a Message

	Article: Q289122
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the Mailbox Manager tool that was introduced in Exchange Server 5.5
	Service Pack 3 (SP3) to implement corporate e-mail retention policies. When you
	use Mailbox Manager, you can create policies or sets of rules to determine
	whether a message is to be retained or deleted. You can use a variety of
	different factors when you create policies, including the age of a message, the
	particular type of message, the location where the message is stored, and the
	message size. This article describes how Mailbox Manager calculates the age of a
	message and how this determination affects whether a particular message will be
	retained or deleted.
	
	MORE INFORMATION
	================
	
	When Mailbox Manager begins processing mailboxes, it records the start time of
	the run as the Time Basis for the run. All message age calculations are made
	relative to this fixed Time Basis value. Even if Mailbox Manager were to take
	several days to complete processing, ages for all items are computed against the
	same Time Basis value. The age of a message is computed from the following
	message properties:
	
	- The time that the message was delivered (PR_MESSAGE_DELIVERY_TIME)
	- The time that the message was sent (PR_CLIENT_SUBMIT_TIME)
	- The time that the message was created (PR_CREATION_TIME)
	- The time that the message was last modified (PR_LAST_MODIFICATION_TIME)
	
	How Mailbox Manager Determines Whether a Message Will Be  Retained or Deleted
	-----------------------------------------------------------------------------
	
	When Mailbox Manager assesses the message, two checks may be performed against a
	message:
	
	- Has the message been modified recently?
	
	  This check determines whether or not a message will be subject to deletion
	  (tested against the second test).
	
	- Is the age of the message greater than the limit specified within the
	  configuration of Mailbox Manager?
	
	  The age of the message determines whether the message will be retained or
	  deleted from the mailbox.
	
	  NOTE: If Mailbox Manager determines that the message was modified recently,
	  the message is skipped. When the message is skipped, the second test is never
	  performed; this behavior ensures that mail items which have been changed and
	  saved recently are not deleted from the mailbox.
	
	Calculations Performed by Mailbox Manager
	-----------------------------------------
	
	- Has the message been modified recently?
	
	  This calculation is used to determine the age of the message with regard to
	  whether the message was recently modified. If the message age is less than
	  the age specified by the Mailbox Manager rules, the message is skipped.
	
	  Message Age = (Time Basis Value - PR_LAST_MODIFICATION_TIME)
	
	- Is the age of the message greater than the limit specified within the
	  configuration of Mailbox Manager?
	
	  The following series is used to determine the age of the message with regard
	  to whether the message will be retained or deleted from the mailbox:
	
	  If PR_MESSAGE_DELIVERY_TIME exists,
	
	  Message Age = (Time Basis Value - PR_MESSAGE_DELIVERY_TIME)
	
	  If PR_CLIENT_SUBMIT_TIME exists,
	
	  message age = (Time Basis Value - PR_CLIENT_SUBMIT_TIME)
	
	  If PR_LAST_MODIFICATION_TIME exists,
	
	  message age = (Time Basis Value - PR_LAST_MODIFICATION_TIME)
	
	The preceding information is accurate for the latest builds of Mbclean.exe
	(post-SP3 hotfixes and later). In the original SP3 build of Mbclean, the process
	was different. A message that had been modified recently could be deleted from
	the system if PR_MESSAGE_DELIVERY_TIME existed and when subtraction from the
	Time Basis value of the run resulted in a Message Age greater than the limits
	configured in the Mailbox Manager policies. A check to determine whether or not
	the message had been modified recently did not exist.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5 SP3,5.5 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
