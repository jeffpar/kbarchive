---
layout: page
title: "Q128073: PRB: Additem Does Not Add Elements to an Outline Control"
permalink: /kb/128/Q128073/
---

## Q128073: PRB: Additem Does Not Add Elements to an Outline Control

{% raw %}

	Article: Q128073
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the ADDITEM method to add elements to an outline control produces no
	output. When the form containing the OLE object is run, only the first element
	of the list is displayed. No other items are visible on the list. Clicking the
	first element has no effect.
	
	CAUSE
	=====
	
	The items are added to the list, but are not visible. Their indentation level is
	set to 0.
	
	RESOLUTION
	==========
	
	Use the INDENT property of the outline control to set the indentation level for
	the specified item.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	There are two ways to use the ADDITEM method, with and without an optional
	numeric parameter. Here is what happens in each case:
	
	- You do not include an optional numeric parameter with the ADDITEM method, for
	  example:
	
	     FrmForm1.Outl1.Additem('TextBox')
	
	  This line of code adds the item labeled TextBox. The item is added to end of
	  the list or as a subordinate item, depending on whether or not an element in
	  the list is selected when the item is added.
	
	- You do include an optional parameter with the ADDITEM method to indicate the
	  relative position of an element in the list. If an item already exists at
	  this position, the indentation level remains the same, for example:
	
	    FrmForm1.Outl1.Additem('Command',1)
	    Frm1.Outl1.Indent(1)=1
	    Frm1.Outl1.Additem('CheckBox',1)
	
	  If the new item uses a new index when it is added (that is, no element existed
	  at this position), the indentation level of the new item is 0. Because only
	  the first element of the list is visible at indent 0, the indentation level
	  of other items will need to be modified.
	
	For more information about the Outline control and the Properties, Events, and
	Methods associated with it, search for Outline using the Visual FoxPro Help
	menu.
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following steps demonstrate how to use the INDENT property to display items:
	
	1. Create a form.
	
	2. Select the OLE Container from the Form Controls toolbox, and place the OLE
	  container object on the form.
	
	3. The Insert Object dialog is displayed. Select the Insert Control option
	  button and the Outline Control from the list. Click OK, and the control is
	  placed on the form.
	
	4. In the Properties Sheet, select the OleControl1 object, and open the Init
	  event handler for this object. Place the following code in the Init:
	
	     *  The following lines add items to the list
	     This.Additem('Vegetables',0) &&
	     This.Additem('Carrots',1)
	     This.Additem('Potatoes',2)
	     This.Additem('Fruit',3)
	     This.Additem('Apples',4)
	     This.Additem('Oranges',5)
	
	     ** The following lines set the indentation level of the elements.
	     ** Without this code, the items would not be visible.
	
	     This.Indent(0)=1
	     This.Indent(1)=2
	     This.Indent(2)=2
	     This.Indent(3)=1
	     This.Indent(4)=2
	     This.Indent(5)=2
	
	5. Save the form, and run it.
	
	Additional query words: VFoxWin OCX 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
