---
layout: page
title: "Q99961: PC DirSync: Dir-Sync Import Required If Requestor Deleted"
permalink: kb/099/Q99961/
---

## Q99961: PC DirSync: Dir-Sync Import Required If Requestor Deleted

	Article: Q99961
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Directory Synchronization (Dir-Sync) requestor postoffice is deleted from
	the server's list of requestors after a Dir-Sync cycle has completed, and is
	then added back into the list, the requestor does not process updates from the
	server.
	
	CAUSE
	=====
	
	In the first Dir-Sync cycle after requestor installation and server
	registration, an Import request is assumed. The Import synchronization (sync) is
	incremented to one (1). This Import sync is recorded at the requestor. The
	Import sync is incremented for each Import request received from a requestor.
	
	When the requestor is registered at the server, all syncs are initialized to
	zero. When the already active requestor requests updates, the server responds
	with a list of updates and also includes the Import sync, now equal to zero. The
	requestor receives the updates but notices that the Import sync is less than its
	recorded value and rejects the updates as old Dir-Sync mail. There are no
	warnings to indicate the rejection; this is part of the fault tolerant design.
	
	RESOLUTION
	==========
	
	The server assumes an Import request if all syncs are zero.
	
	If the server deletes and then adds a requestor registration, then either:
	
	- The requestor's administrator must submit an Import request
	
	-or-
	
	- The server administrator must give the requestor admin a manual resync file
	  (RESYNC.GLB)
	
	Because the server does not report any error, the requestor administrator should
	note that the DIRSYNC.LOG reports zero updates received for many cycles, even
	though updates have been submitted.
	
	Additional query words: 3.00 3.20 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.5
	
	=============================================================================
	
