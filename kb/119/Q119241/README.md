---
layout: page
title: "Q119241: PC DirSync: Cross-Postoffice Groups Showing in the GAL"
permalink: /kb/119/Q119241/
---

## Q119241: PC DirSync: Cross-Postoffice Groups Showing in the GAL

	Article: Q119241
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Groups that span multiple postoffices are not allowed to participate in
	directory synchronization (Dir-Sync). In general, the Mail administrator will
	create a cross-postoffice group on a specific postoffice and will administer
	that group at that particular postoffice.
	
	In many cases, the Mail administrator will create such a group for each
	postoffice and will give these groups the same name. Generally, this procedure
	works well because the groups cannot participate in Dir-Sync and the group name
	will show up only once in each postoffice's global address list (GAL).
	
	If the administrator performs an External-Admin, Export function from within the
	Mail Administrator program (ADMIN.EXE), this cross-postoffice group name will be
	exported, along with all other groups and users, to the postoffices specified.
	REBUILD.EXE will now include this cross-postoffice group name in the GAL of each
	postoffice exported to. In this case, the GAL will contain the group and, if the
	group names are identical per postoffice, the GAL will contain multiple entries
	of the same group name.
	
	RESOLUTION
	==========
	
	To remove the "incorrect" cross-postoffice groups from the GAL, perform the
	following steps:
	
	1. Remove the group from the external postoffice address list by running the
	  ADMIN.EXE program against the postoffice containing the cross- postoffice
	  group in the GAL and performing an External-Admin, List.
	
	2. Choose the network and postoffice of the postoffice on which the group is
	  defined and maintained. Choose Delete.
	
	3. All of the users and groups residing in the address list for this externally
	  defined postoffice at this local postoffice will be listed. Delete the
	  cross-postoffice group. This group will remain in the GAL until REBUILD.EXE
	  is run against the postoffice.
	
	It may be necessary to perform this operation at each postoffice on the network
	to remove the multiple cross-postoffice group names from the GAL.
	
	A second solution to this problem is for the administrator of the postoffice on
	which the original External-Admin, Export was performed to run the ADMIN.EXE
	program and do a Config, Dir-Sync, Requestors, Export. After one Dir-Sync cycle,
	the cross-postoffice groups should be removed from the GALs of all other
	requestors.
	
	MORE INFORMATION
	================
	
	For more information about cross-postoffice groups, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q103379 PC Adm: How to Create Groups Spanning Multiple Postoffices
	
	Additional query words: 3.00 3.20 cross postoffice group dirsync
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
