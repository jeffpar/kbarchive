---
layout: page
title: "Q99599: FoxBASE+/Mac Err Msg: File Is in Use by Another"
permalink: /kb/099/Q99599/
---

## Q99599: FoxBASE+/Mac Err Msg: File Is in Use by Another

	Article: Q99599
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
	
	If you do not have both read and write privileges for the drive from which the
	.DBF file is being accessed and EXCLUSIVE is set to ON, FoxBASE+/Mac generates
	the error message
	
	  File is in use by another.
	
	CAUSE
	=====
	
	FoxBASE+/Mac requires both read and write privileges to view a database file
	because FoxBASE+/Mac changes a bit in the header of the file for
	network-handling purposes.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in FoxBASE+/MAC version 2.01. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 2.01 2.50 read/write errmsg err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	
