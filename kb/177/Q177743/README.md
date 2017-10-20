---
layout: page
title: "Q177743: HOWTO: Scroll the TreeView When Dragging and Dropping a Node"
permalink: /kb/177/Q177743/
---

## Q177743: HOWTO: Scroll the TreeView When Dragging and Dropping a Node

{% raw %}

	Article: Q177743
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The TreeView control supports drag-and-drop. When a Node is dragged to the top
	or bottom of the control, the control does not automatically scroll vertically.
	Because the control does not support scrolling when doing drag- and-drop,
	scrolling must be implemented by the developer. This article demonstrates one
	way to implement scrolling when performing drag-and-drop.
	
	MORE INFORMATION
	================
	
	The following example uses API calls to scroll the TreeView when the mouse
	pointer gets close to the bottom or top of the control and you are doing a
	drag-and-drop of a Node.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new standard EXE project.Form1 is created by default.
	
	2. Click Components on the Project menu. Check "Microsoft Windows Common
	  Controls 5.0."
	
	3. Add a Treeview, ImageList, and Timer to Form1.
	
	4. Right-click the ImageList Control and select Properties from the pop-up menu.
	
	5. On the General Tab of the Property Pages dialog, select 16 x 16.
	
	6. Click the Images Tab, and insert 2 ICO files. NOTE: Icon files can be found
	  in the directory ..\VB\Graphics\Icon.
	
	7. Add the following code to the Code Window of Form1:
	
	        Option Explicit
	
	        Private Declare Function SendMessage Lib "user32" Alias _
	          "SendMessageA" (ByVal hwnd As Long, _
	          ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long
	        Dim mfX As Single
	        Dim mfY As Single
	        Dim moNode As Node
	        Dim m_iScrollDir As Integer 'Which way to scroll
	        Dim mbFlag As Boolean
	
	        Private Sub Form_DragOver(Source As Control, x As Single, y As _
	          Single, State As Integer)
	           If Source.Name = "TreeView1" Then
	              Timer1.Enabled = False
	           End If
	        End Sub
	
	        Private Sub Form_Load()
	           Dim i As Integer
	           Dim n As Integer
	           Timer1.Enabled = False
	           Timer1.Interval = 200
	           TreeView1.Style = tvwTreelinesPlusMinusPictureText
	           TreeView1.ImageList = ImageList1
	           'Populate TreeView controls
	           For i = 1 To 50
	             TreeView1.Nodes.Add Text:="Node " & i, Image:=1, _
	                SelectedImage:=2
	           Next i
	           For i = 1 To 50
	             For n = 1 To 5
	                TreeView1.Nodes.Add Relative:=i, Relationship:=tvwChild, _
	                 Text:="Child Node " & n, _
	                 Image:=1, SelectedImage:=2
	             Next n
	           Next i
	        End Sub
	
	        Private Sub Timer1_Timer()
	           Set TreeView1.DropHighlight = TreeView1.HitTest(mfX, mfY)
	           If m_iScrollDir = -1 Then 'Scroll Up
	           ' Send a WM_VSCROLL message 0 is up and 1 is down
	             SendMessage TreeView1.hwnd, 277&, 0&, vbNull
	           Else 'Scroll Down
	             SendMessage TreeView1.hwnd, 277&, 1&, vbNull
	           End If
	        End Sub
	
	        Private Sub TreeView1_DragDrop(Source As Control, x As Single, _
	          y As Single)
	        ' If you were moving the Node you dragged to be the child
	        ' of the Node you dropped it on, you would need to
	        ' make moNode the selected Node after you made it a child
	          If Not TreeView1.DropHighlight Is Nothing Then
	            MsgBox moNode.Text & " was dropped on " & _
	            TreeView1.DropHighlight.Text
	          End If
	          Set TreeView1.DropHighlight = Nothing
	          Set moNode = Nothing
	          Timer1.Enabled = False
	        End Sub
	
	        Private Sub TreeView1_DragOver(Source As Control, x As Single, _
	        y As Single, State As Integer)
	          Set TreeView1.DropHighlight = TreeView1.HitTest(x, y)
	          mfX = x
	          mfY = y
	          If y > 0 And y < 100 Then 'scroll up
	            m_iScrollDir = -1
	            Timer1.Enabled = True
	          ElseIf y > (TreeView1.Height - 200) And y < TreeView1.Height Then
	          'scroll down
	            m_iScrollDir = 1
	            Timer1.Enabled = True
	          Else
	            Timer1.Enabled = False
	          End If
	        End Sub
	
	        Private Sub TreeView1_MouseUp(Button As Integer, Shift As Integer, _
	        x As Single, y As Single)
	         Timer1.Enabled = False
	        End Sub
	
	        Private Sub TreeView1_MouseDown(Button As Integer, Shift As _
	        Integer, x As Single, y As Single)
	         TreeView1.DropHighlight = TreeView1.HitTest(x, y)
	         'Make sure we are over a Node
	         If Not TreeView1.DropHighlight Is Nothing Then
	            TreeView1.SelectedItem = TreeView1.HitTest(x, y)
	            Set moNode = TreeView1.SelectedItem ' Set the item being dragged.
	         End If
	         Set TreeView1.DropHighlight = Nothing
	        End Sub
	
	        Private Sub TreeView1_MouseMove(Button As Integer, Shift As _
	        Integer, x As Single, y As Single)
	         If Button = vbLeftButton Then
	            TreeView1.DragIcon = TreeView1.SelectedItem.CreateDragImage
	            TreeView1.Drag vbBeginDrag
	         End If
	        End Sub
	
	8. Save and run the sample. Select a Node and then drag it to the bottom of the
	  TreeView. You will see the TreeView scroll.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q172272 : FILE: TREEVIEW: Manipulating and Saving the Nodes in a TreeView
	  Control
	
	For more information on the TreeView Control, please see the Visual Basic Online
	Help.
	
	Additional query words: dragdrop dragging dropping kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
