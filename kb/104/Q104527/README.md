---
layout: page
title: "Q104527: PC DB: Shared Folder Rights Not Available to Admin by Default"
permalink: /kb/104/Q104527/
---

## Q104527: PC DB: Shared Folder Rights Not Available to Admin by Default

	Article: Q104527
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.0a,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.0a, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In versions 2.1, 3.0, 3.0a, 3.0b, and 3.2 of Microsoft Mail for PC Networks, the
	Mail administrator does not have full privileges to shared folders that users
	have created. Only the user who created the folder can manipulate the rights to
	a shared folder.
	
	MORE INFORMATION
	================
	
	To allow the administrator to obtain access to a shared folder, do one of the
	following:
	
	- The user can allow the administrator to know the password of the shared
	  folder user's mailbox. The administrator can then log in as that user.
	
	- The administrator can run FIXIDX.EXE on the public folders and give the
	  administrator the ownership of the folders. Note that running this program
	  will result in the loss of all public folder names and the inability to
	  access group folders that have been created.
	
	  The FIXIDX.EXE utility is available as part of the "Database Maintenance
	  Utilities" document. To obtain the document containing the Database
	  Maintenance Utilities, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q99419 PC DB: Database Maintenance Utilities (Complete)
	
	- Archive the shared folders of the particular user, create a shared folder in
	  the Administrator program and then unarchive the archived folder into the new
	  shared folder created by the Administrator program.
	
	
	Additional query words: 2.10 3.00 3.00a 3.00b 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a kbMailPCN300b kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.0a,3.0b,3.2
	
	=============================================================================
	
