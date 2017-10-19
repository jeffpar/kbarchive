---
layout: page
title: "Q176894: HOWTO: Append Data from a Single Sheet of an Excel Workbook"
permalink: /kb/176/Q176894/
---

## Q176894: HOWTO: Append Data from a Single Sheet of an Excel Workbook

	Article: Q176894
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnokeyword kbHWMAC kbvfp300 kbvfp500
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The undocumented SHEET clause of the APPEND FROM command allows you to import
	records from a specific sheet of a Microsoft Excel 5.0 workbook.
	
	MORE INFORMATION
	================
	
	The following example shows how to import the data in a second sheet named
	sheet2 from an Excel workbook into a Visual FoxPro 3.0x or 5.0x table.
	
	1. Start Microsoft Excel version 5.0 or later.
	
	2. Create a new workbook.
	
	3. In Sheet1 of the workbook, type the following in separate cells, A1 through
	  C1:
	
	        The     first     sheet
	
	4. Click on Sheet2 of the workbook and type the following data in the cells of
	  sheet2 beginning in cell A1 and ending in cell C3:
	
	        The     first     record
	        The     second    record
	        The     third     record
	
	  When this data is appended into the FoxPro table, it creates three records
	  containing three fields.
	
	5. Save the workbook in the Visual FoxPro home folder as a Microsoft Excel 5.0
	  Workbook (.xls) named Zbook1.xls and close Excel.
	
	6. Start Visual FoxPro 3.0x or 5.0x and create a table using the following
	  command:
	
	        CREATE TABLE zjunk (first c(10), second c(10), third c(10))
	
	7. Append the cells from Sheet2 to the first three records of table Ztest with
	  the following command:
	
	        APPEND FROM zbook1.xls TYPE XL5 SHEET SHEET2
	
	  When you browse the table you should see three records that contain the data
	  from sheet2.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbHWMAC kbvfp300 kbvfp500 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300b kbVFP500 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	
