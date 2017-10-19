---
layout: page
title: "Q143425: FIX: Cannot Load Binary Data or Files Containing Binary Data"
permalink: /kb/143/Q143425/
---

## Q143425: FIX: Cannot Load Binary Data or Files Containing Binary Data

	Article: Q143425
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
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
	
	When using the RichTextBox control and attempting to load a text file that
	contains a blank line as the first line, or, assigning a file, which contains a
	blank line as the first line, to the FileName property of the RichTextBox
	control, you will receive an error (32002):
	
	  Cannot load binary data or files containing binary data
	
	CAUSE
	=====
	
	The RichTextBox control scans the file and examines the first 5 characters. This
	error is generated if any of the first 5 characters have an ANSI value less than
	25 or greater than 250.
	
	RESOLUTION
	==========
	
	To workaround the problem, import the file into any text editor (MS-DOS Edit,
	Notepad or WordPad) and add 5 blank spaces on the first line.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been corrected in the Visual
	Basic version 4.0a for Windows synchronization release. This problem has also
	been corrected in Visual Basic 5.0 and 6.0.
	
	Additional query words: kbVBp400bug kbVBp500fix kbVBp600fix kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : 4.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
