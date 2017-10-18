---
layout: page
title: "Q171475: FIX: RichTextBox Cleared When BorderStyle Changes at Run-Time"
permalink: kb/171/Q171475/
---

## Q171475: FIX: RichTextBox Cleared When BorderStyle Changes at Run-Time

	Article: Q171475
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual Basic 5.0, when the Borderstyle of a RichTextBox control is changed at
	run-time, the text of the RichTextBox is cleared.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new "Standard EXE" project.
	
	2. On the Project menu, click Components. Check "Microsoft RichTextBox Control
	  5.0."
	
	3. Add a RichTextBox control and a CommandButton to Form1.
	
	4. Add the following code to the Click event of Command1:
	
	        If RichTextBox1.BorderStyle = 0 Then
	           RichTextBox1.BorderStyle = 1
	        Else
	           RichTextBox1.BorderStyle = 0
	        End If
	
	5. Press the F5 key to run the project.
	
	6. Type any text in the RichTextBox control and then click Command1. Note that
	  the text of the RichTextBox is cleared.
	
	Additional query words: rtf richtext
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
