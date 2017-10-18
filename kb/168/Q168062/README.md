---
layout: page
title: "Q168062: WD97: Table Row Does Not Increase to Show All Vertical Text"
permalink: kb/168/Q168062/
---

## Q168062: WD97: Table Row Does Not Increase to Show All Vertical Text

	Article: Q168062
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change the Text Direction of text inside of a table cell to a vertical
	orientation, the table cell may not be resized enough to show all of your text.
	If you have more than a few lines of text, the text may be cut off when it is
	rotated vertically.
	
	CAUSE
	=====
	
	The height of the table row changes from an Auto setting to an At least 56.7 pt
	setting when you change the text orientation of the text in the cell to
	vertical.
	
	WORKAROUND
	==========
	
	Change the height of the table row containing the vertically oriented text by
	using one of the following methods.
	
	Method 1: Using Menu Commands
	-----------------------------
	
	1. Position the insertion point in the table row you want to correct.
	
	2. On the Table menu, click Select Row.
	
	3. On the Table menu, click "Cell Height and Width."
	
	4. Click the Row tab.
	
	5. In the At box, increase the setting of the row height to a value that will
	  accommodate the amount of rotated text in the table cells and click OK.
	
	Method 2: Using the Mouse
	-------------------------
	
	Move the insertion point to the bottom border of the affected row. When the
	insertion point turns into two parallel lines with arrows pointing both upward
	and downward, click the mouse and move it down to increase the cell height to
	the proper setting.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	REFERENCES
	==========
	
	For additional information about the resetting of row heights, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q166452 Table Row Height Set To At Least After Vertical Merge
	
	  Q165882 WD97: Bottom Table Row Will Not Resize With Mouse
	
	  Q165906 Table Row Can't Be Displayed If Larger Than Page Height
	
	For more information about "adjusting the height of a table row," click the
	Office Assistant, type "table row height" (without the quotation marks), click
	Search, and then click "Change the row height in a table."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: 97 word97 cropped cutoff hidden
	
	======================================================================
	Keywords          : kbusage kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
