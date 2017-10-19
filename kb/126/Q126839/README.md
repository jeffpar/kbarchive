---
layout: page
title: "Q126839: HOWTO: Create Special Effects in a Grid"
permalink: /kb/126/Q126839/
---

## Q126839: HOWTO: Create Special Effects in a Grid

	Article: Q126839
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbvfp300 kbvfp500 kbvfp600
	Last Modified: 10-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Developers often need to dynamically control attributes of a Grid. A common
	example of this is a ledger, where the odd rows are presented in one color and
	the even rows in another color. Visual FoxPro uses the properties that have the
	prefix 'Dynamic' to achieve this.
	
	MORE INFORMATION
	================
	
	The DynamicBackColor, DynamicForeColor, DynamicFontBold, DynamicFontItalic,
	DynamicFontStrikeThru, DynamicFontUnderline, DynamicFontName, and
	DynamicFontSize properties dynamically specify an attribute of a Column object
	within a grid. As their Dynamic prefix implies, these properties are reevaluated
	each time the Grid control is refreshed, and do not need to be reset manually.
	
	If the properties listed above apply to all of the columns across a row, the
	whole row will be affected. Use the SETALL method to modify one property of all
	of the columns of a row. On the other hand, part of a row will have a different
	display if the Dynamic property only applies to a limited number of columns. The
	two examples that follow illustrate the use of the DynamicBackColor property
	applied to all of the columns and the DynamicFontUnderline property applied to
	one column in the grid.
	
	Staggered List Example
	----------------------
	
	This example displays even rows in red, and odd rows in blue. It uses the
	DynamicBackColor property and the SETALL method to modify the colors of the
	columns.
	
	1. Create a form, and then add SAMPLES\DATA\CUSTOMER to the DataEnvironment
	  (DE).
	
	2. Drag the Customer table by its title bar from the DE to the Form. A grid
	  should automatically be added to the form, and its RecordSource should be set
	  to 'customer'.
	
	3. Place the following code in the Init event-handler of the Grid or the Init of
	  the Form.
	
	        cexpr = "IIF(MOD(RECNO('customer'),2) = 0, RGB(255,0,0), ;
	           RGB(0,255,0))"
	
	        THIS.SetAll('DynamicBackColor', cExpr, 'Column')
	
	  NOTE: This step only works if the records are in natural order. It doesn't
	  work if the table is indexed.
	
	Modifying a Specific Cell Example
	---------------------------------
	
	This example illustrates how to modify the font of a specific cell using the
	DynamicFontUnderline property.
	
	1. Repeat Step 1 and Step 2 from the previous example.
	
	2. In the Property Sheet, select Grid, and set the value of ColumnCount to 3.
	
	3. In the Property Sheet select Column1, and then place the following code in
	  the DynamicFontUnderline property.
	
	        IIF(cust_id="ANTON",.T.,.F.)
	
	When this form is run, the CUST_ID fields with a value of "ANTON" will be
	underlined.
	
	Note that the DynamicColor property takes a character value, whereas the
	DynamicFontUnderline property accepts a logical value.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
