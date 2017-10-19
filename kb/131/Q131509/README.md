---
layout: page
title: "Q131509: PC DirSync: Err Msg: No Tasks from Requestor:..."
permalink: /kb/131/Q131509/
---

## Q131509: PC DirSync: Err Msg: No Tasks from Requestor:...

	Article: Q131509
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Directory Synchronization (Dir-Sync), you may see the following
	message in the DIRSYNC.LOG on the directory server:
	
	  No Tasks From Requestor: PCM:POSTMASTER/NET/PO
	
	CAUSE
	=====
	
	This message will appear when the information from a requestor has not reached
	the server prior to the T2 time. T2 is the time the directory server begins to
	process the local updates and sends the global updates back to the requestors.
	
	RESOLUTION
	==========
	
	To resolve the problem, increase the window of time between T1 and T2 for the
	requestors producing the error. Also, ensure that mail is successfully being
	transfer between the requestor postoffice and the Dir-Sync server.
	
	
	Additional query words: 3.20 3.20a 3.50 dirsync error
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	
	=============================================================================
	
