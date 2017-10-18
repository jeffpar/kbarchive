---
layout: page
title: "Q149278: FIX: TreeView.Visible = False at Design-Time Causes Problems"
permalink: kb/149/Q149278/
---

## Q149278: FIX: TreeView.Visible = False at Design-Time Causes Problems

	Article: Q149278
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After setting the Visible property of a TreeView control to False at design
	time, odd behavior can be exhibited at run time. The reproduction sample at the
	end of this article shows two examples. This behavior can range from the
	Nodes.Count property returning incorrect values to all or some nodes not being
	displayed, and even to GPFs in some cases.
	
	RESOLUTION
	==========
	
	The work around for this problem is to not set the Visible property to False at
	design time. If a TreeView control needs to be invisible when a form is shown,
	the Visible property should be toggled in code before the form with the TreeView
	is shown. This can easily be done in the Form_Load event of the TreeView laden
	form with this line of code:
	
	     TreeView1.Visible = False
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Start Visual Basic 4.0. Form1 is created by default.
	
	2. Add a single TreeView control and two command buttons to Form1.
	
	3. Set this property of TreeView1:
	
	  Visible: False
	
	4. Add this code to Form1:
	
	     Private Sub Form_Load()
	        Dim nodX As Node  ' Create a tree.
	        Set nodX = TreeView1.Nodes.Add(,,"r", "Root")
	        Set nodX = TreeView1.Nodes.Add(,,"p", "Parent")
	     End Sub
	
	     Private Sub Command1_Click()
	        TreeView1.Visible = True
	        Debug.Print TreeView1.Nodes.Count
	     End Sub
	
	     Private Sub Command2_Click()
	        TreeView1.Nodes.Clear
	        Debug.Print TreeView1.Nodes.Count
	     End Sub
	
	5. Press F5 or select Start from the Run menu to start the application. Press
	  the first command button--although the count property will say two, no nodes
	  will be visible in the control. To demonstrate another oddity, stop and
	  restart and then press Command2. The Clear method should have removed all
	  nodes, but the Count property still returns 2.
	
	Additional query words: kbVBp400bug kbVBp600fix kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
