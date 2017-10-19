---
layout: page
title: "Q132854: Mac Srv: Group Propagation Problem with Nested Groups"
permalink: /kb/132/Q132854/
---

## Q132854: Mac Srv: Group Propagation Problem with Nested Groups

	Article: Q132854
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1d
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1d 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a group within a group on Microsoft Mail for AppleTalk Networks,
	the nested group may not be properly deleted from a downstream server, when the
	original group is deleted and a new group is created on the originating server.
	
	CAUSE
	=====
	
	When the nested group is deleted from the originating server (the one that first
	created both groups) and a new group is immediately added, the information
	propagated to the downstream servers does not contain the updated group
	information.
	
	RESOLUTION
	==========
	
	To refresh the group information on the downstream servers, go to the
	originating server, sign in as Network Administrator and follow these steps:
	
	1. From the Mail menu, choose Server Users/Groups.
	
	2. Select the group button.
	
	3. Select Modify Group, then select the group name.
	
	4. Click the Address button, and add a user to the group. Click the Close
	  button.
	
	5. Click Modify, and wait for the change to appear on the downstream server.
	
	6. Redo steps 4 and 5, only remove the user you just added.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.1d of Microsoft Mail
	for AppleTalk Networks. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310d
	Version           : WINDOWS:3.1d
	
	=============================================================================
	
