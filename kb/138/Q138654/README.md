---
layout: page
title: "Q138654: How to Add Items to a Combo Box with RowSourceType of Value"
permalink: /kb/138/Q138654/
---

## Q138654: How to Add Items to a Combo Box with RowSourceType of Value

	Article: Q138654
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
	
	ComboBoxes with a RowSourceType of Value are used quite frequently for lists
	that have a defined number of choices. However, there are times when you may
	want to add what the user types into the combo box to the list. This can be done
	programmatically by using the RowSource Property.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Open the Forms Designer, and place a combo box and text box on the form.
	
	2. With the combo box selected, click the Data tab in the Properties window. Set
	  the RowSourceType property to Value (1), and set the RowSource Property to:
	
	  " Choice1,Choice2 " (without the quotation marks)
	
	3. Click the Methods tab, double-click the LostFocus event, and place the
	  following code in the LostFocus event:
	
	     IF NOT(This.DisplayValue$This.RowSource)
	        This.RowSource = This.RowSource + "," + This.DisplayValue
	     ENDIF
	
	4. Run the form.
	
	5. In the combo box, type "Choice3" (without the quotation marks) and press
	  ENTER. Choice3 should now be part of the list.
	
	There are two important notes about this example. The first is that the item will
	only exist in the list as long as the form is running. Once you quit the form,
	the item will be removed from the list. The second is that there is a
	255-characters limit to the length of the string that makes up the RowSource.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
