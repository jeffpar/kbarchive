---
layout: page
title: "Q155750: PRB: Combo Box Does Not Show Item After Selecting Item"
permalink: kb/155/Q155750/
---

## Q155750: PRB: Combo Box Does Not Show Item After Selecting Item

	Article: Q155750
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp600
	Last Modified: 19-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an item does not appear in a combo box after you select it, make sure the
	combo box's ControlSource property is pointing to a field in a table. If it is,
	check the RowSource and RowSourceType properties. The item selected in the combo
	box might have more characters than the field that the combo box is bound to.
	
	For example, if the combo box has a RowSourceType property of value, and the
	RowSource property value is larger than the field of the table that it is bound
	to with the ControlSource property, then lengthen the table's field to the
	widest item in the RowSource property or shorten the value of the RowSource
	property to the length of the field.
	
	If any selected item in the combo box is equal to or less than the number of
	characters in the table's field, it appears in the combo box.
	
	CAUSE
	=====
	
	The field that the ControlSource property is bound to has fewer characters than
	the item selected in the combo box.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Whenever there is an item in a combo box list that has more characters than the
	field of a table that the combo box is bound to, the item you choose is written
	to the field in the table, truncated, but the item does not show up in the combo
	box. Any item in the combo box list that has the same or less than the number of
	characters than the field of the table appears correctly in the combo box and is
	written to the field. This happens regardless of what you set the RowSourceType
	property to as long as the ControlSource property of the combo box is set to a
	field of a table.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form and add the Customer table from the \Vfp\Samples\Data
	  subdirectory to the data environment.
	
	2. Add a combo box to the form and set the following properties:
	
	     ControlSource = Customer.Cust_id
	     RowSourceType  = Value
	     RowSource = 12345678, 12345, 56789012
	
	3. Run the form and choose the first item in the drop-down list of the combo
	  box. Note that the item does not appear in the combo box after being chosen.
	  Browse the Customer table and observe that the first six characters of the
	  item in the combo box are stored in the Cust_id field.
	
	4. Close the table's Browse window and choose the second item in the combo box.
	  Note that the item shows up in the combo box and also in the field of the
	  table.
	
	Additional query words: kbdse vfoxwin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP600
	Version           : 3.00 3.00b
	
	=============================================================================
	
