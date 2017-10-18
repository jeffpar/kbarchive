---
layout: page
title: "Q166982: WD97: Pressing TAB Key Moves Insertion Point to Wrong Cell"
permalink: kb/166/Q166982/
---

## Q166982: WD97: Pressing TAB Key Moves Insertion Point to Wrong Cell

	Article: Q166982
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage winword word97 kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some cases, when you press TAB in a table, the insertion point does not
	advance to the next cell.
	
	Case 1
	------
	
	1. Create a table with at least two columns in it.
	
	2. Place the insertion point in one of the cells.
	
	3. On the Table menu, click Split Cells.
	
	4. Increase the Number of Rows to at least two.
	
	5. Click OK.
	
	Case 2
	------
	
	1. Create a table with at least two columns and two rows in it.
	
	2. Select two vertical cells.
	
	3. On the Table menu, click Merge Cells.
	
	When you use the TAB key to move through the resulting cells, the insertion point
	will return to the cell that expands the height of the vertical cells.
	
	CAUSE
	=====
	
	This is by design of Microsoft Word. If one cell within a column of a table
	extends to the height of at least two vertical cells of another column of the
	table, when you press TAB, Word will move the insertion point to the cell that
	expands the height of the vertical cells.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage winword word97 kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
