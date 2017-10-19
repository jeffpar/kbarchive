---
layout: page
title: "Q117329: PC Adm: Running IMPORT.EXE under OS/2 with the -ST Parameter"
permalink: /kb/117/Q117329/
---

## Q117329: PC Adm: Running IMPORT.EXE under OS/2 with the -ST Parameter

	Article: Q117329
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the IMPORT utility (IMPORT.EXE) with the -ST parameter under OS/2
	version 1.3, you receive the following error message:
	
	  An OS/2 program caused a protection violation.
	
	
	RESOLUTION
	==========
	
	Because IMPORT.EXE version 3.2.6 is a bound program, it runs under both MS-DOS
	and OS/2.
	
	
	To work around this problem, run the IMPORT command from MS-DOS.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	for PC Networks. This problem was corrected in version 3.2a.
	
	
	MORE INFORMATION
	================
	
	The -ST parameter extracts addresses for directory synchronization (Dir- Sync)
	with a foreign mail system. It can only be used against the Dir-Sync server.
	This problem occurs when a group has been defined on the Dir-Sync postoffice. By
	default, the GROUP.GLB file is 4 bytes; however, it increases by 51 bytes when a
	group is added to the postoffice. If the GROUP.GLB file is 4 bytes in length,
	the process works properly.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
