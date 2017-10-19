---
layout: page
title: "Q191215: BUG: Print Method Does Not Work Within a With-Block"
permalink: /kb/191/Q191215/
---

## Q191215: BUG: Print Method Does Not Work Within a With-Block

	Article: Q191215
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbCompiler kbVBp600bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual Basic, although the Print method exists on the Printer and Form
	objects, it does not work within a With-block. The Print method is also not
	listed in the Object Browser.
	
	When you try to invoke the Print statement within a With-block, the following
	error occurs when you run the program:
	
	  Compile error: Method or data object not found
	
	CAUSE
	=====
	
	The problem arises because Visual Basic is not parsing the Print identifier
	within the With statement correctly.
	
	RESOLUTION
	==========
	
	Remove the Print method from the With-block.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Place one CommandBbutton on Form1 and paste the following code into the code
	  window of Form1:
	
	        Private Sub Command1_Click()
	
	           Printer.CurrentX = Printer.ScaleWidth / 2
	           Printer.CurrentY = Printer.ScaleHeight / 2
	           Printer.Print "Test"  ' this works
	           Printer.EndDoc
	
	           With Printer
	              .CurrentX = Printer.ScaleWidth / 2
	              .CurrentY = Printer.ScaleHeight / 2
	              .Print "Test"      ' this does not work
	              .EndDoc
	           End With
	
	        End Sub
	
	3. Press F5 to run the program.
	
	RESULTS: The following error message appears:
	
	  Compile error: Method or data object not found
	
	======================================================================
	Keywords          : kbcode kberrmsg kbCompiler kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
