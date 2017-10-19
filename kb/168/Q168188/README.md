---
layout: page
title: "Q168188: XADM: Possible Loss of Mail with Move Mailbox"
permalink: /kb/168/Q168188/
---

## Q168188: XADM: Possible Loss of Mail with Move Mailbox

	Article: Q168188
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Move Mailbox command does not move mail from a renamed server-based folder
	(that is, Inbox) to the new server, if a new folder with the previous name of
	the renamed server-based folder (that is, Inbox) has been created.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem was corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Rename any of the four default folders (Deleted Items, Inbox, Outbox, Sent
	  Items). (For example, rename Inbox to Old Inbox.)
	
	2. Create a new folder in the Mailbox folder with the same name as the original
	  folder (for example, Inbox).
	
	3. Place some mail in each of the two folders (for example, 3 in the renamed
	  folder and 2 in the new folder).
	
	4. Log off of the client.
	
	5. Move the mailbox to another server within the site.
	
	Expected Results
	----------------
	
	Both renamed folder (Old Inbox) and newly created folder (Inbox) should show up
	in the mailbox on the new server.
	
	Actual Results
	--------------
	
	The new mailbox has a folder called Inbox, but no folder called Old Inbox.
	Messages that were previously in Old Inbox (the renamed server-based folder)
	will not be found in the new mailbox. Messages that were in the newly created
	folder "Inbox" on the old server will be in the server-based Inbox on the new
	server.
	
	Properties of the private info store on the original server no longer show the
	user that was moved. Properties of Priv IS on the new server show the mailbox
	and its resources minus the number of messages that were in the renamed folder.
	(For example, previously Old Inbox had three messages and Inbox had two
	messages; after the move, Inbox will have two messages and Old Inbox is not
	found on the new server. If Mailbox Resources had 51 items before the move, it
	will have 48 after the move.)
	
	This results in mail loss and the administrator must restore from the backup to
	retrieve the messages for that user.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
