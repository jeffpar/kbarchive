---
layout: page
title: "Q101833: PC DB: How to Remove Stranded .ATT and .MAI Files"
permalink: /kb/101/Q101833/
---

## Q101833: PC DB: How to Remove Stranded .ATT and .MAI Files

	Article: Q101833
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	With versions 2.1, 3.0, and 3.2 of Microsoft Mail for PC Networks, .MAI and
	.ATT files occasionally may be stranded in the Mail database.
	
	The following procedure outlines how to safely remove these files from the
	server.
	
	Before you proceed with this process, you should tell all of your users to
	remove or move to folders all mail in their inbox older than X days (X is a
	variable that can be any number, and depends on corporate and
	administrative policies). It is also strongly recommended that you back up
	your entire Mail database before proceeding with this process.
	
	
	1. From the Mail Administrator program, select Local-Admin, Storage, Delete, All
	  Users. Set the following criteria:
	
	   - Mailbag delete criteria: ALL USERS
	
	   - Mail age (days): X
	
	   - Mail read criteria: BOTH READ AND UNREAD
	
	   - Mail priority criteria: R
	
	2. You can now safely delete all files with the .ATT extension in the ATT
	  subdirectory that are older than X days.
	
	3. You can now safely delete all files with the .MAI extension in the MAI
	  subdirectory that are older than X days.
	
	Additional query words: 2.10 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.2
	
	=============================================================================
	
