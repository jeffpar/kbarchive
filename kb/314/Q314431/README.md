---
layout: page
title: "Q314431: PRB: Programmatically Changing Focus Does Not Cause Validation"
permalink: /kb/314/Q314431/
---

## Q314431: PRB: Programmatically Changing Focus Does Not Cause Validation

	Article: Q314431
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbActivexEvents kbGrpDSVB kbDSupport
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Code that changes the value of a TextBox or of another control, and then moves
	the focus to another control where the CausesValidation property is True does
	not fire the Validate events of the changed control.
	
	CAUSE
	=====
	
	This behavior occurs because changing the focus with code does not trigger
	Validate event.
	
	RESOLUTION
	==========
	
	To resolve this behavior, call the ValidateControls method when you change
	values and focus by the use of code.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	By design, if you change the values of controls in code, you must explicitly
	call ValidateControls to run the Validate events. Validate does not run
	automatically in this scenario. Similarly, if you close the form after you edit
	a control without leaving that control, the Validate event does not fire because
	it does not lose focus. In this case, you can use the QueryUnload event of the
	Form to decide if ValidateControls should be called.
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Open a new Standard EXE project in Visual Basic 6.0; Form1 is created by
	  default.
	
	2. Add the CommandButton control, Command1, and two TextBox controls, Text1 and
	  Text2, to Form1. CausesValidation is True by default.
	
	3. Add the following code to the General Declarations section of Form1:
	
	  Private Sub Command1_Click()
	      Dim i As Integer
	      
	      For i = 0 To Controls.Count - 1
	          If TypeOf Controls(i) Is TextBox Then
	             Controls(i).SetFocus
	             Controls(i).Text = "Hello! " & i
	          End If
	      Next i
	  End Sub
	
	  Private Sub Form_QueryUnload(Cancel As Integer, UnloadMode As Integer)
	      If UnloadMode = vbFormControlMenu Then
	  '        Me.ValidateControls
	      End If
	  End Sub
	
	  Private Sub Command1_GotFocus()
	      Debug.Print "Command1 got focus"
	  End Sub
	
	  Private Sub Text1_GotFocus()
	      Debug.Print "Text1 got focus"
	  End Sub
	
	  Private Sub Text1_Validate(Cancel As Boolean)
	      Debug.Print "Text1 validate"
	  End Sub
	
	  Private Sub Text2_GotFocus()
	      Debug.Print "Text2 got focus"
	  End Sub
	
	  Private Sub Text2_Validate(Cancel As Boolean)
	      Debug.Print "Text2 validate"
	  End Sub
	
	4. Press F5 to run the project. Click Command1 and notice the Validate events
	  for the TextBox controls do not fire.
	
	5. Edit the contents of Text2 and then close the form. The Validate event is not
	  fired for Text2.
	
	6. Uncomment the ValidateControls line in the Form_QueryUnload event, run the
	  project, and then repeat step 5; the Validate event fires.
	
	REFERENCES
	==========
	
	For additional information about Validate and CausesValidation, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q197128 BUG: CausesValidation Property Does Not Trigger Validate Event
	
	  Q189923 PRB: No Validate Event When Activating CommandButton
	
	Additional query words: Validation
	
	======================================================================
	Keywords          : kbActivexEvents kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
