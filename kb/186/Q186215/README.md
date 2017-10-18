---
layout: page
title: "Q186215: XADM: Cleanup of Items Past Retention Triggers Read Receipts"
permalink: kb/186/Q186215/
---

## Q186215: XADM: Cleanup of Items Past Retention Triggers Read Receipts

	Article: Q186215
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The problem occurs in the following scenario: UserA (on server A) has delivery
	set to a PST file and the Empty the Deleted Items Folder Upon Exit option is not
	selected. UserB is any user in the organization. UserB logs on to his or her
	mailbox and sends UserA a message with a Read receipt. When UserA reads the
	message, UserB receives a receipt with a status of Read. When the IS maintenance
	runs on the server, UserB receives another receipt with a status of "not read".
	The second receipt, which states:
	
	  The message was deleted without being read.
	
	makes it unclear to UserB whether UserA actually read the message. Because the IS
	maintenance can be configured, the second receipt can be received days after the
	first receipt.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the following fix or wait for the next Exchange
	service pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
