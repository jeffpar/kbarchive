---
layout: page
title: "Q148408: PRB: When Event Fires Again Upon Leaving a Grid Column"
permalink: kb/148/Q148408/
---

## Q148408: PRB: When Event Fires Again Upon Leaving a Grid Column

	Article: Q148408
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
	
	If there is only one column enabled in a grid and you try to use SetFocus to
	move the focus programmatically to another object such as a command button, the
	focus moves to the command button correctly but the grid also moves the active
	grid cell to highlight the next available cell. Because there is only one active
	column, there is no "next available cell," so the cell that's activated ends up
	being the same that fired the When event, so the When event of that column fires
	again.
	
	RESOLUTION
	==========
	
	There are a number of workarounds for this situation:
	
	- Add a small dummy column to the grid so that the focus can move off the
	  original cell that implemented the When event onto the dummy column.
	
	-or-
	
	- Set the SelectedOnEntry property to False so that the effect is less
	  noticeable.
	
	-or-
	
	- If the problem is that the When event fires when you manually try to move to
	  another object in the VALID, check for movement key presses such as TAB or
	  ENTER in the KeyPress method of the column, and substitute with CTRL+TAB,
	  which will prevent the attempt to move the pointer to the next column.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form. Place a grid (Grid1) and a command button (Command1) on
	  the form.
	
	2. Set the following properties of the Grid:
	
	     ColumnCount=3
	     Column1.Enabled=.F.
	     Column2.Enabled=.T.
	     Column3.Enabled=.F.
	
	3. Place the following code in the When event for Grid1.Column2.Text1:
	
	     WAIT WINDOW 'In WHEN for Col2' NOWAIT
	
	4. Add the following code to the Valid method Grid1.Column2.Text1:
	
	     THISFORM.Command1.SetFocus
	
	5. Run the form, and press TAB from within the grid. The focus moves to
	  Command1, but the When event of the grid still fires.
	
	6. To remedy the problem, add the following code to the KeyPress method for
	  Grid1.Column2.Text1:
	
	     IF nKeyCode=9 OR nKeyCode=13
	       NODEFAULT
	       KEYBOARD '{CTRL+TAB}'
	     ENDIF
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
