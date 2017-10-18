---
layout: page
title: "Q99541: How to Export Memo Data to a Text File Without an XCMD"
permalink: kb/099/Q99541/
---

## Q99541: How to Export Memo Data to a Text File Without an XCMD

	Article: Q99541
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	The contents of a memo field can be exported to a text file without using
	an XCMD.
	
	The following code example exports data in a memo field to a text file
	called Memo.txt from the Video.dbf database file in the FoxBase2.01:Sample
	subfolder:
	
	     USE Video
	     GO TOP
	     SET PRINTER TO Memo.txt
	     SET PRINT ON
	        DO WHILE !EOF()
	           ? DESCRIPT
	           ? ""
	           SKIP
	        ENDDO
	     SET PRINT OFF
	     SET PRINTER TO
	
	This code also exports the record number of the contents of each memo.
	Issuing a "SET TALK OFF" command at the beginning of the code snippet turns
	this feature off. The text file can then be viewed in applications such as
	Microsoft Word and Microsoft Excel.
	
	Additional query words: 2.01 segment FoxBASE+/Mac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	
