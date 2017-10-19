---
layout: page
title: "Q188012: WD97: Rows or Columns Missing from Pasted Microsoft Excel Sheet"
permalink: /kb/188/Q188012/
---

## Q188012: WD97: Rows or Columns Missing from Pasted Microsoft Excel Sheet

	Article: Q188012
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbole kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you paste or paste link a large Microsoft Excel spreadsheet in a Microsoft
	Word document, Word may not include all the columns or rows of the spreadsheet.
	
	CAUSE
	=====
	
	By design, when you paste or paste link the spreadsheet in a format other than
	Rich Text Format (RTF), Word cuts off the columns and rows that exceed the
	margins of the current page.
	
	In other words, if you paste or paste link the spreadsheet in any of the
	following formats, Word cuts off any columns and rows that exceed the right and
	bottom margins:
	
	- Microsoft Excel 5.0 Worksheet Object
	
	- Unformatted Text
	
	- Picture
	
	- Bitmap
	
	
	WORKAROUND
	==========
	
	If your Microsoft Excel spreadsheet exceeds the margins of your current page and
	you do not want Word to cut off any columns or rows, paste or paste link it in
	RTF file format. To do this, follow these steps:
	
	1. On the Edit menu, click Paste Special.
	
	2. In the As box, select Formatted Text (RTF).
	
	3. Select the Paste or Paste Link option, and then click OK.
	
	NOTE: If the spreadsheet fits on the current page but not within the margins, you
	may be able to paste the entire spreadsheet as an object by decreasing the
	margin settings for that section. For example, if Word is cutting off only one
	column of your spreadsheet, change the left and right margins from 1 inch to 0.5
	inch.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbole kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
