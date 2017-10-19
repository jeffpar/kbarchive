---
layout: page
title: "Q147815: HOWTO: Create a Flashing Title Bar on a Visual Basic Form"
permalink: /kb/147/Q147815/
---

## Q147815: HOWTO: Create a Flashing Title Bar on a Visual Basic Form

	Article: Q147815
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
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With the FlashWindow Windows API function, you can create a flashing window
	title bar for any window for which you know the window handle.
	
	MORE INFORMATION
	================
	
	Visual Basic for Windows has the ability to flash the title bar on any form if
	you can get the handle to that form. The function FlashWindow flashes the
	specified window once. Flashing a window means changing the appearance of its
	caption bar, as if the window were changing from inactive to active status, or
	vice versa. (An inactive caption bar changes to an active caption bar; an active
	caption bar changes to an inactive caption bar.)
	
	Typically, a window is flashed to inform the user that the window requires
	attention when that window does not currently have the input focus. The function
	FlashWindow is defined as
	
	     FlashWindow(hWnd, bInvert)
	
	where:
	
	  hWnd      - Identifies the window to be flashed. The window can be
	              either open or iconic.
	
	  bInvert   - Specifies whether the window is to be flashed or
	              returned to its original state. The window is flashed
	              from one state to the other if the bInvert parameter is
	              nonzero. If the bInvert parameter is zero, the window
	              is returned to its original state (either active or
	              inactive).
	
	FlashWindow returns a value that specifies the window's state before the call to
	the FlashWindow function. It is nonzero if the window was active before the
	call; otherwise, it is zero.
	
	When using FlashWindow, it is a good design practice to set the flash rate equal
	to that of the caret rate. The caret blink rate can be found by using the
	GetCaretBlinkTime function. GetCaretBlinkTime returns the elapsed time, in
	milliseconds, required to cause the caret to blink.
	
	Step-by-Step Example
	--------------------
	
	The following section describes how to flash a form while that form does not have
	the focus:
	
	1. Start and new project in Visual Basic. Form1 is created by default.
	
	2. Add a Timer control to the Form1 form.
	
	3. Copy the following code to the Code window of the Form1 form:
	
	     Private Sub Form_GotFocus()
	        Timer1.Enabled = False
	     End Sub
	
	     Private Sub Form_Load()
	        Timer1.Interval = GetCaretBlinkTime()
	        Form2.Show
	     End Sub
	
	     Private Sub Timer1_Timer()
	        Success = FlashWindow(Form1.hwnd, 1)
	     End Sub
	
	4. Add a second form to the project.
	
	5. Copy the following code to the Code window of the Form2 form:
	
	     Private Sub Form_Click()
	        Form1.Timer1.Enabled = True
	     End Sub
	
	6. Add a module to the project.
	
	7. Copy the following code to the Code window of the Module1 module:
	
	     'Depending on what operating system you are using determines the
	     'correct function declares and variables. This is an example of
	     'conditional compilation.
	
	     #If Win32 Then
	
	        Declare Function FlashWindow Lib "user32" ( _
	                         ByVal hwnd As Long, _
	                         ByVal bInvert As Long) As Long
	
	        Declare Function GetCaretBlinkTime Lib "user32" () As Long
	
	        Dim Success As Long
	
	     #Else
	        Declare Function FlashWindow Lib "User" ( _
	                         ByVal hwnd As Integer, _
	                         ByVal bInvert As Integer) As Integer
	
	        Declare Function GetCaretBlinkTime Lib "User" () As Integer
	
	        Dim Success As Integer
	
	     #End If
	
	8. On the Run menu, click Start or press the F5 key to start the program. Form1
	  will be in the foreground with Form2 in the background. Click anywhere in
	  Form2; Form1's Caption Bar will flash until you click Form1.
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport
	KBWIN32SDK KBAPI
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	
