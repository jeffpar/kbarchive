---
layout: page
title: "Q189616: BUG: DateTimePicker Overrides ALT+F4 Key Combination"
permalink: /kb/189/Q189616/
---

## Q189616: BUG: DateTimePicker Overrides ALT+F4 Key Combination

	Article: Q189616
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 16-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a DateTimePicker (DTPicker) control has focus, the ALT+F4 key combination
	does not work. If focus is moved to another control such as a TextBox, the
	ALT+F4 keystroke behaves normally.
	
	RESOLUTION
	==========
	
	Utilizing either the KeyDown or KeyUp event of the DTPicker control, you can
	manually watch for the ALT+F4 keystroke combination and take the appropriate
	action, such as closing the application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Choose Components from the Project menu and add a reference to "Microsoft
	  Windows Common Controls-2".
	
	3. Add a DTPicker control to Form1.
	
	4. Add a TextBox Control to Form1.
	
	5. Run the sample application.
	
	6. Put focus on the DTPicker control if it doesn't have focus already.
	
	7. Press the ALT+F4 keys. Note that the form does not close.
	
	8. Move focus to the TextBox.
	
	9. Press the ALT+F4 keys. The form closes as expected.
	
	10. To workaround this behavior, paste the following code into Form1's code
	  window:
	
	         Private Sub DTPicker1_KeyDown(KeyCode As Integer, Shift As Integer)
	            ' Check for Alt and F4 keystrokes
	            If (Shift And vbAltMask) And (KeyCode = vbKeyF4) Then
	               ' Unload the application
	               Unload Me
	            End If
	         End Sub
	
	11. Repeat steps 5 - 7 and note that the form closes as expected.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp600bug kbCtrl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	
