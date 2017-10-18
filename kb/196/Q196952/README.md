---
layout: page
title: "Q196952: WD97: Word Could Not Re-Establish DDE Connection to MS Excel"
permalink: kb/196/Q196952/
---

## Q196952: WD97: Word Could Not Re-Establish DDE Connection to MS Excel

	Article: Q196952
	Product(s): Word 97 for Windows
	Version(s): 5.0,7.0,7.0a
	Operating System(s): 
	Keyword(s): kbdta word97 kbmerge
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Excel for Windows, version 5.0 
	- Microsoft Excel for Windows 95, versions 7.0, 7.0a 
	- Microsoft Excel 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you specify a range when you attach a Microsoft Excel spreadsheet as a mail
	merge data source using dynamic data exchange (DDE), the following error
	messages may occur
	
	  This task is taking longer than expected.
	  Do you want to continue waiting?
	
	followed by:
	
	  Word could not re-establish a DDE connection to Microsoft Excel to complete
	  the current task.
	
	CAUSE
	=====
	
	Case 1: Selecting Ignore Other Applications
	-------------------------------------------
	
	This error occurs if the Ignore Other Applications check box in Microsoft Excel
	is selected. To locate this option in Microsoft Excel, click Options on the
	Tools menu, and then click the General tab.
	
	Case 2: Using a Colon to Specify a Range of Cells
	-------------------------------------------------
	
	This error also occurs if you use a colon to specify a range of cells. For
	example, if you specify a range by typing "A1:G6" or "R1C1:R6C7" in the
	Microsoft Excel dialog box that appears after you select a spreadsheet, this
	error occurs. If you use a different separator (such as a comma, period, or
	semicolon) the data source opens as expected.
	
	WORKAROUND
	==========
	
	Case 1: Selecting Ignore Other Applications
	-------------------------------------------
	
	In Microsoft Excel, clear the Ignore Other Applications check box and use a name
	to define the range of data you want to use as the mail merge data source. In
	Word, when the Microsoft Excel dialog box appears, select that name in the Named
	or Cell Range list. This method works whether you open the spreadsheet using DDE
	or the Microsoft Excel converter.
	
	Case 2: Using a colon to specify a range of cells
	-------------------------------------------------
	
	On the Tools menu, click Mail Merge, click the Get Data button, and click Open
	Data Source. Ensure that the Select Method check box is selected. When Word
	prompts you to confirm the data source, select Microsoft Excel Worksheet Via
	Converter (*.xls) from the Open Data Source list. When you use the converter,
	the error does not occur, even if you specify a range using a colon as the
	separator.
	
	MORE INFORMATION
	================
	
	Word Help contains incorrect information in the Microsoft Excel Dialog Box Help
	topic. This Help topic states the following:
	
	  Select a named range of cells or type the row and column references
	  you want to use from the worksheet. For example, A1:C5 includes the
	  information in cells A1 through C5.
	
	Typing the row and column references will not produce the results you expect.
	
	Additional query words: mail DDE delimiter winword cell range separator colon comma semicolon semi-colon officeinterop excel97 merge mailmerge excel reestablish
	
	======================================================================
	Keywords          : kbdta word97 kbmerge 
	Technology        : kbWordSearch kbExcelSearch kbWord97 kbWord97Search kbExcel95 kbExcel500 kbZNotKeyword2 kbExcel95Search kbExcel97Search kbZNotKeyword3 kbExcel95a kbExcelWinSearch
	Version           : :5.0,7.0,7.0a
	Issue type        : kbprb
	
	=============================================================================
	
