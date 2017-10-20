---
layout: page
title: "Q153633: How to Determine If Text in a Text Box Can Be Undone"
permalink: /kb/153/Q153633/
---

## Q153633: How to Determine If Text in a Text Box Can Be Undone

{% raw %}

	Article: Q153633
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00 | 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how you can determine at any given point if the
	text entered into a text box can be undone.
	
	MORE INFORMATION
	================
	
	You can send an EM_CANUNDO message to a TextBox control to determine whether an
	operation on it can be undone; that is, whether the control can respond to the
	EM_UNDO message. If the TextBox control can correctly process the EM_UNDO
	message, the return value from SendMessage() is TRUE; otherwise, it is FALSE.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new project in Visual Basic 4.0. Form1 is added by default.
	
	2. Add a text box (Text1) to Form1.
	
	3. Add the following code to the General Declaration portion of Form1:
	
	     Const EM_CANUNDO = &HC6
	     Private Declare Function SendMessage Lib "user32" Alias _
	               "SendMessageA" _      (ByVal hwnd As Long, ByVal wMsg As Long,
	     ByVal wParam As Long, ByVal _    lParam As Long) As Long
	
	     Private Sub Form_Click()
	       Dim lRet As Long
	
	       lRet = SendMessage(Text1.hwnd, EM_CANUNDO, 0&, 0&)
	       Debug.Print lRet
	     End Sub
	
	4. Press F5 to run the program. Type some text into the text box and click
	  Form1. The Debug window will display a value of 1 indicating that the text
	  just entered can be undone. Note that if no text is typed into the text box
	  and the form is clicked, SendMessage() will return 0, as there is nothing to
	  undo.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00 | 4.00
	
	=============================================================================
	

{% endraw %}
