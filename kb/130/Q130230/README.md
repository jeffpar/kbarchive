---
layout: page
title: "Q130230: PC DirSync: Deleted Postoffice Not Removed from GAL"
permalink: /kb/130/Q130230/
---

## Q130230: PC DirSync: Deleted Postoffice Not Removed from GAL

	Article: Q130230
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a Microsoft Mail for PC Networks administrator removes a postoffice from
	the system using the Administrator's program (ADMIN.EXE), the postoffice and its
	corresponding addresses are not automatically deleted from the Global Address
	List (GAL).
	
	MORE INFORMATION
	================
	
	Version 3.2, 3.2a, or 3.5 of Microsoft Mail for PC Networks process of Directory
	Synchronization (Dir-Sync) allows for automatic creation and inclusion of new
	postoffices. Therefore, it adds new postoffices and its users into the GAL
	automatically.
	
	If you remove a postoffice and its users from the GAL, it is not an automated
	process. If an administrator removes a postoffice from the system using
	ADMIN.EXE, and removes it from the Dir-Sync server, the postoffice and its user
	addresses will still be in the GALs of each external postoffice.
	
	The GAL on each postoffice is composed of the individual address list (.USR file)
	for each externally defined postoffice in the system. When the Rebuild portion
	of Dir-Sync runs, it creates the GAL and references the .USR file from each
	postoffice. The external definition (the .USR file) for that removed postoffice
	still exists on every postoffice in the network. The only way to update the GAL,
	is to run Admin, External- Admin, Delete from each postoffice, then complete an
	entire Dir-Sync cycle.
	
	Additional query words: 3.20 3.20a 3.50 dirsync de-registers
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	
	=============================================================================
	
