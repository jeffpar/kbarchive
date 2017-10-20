---
layout: page
title: "Q150189: BUG: vbCFRTF Clipboard Constant Stored Incorrectly"
permalink: /kb/150/Q150189/
---

## Q150189: BUG: vbCFRTF Clipboard Constant Stored Incorrectly

{% raw %}

	Article: Q150189
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
	
	The built-in vbCFRTF constant is incorrectly stored as a long value in Microsoft
	Visual Basic. It should be stored as an integer. Consequently, if it is used in
	conjunction with the SetData method of the Clipboard object, that takes an
	integer parameter to describe format, an Overflow error is generated. This
	constant is located in the VB - Visual Basic Objects and
	procedures/ClipboardConstants section of the Microsoft Visual Basic Object
	Model.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	Instead of vbCFRTF, use the value &hBF01. For example, instead of the
	statement:
	
	     Clipboard.SetText RichTextBox1.SelRTF, vbCFRTF
	
	use:
	
	     Clipboard.SetText RichTextBox1.SelRTF, &hBF01
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default. Place a
	  RichTextBox control on to Form1. Place the following code in the Click event
	  for Form1:
	
	        Private Sub Form1_Click()
	           Clipboard.Clear
	           Clipboard.SetText RichTextBox1.SelRTF, vbCFRTF
	        End sub
	
	2. Run the project by pressing F5. Type some text into the RTF control.
	  Highlight the text, click on Form1, and an error is generated:
	
	  Run-time error '6'
	  Overflow
	
	  To work around this problem, change the code in the Click event of Form1 to:
	
	        Private Sub Form1_Click()
	           Clipboard.Clear
	           Clipboard.SetText RichTextBox1.SelRTF, &hBF01
	        End sub
	
	Additional query words: 4.00 vb4win vb4all buglist4.00
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
