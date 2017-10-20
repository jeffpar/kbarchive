---
layout: page
title: "Q221557: BUG: TreeView: NodeCheck Event Does Not Occur"
permalink: /kb/221/Q221557/
---

## Q221557: BUG: TreeView: NodeCheck Event Does Not Occur

{% raw %}

	Article: Q221557
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActivexEvents kbCmnCtrls kbCtrl kbTreeView kbVBp600bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a TreeView control with the Checkboxes property set to True is placed on a
	form and the user presses the left-mouse button over a checkbox and then drags
	the mouse away from the checkbox before releasing the mouse button, the state of
	the checkbox is toggled, but a NodeCheck event does not occur.
	
	RESOLUTION
	==========
	
	You can work around the problem by programmatically ensuring that the event
	occurs if the mouse has been dragged away from the checkbox.
	
	Step by Step Example
	--------------------
	
	1. Open a new Visual Basic Standard Exe project. Form1 is created by default.
	
	2. On the Project menu, click Components. Select Microsoft Common Controls 6.0
	  and click OK.
	
	3. Add a TreeView control to Form1.
	
	4. Add the following code to the General Declarations section of Form1:
	
	  Private Declare Function SendMessage Lib "user32" Alias "SendMessageA" _
	     (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, _
	      lParam As Any) As Long   ' <---
	
	  ' treeview messages
	  Private Const TV_FIRST = &H1100
	  ' wParam = 0, lParam = lptvhti, rtns hItem
	  Private Const TVM_HITTEST = (TV_FIRST + 17)
	
	  Private Type POINTAPI   ' pt
	     x As Long
	     y As Long
	  End Type
	
	  ' structure passed with the TVM_HITTEST message
	  Private Type TVHITTESTINFO
	     pt As POINTAPI
	     flags As Long
	     hItem As Long
	  End Type
	
	  ' TVHITTESTINFO.flags value. An item's checkbox
	  ' is in fact held in the item's state icon image.
	  Private Const TVHT_ONITEMSTATEICON = &H40
	
	  Private m_nodChecked As Node
	
	  Private Sub Form_Load()
	     Dim Node1 As Node
	     Dim Node2 As Node
	     Dim Node3 As Node
	     Dim i As Integer
	     Dim j As Integer
	     Dim k As Integer
	     ' For some convenience...
	     With TreeView1
	        .HideSelection = False
	        .Indentation = 19 * Screen.TwipsPerPixelX
	        .LabelEdit = tvwManual
	        .LineStyle = tvwRootLines
	        .Checkboxes = True
	     End With
	
	  ' Fill up the treeview...
	     For i = 1 To 2
	        Set Node1 = TreeView1.Nodes.Add(, , , "Root" & i)
	        For j = 1 To 3
	           Set Node2 = TreeView1.Nodes.Add(Node1.Index, tvwChild, , _
	           "Root" & i & "Child" & j)
	           For k = 1 To 3
	              Set Node3 = TreeView1.Nodes.Add(Node2.Index, tvwChild, , _
	                    "GrandChild" & (16 * (i - 1)) + (4 * (j - 1)) + k)
	           Next k
	        Next j
	        Node1.Expanded = True
	     Next i
	  End Sub
	
	  Private Sub TreeView1_MouseDown(Button As Integer, Shift As Integer, _
	                                  x As Single, y As Single)
	     Dim tvhti As TVHITTESTINFO
	
	      Debug.Print "MouseDown: " & Button & " " & Shift & "  " & _
	                 x & " " & y
	
	     If (Button = vbLeftButton) Then
	        ' determine if the mouse pointer is being depressed over the Node's
	        ' checkbox (assumes that the Form's ScaleMode is set to vbTwips).
	        tvhti.pt.x = x / Screen.TwipsPerPixelX
	        tvhti.pt.y = y / Screen.TwipsPerPixelY
	        If (SendMessage(TreeView1.hWnd, TVM_HITTEST, 0, tvhti)) Then
	
	           If (tvhti.flags And TVHT_ONITEMSTATEICON) Then
	              ' the value of the Node's Checked property will be toggled
	              ' *after* this procedure finishes execution.
	              Set m_nodChecked = TreeView1.HitTest(x, y)
	           End If
	
	        End If   ' TVM_HITTEST
	     End If   ' (Button = vbLeftButton)
	  End Sub
	
	  Private Sub TreeView1_NodeCheck(ByVal Node As MSComctlLib.Node)
	
	     If (Node Is m_nodChecked) Then
	
	        ' Either the left-mouse button is being released over the Node
	        ' whose checkbox has been toggled, or this event procedure
	        ' is being called from TreeView1_MouseUp. This *is* where we
	        ' want to process code...
	        Debug.Print "NodeCheck: " & m_nodChecked & _
	        ".Checked = " & m_nodChecked.Checked & _
	        vbCrLf & vbTab & " (do process code here)"
	     
	        ' De-reference the module level Node variable so you don't
	        ' call this event again in TreeView1_MouseUp.
	        Set m_nodChecked = Nothing
	
	     Else
	        ' This event is being raised by the TreeView because the mouse
	        ' pointer is being released over a node whose checkbox state
	        ' has *not* been toggled. you do *not* want to process code here...
	        Debug.Print "NodeCheck: " & Node & _
	        ".Checked = " & Node.Checked & _
	        vbCrLf & vbTab & " (do *not* process code here)"
	
	     End If
	  End Sub
	
	  Private Sub TreeView1_MouseUp(Button As Integer, Shift As Integer, _
	              x As Single, y As Single)
	
	     If (m_nodChecked Is Nothing) = False Then
	
	        ' You didn't get a NodeCheck event (the variable is still set),
	        ' the mouse pointer is *not* over the Node whose checkbox
	        ' state has been toggled. Explicitly call the event procedure.
	        Call TreeView1_NodeCheck(m_nodChecked)
	
	     End If
	
	        Debug.Print "MouseUp: " & Button & " " & Shift & " " & _
	                 x & " " & y
	     End Sub
	
	5. Run the program and position the mouse cursor over a checkbox. Press and hold
	  down the left-mouse button, drag the mouse cursor away from the checkbox, and
	  then release the mouse button. Note that a message verifying that the
	  NodeCheck event occurred is printed in the Immediate pane.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new Visual Basic Standard Exe project. Form1 is created by default.
	
	2. On the Project menu, click Components. Select Microsoft Common Controls 6.0
	  and click OK.
	
	3. Add a Treeview control to Form1. Open the Treeview control's property page by
	  right-clicking on the control and clicking Properties. Check the Treeview
	  control's Checkboxes property and click OK.
	
	4. Add the following code to the General Declarations section of Form1:
	
	  Private Sub Form_Load()
	     Dim Node1 As Node
	     Dim Node2 As Node
	     Dim Node3 As Node
	     Dim i As Integer
	     Dim j As Integer
	     Dim k As Integer
	
	  ' For some convenience...
	     With TreeView1
	        .HideSelection = False
	        .Indentation = 19 * Screen.TwipsPerPixelX
	        .LabelEdit = tvwManual
	        .LineStyle = tvwRootLines
	     End With
	
	  ' Fill up the treeview...
	     For i = 1 To 2
	        Set Node1 = TreeView1.Nodes.Add(, , , "Root" & i)
	        For j = 1 To 3
	           Set Node2 = TreeView1.Nodes.Add(Node1.Index, tvwChild, , _
	           "Root" & i & "Child" & j)
	           For k = 1 To 3
	              Set Node3 = TreeView1.Nodes.Add(Node2.Index, tvwChild, , _
	              "GrandChild" & (16 * (i - 1)) + (4 * (j - 1)) + k)
	           Next k
	        Next j
	        Node1.Expanded = True
	     Next i
	  End Sub
	
	  Private Sub TreeView1_NodeCheck(ByVal Node As MSComctlLib.Node)
	     Debug.Print "NodeCheck Event"
	  End Sub
	   
	
	5. Run the program. Position the mouse cursor over a checkbox, press and release
	  the left-mouse button on the checkbox, and note that the message is printed
	  in the Immediate pane.
	
	6. Position the mouse cursor over a checkbox, and press and hold down the
	  left-mouse button. Drag the mouse cursor away from the checkbox and then
	  release the mouse button. Note that no message appears.
	
	REFERENCES
	==========
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q224181 BUG: GDI Resouce Leak Using Checkboxes in ListVew Control
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActivexEvents kbCmnCtrls kbCtrl kbTreeView kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
