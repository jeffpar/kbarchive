---
layout: page
title: "Q195368: WD97: Drag-and-Drop Edit Won't Swap Positions of 2 Table Rows"
permalink: /kb/195/Q195368/
---

## Q195368: WD97: Drag-and-Drop Edit Won't Swap Positions of 2 Table Rows

{% raw %}

	Article: Q195368
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta winword word97 kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you drag a row to the row beneath it, the contents of the rows remain
	unchanged.
	
	NOTE: If you select all the cells in a row but do not select the final cell mark
	(visible if you click the Show All button on the toolbar), dragging these cells
	to another row deletes the text of the second row.
	
	For example, if you select row 1 and drag it to row 2, the table stays the same.
	
	  Before dragging row 1 to row 2       After dragging row 1 to row 2
	                                       (no difference)
	
	    -------                              -------
	   | row 1 |  --                        | row 1 |
	    -------     |                        -------
	   | row 2 | <--                        | row 2 |
	    -------                              -------
	   | row 3 |                            | row 3 |
	    -------                              -------
	
	However, if you select row 1 and drag it to row 3, the table now looks like
	this:
	
	  Before dragging row 1 to row 2       After dragging row 1 to row 3
	                                       (first two rows swap places)
	
	    -------                              -------
	   | row 1 |  --                        | row 2 | <--
	    -------     |                        -------     |
	   | row 2 |    |                       | row 1 | <--
	    -------     |                        -------
	   | row 3 | <--                        | row 3 |
	    -------                              -------
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1
	--------
	
	Place the insertion point in the first row, and press ALT+SHIFT+DOWN ARROW. It is
	not necessary to select the row before doing this.
	
	Method 2
	--------
	
	Select the lower row and drag it up to the first row.
	
	Example:
	
	  Before dragging row 2 to row 1       After dragging row 2 to row 1
	                                       (rows 2 and 1 trade places)
	
	    -------                              -------
	   | row 1 | <--                        | row 2 | <--
	    -------     |                        -------     |
	   | row 2 |  --                        | row 1 | <--
	    -------                              -------
	   | row 3 |                            | row 3 |
	    -------                              -------
	
	MORE INFORMATION
	================
	
	To select the entire row of a table, move the mouse pointer to the left of the
	table and click once. Or click a cell in the table and then click Select Row on
	the Table menu.
	
	This same problem occurs within unmarked, bulleted, or numbered lists.
	
	Additional query words: swap trade remain transpose howto 8.0 8.00
	
	======================================================================
	Keywords          : kbualink97 kbdta winword word97 kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
