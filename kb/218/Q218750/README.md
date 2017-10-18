---
layout: page
title: "Q218750: HOWTO: Simulate a Modal Form in Visual Basic CE 6.0"
permalink: kb/218/Q218750/
---

## Q218750: HOWTO: Simulate a Modal Form in Visual Basic CE 6.0

	Article: Q218750
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to simulate a modal form using the Windows CE
	Toolkit for Visual Basic 6.0 (VBCE6). Please note that the sample code below
	does not compile under the Windows CE Toolkit for Visual Basic 5.0 (VBCE5) since
	the declare statement (and, thus, API calls) is not supported under Windows CE
	Toolkit for Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	The following sample code illustrates how to implement a login form that
	simulates a modal form using the SetWindowPos API.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Windows CE HPC Project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a command button to Form1.
	
	3. Paste the following code into the code module for Form1:
	
	     Private Sub Command1_Click()
	         Form2.Show
	         ' Warning: Code still executes despite the
	         ' fact that Form2 will be shown modally.
	         Form1.Enabled = False
	         MsgBox "Form1 events still fire"
	     End Sub
	
	     Sub ValidatePassword(UID As String, PWD As String)
	         If UID <> "" And PWD <> "" Then
	             MsgBox "Login succeeded"
	             Form1.Enabled = True
	         Else
	             MsgBox "Login failed: Please try again"
	             Form2.Show
	         End If
	     End Sub
	
	4. From the Project menu, click Add Form to add a new form.
	
	5. Set the ControlBox property of Form2 to "False."
	
	6. Add a command button, two labels, and two text boxes to Form2.
	
	7. Paste the following code into the code module for Form2:
	
	     Private Sub Form_Load()
	         ConfigureUI
	         Dim lret
	         lret = SetWindowPos(Form2.hwnd, HWND_TOPMOST, 0, 0, 0, 0, SWP_NOSIZE Or SWP_NOMOVE)
	     End Sub
	
	     Private Sub Command1_Click()
	         Form2.Hide
	         Form1.ValidatePassword Text1.Text, Text2.Text
	     End Sub
	
	     Sub ConfigureUI()
	         Form2.Height = 2235
	         Form2.Width = 3400
	         Label1.Move 120, 120, 975, 375
	         Label2.Move 120, 600, 975, 375
	         Text1.Move 1100, 120, 1975, 375
	         Text2.Move 1100, 600, 1975, 375
	         Command1.Move 240, 1200, 2775, 495
	         Form2.Caption = "Please Log In"
	         Label1.Caption = "UserID"
	         Label2.Caption = "Password"
	         Text1.Text = "TestID"
	         Text2.Text = "TestPassword"
	         Command1.Caption = "Log In"
	     End Sub
	
	8. From the Project menu, click Add Module to add a new module.
	
	9. Paste the following code into Module1:
	
	    Public Declare Function SetWindowPos Lib "Coredll" ( _
	         ByVal hwnd As Long, _
	         ByVal hWndInsertAfter As Long, _
	         ByVal x As Long, _
	         ByVal y As Long, _
	         ByVal cx As Long, _
	         ByVal cy As Long, _
	         ByVal wFlags As Long) As Long
	
	     Const SWP_NOMOVE = 2
	     Const SWP_NOSIZE = 1
	     Const HWND_TOPMOST = -1
	     Const HWND_NOTOPMOST = -2
	
	10. Run the project.
	
	REFERENCES
	==========
	
	Windows CE Toolkit for Visual Basic 6.0 Online Help
	The Windows API Viewer (winceapi.txt file)
	
	Additional query words: vbce vbce6
	
	======================================================================
	Keywords          : kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600
	Version           : :1.0
	Issue type        : kbhowto
	
	=============================================================================
	
