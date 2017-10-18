---
layout: page
title: "Q138913: How to Activate and Use the Record Marker of a Grid"
permalink: kb/138/Q138913/
---

## Q138913: How to Activate and Use the Record Marker of a Grid

	Article: Q138913
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The record marker is the small box on the leftmost side of each record in the
	grid. There will be a black arrow in the record marker of the current record if
	the grid has the focus. The record marker of a grid does not move when scrolling
	though a table if the grid does not have the focus as the record pointer is
	being moved.
	
	If the grid does not have focus, then the record marker will not appear beside
	the current record until the grid receives the focus. The record marker box is
	available only if the RecordMark property of the grid is set to true. Use the
	SetFocus property to make the record marker of the grid refresh every time a
	record is moved.
	
	MORE INFORMATION
	================
	
	Step-by-Step Demonstration
	--------------------------
	
	1. Create a new form and place a grid on it. While the mouse pointer is over the
	  grid, click the right mouse button, and then click the Builder to place
	  fields in the grid easily.
	
	2. Place a command button on the form and add the following code to its Click
	  event:
	
	     SKIP
	
	3. Run the form and note that the record marker doesn't appear in the grid until
	  the grid is clicked.
	
	4. Close the form, and then modify it, adding the following line of code after
	  the SKIP command in the Click event of the command button:
	
	     THISFORM.GRID1.SETFOCUS()
	
	5. Run the form and click the command button. Note that the record marker moves
	  as the record pointer of the table is moved with the command button.
	
	Adding the Next and Previous Buttons
	------------------------------------
	
	If you are using command buttons created by the Form Wizard, place the following
	code in the Next button of the command button group:
	
	     TXTBTNS.CMDNEXT::CLICK
	     THISFORM.GRID1.SETFOCUS()
	
	This will call the code in the Click event of the base class of the Next button.
	To make the Prior button work, change the CMDNEXT to CMDPRIOR in the above
	code.
	
	Setting the focus to the grid each time that the record pointer is moved allows
	the record marker to be updated. If another object on the form is clicked, the
	record marker will disappear until the grid receives the focus again.
	
	Additional query words: VFoxwin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	
