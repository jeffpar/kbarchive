---
layout: page
title: "Q130863: PRB: Cannot Change Mouse Pointer for Non-Active Cells in Grid"
permalink: kb/130/Q130863/
---

## Q130863: PRB: Cannot Change Mouse Pointer for Non-Active Cells in Grid

	Article: Q130863
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can change the mouse pointer property for controls like the Text1 box under
	columns in a grid, but the change is only reflected for the active cell in that
	column. Inactive cells in that column still show the default mouse pointer
	(cursor). The default mouse pointer depends on the type of control in the grid
	column.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following table lists the controls that can be displayed in grid columns and
	the default mouse pointers associated with those controls:
	
	Control Type      Default Mouse Pointer
	---------------------------------------
	text box          I beam
	combo box         I beam
	logical           arrow
	spinner           arrow
	edit box          arrow
	list box          arrow
	option buttons    arrow
	check box         arrow
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form, and add a table to the data environment.
	
	2. Drag the table header to the form to create a grid.
	
	3. Select grid1 in the property sheet.
	
	4. Change the column count property of the grid to 2.
	
	5. Assign the controlsource property of columns 1 and 2 to some field.
	
	6. Select text1 under column 1.
	
	7. Scroll to the mousepointer property. Choose arrow from the list.
	
	8. Run the form.
	
	The mouse pointer over column 1 of the grid shows as an I beam if the cell has
	not been selected. If a cell is selected in column 1, the mouse pointer shows as
	an arrow over that cell and shows as the default I beam over the other cells in
	that column. When the active cell is in column 2, the pointer is an I beam over
	it because no change was made to the mousepointer property for text1 under
	column 2.
	
	If text1 under column 2 is replaced with edit1, the default cursor for the column
	becomes an arrow. If the mouse pointer is changed to an icon, the only place the
	icon appears is over the scroll bars of the active edit box field. In all other
	places, the pointer remains an arrow for that column. The effect of the changing
	the mousepointer property depends on the type of control selected for a column.
	
	NOTE: Controls are added to grid columns by clicking the control in the form
	toolbox and then clicking the column.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
