---
layout: page
title: "Q154006: HOWTO: Drag a Form by a Child Control"
permalink: /kb/154/Q154006/
---

## Q154006: HOWTO: Drag a Form by a Child Control

	Article: Q154006
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A window can be moved by clicking the Title bar and then dragging the window to
	the required position. This technique will not work if the window doesn't have a
	Title bar. Using the SendMessage API, you can achieve this effect by dragging a
	control on the form and the form will move with the control. Below is a code
	sample showing how to accomplish this.
	
	MORE INFORMATION
	================
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place a Command button on the form.
	
	3. Add the following code to the Form1 code window:
	
	     Option Explicit
	     Private Declare Sub ReleaseCapture Lib "User" ()
	     Private Declare Function SendMessage Lib "User" (ByVal hWnd As _
	        Integer, ByVal wMsg As Integer, ByVal wParam As Integer, _
	        lParam As Any) As Long
	
	     Private Const WM_SYSCOMMAND = &H112
	     Private Const MOUSE_MOVE = &HF012
	
	     ' Enter the line below as one line of code
	     Private Sub Command1_MouseDown(Button As Integer, Shift As Integer,  _
	     X As Single, Y As Single)
	         Dim lReturn As Long
	         Call ReleaseCapture
	         lReturn = SendMessage(Form1.hWnd, WM_SYSCOMMAND, MOUSE_MOVE, 0)
	     End Sub
	
	4. Press the F5 key to run the project. Note that if you drag the Command button
	  on the screen, the whole form will move with it.
	
	You could remove the Title bar by adjusting the Control box, Caption, and
	Borderstyle properties of the form and the form can still be dragged by the
	control.
	
	REFERENCES
	==========
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q103062 How to Move Controls at Run Time By Using Drag and Drop
	
	  Q113904 How to Move a Control Across a Form at Run Time
	
	  Q79884 How to Move Controls Between Forms in VB for Windows
	
	Additional query words: kbVBp400 kbVBp600 kbVBp kbdsd kbDSupport kbintluk KBSDKWIN32 KBAPI
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbVB400Search kbVB400
	Issue type        : kbhowto
	
	=============================================================================
	
