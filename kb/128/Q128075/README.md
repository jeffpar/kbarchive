---
layout: page
title: "Q128075: PRB: Grid Does Not Respond to the Click or Dblclick Events"
permalink: /kb/128/Q128075/
---

## Q128075: PRB: Grid Does Not Respond to the Click or Dblclick Events

	Article: Q128075
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The methods associated with the Click or DblClick events of a grid are not
	executed when a user clicks any element of the Grid. It seems events are not
	triggered when the grid is filled with data.
	
	CAUSE
	=====
	
	This behavior is by design. A grid object is a container of columns. Columns in
	turn contain controls. Methods defined in a container are not inherited in the
	container hierarchy. For example, the code you include in the Click event of a
	form is not executed when you click a command button.
	
	When a grid is filled with data and you click a cell in the grid, the control, a
	text box by default, receives the Click event. The grid receives the click event
	in areas that contain no data.
	
	WORKAROUND
	==========
	
	Use the Click event procedure of the control to trap for a mouse click in a
	filled record.
	
	Another way to trap for a mouse click anywhere on the grid is to cover the grid
	with a shape, and place code in the Click event of the shape. Make sure the
	Backstyle property of the shape is set to 0 for transparent and that the shape
	is on top. If the shape is not on top of the grid, you can place it there by
	selecting "Bring to Front" on the layout toolbar when the shape is selected.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. When the form is displayed, choose Data Environment from the View menu.
	
	3. When the Data Environment window is displayed, click the right mouse button
	  and select Add. Add the CUSTOMER table from the SAMPLES\DATA directory.
	
	4. Drag the table from the Data Environment to the Form. A grid is created.
	
	5. In the property sheet, select the Grid1 object, and modify the value of the
	  Columncount property from -1 to 2.
	
	6. Double-click the Click Event entry in the Property Sheet to open the code
	  window. Type the following code and close the code window:
	
	     WAIT WINDOW "This is the Grid"
	
	7. In the Property sheet, select the Text1 Object.
	
	8. Open the code window for the Click event of Text1, and enter this code:
	
	     WAIT WINDOW "This is the Text control"
	
	9. Save the form, and run it.
	
	When the form is displayed, click several areas of the grid. The parts with data
	in the first column will display "This is the Text control"; the areas of the
	grid with no data will display a WAIT WINDOW with "This is the Grid."
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
