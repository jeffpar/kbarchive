---
layout: page
title: "Q183332: BUG: TreeView Expand Event Does Not Occur When Using ENTER Key"
permalink: /kb/183/Q183332/
---

## Q183332: BUG: TreeView Expand Event Does Not Occur When Using ENTER Key

{% raw %}

	Article: Q183332
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbcode kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Expand event of a TreeView control does not occur when the ENTER key is
	pressed to expand a node. Although the node actually expands as expected, the
	Expand event is not triggered.
	
	CAUSE
	=====
	
	This problem only occurs when the mouse is used to collapse the node (either by
	clicking the + sign or by double-clicking the node), then the ENTER key is
	pressed to expand the node. If the ENTER key is used to both collapse and expand
	the node, the problem does not occur.
	
	RESOLUTION
	==========
	
	A workaround in Visual Basic 5.0 is to trap for the ENTER key in the KeyDown
	event of the TreeView control and then call the Expand event. See the "Steps to
	Reproduce Behavior" section below for an example. This workaround is possible
	only for Visual Basic 5.0 because the TreeView control in Visual Basic 4.0 does
	not allow you to capture the ENTER key in the KeyDown event of the TreeView
	control.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q150200 BUG: TreeView Control Does Not Receive Key Events
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic 5.0. Form1 is created by
	  default.
	
	2. On the Project menu, click Components, and select "Microsoft Windows Common
	  Controls 5.0."
	
	3. Place a TreeView control on Form1.
	
	4. Copy and paste the following code to the Form1 module:
	
	        Option Explicit
	
	        Private Sub Form_Load()
	           With TreeView1
	              .LineStyle = tvwRootLines  ' Linestyle 1
	              .Nodes.Add , , "r", "Root"
	              .Nodes.Add "r", tvwChild, "c1", "Child"
	           End With
	        End Sub
	
	        Private Sub TreeView1_Expand(ByVal Node As ComctlLib.Node)
	           MsgBox "TreeView1_Expand"
	        End Sub
	
	5. Run the project.
	
	6. Press the ENTER key to expand the Root node. Notice the message box appears
	  indicating that the Expand event has occurred.
	
	7. Use the mouse to collapse the Root tree by clicking the minus (-) symbol next
	  to Root. (It is important to use the mouse because the problem occurs only
	  when using the mouse to collapse the node.)
	
	8. Press the ENTER key.
	
	  RESULT: The message box does not appear because the Expand event does not
	  occur.
	
	Workaround
	----------
	
	Replace the code in the Form1 module with the following code:
	
	     Option Explicit
	
	     Private IsExpanded As Boolean
	
	     Private Sub Form_Load()
	        With TreeView1
	           .LineStyle = tvwRootLines  ' Linestyle 1
	           .Nodes.Add , , "r", "Root"
	           .Nodes.Add "r", tvwChild, "c1", "Child"
	        End With
	     End Sub
	
	     Private Sub TreeView1_Collapse(ByVal Node As ComctlLib.Node)
	        IsExpanded = False
	     End Sub
	
	     Private Sub TreeView1_Expand(ByVal Node As ComctlLib.Node)
	        If IsExpanded Then Exit Sub
	        MsgBox "TreeView1_Expand"
	        IsExpanded = True
	     End Sub
	
	     Private Sub TreeView1_KeyDown(KeyCode As Integer, Shift As Integer)
	        If Not TreeView1.SelectedItem.Expanded Then Exit Sub
	        If KeyCode = 13 Then TreeView1_Expand TreeView1.SelectedItem
	     End Sub
	
	When you run the project, the KeyDown event of the TreeView control determines if
	the ENTER key was pressed. If the ENTER key was pressed, code in the KeyDown
	event calls the Expand event of the TreeView control. The IsExpanded flag
	variable is used so that the Expand event code is not executed more than once.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
