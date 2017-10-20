---
layout: page
title: "Q150188: FIX: Masked Edit Control Replaces Input if PromptChar Changed"
permalink: /kb/150/Q150188/
---

## Q150188: FIX: Masked Edit Control Replaces Input if PromptChar Changed

{% raw %}

	Article: Q150188
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
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
	
	Any input characters inside the Masked Edit control when the PromptChar
	character is changed are converted to the new PromptChar in the 32-bit edition
	of Visual Basic, and are deleted in the 16-bit edition.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	WORKAROUND
	==========
	
	Store the text inside the Masked Edit control before changing the PromptChar and
	restoring the saved text to the control after it has changed.
	
	Rather than change the PromptChar, call the following subroutine to modify it:
	
	     Public Sub ChangePromptChar(ByVal cNewChar As String)
	
	         Dim strClip As String
	
	         strClip = MaskEdBox1.ClipText
	
	         MaskEdBox1.PromptChar = cNewChar
	
	         MaskEdBox1.SelStart = 0
	
	         MaskEdBox1.SelText = strClip
	
	     End Sub
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default. Place a
	  Masked Edit box on to Form1. In the Load event of Form1, place the following
	  code:
	
	     Private Sub Form_Load()
	       MaskEdBox1.Mask = "&&"
	     End Sub
	
	2. In the Click event of Form1, place the following code:
	
	     Private Sub Form_Click()
	     MaskEdBox1.PromptChar = "o"
	     End Sub
	
	3. Run the project by pressing F5. Type "gg", for example, into the Masked Edit
	  control, and then click on the form. The existing characters are transformed
	  to the prompt character "o" in the 32-bit edition, and deleted in the 16-it
	  edition.
	
	To fix this problem, use the subroutine in the Workaround Section above, and then
	change the Click event of Form1 to:
	
	          Private Sub Form_Click()
	
	     ChangePromptChar "o"
	
	     End Sub
	
	Additional query words: kbVBp400bug kbVBp600fix kbdss kbDSupport kbVBp kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
