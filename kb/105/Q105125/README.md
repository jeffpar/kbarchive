---
layout: page
title: "Q105125: PC DirSync: Address Deleted After Dir-Sync Import or Resync"
permalink: /kb/105/Q105125/
---

## Q105125: PC DirSync: Address Deleted After Dir-Sync Import or Resync

	Article: Q105125
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With versions 3.0 and 3.2 of Microsoft Mail for PC Networks, an external address
	that was defined on the local postoffice may be missing from the external
	postoffice address list (POL).
	
	This problem may occur if the external address was defined on the local
	postoffice by using the External-Admin, List function in the Mail Administrator
	program (ADMIN.EXE). If the address does not exist on the directory
	synchronization server, the address will disappear only after you do one of the
	following:
	
	- Run the Config, Dir-Sync, Requestor, Import command
	
	-or-
	
	- Create a RESYNC.GLB file via IMPORT.EXE and copy this file to the requestor
	  postoffice, followed by a complete directory synchronization (Dir-Sync)
	  cycle.
	
	Again, this problem only occurs if that external address name is not already
	defined on the Dir-Sync server postoffice. This will be true of all external
	postoffices and all gateway names, if the gateway type is selected for Dir-Sync
	under Config, Dir-Sync, Requestor, Types for the requestor.
	
	CAUSE
	=====
	
	The Mail Administrator program (ADMIN.EXE) Config, Dir-Sync, Requestor, Import
	command instructs the Dir-Sync server to send its own complete set of address
	lists to the requestor. This information is then used to build new address files
	containing only the address information that existed on the Dir-Sync server.
	Therefore, Dir-Sync will remove any addresses that were added to that external
	postoffice's or gateway's address list via the local administrator.
	
	Creating the RESYNC.GLB file has the same result as using the Config, Dir-Sync,
	Requestor, Import command, except that the RESYNC.GLB file is copied manually to
	the requestor postoffice. The effect is the same; however, the address files are
	rebuilt from scratch, and the locally defined external addresses or gateway
	addresses are lost.
	
	RESOLUTION
	==========
	
	After the Dir-Sync cycle has completed, use ADMIN.EXE to add the missing address
	to the external address list or the gateway list of the requestor. Do this after
	you run each Config, Dir-Sync, Requestor, Import command and after each
	RESYNC.GLB file has been processed. To place this external address name into the
	Global Address List (GAL), REBUILD.EXE must be run after the name has been added
	to the external address list or the gateway list.
	
	It may be advantageous to add the address to the directory synchronization
	server's external address list as well, to prevent this problem from occurring.
	However, the address will be propagated to all of the requestors whenever the
	Config, Dir-Sync, Requestor, Import command is run.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
