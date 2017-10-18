---
layout: page
title: "Q160974: HOWTO: Determine If Text in a Text Box Can Be Undone"
permalink: kb/160/Q160974/
---

## Q160974: HOWTO: Determine If Text in a Text Box Can Be Undone

	Article: Q160974
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0;
	Operating System(s): 
	Keyword(s): kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows, by example, how to determine at any given time if the text
	entered into a text box can be undone.
	
	MORE INFORMATION
	================
	
	By using the Windows API SendMessage(), you can send an EM_CANUNDO message to a
	TextBox control to determine whether an operation on it can be undone; that is,
	whether the control can respond to the EM_UNDO message. If the TextBox control
	can correctly process the EM_UNDO message, the return value from SendMessage()
	is True; otherwise, it is False.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. Add a TextBox control (Text1) to Form1.
	
	3. Add the following code to Form1's General Declarations section:
	
	        Const EM_CANUNDO = &HC6
	        Private Declare Function SendMessage Lib "User32" Alias _
	        "SendMessageA" _
	           (ByVal hWnd As Long, _
	            ByVal wMsg As Long, _
	            ByVal wParam As Long, _
	            ByVal lParam As Long) As Long
	
	        Private Sub Form_Load()
	           Text1.Text = ""
	        End Sub
	
	        Private Sub Form_Click()
	           Dim lRet As Long
	
	           lRet = SendMessage(Text1.hWnd, EM_CANUNDO, 0&, 0&)
	           Debug.Print lRet
	        End Sub
	
	4. Press the F5 key to run the program. Type some text into the text box and
	  click Form1. The Debug window displays a value of 1 indicating that the text
	  you just entered can be undone. Note that if no text is typed into the text
	  box and the form is clicked, SendMessage()returns 0 because there is nothing
	  to undo.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0;
	Issue type        : kbhowto
	
	=============================================================================
	
