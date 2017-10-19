---
layout: page
title: "Q192003: BUG: Phantom MouseMove Events with a Transparent UserControl"
permalink: /kb/192/Q192003/
---

## Q192003: BUG: Phantom MouseMove Events with a Transparent UserControl

	Article: Q192003
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
	
	A Visual Basic UserControl, whose BackStyle property is set to Transparent, may
	erroneously receive MouseMove messages when the mouse is over the control but is
	not currently moving.
	
	CAUSE
	=====
	
	The problem occurs because a property or method has been called on the control
	that causes the control to repaint itself. The repaint event results in a change
	in the window region for the control, which in turn fires the MouseMove event.
	
	This behavior does not occur if the UserControl's BackStyle property is set to
	Opaque.
	
	RESOLUTION
	==========
	
	Setting the BackStyle property to Opaque offers one approach to working around
	this problem. However, if this property must be set to Transparent, another
	potential workaround is to use two static variables to monitor the values of the
	X and Y coordinates sent to the MouseMove event. If these values are the same as
	the previous MouseMove event, then you can treat this mouse message as a phantom
	message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. From the File menu, add an ActiveX Control project. UserControl1 is created
	  by default.
	
	3. Add a Shape control to UserControl1.
	
	4. Paste the following code into UserControl1's code window:
	
	         Option Explicit
	
	         Private Sub UserControl_Initialize()
	            UserControl.BackStyle = 0 'Transparent
	            Shape1.BackStyle = 1 'Opaque
	         End Sub
	
	         Private Sub UserControl_MouseMove(Button As Integer, Shift As _
	                                          Integer, X As Single, Y As Single)
	            Debug.Print "UserControl: Mouse Move"
	         End Sub
	
	         Public Sub Refresh()
	            Shape1.Refresh
	         End Sub
	
	5. Close the UserControl's code and design windows.
	
	6. Add an instance of UserControl1 to Form1.
	
	7. Add a Timer control to Form1 and set its Interval property to 2000.
	
	8. Paste the following code into Form1's code window:
	
	         Private Sub Timer1_Timer()
	            Debug.Print "Timer: Is mouse moving?"
	            UserControl11.Refresh
	         End Sub
	
	9. Run the project by pressing the F5 key.
	
	10. Move the mouse over the shape and notice the MouseMove messages in the
	  Immediate Window.
	
	11. Position the mouse over the shape control and stop moving it. When the Timer
	  event fires, a Timer message appears in the Immediate Window, followed
	  immediately by another MouseMove message. The mouse does not need to be
	  moving for this mouse message to appear; it is caused by the Refresh method.
	
	12. Stop the program and change the code in the UserControl_MouseMove event to
	  monitor the values of X and Y and only respond to messages whose X or Y
	  values have changed between calls:
	
	         Private Sub UserControl_MouseMove(Button As Integer, Shift As _
	                                          Integer, X As Single, Y As Single)
	            Static mX As Single, mY As Single
	            If mX <> X Or mY <> Y Then
	               Debug.Print "UserControl: Mouse Move"
	               mX = X
	               mY = Y
	            End If
	         End Sub
	
	13. Repeat steps 9 through 11. With the mouse stationary over the shape, you
	  should see the Timer messages in the Immediate Window, but not the phantom
	  mouse messages.
	
	Additional query words: kbDSupport kbDSD extra kbVBp kbCtrl kbVBp600bug kbVBp500bug
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
