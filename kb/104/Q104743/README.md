---
layout: page
title: "Q104743: PC DirSync: Cannot Remove Dir-Sync Requestor After Install"
permalink: /kb/104/Q104743/
---

## Q104743: PC DirSync: Cannot Remove Dir-Sync Requestor After Install

	Article: Q104743
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	There is no facility in the Administrator program (ADMIN.EXE) included with
	versions 3.0, 3.2 and 3.5 of Microsoft Mail for PC Networks to remove or
	deactivate a Directory Synchronization (Dir-Sync) requestor, or to reset a
	requestor to its installed state. ADMIN.EXE continues to ask if a user who was
	created or modified on the requestor is to be included in Dir-Sync, regardless
	of whether Dir-Sync is actually enabled on that postoffice.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.2 and 3.5 of
	Microsoft Mail for PC Networks. We are researching this problem and will post
	new information in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	ADMIN.EXE can remove the files that make a postoffice the Dir-Sync server
	(through the Config, Dir-Sync, Options command), but there is no method to reset
	the requestor record in the REQCONF.GLB file. Users continue to be added to the
	REQTRANS.GLB file if the administrator responds "Yes" to the question of whether
	to include this user in Dir-Sync.
	
	
	Additional query words: 3.00 3.20 3.50 dirsync
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.5
	
	=============================================================================
	
