---
layout: page
title: "Q107665: How to Create a Table Structure Using an ASCII File"
permalink: kb/107/Q107665/
---

## Q107665: How to Create a Table Structure Using an ASCII File

	Article: Q107665
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6x; MS-DOS:2.0,2.5,2.5a,2.5b; WINDOWS:2.5,2.5a,2.5b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can create a table/.DBF structure from an ASCII text file that contains
	information about the structure.
	
	For example, assume you have the following ASCII text file, TEST.TXT:
	
	  "Name","C",15
	  "Age" ,"N",2
	
	To create a table/.DBF structure using TEST.TXT, do the following:
	
	1. Open a database table.
	
	2. In the Command window, type the following commands:
	
	  " COPY STRUCTURE EXTENDED TO dbtemp.dbf
	  USE dbtemp.dbf
	  ZAP
	  APPEND FROM test.txt DELIMITED
	  CREATE dbfinal.dbf FROM dbtemp.dbf
	  BROWSE" (without the quotation marks)
	
	Additional query words: VFoxWin FoxDos FoxWin 2.50X 2.60X
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : MACINTOSH:2.5x,2.6x; MS-DOS:2.0,2.5,2.5a,2.5b; WINDOWS:2.5,2.5a,2.5b,3.0
	
	=============================================================================
	
