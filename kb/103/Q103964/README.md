---
layout: page
title: "Q103964: PC DOS: Err Msg: Notice 91 Duplicate Folder Name"
permalink: /kb/103/Q103964/
---

## Q103964: PC DOS: Err Msg: Notice 91 Duplicate Folder Name

{% raw %}

	Article: Q103964
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user tries to create a private or shared folder with version 3.0 of
	Microsoft Mail for PC Networks, MS-DOS workstation, the following error message
	may be displayed:
	
	  Notice 91 Duplicate folder name
	
	CAUSE
	=====
	
	This error occurs when the .IDX file (FOLDROOT.IDX) in the FOLDERS\PUB
	subdirectory (in the case of a shared folder) or the user's 8-digit .IDX file in
	the FOLDERS\LOC\<8_digit> subdirectory (in the case of a private folder)
	is corrupted.
	
	RESOLUTION
	==========
	
	To resolve this problem, restore the file from a backup copy. However, if a
	backup copy is not available, you can run the FIXIDX utility to build the .IDX
	file from the folder files. FIXIDX has a few side effects, which are outlined in
	the FIXIDX.TXT file included with it.
	
	The FIXIDX.EXE utility is available as part of the Database Maintenance Utilities
	document. To obtain the document containing the Database Maintenance Utilities,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q99419 PC DB: Database Maintenance Utilities (Complete)
	
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
