---
layout: page
title: "Q160233: FIX: Can't Set SelStart Property of RichTextBox to &gt; 32K"
permalink: /kb/160/Q160233/
---

## Q160233: FIX: Can't Set SelStart Property of RichTextBox to &gt; 32K

{% raw %}

	Article: Q160233
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot set the SelStart property of RichTextBox controls that contain text
	greater than 32K (32768) characters in length to a value greater than 32767 and
	less than the text length. Although this is a legal range, SelStart is
	automatically set to the text length. Consequently, you cannot make selections
	within this range.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 5.0.
	
	RESOLUTION
	==========
	
	Use the SendMessage API of USER32 with the EM_EXSETSEL parameter to set the
	SelStart position:
	
	     Private Const WM_USER = &H400
	     Private Const EM_EXSETSEL = (WM_USER + 55)
	
	     Private Declare Function SendMessage Lib "USER32" Alias "SendMessageA"
	     (ByVal hwnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As
	     Long) As Long
	
	     Private Sub Command1_Click()
	     Dim x As String
	
	         x = String(32800, "a")
	         RichTextBox1.Text = x
	
	         '''[THE NORMAL WAY] RichTextBox1.SelStart = 32790
	         SendMessage RichTextBox1.hwnd, EM_EXSETSEL, 0, 32790
	         RichTextBox1.SelLength = 10
	
	         MsgBox RichTextBox1.SelText
	
	     End Sub
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place a RichTextBox, RichTextBox1, on Form1.
	
	3. Place a CommandButton, Command1, on Form1.
	
	4. Place the following code in the Click event of Command1:
	
	     Private Sub Command1_Click()
	     Dim x As String
	
	         x = String(32800, "a")
	         RichTextBox1.Text = x
	
	         RichTextBox1.SelStart = 32790
	         RichTextBox1.SelLength = 10
	
	         MsgBox RichTextBox1.SelText
	
	     End Sub
	
	5. Press the F5 key to run the project.
	
	6. Click Command1 and note that nothing is selected.
	
	Additional query words: kbstream kbVBp400bug kbVBp500fix kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
