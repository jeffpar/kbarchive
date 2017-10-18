---
layout: page
title: "Q299615: BUG: KeyPress Event Behaves Differently in a Compiled Executable"
permalink: kb/299/Q299615/
---

## Q299615: BUG: KeyPress Event Behaves Differently in a Compiled Executable

	Article: Q299615
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbActivexEvents kbCompiler kbVBp kbVBp500bug kbVBp600bug kbForms kbIDEProject kbGrpDSVB
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After displaying a dialog box in the KeyDown event, the KeyPress event is not
	raised when you run a project in the Integrated Development Environment (IDE).
	However, if you build the project into an executable file, the KeyPress event is
	raised. The behavior of the KeyPress event should be the same in a built
	executable as it is in the development environment. This inconsistency is
	observed with form and control keyboard events.
	
	RESOLUTION
	==========
	
	To work around this problem, store and use the window handle of the form or
	control that raises the KeyDown event to determine if the code in the KeyPress
	event should be run.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  Dim hWndAW As Long
	
	  Private Declare Function GetActiveWindow Lib "user32" () As Long
	
	  Private Sub Form_KeyDown(KeyCode As Integer, Shift As Integer)
	      ' Save the active window handle
	      ' when the KeyDown event occurs.
	      hWndAW = GetActiveWindow()
	      MsgBox "KeyDown Event"
	  End Sub
	
	  Private Sub Form_KeyPress(KeyAscii As Integer)
	      ' To work around the problem, only run the
	      ' desired code if the object that raised the
	      ' KeyDown event is still the active window.
	  '    If hWndAW = GetActiveWindow() Then
	          Form1.Caption = "KeyPress Event"
	  '    End If
	  End Sub
	
	3. Press the F5 key to run the program.
	
	4. Press the SPACEBAR. Notice that a message box indicates that the KeyDown
	  event has been raised. Also notice that the caption of the form remains
	  "Form1," which indicates that the KeyPress event has not been raised.
	
	5. Dismiss the message box, and close the running instance of Form1.
	
	6. From the File menu, click Make, and build Project1 into an executable file.
	
	7. Run the built executable.
	
	8. Press the SPACEBAR. Notice that a message box indicates that the KeyDown
	  event has been raised. However, notice that the caption of the form has
	  changed to "KeyPress Event," which indicates that the KeyPress event has been
	  raised.
	
	To examine the workaround, uncomment the If and End If statements in the
	Form_KeyPress event, and build the project into an executable file. When you run
	this executable and press the SPACEBAR, the caption of the form remains "Form1,"
	which indicates that code in the KeyPress event has been bypassed.
	
	Additional query words: InputBox Compile execute
	
	======================================================================
	Keywords          : kbActivexEvents kbCompiler kbVBp kbVBp500bug kbVBp600bug kbForms kbIDEProject kbGrpDSVB _IK 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
