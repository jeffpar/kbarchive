---
layout: page
title: "Q195294: PRB: Emulator Traps KeyDown Event for Arrow Keys"
permalink: kb/195/Q195294/
---

## Q195294: PRB: Emulator Traps KeyDown Event for Arrow Keys

	Article: Q195294
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp500 kbVBp600 kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a project created with either the Windows CE Toolkit for Visual Basic (VBCE)
	or eMbedded Visual Basic (eVB), KeyDown event procedures are triggered in the
	emulator when using ARROW keys to navigate among buttons on a form. This
	behavior does not occur on remote devices.
	
	MORE INFORMATION
	================
	
	This problem should only affect testing of VBCE applications.
	
	KeyDown event procedures for non-editing controls such as command buttons,
	checkboxes, and option buttons, are not triggered using ARROW keys in
	applications made with regular Visual Basic and VBCE applications run on remote
	devices.
	
	These event procedures do occur when running VBCE applications in the emulation
	environment. Only when testing VBCE applications in the emulation environment
	will this incorrect behavior occur.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE project in either Visual Basic or eMbedded Visual
	  Basic. Form1 is created by default.
	
	2. Add a text box, two command buttons, an option button, and a check box to
	  Form1.
	
	3. Set the MultiLine property of the text box to True and the ScrollBars
	  property of the Textbox to 2 - Vertical.
	
	4. Add the following code to the Form1 code module:
	
	        Private Sub Check1_KeyDown(KeyCode As Integer, Shift As Integer)
	           Text1.Text = Text1.Text & vbCrLf & "Check1 KeyDown: " & KeyCode
	        End Sub
	
	        Private Sub Command1_KeyDown(KeyCode As Integer, Shift As Integer)
	           Text1.Text = Text1.Text & vbCrLf & "Cmd1 KeyDown: " & KeyCode
	        End Sub
	
	        Private Sub Command2_KeyDown(KeyCode As Integer, Shift As Integer)
	           Text1.Text = Text1.Text & vbCrLf & "Cmd2 KeyDown: " & KeyCode
	        End Sub
	
	        Private Sub Option1_KeyDown(KeyCode As Integer, Shift As Integer)
	           Text1.Text = Text1.Text & vbCrLf & "Option1 KeyDown: " & KeyCode
	        End Sub
	
	        Private Sub Text1_KeyDown(KeyCode As Integer, Shift As Integer)
	           Text1.Text = Text1.Text & vbCrLf & "Text1 KeyDown: " & KeyCode
	        End Sub
	
	5. Run the project in the emulation environment. Use ARROW keys to move through
	  the command buttons, check box, and option button. Note that the KeyDown
	  event procedures are triggered, which is indicated by the text added to the
	  text box. Running the same project on a remote device, the KeyDown event
	  procedures are not triggered.
	
	Additional query words: Key Down KeyPress wce wince vbce evb vbce6
	
	======================================================================
	Keywords          : kbToolkit kbVBp500 kbVBp600 kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbprb
	
	=============================================================================
	
