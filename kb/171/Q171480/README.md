---
layout: page
title: "Q171480: FIX: Setting SelAlignment Property Does Not Affect RichTextBox"
permalink: kb/171/Q171480/
---

## Q171480: FIX: Setting SelAlignment Property Does Not Affect RichTextBox

	Article: Q171480
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Visual Basic version 5.0, setting the SelAlignment property for a
	RichTextBox control may appear to have no effect. When you set the SelAlignment
	property, the RichTextBox control is not affected unless its RightMargin
	property is set to a non-zero value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new "Standard EXE" project in Visual Basic.
	
	2. Click Components on the Project menu. Check "Microsoft Rich TextBox Control
	  5.0" and click OK.
	
	3. Add a RichTextBox control and a CommandButton to Form1.
	
	4. Add the following code to Form1.
	
	        Private Sub Form_Click()
	           RichTextBox1.SelAlignment = rtfCenter
	        End Sub
	
	        Private Sub Command1_click()
	           RichTextBox1.RightMargin = RichTextBox1.Width * 0.9
	        End Sub
	
	5. Press the F5 key to run the application.
	
	6. Click the Form. Note that the alignment of RichTextBox1 does not change to
	  Center as expected.
	
	7. Click Command1 to set the RightMargin of RichTextBox1. Notice that the
	  alignment of RichTextBox1 is properly set to Center.
	
	Additional query words: rtf rich text box textbox left right align
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
