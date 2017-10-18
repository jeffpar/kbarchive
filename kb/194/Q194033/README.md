---
layout: page
title: "Q194033: PRB: Treeview Node Visible Property Still True When Not Viewable"
permalink: kb/194/Q194033/
---

## Q194033: PRB: Treeview Node Visible Property Still True When Not Viewable

	Article: Q194033
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a node of a Treeview control is scrolled out of view, the Visible property
	of the node is still True.
	
	CAUSE
	=====
	
	The Visible property of the node indicates that the node is open and visible as
	part of the tree. It does not indicate if it is viewable in the viewport.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Select Components from the Project menu. Check the box for "Windows Common
	  Controls," and click OK.
	
	3. Add a Treeview control to Form1.
	
	4. Double-click on Form1 to bring up the code window and add the following code
	  to Form1:
	
	        Option Explicit
	
	        Private Sub Form_Load()
	            TreeView1.Width = 2200   ' so that node 4 is unseen
	            TreeView1.Indentation = 750
	            TreeView1.Nodes.Add , , , "Node1"
	            TreeView1.Nodes.Add 1, tvwChild, , "Node1-1"
	            TreeView1.Nodes.Add 2, tvwChild, , "Node1-1-1"
	            TreeView1.Nodes.Add 3, tvwChild, , "Node1-1-1-1"
	            TreeView1.Nodes(1).Expanded = True
	            TreeView1.Nodes(2).Expanded = True
	            TreeView1.Nodes(3).Expanded = True
	            DoEvents
	            Debug.Print TreeView1.Nodes(4).Visible
	        End Sub
	
	5. Run the project. Note that Node 4's Visible property is True even though the
	  node is not visible through the viewport.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp500 kbVBp600 kbCtrl kbTreeView
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
