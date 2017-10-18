---
layout: page
title: "Q197744: WD97: Text in Table Row/Column Cut Off Below Page Break"
permalink: kb/197/Q197744/
---

## Q197744: WD97: Text in Table Row/Column Cut Off Below Page Break

	Article: Q197744
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a table row breaks across a page break, the text may be cut off and may not
	flow to the next page.
	
	NOTE: This problem can be seen in page layout view or online layout view and when
	you print the document.
	
	CAUSE
	=====
	
	You cannot force the height of a table row (or column cell) to be greater than
	the actual page height of the document. The text contained in a table row or
	column may be cut off (truncated) due to the following causes:
	
	Height of Row Greater Than Page Height
	--------------------------------------
	
	When you set the height of a table row to At Least or Exactly, or when you drag
	the bottom of a table row so that it exceeds the allowable page size, Word cuts
	off the bottom of the row below the page break.
	
	This problem occurs when either of the following conditions is true:
	
	- The height of the row is greater than the height of a page.
	
	-or-
	
	- In online layout view, the height of the row is greater than the height of
	  the window.
	
	The table row flows off the bottom of the page and does not continue (break) to
	the next page.
	
	Vertically Merged Column Cells
	------------------------------
	
	When you vertically merge cells in a column that extend across a page break.
	
	WORKAROUND
	==========
	
	Use one of the following workarounds appropriate for your situation:
	
	Height of Row Greater Than Page Height
	--------------------------------------
	
	To work around this problem, use any of the following methods to change the
	height of the table row to fit on the page.
	
	Method 1: Use the Mouse
	
	Use the mouse to drag the bottom edge of the table row.
	
	NOTE: You can resize the table row using your mouse only when you are in page
	layout view or online layout view. You can't drag a table row larger when you
	are in normal, outline, or master document view.
	
	Method 2: Set the Row Height Option
	
	1. Select the table row you want to make taller.
	
	2. On the Table menu, click Cell Height and Width.
	
	3. Change Height of Row <n> to the height you want, and then click OK.
	
	Vertically Merged Column Cells
	------------------------------
	
	Do not vertically merge table cells that extend across a page break. If you try
	to instruct Word to break the row across the page break, the following error
	message is displayed:
	
	  Cannot allow this row to break across pages because of vertical or merged
	  cells.
	
	NOTE: To instruct Word to break a table row across a page break, use the
	following steps:
	
	1. Place the insertion point inside the table.
	
	2. On the Table menu, click Select Table.
	
	3. On the Table menu, click Cell Height and Width.
	
	4. On the Row tab, click to select the Allow row to break across pages check
	  box, and then click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          : word97 kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
