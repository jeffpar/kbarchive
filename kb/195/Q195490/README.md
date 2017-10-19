---
layout: page
title: "Q195490: XADM: Deleted Items not Moved After a Move Mailbox"
permalink: /kb/195/Q195490/
---

## Q195490: XADM: Deleted Items not Moved After a Move Mailbox

	Article: Q195490
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A feature of Exchange Server 5.5 is Deleted Items Retention. Users who delete
	their messages can recover those deleted items during the Deleted Item Retention
	time window set by an Exchange Server administrator.
	
	When a user is moved from one server within a site to another using the Move
	Mailbox function of the Exchange Server Administrator program, all of the user's
	Inbox data is moved with the exception of the Deleted Items.
	
	MORE INFORMATION
	================
	
	When a user deletes a message from his or her Deleted Items folder, and Deleted
	Item Retention is turned on, the message will be 'soft deleted.' This means that
	it is basically hidden, but still resides in the user's server mailbox until the
	retention period is up.
	
	When a mailbox is moved using the Exchange Server Administrator program, the
	retained Deleted Items cannot be moved, and are simply 'hard-deleted' during the
	next Exchange Server information store maintenance period.
	
	It is recommended that Exchange Server administrators who use this feature send a
	note to their users prior to moving a mailbox so that users can look at the
	retained deleted items, and recover anything they feel they may want. Some users
	may choose to recover all the retained items, go through the move, and then
	delete them again after they are on the new server. This method will result in
	no loss of functionality.
	
	Additional query words: dumpster moveuser missing
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
