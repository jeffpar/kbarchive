---
layout: page
title: "Q156771: PRB: DisplayValue of ComboBox is Truncated in a Grid"
permalink: kb/156/Q156771/
---

## Q156771: PRB: DisplayValue of ComboBox is Truncated in a Grid

	Article: Q156771
	Product(s): Microsoft FoxPro
	Version(s): 5.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a ComboBox is placed in a grid, the DisplayValue of the ComboBox appears
	truncated.
	
	CAUSE
	=====
	
	The DisplayValue is longer than the field to which the column is bound.
	
	WORKAROUND
	==========
	
	Set the InputMask property of the Column to the length needed for the
	DisplayValue.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The default InputMask used by the Column is calculated based on the field to
	which the column is bound (the ControlSource).
	
	Steps to Reproduce Behavior
	---------------------------
	
	This example will use the Customer table in the Visual FoxPro\SAMPLES\DATA
	directory.
	
	1. Create a new form.
	
	2. Add the Customer table of TESTDATA to the Data Environment.
	
	3. Add a grid to the form, and set the following properties for the grid:
	
	     ColumnCount = 3
	     RecordSource = Customer
	     RowHeight = 25
	
	4. Set the ControlSource property for Column1 of the grid to customer.cust_id.
	
	5. Set the ControlSource property for Column3 of the grid to customer.company.
	
	6. Add a ComboBox to Column2 of the grid and set the following properties of the
	  ComboBox:
	
	     BoundColumn = 2
	     ColumnCount = 2
	     ColumnWidths = 75,0
	     Name = Combo1
	     RowSource = customer.company, cust_id
	     RowSourceType = 6 - Fields
	
	7. Set the following properties for Column2 of the grid:
	
	     ControlSource = customer.cust_id
	     CurrentControl = Combo1
	     Sparse = .F. - False
	
	8. Save and run the form.
	
	9. Click the down arrow for the ComboBox on one of the records. Note that the
	  DisplayValue (the company field) becomes truncated (to five characters).If
	  you scroll in the grid, you will notice that the DisplayValues for the other
	  rows in the grid also become truncated.
	
	To work around the problem, change the InputMask of the column to match the
	length of the field you are trying to display in the ComboBox. For the example
	above, set the InputMask of Column2 to:
	
	     = REPLICATE("X", 40)
	
	Additional query words: VFoxWin kbdsd
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : 5.00
	
	=============================================================================
	
