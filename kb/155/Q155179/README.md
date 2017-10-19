---
layout: page
title: "Q155179: WD97: How to Use Microsoft Excel Data Source for Word Mail Merge"
permalink: /kb/155/Q155179/
---

## Q155179: WD97: How to Use Microsoft Excel Data Source for Word Mail Merge

	Article: Q155179
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes three methods to attach a Microsoft Excel data source to
	a Word mail merge main document.
	
	MORE INFORMATION
	================
	
	After you perform step 1 of the Mail Merge, use one of the following methods in
	step 2 of the mail merge to attach a Microsoft Excel worksheet.
	
	Method 1: Access Microsoft Excel Worksheet with a Converter
	-----------------------------------------------------------
	
	NOTE: To use this method, the Microsoft Excel converter must already be
	installed. This converter will only allow Entire Worksheet in the Name or Cell
	Range: option of the Open Worksheet dialog box.
	
	1. On the Get Data drop down list, click Open Data Source.
	
	2. Locate and select the Microsoft Excel file. Make sure that the Select Method
	  box in the Open Data Source dialog box is selected.
	
	3. Click Open.
	
	4. In the Confirm Data Source dialog box, Select Microsoft Excel Worksheet via
	  Converter.
	
	5. Click OK.
	
	6. In the Open Worksheet dialog box, do the following:
	  a. Under Open Document in Workbook, select either the Entire Workbook or a
	     particular Sheet of the Workbook.
	
	  b. Under Name or Cell Range you will only be able to select Entire Worksheet.
	
	  c. Click OK.
	
	7. Click Edit Main Document and continue with the merge process.
	
	Method 2: Access MS Excel Worksheets with DDE
	---------------------------------------------
	
	Microsoft Excel must already be installed.
	
	NOTE: Using DDE allows Word to see only Worksheet 1. If you want a sheet other
	than Worksheet 1 as your data source while using the DDE option, start Microsoft
	Excel first, then open the workbook and move the desired sheet to the first
	position. To do this, drag the desired sheet to the first position on the sheet
	tab bar at the bottom of the current workbook. Save and minimize the Microsoft
	Excel workbook.
	
	1. From the Get Data drop down list, click Open Data Source.
	
	2. Locate and select the Microsoft Excel file. Make sure that the Select Method
	  box in the Open Data Source dialog box is selected.
	
	3. Click Open.
	
	4. Select MS Excel Worksheets via DDE in the Confirm Data Source dialog box.
	  Click OK.
	
	5. In the Microsoft Excel dialog box, select the Entire Spreadsheet or Named or
	  Cell Range from the list. Click OK.
	
	6. Click Edit Main Document and continue with the merge process.
	
	Method 3: Access the Microsoft Excel Files with ODBC
	----------------------------------------------------
	
	The Microsoft Excel ODBC driver must already be installed.
	
	NOTE: Using Microsoft Word 97, version 8 you see all the tables in the workbook,
	not just the ones from the first sheet, in the Select Table dialog box.
	
	1. From the Get Data drop-down list, click Open Data Source.
	
	2. Locate and select the Microsoft Excel file. Make sure that the Select Method
	  box in the Open Data Source dialog box is selected.
	
	3. Click Open.
	
	4. Select Microsoft Excel Files via ODBC in the Confirm Data source dialog box.
	  Click OK.
	
	5. In the Select Table dialog box, specify the table from the list (which will
	  only show the first worksheet in the workbook) or click Options and select
	  System Tables, and specify the worksheet you want to use. Click OK.
	
	6. Click Edit Main Document and continue with the merge process.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  
	
	  Q116470 WD: Sheet1 is the Only Microsoft Excel Sheet Available with Word DDE
	
	Additional query words: mail merge mm mmh xl5 xl7 xl97 wks xls convert insert datafile data file database base howto
	
	======================================================================
	Keywords          : kbualink97 word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
