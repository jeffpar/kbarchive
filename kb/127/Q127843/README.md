---
layout: page
title: "Q127843: How to Place a Command Button in a Grid Cell Visually"
permalink: kb/127/Q127843/
---

## Q127843: How to Place a Command Button in a Grid Cell Visually

	Article: Q127843
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to place a command button in a grid cell by
	using the Form Designer. These steps may also be used to place other Visual
	FoxPro controls in grid cells.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Open a new form. From the File menu, choose New. Then select Form and click
	  the New File push button.
	
	2. Place a new grid on the form by clicking the Grid Tool on the Form Controls
	  Toolbar and then drawing the box for the Grid on the Form.
	
	3. On the Properties Sheet, under the All tab, change the ColumnCount property
	  to 2. (This example will provide a 2 column grid.)
	
	4. Select Column1 from the Object DropDown in the Properties sheet.
	
	5. Change the Sparse property to .F. if you want the command button to appear on
	  every row no matter where the cursor is. Leave the Sparse Property set to the
	  default of .T. if you want the command button to appear only on the row the
	  cursor is on.
	
	6. With Column1 still selected, click the command button tool on the Form
	  Controls Toolbar. Then click any row in Column1. On the Properties sheet, you
	  should see that the Object Command1 is selected.
	
	7. Change the Caption property of Command1 to "Push Me" (as an example).
	
	8. In the Click event of the command button, type this command:
	
	     WAIT WINDOW "I'm here!"
	
	9. Select Column1 from the Object DropDown. Highlight the CurrentControl
	  property under the All tab. Select Command1 from the DropDown, or
	  double-click the property name.
	
	10. Add a table to the Data Environment. You may do this by choosing Data
	  Environment from the View menu. Then click the right-mouse button and select
	  Add Table. Now select a table from a currently open database, or select a
	  Free Table. Once you have added a table, close the Data Environment window.
	
	11. Select Column2 from the Object DropDown in the Properties sheet.
	
	12. Set the ControlSource to one of the fields in the table you added to the
	  Data Environment.
	
	13. Save the form, and run it.
	
	Additional query words: VfoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
