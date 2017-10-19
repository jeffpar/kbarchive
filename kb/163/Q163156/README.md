---
layout: page
title: "Q163156: WD97: Gridlines Missing from Cells Pasted as Excel Object"
permalink: /kb/163/Q163156/
---

## Q163156: WD97: Gridlines Missing from Cells Pasted as Excel Object

	Article: Q163156
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbprint kbualink97 word97
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Excel 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you copy a range of cells in Microsoft Excel and then paste them into a Word
	document as an Microsoft Excel object (using the Paste Special command), the
	gridlines do not appear.
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods.
	
	Method 1: To Correct the Problem from Word
	------------------------------------------
	
	Double-click the Microsoft Excel object to initiate in-place editing, and then
	click outside of the object. Word will refresh the Microsoft Excel object and
	will now properly display the gridlines.
	
	Method 2: To Correct the Problem from Microsoft Excel
	-----------------------------------------------------
	
	1. In Microsoft Excel, open the appropriate workbook.
	
	2. On the File menu, click Page Setup, and then click the Sheet tab.
	
	3. Under Print, click Gridlines, and then click OK.
	
	4. Select the worksheet range. On the Edit menu, click Copy.
	
	5. In Word, place the insertion point at the location where you want the
	  Microsoft Excel object.
	
	6. On the Edit menu, click Paste Special. Under As, select Microsoft Excel
	  Worksheet Object, and then click OK.
	
	Word will now insert the Microsoft Excel object with gridlines.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q129445 XL: New Worksheet Previewed and Printed Without Gridlines
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbprint kbualink97 word97 
	Technology        : kbWordSearch kbExcelSearch kbWord97 kbWord97Search kbZNotKeyword2 kbExcel97Search kbZNotKeyword3 kbExcelWinSearch
	Version           : WINDOWS:97
	
	=============================================================================
	
