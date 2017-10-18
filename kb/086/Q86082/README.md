---
layout: page
title: "Q86082: PC Win: Unexpected Exit Permanently Locks Shared Folder"
permalink: kb/086/Q86082/
---

## Q86082: PC Win: Unexpected Exit Permanently Locks Shared Folder

	Article: Q86082
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a shared folder is open and Microsoft Mail for Windows exits unexpectedly,
	the shared folder will not be unlocked and therefore cannot be deleted.
	
	RESOLUTION
	==========
	
	To correct this problem, run the FOLDCOMP.EXE utility in the shared folder
	directory (FOLDERS\PUB) of the database. Include the -S parameter. For example:
	
	  foldcomp -s
	
	The FOLDCOMP.EXE utility is located in the UTIL directory on Server Disk 3.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0b, and 3.2 of
	Microsoft Mail for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
