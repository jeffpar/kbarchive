---
layout: page
title: "Q104079: PC Adm: Err Msg: Notice 27: Disk Directory Full/Error Writing"
permalink: /kb/104/Q104079/
---

## Q104079: PC Adm: Err Msg: Notice 27: Disk Directory Full/Error Writing

	Article: Q104079
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the version 3.0 or 3.2 Microsoft Mail for PC Networks Administrator
	program (ADMIN.EXE) to print a report of the public folders (group and shared
	folders), the following error message may be displayed:
	
	  Notice 27: Disk directory full or error writing to disk
	
	CAUSE
	=====
	
	This error occurs when the FOLDROOT.IDX file in the FOLDERS\PUB subdirectory of
	the Mail database is corrupted.
	
	RESOLUTION
	==========
	
	To resolve this problem, restore the file from a backup copy. However, if a
	backup copy is not available, you can run the FIXIDX utility to build the
	FOLDROOT.IDX file from the folder files. However, this will result in the loss
	of folder names and will also transfer ownership of all folders to the person
	specified in the FIXIDX command line.
	
	The FIXIDX.EXE utility is available as part of the Database Maintenance Utilities
	document. To obtain the document containing the Database Maintenance Utilities,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q99419 PC DB: Database Maintenance Utilities (Complete)
	
	Additional query words: 3.00 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
