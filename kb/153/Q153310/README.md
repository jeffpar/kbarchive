---
layout: page
title: "Q153310: How to Select All Text in a Field When It Gets the Focus"
permalink: kb/153/Q153310/
---

## Q153310: How to Select All Text in a Field When It Gets the Focus

	Article: Q153310
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00 | 4.00
	Operating System(s): 
	Keyword(s): kbcode
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
	
	In many cases, it is best to select or highlight the full text of a field when
	that field gains the focus. This allows the user to simply begin typing to
	replace the original text with new text or to press TAB to leave text as it is,
	and move to the next field. This is particularly useful in screens where there
	are multiple text boxes bound to a Data control for example.
	
	MORE INFORMATION
	================
	
	Step by Step Example
	--------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place three text boxes on the form named Text1, Text2, and Text3.
	
	3. Add the following code to the form1 code window:
	
	     Option Explicit
	
	     Sub Form_Load()
	        Text1_lostfocus
	        Text2_lostfocus
	        Text3_lostfocus
	     End Sub
	
	     Sub SetSelected(ctl As Textbox)
	        ctl.SelStart = 0
	        ctl.SelLength = Len(ctl.Text)
	     End Sub
	
	     Private Sub text1_LostFocus()
	         Call SetSelected(text1)
	     End Sub
	
	     Private Sub text2_LostFocus()
	         Call SetSelected(text2)
	     End Sub
	
	     Private Sub text3_LostFocus()
	         Call SetSelected(text3)
	     End Sub
	
	4. On the Run menu, click Start or press F5. You will notice that as you move to
	  each text box, the text is highlighted as opposed to the default behavior of
	  the mouse pointer remaining in front of the first letter in] the text box.
	
	REFERENCES
	==========
	
	Visual Basic Language Reference, SelLength, SelStart Properties, Pages 842-844
	
	  Q110394 How to Automatically Select or Highlight Text Box Upon Focus
	
	Additional query words: 4.00 vb4win vb4all highlight
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00 | 4.00
	
	=============================================================================
	
