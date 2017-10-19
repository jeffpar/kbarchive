---
layout: page
title: "Q93618: Using FoxBASE+/Mac .DBF Files with Microsoft Excel 4.0"
permalink: /kb/093/Q93618/
---

## Q93618: Using FoxBASE+/Mac .DBF Files with Microsoft Excel 4.0

	Article: Q93618
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To use a FoxBASE+/Mac database file in Microsoft Excel 4.0 for the Macintosh,
	place the database file in the Excel Startup Folder. When Microsoft Excel
	starts, it automatically opens the database file.
	
	CAUTION: If the database file has a memo field, Microsoft Excel cannot open the
	memo file. If you use Microsoft Excel to modify the contents of a database file
	that has a memo field, and then open the file in FoxBASE+, the memo field will
	be changed to a character field. Even if the field is changed back to a memo
	field, you cannot access the memo file.
	
	MORE INFORMATION
	================
	
	On a machine running Apple System 6, the Excel Startup Folder is in the System
	Folder. On a machine running Apple System 7, the Excel Startup Folder is in the
	Preferences Folder in the System Folder.
	
	Additional query words: 2.01
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	
