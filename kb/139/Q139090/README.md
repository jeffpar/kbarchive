---
layout: page
title: "Q139090: HOWTO: Highlight a Row in a Grid that Has Lost the Focus"
permalink: kb/139/Q139090/
---

## Q139090: HOWTO: Highlight a Row in a Grid that Has Lost the Focus

	Article: Q139090
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbvfp300 kbvfp500 kbvfp600
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When focus has moved from the grid, it can be hard to determine which record is
	selected in the grid. Highlighting the record will provide a visual clue to the
	user. This is accomplished using the When and Valid events as demonstrated in
	this article.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	The following steps show how to highlight the selected record when the grid has
	lost the focus. The code will produce a red highlight on the record when you
	leave the grid.
	
	1. Create a new form, and add the Customer and Orders tables from
	  Samples\Data\Testdata.dbc to the Data Environment.
	
	2. Drag the Company field from the Customer table in the Data Environment to the
	  form. This creates a text box and sets its ControlSource property to Company.
	
	3. Drag the Orders table from the Data Environment to the form to create a grid
	  and set its RecordSource property to Orders.
	
	4. In the grid's Valid Event, place the following line of code to turn the
	  highlight on: This.SetAll("DynamicBackColor",STR(RGB(255,0,0)),"Column")
	
	5. In the grid's When event, place the following line of code to turn the
	  highlight off:
	
	     This.SetAll("DynamicBackColor",STR(RGB(255,255,255)),"Column")
	
	6. If you are using navigation buttons, add the following code to the ReFresh
	  Method of the grid:
	
	     This.SetAll("DynamicBackColor",STR(RGB(255,255,255)),"Column")
	
	7. Save and run the form.
	
	As the user clicks from the grid to the text box, the red highlight will appear.
	Clicking the grid removes the highlight. If you are using navigation buttons,
	when you click one of them, the highlight is removed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
