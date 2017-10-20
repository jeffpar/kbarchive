---
layout: page
title: "Q182231: BUG: TreeView Nodes Count Property Limited to 32767"
permalink: /kb/182/Q182231/
---

## Q182231: BUG: TreeView Nodes Count Property Limited to 32767

{% raw %}

	Article: Q182231
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Count property of the Nodes collection for a TreeView control returns an
	incorrect value if you add more than 32767 nodes to the TreeView. The Index
	property of a Node object also returns an incorrect value for the same reason.
	If you add more than 65535 nodes, the TreeView's scrollbar may disappear and the
	TreeView may experience redraw problems.
	
	NOTE: In Visual Basic 4.0, you may receive the following error if you attempt to
	add more than 32767 nodes to a TreeView control:
	
	  Run-time error '7':
	  Out of memory
	
	CAUSE
	=====
	
	The Count property of the Nodes collection and the Index property of a Node
	object are limited to Integer values. If you add an additional node beyond 32767
	nodes, the Count property of the Nodes collection returns a value of -32768
	(instead of 32768). Adding another node to the TreeView results in the Count
	property returning a value of -32767, and so on. After adding 65536 nodes, the
	Count property reverts back to a value of 0. When this occurs, the TreeView
	control appears empty with no scrollbars because it thinks there are no actual
	nodes to display.
	
	RESOLUTION
	==========
	
	It is not recommended that you add more than 32767 nodes to a TreeView control.
	If you need more than 32767 nodes, you should consider using multiple TreeView
	controls or a control more suited for larger amounts of data.
	
	If you would like to maintain more than 32767 nodes using Visual Basic versions
	after version 4.0 in a TreeView control, you should keep the following in mind:
	
	- Performance will become extremely slow as you add more and more nodes.
	
	- Do not add more than 65535 nodes.
	
	- Use the SendMessage API to obtain the true node count. Alternately, you can
	  use a module- or public-level variable to keep track of how many nodes are in
	  the TreeView. Each time you add or remove a node, increment or decrement the
	  variable by one. This is necessary if you need to determine the count of
	  nodes because the Count property of the Nodes collection will not return the
	  correct value.
	
	- Don't rely on the Index property of a node object. For example, the Index
	  property is 32767 for node 32767 but is -32768 for node 32768.
	
	- You can still refer to a node by using its Key or by passing a number to the
	  Nodes collection. For example:
	
	       TreeView1.Nodes(40000) refers to node 40000.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Click Components on the Project menu and select "Microsoft Windows Common
	  Controls."
	
	3. Add a TreeView, CommandButton, and a TextBox to Form1.
	
	4. Copy and paste the following code to the code window of Form1:
	
	        Option Explicit
	
	        Private Const TVM_GETCOUNT = &H1105&
	        Private Declare Function SendMessage Lib "user32" Alias
	          "SendMessageA" (ByVal hwnd As Long, ByVal wMsg As Long, ByVal _
	          wParam As Long, lParam As Any) As Long
	
	        Private Sub Command1_Click()
	           Dim lngCnt As Long
	           Dim nodX As Node
	           Set nodX = TreeView1.Nodes.Add(, , "R", "Root")
	           For lngCnt = 1 To 32766
	              Set nodX = TreeView1.Nodes.Add("R", tvwChild, "C" & lngCnt, _
	                 "Child " & lngCnt)
	              If lngCnt Mod 1000 = 0 Then 'refresh
	                  Text1.Text = lngCnt
	                  DoEvents
	              End If
	           Next
	           Text1.Text = TreeView1.Nodes.Count
	           MsgBox "Nodes count: " & TreeView1.Nodes.Count
	           Set nodX = TreeView1.Nodes.Add("R", tvwChild, "C" & lngCnt, _
	              "Child " & lngCnt)
	           MsgBox "Nodes count: " & TreeView1.Nodes.Count
	           MsgBox "Actual Node Count: " & SendMessage(TreeView1.hwnd, _
	                  TVM_GETCOUNT, 0, ByVal 0)
	        End Sub
	
	5. Press the F5 key to start the project.
	
	6. Click the CommandButton to add nodes to the TreeView. It will take several
	  minutes to complete on a Pentium class computer.
	
	  Result: After 32767 nodes are added to the TreeView (1 for the Root + 32766
	  child nodes), you receive a message box indicating 32767 nodes in the
	  TreeView. This is correct. However, the second message box incorrectly states
	  there are -32768 nodes after one more node is added to the TreeView. The
	  third message box displays the correct node count.
	
	Additional query words: scroll bar maximum limitation kbVBp400bug kbVBp500bug kbVBp600bug kbControl 
	kbVBp kbdsd kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
