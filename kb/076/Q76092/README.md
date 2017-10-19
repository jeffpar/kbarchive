---
layout: page
title: "Q76092: CONN: MAPPINGS.TXT File Lists Incorrect Conversion File"
permalink: /kb/076/Q76092/
---

## Q76092: CONN: MAPPINGS.TXT File Lists Incorrect Conversion File

	Article: Q76092
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection Gateway, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Lotus files transferred through the Microsoft Mail Connection Gateway do not
	transfer correctly with the default MAPPINGS.TXT file installed in the STORE
	directory. The files may open as blank files, or they may even stop (crash)
	Excel for the Macintosh. These files are corrupted beyond repair and cannot be
	opened from within Lotus when they are transferred back to the Mail for PC
	Networks platform.
	
	CAUSE
	=====
	
	The MAPPINGS.TXT file incorrectly lists the following lines:
	
	  .WKS=Lotus 1-2-3 1.x -> Microsoft Excel:TEXT:XCEL:Text
	  .WK1=Lotus 1-2-3 2.x -> Microsoft Excel:TEXT:XCEL:Text
	  .WK3=Lotus 1-2-3 3.x -> Microsoft Excel:TEXT:XCEL:Text
	
	RESOLUTION
	==========
	
	These listings for Lotus 1-2-3 files should end with the word Binary instead of
	Text. Open file in any text editor that supports saving in a text format and
	change the lines to the following:
	
	  .WKS=Lotus 1-2-3 1.x -> Microsoft Excel:TEXT:XCEL:Binary
	  .WK1=Lotus 1-2-3 2.x -> Microsoft Excel:TEXT:XCEL:Binary
	  .WK3=Lotus 1-2-3 3.x -> Microsoft Excel:TEXT:XCEL:Binary
	
	NOTE: The MAPPINGS.TXT file must be located in the MSGATE directory in the
	Connection store.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailConn100
	Version           : :1.0
	
	=============================================================================
	
