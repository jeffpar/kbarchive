---
layout: page
title: "Q95975: PC DB: Rebuilding Group Folders Changes Folder Type"
permalink: /kb/095/Q95975/
---

## Q95975: PC DB: Rebuilding Group Folders Changes Folder Type

	Article: Q95975
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 2.0 and 3.0 of Microsoft Mail for PC Networks, if your postoffice
	has group folders and you run the FIXIDX.EXE utility to repair the FOLDROOT.IDX
	file, those group folders are no longer accessible.
	
	CAUSE
	=====
	
	The problem occurs because FIXIDX resets group folders to be defined as shared
	folders in the FOLDROOT.IDX file; however, the folder itself is still set
	internally as a group folder.
	
	RESOLUTION
	==========
	
	Change the byte that defines whether the folder is a group folder or a shared
	folder to indicate the current status of the folder as a shared folder. FIXIDX
	removes critical information about the group status, and the folder cannot be
	restored as a group folder, only as a shared folder.
	
	MORE INFORMATION
	================
	
	The following are detailed steps on how to change the byte to indicate the
	current status of the folder to be a shared folder:
	
	1. Before you run DEBUG on the XXXXXXXX.FLD file, you must run FIXFLD on that
	  folder.
	
	2. Run DEBUG on the folder in question and change the 49th byte from 02 to 03.
	  For example:
	
	  a. Type the following and press ENTER:
	
	  "debug 00000003.fld" (without the quotation marks)
	
	  b. At the dash prompt, type the following:
	
	  "e0131" (without the quotation marks)
	
	     DEBUG displays
	
	  xxxx:0131 02
	
	     where xxxx will vary from machine to machine.
	
	  c. Type the following lines:
	
	  " 03
	  w
	  q" (without the quotation marks)
	
	This will reset the folder's internal definition to be that of a shared folder.
	The Administrator must then create a new group folder, move the messages from
	the old folder to the new folder, and then delete the old folder to restore
	group access.
	
	The FIXIDX.EXE utility is available as part of the Database Maintenance Utilities
	document. To obtain the document containing the Database Maintenance Utilities,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q99419 PC DB: Database Maintenance Utilities (Complete)
	
	Additional query words: 2.10 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0
	
	=============================================================================
	
