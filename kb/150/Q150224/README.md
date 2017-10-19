---
layout: page
title: "Q150224: FIX: ListView &amp; TreeView Not Visible if DragMode is Automatic"
permalink: /kb/150/Q150224/
---

## Q150224: FIX: ListView &amp; TreeView Not Visible if DragMode is Automatic

	Article: Q150224
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbVBp kbVBp400bug kbVBp500fix kbGrpDSVB kbControl
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the DragMode property of the ListView or TreeView controls is set to
	Automatic, items added to the controls are not visible. This behavior occurs
	even if the EnsureVisible method is invoked for either the nodes or listitems.
	
	RESOLUTION
	==========
	
	When adding new nodes or listitems to the controls, and invoking the
	EnsureVisible method, set the DragMode property to 0 - Manual. It can be set
	back to Automatic at the end of the routines to add new items.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place a ListView and TreeView control on Form1. In the Load event for Form1,
	  place the following code:
	
	        Private Sub Form_Load()
	           Dim x As Node, y As ListItem
	           Set x = TreeView1.Nodes.Add(, , , "eat more")
	           Set y = ListView1.ListItems.Add(, , "jello")
	           x.EnsureVisible
	           y.EnsureVisible
	        End Sub
	
	3. Ensure that the DragMode property of both controls is set to 1-Automatic.
	
	4. Run the project by pressing F5. Note that the item added to both controls
	  shows only partially or not at all.
	
	To correct this problem using the workaround above, change the code in the Load
	event of the Form to:
	
	     Private Sub Form_Load()
	        Dim x As Node, y As ListItem
	        ListView1.DragMode = 0
	        TreeView1.DragMode = 0
	        Set x = TreeView1.Nodes.Add(, , , "eat more")
	        Set y = ListView1.ListItems.Add(, , "jello")
	        x.EnsureVisible
	        y.EnsureVisible
	        ListView1.DragMode = 1
	        TreeView1.DragMode = 1
	     End Sub
	
	Additional query words: kbVBp400bug kbVBp500fix kbVBp kbControl
	
	======================================================================
	Keywords          : kbVBp kbVBp400bug kbVBp500fix kbGrpDSVB kbControl 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
