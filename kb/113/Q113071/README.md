---
layout: page
title: "Q113071: PC Adm: Requestor Name of MSMAIL Appears Corrupt"
permalink: /kb/113/Q113071/
---

## Q113071: PC Adm: Requestor Name of MSMAIL Appears Corrupt

	Article: Q113071
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add requestors with version 3.2, 3.2.2, or 3.2.3 of the Mail
	Administrator program (ADMIN.EXE) and you select MSGATE, the name of the
	requestor will appear unreadable. This is not the expected behavior and was not
	true in earlier versions of the Administrator program.
	
	CAUSE
	=====
	
	The MSMAIL Macintosh gateway does not need to be defined as a requestor.
	Macintosh names and types can still be used and propagated through directory
	synchronization (Dir-Sync) without MSMAIL as a requestor. How propagation occurs
	depends on the version of Microsoft Mail Connection for PC and AppleTalk
	Networks in use.
	
	MORE INFORMATION
	================
	
	With version 1.0b of the Mail Connection gateway, names could be placed manually
	into the Dir-Sync stream by using the IMPORT.EXE -E option. Requestors that
	requested MSMAIL addresses would then be sent these transactions during the
	Dir-Sync cycle.
	
	With version 3.2 of the Mail Connection gateway, the proxy NET/PO name should be
	used for the MSMAIL requestor. The gateway uses this proxy name to communicate
	transactions to and from the Dir-Sync process.
	
	REFERENCES
	==========
	
	- Page 189 of the version 3.2 Microsoft Mail for PC Networks "Administrator's
	  Guide," "Specifying the Address Types"
	
	- Page 191 of the version 3.2 Microsoft Mail for PC Networks "Administrator's
	  Guide," "Synchronizing Foreign Addresses"
	
	Additional query words: 3.20 admin dirsync dirsynch Mac
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
