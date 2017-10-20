---
layout: page
title: "Q133743: How to Display Disabled Items in a Combo or List Box"
permalink: /kb/133/Q133743/
---

## Q133743: How to Display Disabled Items in a Combo or List Box

{% raw %}

	Article: Q133743
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbcode kbvfp300 kbvfp600
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to disable items in a combo box or list box.
	
	MORE INFORMATION
	================
	
	Combo Box Example
	-----------------
	
	1. Create a Form with a combo box (either with a style of DropDown Combo or
	  DropDown List).
	
	2. In the DblClick method of the DropDown Combo or the RightClick method of the
	  DropDown List, place this code:
	
	     This.List(This.ListItemId)='\'
	
	  NOTE: The DblClick method in the DropDown List does not disable the item. That
	  is why a RightClick method is recommended.
	
	3. In the RowSource for the combo box, place this code:
	
	     SELECT DISTINCT city from customer into cursor MyCity
	
	  NOTE: In general, it doesn't matter what the RowSource or Type are.
	
	4. In the RowSourceType for the combo box, select 3 - SQL Statement.
	
	5. Run the Form, and select an item on the list. When the item appears in the
	  combo box, you can disable the item by double-clicking it or by clicking it
	  using the right mouse button.
	
	Possible Enhancements
	---------------------
	
	- If you want to disable a specific item on the list, you can replace the
	  ListItemId with a specified Item Number.
	
	- You can use the ComboBox Layout DisabledItemForeColor property to change the
	  color of the disabled item text.
	
	
	Additional query words: VFoxWin OOP combobox listbox
	
	======================================================================
	Keywords          : kbcode kbvfp300 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP600
	Version           : 3.00
	
	=============================================================================
	

{% endraw %}
