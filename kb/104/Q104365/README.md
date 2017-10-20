---
layout: page
title: "Q104365: PC DOS: Err Msg: Notice 127 Private Folder Index Missing"
permalink: /kb/104/Q104365/
---

## Q104365: PC DOS: Err Msg: Notice 127 Private Folder Index Missing

{% raw %}

	Article: Q104365
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user tries to access a folder in version 3.0 Microsoft Mail for PC
	Networks, MS-DOS workstation, by selecting Options, Folders, Modify (or Delete
	or Storage), View, the following error message may be displayed:
	
	  Notice 127 Private folder index missing
	
	CAUSE
	=====
	
	This error occurs when the FOLDERS\LOC\xxxxxxxx subdirectory of the Mail
	database is missing the xxxxxxxx.IDX file.
	
	RESOLUTION
	==========
	
	To resolve this problem, restore the file from backup. However, if a backup copy
	of the .IDX file is not available, you can run the FIXIDX utility to build
	xxxxxxxx.IDX file from the folder files.
	
	NOTE: Using the FIXIDX utility will result in loss of folder names. However, if
	the .FLD files are also unavailable, the administrator must reset Folder
	privileges for the user.
	
	To reset Folder privileges, start the Administrator program. Select Local-Admin,
	Folders, Reset, and select the user from the list. This will delete all
	references to the user's old folders. The user can now rebuild the folders from
	scratch.
	
	The FIXIDX.EXE utility is available as part of the Database Maintenance Utilities
	document. To obtain the document containing the Database Maintenance Utilities,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q99419 PC DB: Database Maintenance Utilities (Complete)
	
	MORE INFORMATION
	================
	
	To determine the user's 8-digit ID, use the USRDMP or LISTUSER utility.
	
	Additional query words: 3.00 errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
