---
layout: page
title: "Q99597: FoxBASE+/Mac Err Msg: Cannot Write to a Read-Only File"
permalink: kb/099/Q99597/
---

## Q99597: FoxBASE+/Mac Err Msg: Cannot Write to a Read-Only File

	Article: Q99597
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you do not have read and write privileges to the drive where the program
	(.PRG or .FMT), report/label (.FRX), or form (.SCX) file is being accessed,
	FoxBASE+/Mac generates the error message
	
	  Cannot write to a read-only file.
	
	NOTE: The setting of EXCLUSIVE (either ON or OFF) does not affect this error.
	
	CAUSE
	=====
	
	FoxBASE+/Mac requires both read and write privileges to view a file because
	FoxBASE+/Mac changes a bit in the header of the file for network-handling
	purposes.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in FoxBASE+/Mac version 2.01. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 2.01A 2.50 read/write errmsg err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	
