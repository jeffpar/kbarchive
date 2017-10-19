---
layout: page
title: "Q173555: XADM: Exchange Generates Conflict for Same Public Folder"
permalink: /kb/173/Q173555/
---

## Q173555: XADM: Exchange Generates Conflict for Same Public Folder

	Article: Q173555
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use Microsoft Exchange Server version 5.5 and save simultaneous item
	changes on the same replica of a public folder, a public folder item conflict
	notification is generated.
	
	MORE INFORMATION
	================
	
	If you save multiple changes to the same item on a single public folder replica,
	an item conflict notification with the contents of both versions of the item is
	generated and sent to the owner of the public folder. The owner can then
	manually resolve the conflict. In previous versions of Microsoft Exchange
	Server, an item conflict notification is only generated if an item change is
	simultaneously saved on different replicas of a public folder.
	
	An item conflict notification is sent to both the owner of the public folder and
	the mailbox that creates the conflict.
	
	Additional query words: functionality enhancement changes
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
