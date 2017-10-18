---
layout: page
title: "Q140353: BUG: KeyAscii Behavior Different with DBCombo Control"
permalink: kb/140/Q140353/
---

## Q140353: BUG: KeyAscii Behavior Different with DBCombo Control

	Article: Q140353
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the KeyAscii parameter to 0 in a KeyPress event of a DBCombo control
	shows the character being typed. The expected behavior is the same as a TextBox
	control--characters being typed should not appear in the DBCombo control.
	
	WORKAROUND
	==========
	
	To work around this problem, place a TextBox control over the top of the text
	portion of the DBCombo control. Add code shown below to the KeyPress event of
	the TextBox control to accept and reject the appropriate characters. If you
	would like typed characters not to appear, then use the normal method of setting
	the KeyPress parameter of the TextBox control to 0. All other characters from
	the TextBox control can be passed through the DBCombo control by appending the
	characters to the Text property of the DBCombo control.
	
	The following code example shows only numeric values in the TextBox control and
	passes those values to the Text property of the DBCombo control.
	
	     Private Sub Text1_KeyPress(KeyAscii As Integer)
	        If (KeyAscii < 48) Or (KeyAscii > 57) Then
	           KeyAscii = 0
	        Else
	           DBCombo1.Text = Text1.Text & Chr$(KeyAscii)
	        End If
	
	     End Sub
	
	You can also add code to exactly mimic the functionality of an empty TextBox
	control. For example, you can add code to allow the user to backspace and also
	to ensure that changes in the DBCombo control are reflected in the TextBox
	control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic 4.0 or if it is already running, click New Project on the
	  File menu.
	
	2. Add a DBCombo and a TextBox control to the Form1 form.
	
	3. Copy the following code sample to the Form1 code window:
	
	        Private Sub DBCombo_KeyPress(KeyAscii As Integer)
	           If (KeyAscii < 48) Or (KeyAscii > 57) Then
	              KeyAscii = 0
	           End If
	        End Sub
	
	        Private Sub Text1_KeyPress(KeyAscii As Integer)
	           If (KeyAscii < 48) Or (KeyAscii > 57) Then
	              KeyAscii = 0
	           End If
	        End Sub
	
	4. Press the F5 key or click Start on the Run menu to start the program.
	
	5. Enter some characters in the DBCombo control. The DBCombo control shows all
	  the characters typed. Now enter some character in the TextBox control. Note
	  that only numbers appear in the TextBox control The code in the KeyPress
	  event of either control should cause only numbers (0-9) to be displayed. All
	  other characters should be rejected and should not be displayed.
	
	Additional query words: buglist4.00 4.00 DBCombo vb4all vb4win combobox textbox
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	Issue type        : kbbug
	
	=============================================================================
	
