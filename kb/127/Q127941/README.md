---
layout: page
title: "Q127941: How to Create and Manipulate Multiple-Column List Boxes"
permalink: kb/127/Q127941/
---

## Q127941: How to Create and Manipulate Multiple-Column List Boxes

	Article: Q127941
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses properties of multiple-column list or combo boxes, and
	describes how to create and manipulate them. All the tasks described require
	modifying the value of a property.
	
	MORE INFORMATION
	================
	
	To build a multiple-column list or combo box, modify the ColumnCount property of
	the object to the number of columns that will be on the list.
	
	Aligning Columns
	----------------
	
	Columns are aligned in a list box if one of the following conditions is met:
	
	- The width of each column is explicitly written in the ColumnWidth property.
	
	  -or-
	
	- The font of the list is a monospaced font such as Courier New or Terminal. To
	  change the font of the list, modify the FontName property.
	
	Retrieving the Value of a List Item
	-----------------------------------
	
	Use the LIST property. When used in conjunction with the LISTITEMID, the LIST
	property can specify the value of a selected item in a row of columns. For
	example:
	
	     List(Combo1.ListitemId,2)
	
	Hiding a Column
	---------------
	
	To hide a column in a list, set the width of this column to 0 in the COLUMNWIDTH
	property. The COLUMNWIDTH property accepts a comma-delimited list of items, as
	in this example:
	
	     CboCombo1.columnwidth="10,0,12"
	
	Linking the Value of the Combo Box to Column N Only
	---------------------------------------------------
	
	Use the BOUNDCOLUMN property to link the value of a combo box to a column. The
	BOUNDCOLUMN property determines which column is bound to the value of a list box
	or combo box.
	
	Linking the Selection to a Value that Is Not Displayed
	------------------------------------------------------
	
	To link the selection to a value not displayed, combine the previous two methods.
	The following steps illustrate this method using the Form Designer:
	
	1. Create a form.
	
	2. Right-click, and open the Data Environment. Add the CUSTOMER table from the
	  SAMPLES\DATA directory.
	
	3. Select the combo box control from the Form Controls toolbar, and drag it to
	  the form. A combo box is created.
	
	4. In the Property Sheet, select the Combo1 object from the Object drop-down,
	  and modify the following properties:
	
	     BoundColumn = 2
	     ColumnCount = 3
	     Columnwidth = 50,0,30  &&Under program control, Columnwidth= "50,0,30"
	     RowSourceType= 6- Fields
	     RowSource =  Customer.contact,cust_id,company
	
	5. Save the form as TEST, and run it. Only two columns are visible when the
	  combo box is opened.
	
	6. To verify that the value of the combo box is bound to the second column, type
	  the following in the Debug window:
	
	     TEST.Combo1.Value
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
