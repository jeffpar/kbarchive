---
layout: page
title: "Q148685: PRB: Changing Partition Formatting Causes Grid to Jump Around"
permalink: kb/148/Q148685/
---

## Q148685: PRB: Changing Partition Formatting Causes Grid to Jump Around

	Article: Q148685
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the View property of a grid, you'll find that the Browse-Change or
	Change-Browse works correctly but might not produce the look you want. The
	record pointer moves through the table on the browse side. However, as you move
	through the records on the browse side of the grid, the change side does not
	place the field that is scrolled through at the top of the grid as another
	record is selected. The field on the change side appears, but it doesn't appear
	in a specific place.
	
	STATUS
	======
	
	This behavior is by design. As the next record is selected, the change side of
	the grid is issued a page up or down to get to that record. Depending on the
	number of fields that there are in the table, the paging stops when it gets to a
	field in that record.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form. Right-click the form, and choose the Data Environment.
	  Then right-click again in the Data Environment box, and choose the Add Table
	  menu.
	
	2. Add any table to the Data Environment. Then drag the heading of the table to
	  the form to place a grid on the form.
	
	3. Change the grid's Partition property to 100. Select Browse - Change from the
	  View property of the grid.
	
	4. Run the form. Click the first field on the Browse side, and press the DOWN
	  arrow key.
	
	Note that the corresponding field on the change side does not show up at the top
	of the grid as the record pointer is moved. The corresponding field is displayed
	at different positions in the grid. This is because the fields on the change
	side are internally paged through, so the field isn't necessarily placed at the
	top each time another record is selected.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
