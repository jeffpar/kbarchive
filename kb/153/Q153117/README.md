---
layout: page
title: "Q153117: DOCERR: ListItemId Doesn't Return -1 as Stated in Online Help"
permalink: kb/153/Q153117/
---

## Q153117: DOCERR: ListItemId Doesn't Return -1 as Stated in Online Help

	Article: Q153117
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a user types a value in a ComboBox, and that value is not in the list of
	items in the ComboBox, the ListItemId property does not return values as
	expected. In the Online Help and the Visual FoxPro Language Reference, it states
	that:
	
	  "-1 Indicates no items selected. For a ComboBox, it means that user has
	  entered a value not in the list."
	
	This is incorrect. If the ComboBox is populated by values, entering an item not
	in the list causes ListItemId to return a value of 0. If the ComboBox is
	populated by an array or from a table, entering a value not in the list causes
	ListItemId to return a 1.
	
	WORKAROUND
	==========
	
	If the ComboBox is populated by values, then a ListItemId of 0 indicates the
	user has entered a value not in the list. Simply use this instead of the value
	stated in the Online Help. If the ComboBox is populated by an array or from a
	table, the following code can be used to determine if an item from the list was
	selected:
	
	     ALLTRIM(ComboBox.DisplayValue)=Alltrim(ComboBox.Value)
	
	If these two do not equal each other, then the item the user typed in is not in
	the list. The left side of the expression will show "" and the right side of the
	expression will contain the text entered.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form, and place a ComboBox control on it named "Combo1".
	
	2. Place the Customer.dbf from the Testdata.dbc (located in \Vfp\Samples\Data)
	  in the DataEnvironment of the Form.
	
	3. Change the RowSourceType of the ComboBox to "6 - Fields," and the RowSource
	  to "Customer.Cust_id" (without the quotation marks).
	
	4. Open a debug window with the following in the left pane:
	
	  _screen.ActiveForm.Combo1.ListItemID
	
	5. Run the form, and choose some different items using the ComboBox. Now type
	  the word "Test" (without the quotation marks) in the ComboBox. Note that the
	  ListItemId returns 1.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
