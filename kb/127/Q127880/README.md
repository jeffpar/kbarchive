---
layout: page
title: "Q127880: How to View Memo Fields as Edit Boxes in a Grid"
permalink: /kb/127/Q127880/
---

## Q127880: How to View Memo Fields as Edit Boxes in a Grid

{% raw %}

	Article: Q127880
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
	
	This article shows by example how to add a control to a grid. An edit box is
	added to a Grid to see the content of a memo field as the data is browsed.
	
	MORE INFORMATION
	================
	
	
	Step-by-Step Example
	--------------------
	
	1. Create a new form. Click the right mouse button.
	
	2. Open the Data Environment, and add a table with a memo field to the Data
	  Environment. For example, add the EMPLOYEE table located in the SAMPLES\DATA
	  directory.
	
	3. Drag the table from the Data Environment to the form to create a Grid.
	
	4. Select the Grid object. Then in the property sheet, set the ColumnCount to 2.
	
	5. Select Column2 from the object drop-down in the Property Sheet.
	
	6. While Column2 is still selected, select the Edit Box control from the Form
	  Controls toolbar. Then click any row in the second column of the grid. The
	  edit box is added to the second column.
	
	7. Modify the following properties of the Column2 object:
	
	   - Sparse: set the Sparse property to .F.
	
	   - CurrentControl: select Edit1 from the drop-down.
	
	   - ControlSource: select the Notes memo field.
	
	8. Resize the height of the Grid rows to see more than one line of information.
	
	9. Save and run the form.
	
	Steps to Interactively Delete a Control from the Grid
	-----------------------------------------------------
	
	1. From the Object drop-down in the Property Sheet, select the control you want
	  to delete.
	
	2. Click the title bar of the form.
	
	3. Press the DELETE key.
	
	Additional query words: VFoxWin browse
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	

{% endraw %}
