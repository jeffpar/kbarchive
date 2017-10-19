---
layout: page
title: "Q105965: PC DirSync: Err Msg: GAL Not Active on this PO"
permalink: /kb/105/Q105965/
---

## Q105965: PC DirSync: Err Msg: GAL Not Active on this PO

	Article: Q105965
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run automatic Directory Synchronization (Dir-Sync) using the Dispatch
	and External Mail programs, the following error message might be in the
	postoffice's DIRSYNC.LOG and DSSERVER.LOG files:
	
	  GAL not active on this PO
	
	It makes no difference if the postoffice is a server or a requestor.
	
	CAUSE
	=====
	
	The Mail administrator has disabled the Global Address List (GAL) automatic
	rebuild function.
	
	RESOLUTION
	==========
	
	Rebuild the GAL manually:
	
	1. From the Mail Administrator program (ADMIN.EXE), choose Config, Dirsync,
	  Requestor, Options and set Rebuild to YES.
	
	2. Run REBUILD.EXE.
	
	The error message is not displayed after the GAL is rebuilt manually.
	
	REFERENCES
	==========
	
	Microsoft Mail for PC Networks version 3.0 "Administrator's Guide," pages
	275-276.
	
	Microsoft Mail for PC Networks version 3.2 "Administrator's Guide," pages
	317-318.
	
	Microsoft Mail for PC Networks version 3.5 "Administrator's Guide," pages
	319-320.
	
	Additional query words: 3.00 3.00b 3.20 3.50 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b kbMailPCN350
	Version           : WINDOWS:3.0,3.0b,3.2,3.5
	
	=============================================================================
	
