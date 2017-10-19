---
layout: page
title: "Q192170: HOWTO: Add Explorer Style Rename Capability to TreeView Control"
permalink: /kb/192/Q192170/
---

## Q192170: HOWTO: Add Explorer Style Rename Capability to TreeView Control

	Article: Q192170
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
	
	SUMMARY
	=======
	
	The following procedure can be used to edit the node name on the TreeView side
	of the Windows Explorer:
	
	1. Click on a node with focus to place it in edit mode.
	
	2. Remove all the text from the Node label.
	
	3. Move focus to a different Node.
	
	4. You receive the following error message:
	
	  You must type in a file name.
	
	5. Focus returns to the Node you were editing and you remain in edit mode.
	
	6. If you hit the Esc Key, the original text is placed back in the Node label.
	
	MORE INFORMATION
	================
	
	This sample demonstrates how to achieve the same effect using the TreeView
	control in Visual Basic. It also shows how to verify that when a user edits a
	Node label that it is not left blank.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new standard EXE project. Form1 is created by default.
	
	2. From the Project menu, select Components, check "Microsoft Windows Common
	  Controls 6.0," and then click OK.
	
	3. Add a TreeView and Timer control to Form1.
	
	4. Add the following to the code window of Form1:
	
	        Option Explicit
	
	        Dim sNodeText As String  ' to hold the node text
	
	        Private Sub Form_Load()
	          'Add some nodes to the TreeView
	          TreeView1.Nodes.Add , , , "test"
	          TreeView1.Nodes.Add , , , "test 1"
	          TreeView1.Nodes.Add , , , "test 2"
	        End Sub
	
	        Private Sub Timer1_Timer()
	          ' Put the TreeView in edit mode
	          TreeView1.StartLabelEdit
	          Timer1.Enabled = False
	        End Sub
	
	        Private Sub TreeView1_AfterLabelEdit(Cancel As Integer, _
	            NewString As String)
	          ' Make sure that we have a value in the Label
	          If Len(NewString) < 1 Then
	             ' The Label is empty
	             MsgBox "Error! You must enter a value"
	             ' enable the Timer to get us back to edit mode
	             Timer1.Interval = 100
	             Timer1.Enabled = True
	          End If
	        End Sub
	
	        Private Sub TreeView1_BeforeLabelEdit(Cancel As Integer)
	          ' If the label is not empty store the string
	          If Len(TreeView1.SelectedItem.Text) > 0 Then
	             sNodeText = TreeView1.SelectedItem.Text
	          End If
	        End Sub
	
	        Private Sub TreeView1_KeyUp(KeyCode As Integer, Shift As Integer)
	          ' If the user hits the Esc key then restore the old label
	          If KeyCode = vbKeyEscape Then
	             TreeView1.SelectedItem.Text = sNodeText
	          End If
	        End Sub
	
	5. Save and run the project. Click on a Node to select it, then click on it
	  again to place it in edit mode.
	
	6. Follow steps 1-7 as described in the Summary above. When you hit the ESC key,
	  you will see that the old value for the Node label has been restored.
	
	(c) Microsoft Corporation 1998. All Rights Reserved.
	Contributions by Brian Combs, Microsoft Corporation.
	
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp500 kbVBp600 kbCmnCtrls kbTreeView
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
