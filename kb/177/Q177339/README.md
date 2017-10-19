---
layout: page
title: "Q177339: PRB: OLE Error When Appending from Excel 97 Workbook"
permalink: /kb/177/Q177339/
---

## Q177339: PRB: OLE Error When Appending from Excel 97 Workbook

	Article: Q177339
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbinterop kbole kbvfp
	Last Modified: 06-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the APPEND FROM <filename> TYPE XL5 to import an Excel 97
	workbook into a FoxPro table, one of two OLE error messages appear:
	
	Visual FoxPro versions 3.0x and 5.0x running on Windows 95 produces the following
	error:
	
	  OLE error code
	  0X800300002:%1
	  could not be found
	
	Running on Windows NT 4.0 produces the following error:
	
	  OLE error code
	  0X800300002:
	  unknown OLE status code
	
	CAUSE
	=====
	
	The APPEND FROM command in Visual FoxPro versions 3.0x and 5.0x does not support
	Excel 97 workbook files.
	
	RESOLUTION
	==========
	
	Here are two resolutions:
	
	- Save the Excel workbook in Excel as a Microsoft Excel 5.0/95 workbook and use
	  the APPEND FROM command with the TYPE XL5 clause.
	
	  -or-
	
	- Save the file as a Microsoft Excel 4.0, 3.0 or 2.1 worksheet and use the TYPE
	  XLS clause.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Since both error messages are OLE errors and most developers do not consider
	APPEND FROM to be an OLE command, it is not apparent that the Excel file type is
	causing the error to occur.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Microsoft Excel 97 and create a new workbook.
	
	2. In cells A1 through C1, type the following data:
	
	  " Some test data " (without the quotation marks)
	
	3. Save the file to your Visual FoxPro home folder with the name Ztest.xls as a
	  Microsoft Excel Workbook (*.xls) and then close Excel.
	
	4. Start Visual FoxPro and type the following command in the FoxPro Command
	  window to create a test table:
	
	        CREATE TABLE ztest (first c(10), second c(10), third c(10))
	
	5. In the FoxPro Command window, type the following command to import data from
	  the Excel workbook:
	
	        APPEND FROM Ztest.xls TYPE XL5
	
	  The error that appears depends on the operating system on the machine.
	
	Additional query words: Excel APPEND FROM OLE
	
	======================================================================
	Keywords          : kbinterop kbole kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : WINDOWS:3.0b,5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	
