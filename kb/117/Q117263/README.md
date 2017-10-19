---
layout: page
title: "Q117263: How to Clear the Text of MaskedEdit Control w/o Clearing Mask"
permalink: /kb/117/Q117263/
---

## Q117263: How to Clear the Text of MaskedEdit Control w/o Clearing Mask

	Article: Q117263
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	Traditionally, to clear the text of a MaskedEdit control, you would set
	the control's Mask Property to an empty string, and then set its text
	property to an empty string:
	
	     MaskedEdit1.Mask = ""
	     MaskedEdit1.Text  = ""
	
	Here's a better method. Modify the Mask property according to the following
	steps. Then assign the Mask property to the text property of the MaskedEdit
	control:
	
	1. Replace Every occurrence of the pound sign (#) or question mark (?) in the
	  Mask string with an underscore (_). The underscore is the default value for
	  PromptChar.
	
	2. Retain the literal characters and any spaces in the Mask string in their
	  original positions.
	
	For Example, if the Mask property has this value:
	
	  (###) ###-#### Ext(#####)
	
	and the PromptChar value is an underscore (_), use the following piece of
	code to clear all the text and set the focus back to the MaskedEdit
	control:
	
	     MaskedEdit1.Text = "(___) ___-____ Ext(_____)"
	     MaskedEdit1.SetFocus
	
	Additional query words: 3.00 formatted format MaskEdit Masked Edit
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300
	Version           : :3.0
	
	=============================================================================
	
