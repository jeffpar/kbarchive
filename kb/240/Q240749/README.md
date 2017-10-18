---
layout: page
title: "Q240749: BUG: WM_LBUTTONUP Message May Not Fire"
permalink: kb/240/Q240749/
---

## Q240749: BUG: WM_LBUTTONUP Message May Not Fire

	Article: Q240749
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbVBp600bug kbWndwMsg kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the validate event of a TextBox displays a MessageBox, shifting the focus to
	another control using the mouse causes the MessageBox to display. It also causes
	the WM_LBUTTONUP message for the control receiving the focus to be lost.
	
	For example, if the control that is receiving the focus is a CommandButton, the
	Click event is not fired. If the control that is receiving the focus is a
	TextBox, notice that it appears to be in the selection state as if the
	left-mouse button is pressed.
	
	CAUSE
	=====
	
	When the message box is displayed, the focus moves to the message box, so the
	control that gets the focus does not get the WM_LBUTTONUP message.
	
	RESOLUTION
	==========
	
	To solve the problem, you can send a WM_LBUTTONUP message programmatically to
	the control that gets the focus.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project. Form1 is created by default.
	
	2. Add two TextBoxes and one CommandButton to Form1.
	
	3. Add the following code to the code window of Form1:
	
	  Option Explicit
	
	  Private Sub Text1_Validate(Cancel As Boolean)
	      MsgBox "Text1 Validate Message"
	  End Sub
	
	  Private Sub Text2_MouseDown(Button As Integer, Shift As Integer, _
	                              X As Single, Y As Single)
	      Debug.Print "Text2 Mouse Down"
	  End Sub
	
	  Private Sub Text2_MouseUp(Button As Integer, Shift As Integer, _
	                            X As Single, Y As Single)
	      Debug.Print "Text2 Mouse Up"
	  End Sub
	
	  Private Sub Command1_MouseDown(Button As Integer, Shift As Integer, _
	                                 X As Single, Y As Single)
	      Debug.Print "Command1 Mouse Down"
	  End Sub
	
	  Private Sub Command1_MouseUp(Button As Integer, Shift As Integer, _
	                               X As Single, Y As Single)
	      Debug.Print "Command1 Mouse Up"
	  End Sub
	
	  Private Sub Command1_Click()
	      MsgBox "Command1 Click"
	  End Sub
	
	4. Run the application. Move the focus to Text1 and then either select Text2 or
	  click Command1. Observe the debug output in the immediate window and notice
	  that the MouseUp event does not fire. You can also observe the other behavior
	  described in the SYMPTOMS section.
	
	Steps to Work Around the Behavior
	---------------------------------
	
	To work around the problem, you can send the WM_LBUTTONUP message in the GotFocus
	event handler of all the controls that may affect the behavior of your project
	if WM_LBUTTONUP is lost, or you can send WM_LBUTTONUP message to all the
	controls on the form. The example here uses the second method.
	
	1. Building on the sample above, add the following code to the code window of
	  Form1:
	
	  Private Const WM_LBUTTONUP = &H202
	
	  Private Declare Function PostMessage Lib "user32" _
	      Alias "PostMessageA" _
	      (ByVal hwnd As Long, ByVal wMsg As Long, _
	      ByVal wParam As Long, ByVal lParam As Long) As Long
	
	  Private Sub ForceMouseUp()
	      Dim ctl As Control
	      For Each ctl In Me.Controls
	          PostMessage ctl.hwnd, WM_LBUTTONUP, 0, ByVal 0
	      Next
	  End Sub
	
	2. Change the Text1_Validate event handler to be:
	
	  Private Sub Text1_Validate(Cancel As Boolean)
	      MsgBox "Text1 Validate Message"
	      ForceMouseUp
	  End Sub
	
	3. Run the application and you can see the correct behavior.
	
	NOTE: You only need to call the ForceMouseUp when you do not want to set Cancel
	to True.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp600bug kbWndwMsg kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
