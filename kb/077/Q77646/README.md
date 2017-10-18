---
layout: page
title: "Q77646: PC DB: NetWare 286/386 Rights for Mail Database"
permalink: kb/077/Q77646/
---

## Q77646: PC DB: NetWare 286/386 Rights for Mail Database

	Article: Q77646
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.0,2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is a description of the Novell NetWare 286/386 rights necessary
	for the Microsoft Mail for PC Networks database structure. Please note that each
	of these rights is necessary for the MAILDATA directory as well as all
	subdirectories below it.
	
	NetWare 286
	-----------
	
	  R - Read
	  W - Write
	  O - Open
	  C - Create
	  D - Delete
	  M - Modify
	
	Do Not Give the User the Following Rights
	-----------------------------------------
	
	  S - Search (Allows a user to list a directory)
	  P - Parental (Allows a user to to change his/her rights OR anyone
	  else's rights in a directory)
	
	NetWare 386
	-----------
	
	  R - Read
	  W - Write
	  C - Create
	  E - Erase
	  M - Modify
	
	NOTE: Microsoft Schedule+ users will also need FileScan rights to the
	MAILDATA\CAL subdirectory.
	
	Do Not Give the User the Following Rights
	-----------------------------------------
	
	  F - File Scan (Allows a user to list a directory)
	  A - Access Control (Allows a user to to change his/her rights OR anyone else's
	  rights in a directory)
	  S - Supervisory (Grants all Supervisor functions, but only on part of the
	  volume)
	
	Additional query words: Privileges nov 2.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN210 kbMailPCN200
	Version           : WINDOWS:2.0,2.1
	
	=============================================================================
	
