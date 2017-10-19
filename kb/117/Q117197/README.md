---
layout: page
title: "Q117197: PC Adm: Deleting Users w/IMPORT Leaves Orphaned Folders, .IDXs"
permalink: /kb/117/Q117197/
---

## Q117197: PC Adm: Deleting Users w/IMPORT Leaves Orphaned Folders, .IDXs

	Article: Q117197
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the IMPORT utility (IMPORT.EXE) included with versions 3.0 and 3.2
	of Microsoft Mail for PC Networks to delete users from the local postoffice, the
	users are deleted from the database; however, their folders and .IDX files
	remain.
	
	CAUSE
	=====
	
	The IMPORT.EXE utility does not delete the local user's files from the
	FOLDERS\LOC subdirectory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0 and 3.2 of
	Microsoft Mail for PC Networks. This problem was corrected in version 3.2a.
	
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
