---
layout: page
title: "Q257792: FIX: TreeView NodeClick Events May Fire Despite Cancel = True"
permalink: kb/257/Q257792/
---

## Q257792: FIX: TreeView NodeClick Events May Fire Despite Cancel = True

	Article: Q257792
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbTreeView kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The NodeClick event of a TreeView control can be triggered even when the
	CausesValidation property of TreeView is True and the control losing Focus sets
	Cancel to True in the Validate event.
	
	RESOLUTION
	==========
	
	To resolve this problem, install the latest service pack for Visual Studio 6.0.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. On the Project menu, click Components.
	
	3. Add a reference to Microsoft Windows Common Controls 6.0.
	
	4. Place a TextBox control and a TreeView control on Form1.
	
	5. Paste the following code into Form1's code window:
	
	  Private Sub Text1_Validate(Cancel As Boolean)
	     Debug.Print "Form1 text1 validate"
	     Cancel = True
	  End Sub
	
	  Private Sub Form_Load()
	     Dim nodx As Node
	     Set nodx = TreeView1.Nodes.Add(, 2, , "Parent")
	     Set nodx = TreeView1.Nodes.Add(TreeView1.Nodes(1), 4, , "Child1")
	     Set nodx = TreeView1.Nodes.Add(TreeView1.Nodes(1), 4, , "Child2")
	     nodx.EnsureVisible
	  End Sub
	
	  Private Sub TreeView1_NodeClick(ByVal Node As MSComctlLib.Node)
	     Debug.Print "NodeClick " & Node.Text
	  End Sub
	
	6. Press the F5 key to run the program.
	
	7. On the View menu, choose the Immediate window.
	
	8. Click on the nodes of the TreeView control, and note that the NodeClick event
	  is fired in the Immediate window.
	
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbTreeView kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
