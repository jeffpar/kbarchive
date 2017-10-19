---
layout: page
title: "Q134243: PRB: Disabled ComboBox Item Disappears"
permalink: /kb/134/Q134243/
---

## Q134243: PRB: Disabled ComboBox Item Disappears

	Article: Q134243
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Disabling a ComboBox list item by using the This.List(This.ListItemId)='\'
	method causes the disabled item to disappear when the RowSourceType is either
	STRUCTURE or VALUE.
	
	RESOLUTION
	==========
	
	Use the following statement, and ensure that the DisabledItemForeColor and
	DisabledItemBackColor properties display the item properly:
	
	     This.List(This.ListItemId)="\"+This.List(This.ListItemId)
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Example One:
	
	1. Create a Form with a combo box (with a style of DropDown Combo).
	
	2. In the DblClick method of the combo box, place this code:
	
	     This.List(This.ListItemId)='\'
	
	3. In the RowSource for the combo box, place this code:
	
	     customer  && This the \Samples\Data\Customer.dbf
	
	4. In the RowSourceType for the combo box, select 8 - STRUCTURE.
	
	5. Run the Form, and select an item on the list. When the item appears in the
	  combo box, double-click to disable the item. Scroll through the list to see
	  that the item is not visible.
	
	Example Two:
	
	1. In the DblClick method of the combo box, place this code:
	
	     This.List(This.ListItemId)='\'+ This.List(This.ListItemId)
	
	2. Rerun the Form. The disabled item remains visible with the
	  DisabledItemForeColor and DisabledItemBackColor properties.
	
	Additional query words: VFoxWin OOP 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
