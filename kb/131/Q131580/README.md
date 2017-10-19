---
layout: page
title: "Q131580: PRB: ODBC Converts Microsoft Excel Character Data to Memos"
permalink: /kb/131/Q131580/
---

## Q131580: PRB: ODBC Converts Microsoft Excel Character Data to Memos

	Article: Q131580
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Microsoft Excel ODBC driver (from the Microsoft Desktop Database
	Drivers version 2.0) to perform a query against a Microsoft Excel spreadsheet, a
	Visual FoxPro table or cursor is produced. This table or cursor contains the
	requested data from the Microsoft Excel spreadsheet. If a cell contains text,
	that text will appear inside memo fields in the resulting Visual FoxPro table or
	cursor.
	
	CAUSE
	=====
	
	When the data is passed to Visual FoxPro from ODBC, the resulting column is 255
	characters wide. Visual FoxPro cannot place more than 254 characters in a
	character field. Therefore, the data must be placed into a memo field.
	
	WORKAROUND
	==========
	
	Add a character field to the table that contains the results of the query.
	Replace that character field with the contents of the memo field.
	
	For example, if the resulting table contains a memo field called sqlmemo, add a
	character field with the name sqlchar to the table. Then use the following
	command to copy the data from the memo field to the character field:
	
	     REPLACE ALL sqlchar WITH TRIM(sqlmemo)
	
	Then remove the memo field from the table.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Microsoft Excel version 5.0, create a workbook called ONE.XLS.
	
	2. Place the word "this" (without the quotation marks) in column 1, row 1 of
	  Sheet1.
	
	3. Place the word "one" (without the quotation marks) in column 1, row 2 of
	  Sheet1.
	
	4. Place the word"two" (without the quotation marks)in column 1, row 3 of
	  Sheet1.
	
	5. Place the word "three" (without the quotation marks) in column 1, row 4 of
	  Sheet1.
	
	6. Save the workbook as "ONE.XLS" (without the quotation marks).
	
	7. Create a data source called "excel" (without the quotation marks)using the
	  Microsoft Excel ODBC driver. The data source should point to the ONE.XLS file
	  saved in step 6.
	
	8. Exit from Microsoft Excel, and start Visual FoxPro.
	
	9. Enter the following commands in the Command window:
	
	     h = SQLCONNECT("excel32","","")
	     ? SQLEXEC(h,'SELECT * FROM "Sheet1$" Sheet1_')
	     BROWSE
	
	  You will see that the Microsoft Excel cells are presented as memo fields.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbprb
	
	=============================================================================
	
