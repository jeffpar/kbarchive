---
layout: page
title: "Q139347: How to Delete a Control from a Column in a Grid"
permalink: /kb/139/Q139347/
---

## Q139347: How to Delete a Control from a Column in a Grid

	Article: Q139347
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to delete a control from a column in a grid.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	The default control in a grid column is a text box. If you drop a control on a
	grid column, both controls exist in the grid column. The following steps show
	how to delete the text box:
	
	1. Create a new form.
	
	2. Place a grid on the form.
	
	3. Set the grid's ColumnCount to 2. (The columns will display.)
	
	4. Right-click the grid, and then click Edit.
	
	5. Click the check box button on the Forms Controls toolbar.
	
	6. Click column 1 of the grid to drop the check box in that grid column.
	
	7. Click the down arrow on the Object list box of the Properties Sheet, and note
	  there are two controls (Text1 and Check1) under Column1.
	
	8. To delete Text1, select Text1 from the list. Then click the Form Designer's
	  title bar to make it active, and press the DELETE key.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
