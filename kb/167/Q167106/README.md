---
layout: page
title: "Q167106: BUG: Rich Text Box Control Does Not Word Wrap"
permalink: /kb/167/Q167106/
---

## Q167106: BUG: Rich Text Box Control Does Not Word Wrap

	Article: Q167106
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the Multiline property of a Rich Text Box control to True does not
	behave as expected. By setting Multiline to True, words should wrap when they
	are typed or displayed in a Rich Text Box control. However, they do not.
	
	CAUSE
	=====
	
	This behavior occurs only if the RightMargin property of the Rich Text Box
	control is set to 0. However, the Help file topic for the RightMargin property
	of the RichTextBox control incorrectly states the following:
	
	  The default for the RightMargin property is 0 and will cause the control to
	  set text wrapping equal to the right-most part of the RichTextBox control so
	  all text is viewable.
	
	RESOLUTION
	==========
	
	To work around this behavior, set the RightMargin property to a value greater
	than zero. To get the Multiline behavior to work as expected, set the
	RightMargin property equal to or slightly less than the Width property of the
	Rich Text Box control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This behavior occurs only with version 5.00.3714 of the Rich Text Box control
	that is shipped with Microsoft Visual Basic 5.0.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE in Visual Basic 5.0. Form1 is created by default.
	
	2. Press CTRL+T to bring up the Components dialog.
	
	3. Select the Microsoft Rich Text Box Control 5.0.
	
	4. Draw a Rich Text Box Control onto Form1.
	
	5. Set the following properties for RichTextBox1:
	
	        Multiline = True
	        RightMargin = 0
	
	6. Run the project.
	
	7. Type words into the Rich Text Box until the typed text reaches beyond the
	  right hand margin of the control. Note that the text will not wrap to the
	  next line but will continue off to the right.
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	
	=============================================================================
	
