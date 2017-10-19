---
layout: page
title: "Q138981: HOWTO: Create a Calculated Column in a Grid"
permalink: /kb/138/Q138981/
---

## Q138981: HOWTO: Create a Calculated Column in a Grid

	Article: Q138981
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbvfp300 kbvfp500 kbvfp600
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can create a calculated column in a grid by entering the calculation in the
	ControlSource property for the column.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	The following steps create a form containing a simple grid. The third column of
	the grid is the product of the values in the first two columns.
	
	1. Create a new form.
	
	2. In Visual FoxPro 3.0, add the Order_Line_Items table from the Tastrade.dbc
	  database located in the \Vfp\Samples\Mainsamp\Data directory to the data
	  environment of the form.
	
	  -or-
	
	  In Visual FoxPro 5.0, add the Order_Line_Items table from the Tastrade.pjx
	  database located in the \Vfp\Samples\Tastrade directory to the data
	  environment of the form.
	
	3. Drag the table by its title bar from the data environment onto the form to
	  create a grid.
	
	4. Set the Grid.ColumnCount property to 3.
	
	5. Set the ControlSource property for each column as follows:
	
	        Column1.ControlSource = unit_price
	        Column2.ControlSource = quantity
	        Column3.ControlSource = unit_price * quantity
	
	6. Save and run the form.
	
	The third column will show the extended price (unit price times quantity) for
	each record in the grid.
	
	The grid will not automatically update a field in the table because the
	ControlSource is not bound to a specific field. If you need to store the
	calculation in a field, add the following code to the AfterRowColChange event,
	or to the record validation in the Database Designer:
	
	     REPLACE fieldname WITH unit_price * quantity
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
