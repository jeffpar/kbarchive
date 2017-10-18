---
layout: page
title: "Q198658: XADM: Folders Deleted at Subscriber May Not Be Replicated Again"
permalink: kb/198/Q198658/
---

## Q198658: XADM: Folders Deleted at Subscriber May Not Be Replicated Again

	Article: Q198658
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange InterOrg Public Folder Replication Tool
	(Exssrv.exe), a folder that is deleted at the subscriber side may not be
	replicated again.
	
	CAUSE
	=====
	
	To facilitate deletions that may not have been fully replicated, Exchange Server
	keeps track of folder IDs of deleted folders and does not allow that folder to
	be recreated. This is called a tombstone.
	
	WORKAROUND
	==========
	
	1. Create a new folder on the publisher side.
	
	2. Copy all data from the original folder to the new folder.
	
	3. Delete the original folder.
	
	4. Begin replication of new folder to the subscriber.
	
	MORE INFORMATION
	================
	
	The name of the new folder may be identical to that of the old folder, but and
	links or Favorites that are in use still point to the old folder and must be
	updated.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2
	Version           : winnt:5.5 SP2
	Issue type        : kbprb
	
	=============================================================================
	
