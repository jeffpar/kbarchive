---
layout: page
title: "Q183417: WD97: Cannot Select Named Range from Excel During Mail Merge"
permalink: /kb/183/Q183417/
---

## Q183417: WD97: Cannot Select Named Range from Excel During Mail Merge

	Article: Q183417
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a mail merge using a Microsoft Excel 97 worksheet as your data
	source using the "Microsoft Excel Worksheet via Converter (*.xls; *.xlw)"
	option, you will only be able to select the entire worksheet and not a named
	range from Excel.
	
	WORKAROUND
	==========
	
	To use a named range from Excel during a mail merge within Word, use one of the
	following methods.
	
	Method 1: Connect to Excel with DDE
	-----------------------------------
	
	Microsoft Excel must already be installed.
	
	NOTE: Using DDE allows Word to see only Worksheet 1. If you choose to use the DDE
	option, start Microsoft Excel first, then open the workbook and move the desired
	sheet to the first position. To do this, drag the desired sheet to the first
	position on the sheet tab bar at the bottom of the current workbook. Save the
	Microsoft Excel workbook.
	
	To connect to Excel using DDE, follow these steps:
	
	1. Start the Mail Merge Helper.
	
	2. From the Get Data list, click Open Data Source.
	
	3. Locate and select the Microsoft Excel file. (In the Open Data Source dialog
	  box, make sure that the Select Method check box is selected.)
	
	4. Click Open.
	
	5. In the Confirm Data Source dialog box, select "MS Excel Worksheets via DDE
	  (*.xls)." Click OK.
	
	6. In the Microsoft Excel dialog box, select the "Entire Spreadsheet" or "Named
	  or Cell Range" option from the list. Click OK.
	
	7. Edit the main document and continue with the merge process.
	
	Method 2: Connect to Excel with ODBC
	------------------------------------
	
	The Microsoft Excel ODBC driver must already be installed.
	
	NOTE: In the Select Table dialog box, you will see all the tables in the
	workbook, not just the ones from the first sheet.
	
	To connect to Excel using ODBC, follow these steps:
	
	1. From the Get Data list, click Open Data Source.
	
	2. Locate and select the Microsoft Excel file. In the Open Data Source dialog
	  box, make sure that the Select Method check box is selected.
	
	3. Click Open.
	
	4. In the Confirm Data source dialog box, select "Excel Files via ODBC (*.xls),"
	  and click OK.
	
	5. In the Select Table dialog box, specify the table from the list (which will
	  only show the first worksheet in the workbook) or click Options and select
	  System Tables, and specify the worksheet you want to use. Click OK.
	
	6. Edit the main document and continue with the merge process.
	
	Method 3: Save the Excel Worksheet in Excel 5.0/95 format
	---------------------------------------------------------
	
	To save an Excel 97 worksheet in Excel 5.0/95 format, follow these steps:
	
	1. In Microsoft Excel, with the worksheet open, click Save As on the File menu.
	
	2. In the Save As Type box, select Microsoft Excel 5.0/95 Workbook (*.xls).
	
	3. Click Save.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q116470 Sheet1 is the Only Microsoft Excel Sheet Available with Word
	
	  Q155179 WD: How to Use Microsoft Excel Data Source for Word Mail Merge
	
	Additional query words: word97
	
	======================================================================
	Keywords          : word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
