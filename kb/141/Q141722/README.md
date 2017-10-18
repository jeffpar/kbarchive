---
layout: page
title: "Q141722: How to Prevent a Grid Header from Being Resized Interactively"
permalink: kb/141/Q141722/
---

## Q141722: How to Prevent a Grid Header from Being Resized Interactively

	Article: Q141722
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In a grid object, the default behavior allows a user to resize the header by
	clicking and dragging it. The grid header could potentially be pulled down so
	that it covers the entire grid object and all of the data contained within it.
	This article demonstrates how to use program code to prevent a user from
	resizing the header of a grid.
	
	MORE INFORMATION
	================
	
	The following example creates a new property for the form to store the original
	size of the grid's HeaderHeight Property. Then, in the MouseUp event of the
	grid, the HeaderHeight Property is reset to its the original size should a user
	attempt to change it while running the form.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new form.
	
	2. On the Form menu, click New Property, and create a property called
	  oldheadheight.
	
	3. Place the following code in the Init event of the form:
	
	     THIS.oldheadheight=THISFORM.Grid1.HeaderHeight
	
	4. Add the Customer table to the Data Environment of the form (on the View menu,
	  click Data Environment, and then right-click within the Data Environment and
	  select Add. Within the Add Table or View dialog box, select Other and locate
	  the Customer.dbf as follows:
	
	  C:\Vfp\Samples\Data\Customer.dbf
	
	5. Click the title bar of the Customer table, and drag it onto the form to
	  create a grid.
	
	6. With the grid as the selected object on the form, set the ColumnCount
	  property to 4.
	
	7. Add the following code to the MouseUp event of the grid:
	
	     THIS.HeaderHeight=THISFORM.oldheadheight
	
	8. Save the form as Test. Close it, and use the DO FORM command to run the form.
	
	9. Attempt to resize the header by clicking and dragging from the top, left
	  corner of the grid and notice that it snaps back to its original position
	  once the mouse button is released.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
