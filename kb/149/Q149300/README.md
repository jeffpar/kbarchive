---
layout: page
title: "Q149300: How to Use ToolTips w/ Objects that Do/Do Not Have ToolTipText"
permalink: kb/149/Q149300/
---

## Q149300: How to Use ToolTips w/ Objects that Do/Do Not Have ToolTipText

	Article: Q149300
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes:
	
	- How to use ToolTips with objects that have the ToolTipText property
	
	- How to make ToolTips appear with other objects, such as images or option
	  groups, that don't have the ToolTipText property.
	
	ToolTips is the pop-up text that appears when the mouse pointer pauses or passes
	slowly over a control such as a button on a toolbar or a text box. ToolTips
	applies only to check boxes, combo boxes, command buttons, edit boxes, grids,
	list boxes, option buttons, shapes, spinners, and text boxes.
	
	MORE INFORMATION
	================
	
	Steps to Use ToolTips with Objects that Have ToolTipText Property
	-----------------------------------------------------------------
	
	1. Create a new form. Set the form's ShowTips property to true (.T.). Add the
	  Customer table to the Data Environment.
	
	2. Place a text box on the form. Set the text box ControlSource property to
	  Cust_id, and in its ToolTipText property, type:
	
	  Each customer has a unique identification number
	
	3. Run the form. Place the mouse pointer on the text box. The ToolTips pop-up
	  text appears.
	
	
	Steps to Use ToolTips with Objects that Don't Have ToolTipText Property
	-----------------------------------------------------------------------
	
	1. Open a form, and place an Image on it. Double-click the Picture property of
	  the Image and assign a bitmap to it.
	
	2. Add a Shape to the form, and set the Shape's BackStyle property to 0 -
	  Transparent. Position the Shape over and around the Image, leaving some white
	  space between the Image and the borders of the Shape. Set the Shape's
	  BorderStyle property to 0 - Transparent. In the Shape's ToolTipText property,
	  type:
	
	  This is a bitmap
	
	3. Run the form. Place the mouse pointer on the bitmap Image, and the ToolTips
	  pop-up text appears.
	
	NOTE: Because the Image is under the Shape, it will not receive mouse events.
	Therefore, you need to place all code in the appropriate event procedure for the
	Shape instead of for the Image.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : 3.00 3.00b
	
	=============================================================================
	
