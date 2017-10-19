---
layout: page
title: "Q153026: How To Show a ListView or TreeView Item Programmatically"
permalink: /kb/153/Q153026/
---

## Q153026: How To Show a ListView or TreeView Item Programmatically

	Article: Q153026
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00 | 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Depending on the size of a ListView or TreeView control, not all ListItem or
	Node objects may be visible at one time. It is often desirable to control
	programmatically when a given ListItem or Node object is visible to a user. This
	article explains how to accomplish this functionality with both the ListView and
	TreeView controls.
	
	MORE INFORMATION
	================
	
	Both the ListItem and Node objects have a method named "EnsureVisible'. To show
	an object all that needs to be done is to call this method from the object to be
	made visible. This will cause the ListView or TreeView to scroll in such a way
	that the specified node is visible on screen. A TreeView node that happens to be
	embedded beneath multiple, unexpanded levels will be made visible by expanding
	all necessary levels of the TreeView. If the ListItem or Node is already
	visible, no change will occur.
	
	Step-By-Step Example
	--------------------
	
	1. Start Visual Basic 4.0. Form1 is created by default.
	
	2. Add a single ListView control to the form.
	
	3. Add the following code to Form1:
	
	     Option Explicit
	
	     Private Sub Form_Click()
	         Dim i As Integer
	
	         i = CInt(InputBox$("Enter number of node:"))
	         ListView1.ListItems(i).EnsureVisible
	     End Sub
	
	     Private Sub Form_Load()
	         Dim lv As ListItem
	         Dim i As Integer
	
	         For i = 1 To 75
	             Set lv = ListView1.ListItems.Add(, , "item " & i)
	         Next i
	     End Sub
	
	4. Press the F5 key or select Start from the Run menu to start the application.
	  Click once on the form to show the input box, and then enter the number of
	  the ListItem object to be made visible. Press OK to execute an EnsureVisible
	  method on the ListItem object specified by the user-entered index number.
	
	Additional query words: 4.00 vb4win vb432
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : 4.00 | 4.00
	
	=============================================================================
	
