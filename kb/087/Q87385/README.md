---
layout: page
title: "Q87385: PC DB: Which Programs Access the CONTROL.GLB File"
permalink: kb/087/Q87385/
---

## Q87385: PC DB: Which Programs Access the CONTROL.GLB File

	Article: Q87385
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1e, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	All of the programs that are able to generate a piece of electronic mail must be
	able to open the CONTROL.GLB file in read/write mode. Because this file is used
	to generate all mail and attachment files, it should be opened and updated as
	quickly as possible.
	
	All Microsoft Mail clients, ADMIN.EXE, EXTERNAL.EXE, FFAPI, and Gateway programs
	will use this file to generate filenames.
	
	
	Additional query words: 2.10e 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210e
	Version           : WINDOWS:2.1e,3.0,3.2
	
	=============================================================================
	
