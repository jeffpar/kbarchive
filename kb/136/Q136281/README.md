---
layout: page
title: "Q136281: FIX: GridBuilder Gives Data Type Error After Fields Rearranged"
permalink: /kb/136/Q136281/
---

## Q136281: FIX: GridBuilder Gives Data Type Error After Fields Rearranged

	Article: Q136281
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The "Data Type Mismatch" error message appears when the form starts.
	
	CAUSE
	=====
	
	The Grid Builder leaves the original control as the column's CurrentControl
	property even though the CurrentControl has changed.
	
	WORKAROUND
	==========
	
	Enter the correct CurrentControl manually or through the Grid Builder. Then
	delete the incorrect control along with the text box from the column.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	In Visual FoxPro 5.0, if the order of the fields is changed in step 1, then the
	choices for Control Type in step 3 are set back to the default of a text box.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a form called MyGrid.
	
	2. Add a data environment to the form giving Tastrade!Products as the table.
	
	3. Drag the table from the data environment to the form to create the grid.
	
	4. Using the right mouse button, click the grid, and select Builder.
	
	5. Add Unit_Price and Discontinued to the grid.
	
	6. Click Tab 3, and change the Unit_Price's ControlType property to a spinner
	  and the Discontinued property to a check box. Click OK.
	
	7. Using the right mouse button, click the grid and select Builder.
	
	8. On Page 1 of the Builder, change the positions of the columns in the grid
	  using mover box controls. Click OK.
	
	9. Run the form, and verify that the "Data Type Mismatch" error occurs but the
	  form will run.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
