---
layout: page
title: "Q131504: PRB: Trouble Implementing Drill Down in Visual FoxPro Grid"
permalink: /kb/131/Q131504/
---

## Q131504: PRB: Trouble Implementing Drill Down in Visual FoxPro Grid

	Article: Q131504
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a grid's Click or Dblclick method contains drill-down code that enables the
	user to move to (drill down to) detailed information, then as long as the mouse
	pointer (cursor) is over a filled cell, neither the Click nor Dblclick methods
	of the grid respond. Instead, the Click and Dblclick events select the text
	field and allow data editing in the field if the appropriate property is set to
	true.
	
	The only way to get the grid's Click and Dblclick methods to respond is to place
	the pointer over a part of the grid that does not have records in it.
	
	CAUSE
	=====
	
	The Grid-level Click or Dblclick methods do not work when the pointer is over a
	non-empty cell of the grid. They are designed to work only if the pointer is
	over an empty cell.
	
	RESOLUTION
	==========
	
	To trap for a mouse click or double-click in a filled record cell, you should
	place the drill-down code in the Click or Double-Click event of the
	CurrentControl object of the Grid Column. For example, if Text1 is the
	CurrentControl for Column1 of Grid1, then place the Drill-Down code in
	Grid1.Column1.Text1.Click|DblClick event, not in the Grid1.Click|DblClick event.
	Events that occur over the cells are trapped by the object contained in the
	columns, which in this case is Text of the Grid.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	A Drill-Down implementation allows you to display detailed information for a
	specific object. You may want to display detailed information, such as a list of
	all the fields, for a specific record in a grid by clicking or double-clicking
	with the mouse on one of its cells or fields.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
