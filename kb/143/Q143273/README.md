---
layout: page
title: "Q143273: HOWTO: Insert TAB Characters in RichTextBox Control in VB"
permalink: /kb/143/Q143273/
---

## Q143273: HOWTO: Insert TAB Characters in RichTextBox Control in VB

	Article: Q143273
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
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The RichTextBox control allows you to create RTF documents from within your
	Visual Basic program. If you press the TAB key while a RichTextBox control has
	the focus, the focus is moved to the next control in the tab order rather than
	inserting a tab character into the RichTextBox control. This article explains
	how you can insert the TAB character into the RichTextBox control itself.
	
	MORE INFORMATION
	================
	
	At run-time, a user must press CTRL+TAB to insert a TAB character in a
	RichTextBox control. However, most people are accustomed to just simply pressing
	the TAB key. Whenever the TAB key is pressed from within a RichTextBox control,
	the focus is immediately set to the next control on the form.
	
	In the demonstration program below, we change the TabStop property of all
	controls on the form to False. While the RichTextBox control has the focus, the
	TAB key is prevented from setting the focus to another control. This is because
	the TabStop property is set to False. Therefore, the TAB control character is
	correctly inserted into the text of the RichTextBox control.
	
	How to Create the Demonstration Program
	---------------------------------------
	
	The demonstration program below shows how to insert a TAB control character in
	the RichTextBox control provided in Visual Basic.
	
	1. Create a new project in Visual Basic. Form1 is created by default.
	
	2. Add a RichTextBox control to Form1.
	
	3. Add the following code to Form1:
	
	        Dim arrTabStop() As Boolean
	
	        Private Sub RichTextBox1_GotFocus()
	              'Store the TabStop property for each control on the
	              'form and then set the TabStop property of each
	              'control to False
	              ReDim arrTabStop(0 To Controls.Count - 1) As Boolean
	              For i = 0 To Controls.Count - 1
	                 arrTabStop(i) = Controls(i).TabStop
	                 Controls(i).TabStop = False
	              Next
	        End Sub
	
	        Private Sub RichTextBox1_LostFocus()
	              'Restore the Tabstop property for each control on the form
	              For i = 0 To Controls.Count - 1
	                 Controls(i).TabStop = arrTabStop(i)
	              Next
	        End Sub
	
	4. Add two Command Buttons control to Form1.
	
	Execute the demonstration program by pressing the F5 function key. The focus is
	set to the RichTextBox control. Type some text into the RichTextBox control.
	Whenever desired, you can press the TAB key to insert that control character
	into the text you are typing. Notice that pressing TAB does not move the focus
	to the Command Button control; you must click the mouse pointer on the command
	button itself to move the focus to it.
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Issue type        : kbhowto
	
	=============================================================================
	
