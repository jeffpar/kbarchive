---
layout: page
title: "Q161671: WD97: &quot;Word Could Not Split...&quot; Attempting to Split Cells"
permalink: kb/161/Q161671/
---

## Q161671: WD97: &quot;Word Could Not Split...&quot; Attempting to Split Cells

	Article: Q161671
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to split table cells horizontally, you receive the following
	error message:
	
	  Word could not split the selection containing a merged cell.
	
	CAUSE
	=====
	
	The selection contains one or more cells that have been merged vertically.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods:
	
	Method 1: Split table cells separately
	--------------------------------------
	
	- Select each table cell individually and split the cell.
	
	  -or-
	
	- Select the table cells that do not include vertically merged cells, and then
	  split the cells.
	
	  -or-
	
	- Select the table cells that have been vertically merged, and then split the
	  cells.
	
	Method 2: Increase selection to include entire range
	----------------------------------------------------
	
	Select all table rows that contain cells that have been vertically merged, and
	then split the cells.
	
	MORE INFORMATION
	================
	
	Microsoft Word 97 for Windows allows you to merge table cells vertically. This
	is a new feature for Word tables.
	
	To Merge Table Cells Vertically
	-------------------------------
	
	1. Select the cells to merge.
	
	2. On the Table menu, click Merge Cells.
	
	For additional help, click the Office Assistant, type in "How do I merge table
	cells vertically" (without the quotation marks), click Search, and then click to
	view "Merge cells into one cell in a table".
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Word Help is not installed on your computer,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: 8.0 word8 word97 verticle vertical
	
	======================================================================
	Keywords          : kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
