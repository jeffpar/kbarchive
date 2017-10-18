---
layout: page
title: "Q149273: BUG: Form Key Events Fire Twice with Some Controls"
permalink: kb/149/Q149273/
---

## Q149273: BUG: Form Key Events Fire Twice with Some Controls

	Article: Q149273
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbVBp400bug kbVBp500bug kbGrpDSVB
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
	
	SYMPTOMS
	========
	
	If an SSTab, SSFrame or SSPanel control has the focus and a key is pressed, then
	all of the Form level key events (Form_KeyDown, Form_KeyPress, and Form_KeyUp)
	will be fired twice. This problem occurs only if the KeyPreview property of the
	form is set to True.
	
	RESOLUTION
	==========
	
	It may be possible to write code to ignore the second key event if focus is on
	the tab control. This could be done by utilizing a global flag variable to
	represent whether or not the key event had been raised before. Aside from this,
	the best option is to avoid writing code that depends on this functionality.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE Project in Visual Basic, Form1 is created by
	  default.
	
	2. Draw a single SSTab control onto Form1.
	
	3. Change this property of Form1:
	
	  KeyPreview: True
	
	4. Add this code to the form:
	
	        Private Sub Form_KeyDown(KeyCode As Integer, Shift As Integer)
	            Debug.Print "Form KeyDown"
	        End Sub
	
	        Private Sub Form_KeyPress(KeyAscii As Integer)
	            Debug.Print "Form_KeyPress"
	        End Sub
	
	        Private Sub Form_KeyUp(KeyCode As Integer, Shift As Integer)
	            Debug.Print "Form KeyUp"
	        End Sub
	
	        Private Sub SSTab1_KeyDown(KeyCode As Integer, Shift As Integer)
	            Debug.Print "SSTab KeyDown"
	        End Sub
	
	        Private Sub SSTab1_KeyPress(KeyAscii As Integer)
	            Debug.Print "SSTab KeyPress"
	        End Sub
	
	        Private Sub SSTab1_KeyUp(KeyCode As Integer, Shift As Integer)
	            Debug.Print "SSTab KeyUp"
	        End Sub
	
	5. Press F5 or select Start from the Run menu to run the application. Click once
	  on the SSTab to ensure that it has the focus. Then press a single key on the
	  keyboard. Observe the output in the debug window to see that each form key
	  event has been fired twice.
	
	Additional query words: kbVBp400bug kbVBp500bug kbCtrl kbVBp kbdsd kbDSupport
	
	======================================================================
	Keywords          : kbVBp400bug kbVBp500bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbbug
	
	=============================================================================
	
