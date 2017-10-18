---
layout: page
title: "Q128358: PC DB: Err Msg: Program Is Incompatible with the Postoffice"
permalink: kb/128/Q128358/
---

## Q128358: PC DB: Err Msg: Program Is Incompatible with the Postoffice

	Article: Q128358
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Administration program (ADMIN.EXE) for Microsoft Mail for PC
	Networks, the following error may appear:
	
	  This program is incompatible with the postoffice.
	
	ADMIN.EXE will then fail to run, and the mail clients will not be able to access
	the postoffice.
	
	CAUSE
	=====
	
	This error will occur if the MASTER.GLB is a 0 byte file or corrupt. If
	ADMIN.EXE cannot find the version number stored in the MASTER.GLB on start up,
	the above error will be returned.
	
	RESOLUTION
	==========
	
	To repair, restore the MASTER.GLB from backup or create a new installation of
	the postoffice using the same NETWORK/POSTOFFICE name as the original, and copy
	the newly created MASTER.GLB. Ensure that the same disk set is used that
	originally created this PO.
	
	If a recent backup is not available, or you have to reinstall, you will have to
	reinstall any gateways added since the date of the restored MASTER.GLB. You will
	also have to enable the GAL and configure the Dir-Sync server.
	
	
	Additional query words: 3.20 3.20a dirsync
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	
