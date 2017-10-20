---
layout: page
title: "Q136588: PRB: List Boxes and Combo Boxes Lose Item Properties"
permalink: /kb/136/Q136588/
---

## Q136588: PRB: List Boxes and Combo Boxes Lose Item Properties

{% raw %}

	Article: Q136588
	Product(s): Microsoft FoxPro
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 10-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the RowSource property of a ComboBox or ListBox control is set to a value
	other than 0-None and there are many items in the list, properties of individual
	items are lost when you scroll down the list. For example, if you select several
	items from the list, scroll down the list, and then scroll up the list, the
	selected items might not be highlighted anymore.
	
	CAUSE
	=====
	
	This behavior is due to architectural limitations in the manager that handles
	the lists. When the RowSource is non-zero, the list manager creates 60 items
	internally and recycles them. This improves performance for lists that have a
	large number of items. For example, if a list is populated with a million-row
	table, Visual FoxPro does not have to take the speed and memory penalty
	associated with creating a million list items. Because they are recycled,
	properties set on the items are lost during operations such as scrolling. This
	behavior does not occur in Visual FoxPro 5.0.
	
	RESOLUTION
	==========
	
	Populate the controls with the AddItem and RemoveItem methods. These methods
	create non-recyclable items that are guaranteed to retain their properties.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Place a List box control on a form and add the \VFP\SAMPLES\DATA\Customer
	  table to the Data Environment.
	
	2. Change the properties of the list box as follows:
	
	        RowSourceType = 6
	        RowSource = "customer.contact"
	        MultiSelect = .T.
	
	3. Run the form and click an item in the list box. Press and hold down the SHIFT
	  key and then press the DOWN ARROW key to select another item in the list box.
	  Now, scroll down the list box to the last item and then scroll back up to the
	  top of the list box. Note that the items are no longer selected.
	
	Additional query words: List box
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
