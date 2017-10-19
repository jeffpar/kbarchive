---
layout: page
title: "Q101441: PRB: Importing MS Excel Spreadsheet Gives Field Names A, B, C"
permalink: /kb/101/Q101441/
---

## Q101441: PRB: Importing MS Excel Spreadsheet Gives Field Names A, B, C

	Article: Q101441
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Importing a Microsoft Excel spreadsheet into FoxPro results in incorrect field
	names. If the field names are designated as "Name", "Customer", and "Address" on
	the first row of the spreadsheet, they will show as "A", "B", and "C" in the
	FoxPro .DBF file.
	
	CAUSE
	=====
	
	By design, FoxPro will use the column headings, not a row of information, from a
	Microsoft Excel spreadsheet as the field names in the database created with the
	IMPORT command.
	
	RESOLUTION
	==========
	
	To work around this behavior, do the following in Microsoft Excel:
	
	1. On the spreadsheet you want to import into Microsoft FoxPro, select all the
	  cells containing information.
	
	  NOTE: This should include the row containing the column headings.
	
	2. Do one of the following:
	
	   - In Microsoft Excel version 5.0, from the Insert menu select Name Define,
	     and then type "database" (without the quotation marks) as the name.
	
	  -or-
	
	   - In Microsoft Excel version 4.0, from the Data menu, choose Set Database to
	     set the range of the database boundaries.
	
	3. From the File menu, choose Save As and save the spreadsheet as type DBF4.
	
	4. Switch to FoxPro and open the DBF4 file; its extension is .DBF.
	
	The field names will now be based on the first row of data from the Microsoft
	Excel spreadsheet.
	
	Additional query words: VFoxWin FoxDos FoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
