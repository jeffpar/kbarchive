---
layout: page
title: "Q240946: BUG: ListView Fails to Raise Mouse Events if MultiSelect = True"
permalink: kb/240/Q240946/
---

## Q240946: BUG: ListView Fails to Raise Mouse Events if MultiSelect = True

	Article: Q240946
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbListView kbVBp kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 28-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the MultiSelect property of the Mscomctl.ocx ListView control is set to True,
	and the bounding box (marquee) selection has begun (the left- or right-mouse
	button is depressed and dragged in the ListView client window, and not on a
	ListItem), the ListView does not receive the MouseUp and Click events when the
	mouse button is released.
	
	RESOLUTION
	==========
	
	To work around this problem, use a module-level variable and the MouseMove
	event.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, select Components, and add a reference to Microsoft
	  Windows Common Controls 6.0.
	
	3. Place a ListView control on Form1.
	
	4. Paste the following code into the code window of Form1:
	
	  Option Explicit
	
	  Private Sub Form_Load()
	    Dim i As Integer
	
	    ListView1.MultiSelect = True
	
	    For i = 1 To 20
	      Call ListView1.ListItems.Add(Text:="item" & i)
	    Next
	
	  End Sub
	
	  Private Sub ListView1_MouseDown(Button As Integer, _
	              Shift As Integer, x As Single, y As Single)
	
	    Debug.Print "MouseDown"; Button; Shift; x; y
	
	  End Sub
	
	  Private Sub ListView1_MouseUp(Button As Integer, _
	              Shift As Integer, x As Single, y As Single)
	
	    Debug.Print "MouseUp"; Button; Shift; x; y
	
	  End Sub
	
	  Private Sub ListView1_Click()
	    Debug.Print "Click"
	  End Sub
	
	5. Press the F5 key to run the program.
	
	6. From the View menu, select the Immediate window.
	
	7. Left-click or right-click on a place inside the ListView control (not on an
	  item), drag the selection box, and then release the mouse button.
	
	8. In the Immediate window, note that the MouseDown event is fired, but not the
	  MouseUp event or the Click event.
	
	Steps to Workaround This Problem
	--------------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. On the Project menu, select Components, and add a reference to Microsoft
	  Windows Common Controls 6.0.
	
	3. Place a ListView control on Form1.
	
	4. Paste the following code into the code window of Form1:
	
	  ' Index of currently depressed button (vbLeftButton or vbRightButton)
	  Private m_iButton As Integer
	
	  Private Sub Form_Load()
	    Dim i As Integer
	
	    ListView1.MultiSelect = True
	
	    For i = 1 To 20
	      Call ListView1.ListItems.Add(Text:="item" & i)
	    Next
	
	  End Sub
	
	  Private Sub ListView1_MouseDown(Button As Integer, _
	              Shift As Integer, x As Single, y As Single)
	
	    Debug.Print "MouseDown"; Button; Shift; x; y
	
	    ' If the left- or right-mouse button is being depressed, and is not over
	    ' a ListItem, set the module level variable to the button's value.
	    If Button And (ListView1.HitTest(x, y) Is Nothing) Then
	      m_iButton = Button
	    End If
	
	  End Sub
	
	  Private Sub ListView1_MouseMove(Button As Integer, _
	              Shift As Integer, x As Single, y As Single)
	
	  '  Debug.Print "MouseMove"; Button; Shift; x; y
	
	    ' If no mouse button is currently pressed, and the module level
	    ' variable still contains a button value set in MouseDown, then
	    ' a mouse button is being released, call the MouseUp and Click
	    ' events, and zero the variable. (to our favor, the ListView raises
	    ' a MouseMove when any mouse button is released).
	    If (Button = 0) And m_iButton Then
	      Call ListView1_MouseUp(m_iButton, Shift, x, y)
	      Call ListView1_Click
	      m_iButton = 0
	    End If
	
	  End Sub
	
	  Private Sub ListView1_MouseUp(Button As Integer, _
	              Shift As Integer, x As Single, y As Single)
	
	    Debug.Print "MouseUp"; Button; Shift; x; y
	
	    ' Clear the module level variable here also in case one mouse button
	    ' is depressed while the other is already down, and either is released,
	    ' prevents the MouseMove code from calling unwanted events
	    m_iButton = 0
	
	  End Sub
	
	  Private Sub ListView1_Click()
	    Debug.Print "Click"
	  End Sub
	
	5. Press F5 to run the program.
	
	6. On the View, select the Immediate window.
	
	7. Left-click or right-click on a place inside the ListView control (not on an
	  item), drag the selection box, and then release the mouse button.
	
	8. In the Immediate window, note that all three of the events are fired.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbListView kbVBp kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
