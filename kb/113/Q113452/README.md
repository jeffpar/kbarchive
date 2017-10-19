---
layout: page
title: "Q113452: PC Adm: Files Written to Remote User Data Disk"
permalink: /kb/113/Q113452/
---

## Q113452: PC Adm: Files Written to Remote User Data Disk

	Article: Q113452
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Mail Administrator program (ADMIN.EXE) Init-Disk command creates a Data Disk
	that contains unique user identification information for a Microsoft Mail Remote
	user. The information on the Data Disk includes the user name, the postoffice
	name, the network name, the user list(s), and other postoffice information.
	
	To use the Init-Disk command, select Remote, Init-Disk. The following files are
	written to the Data Disk:
	
	  RNETWORK.GLB
	  ACCESS.MAI
	  CONNECT.GLB
	  TRANSFIL
	  CONTROL.MAI
	  C850SORT.GLB
	
	Additional query words: 2.10 3.00 admin administration
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.2
	
	=============================================================================
	
