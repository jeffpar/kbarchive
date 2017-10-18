---
layout: page
title: "Q165975: PRB: Line Continuation Character (_) Causes Event Concatenation"
permalink: kb/165/Q165975/
---

## Q165975: PRB: Line Continuation Character (_) Causes Event Concatenation

	Article: Q165975
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The code window shows each event procedure of a control individually in the
	default procedure view. Adding a space and a line continuation character (an
	underscore "_") after the line of code preceding the End Sub statement results
	in the following event of the same control to appear. If the Full Module View
	check box in the Editor Tab of the Options dialog box is clicked, the line
	separating the two procedures disappears.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The line continuation character causes the next line of code to be concatenated
	with the code line containing the line continuation character. Visual Basic then
	considers the procedure containing the line continuation character as part of
	the next event procedure.
	
	Steps To Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic, or, if it is already running, click New Project from the
	  File menu.
	
	2. Copy and paste the following code to the Form1 Code Window:
	
	        Private Sub Form_Click()
	           MsgBox "world"
	        End Sub
	
	        Private Sub Form_Load()
	           MsgBox "hello"
	        End Sub
	
	  You should see only the Form_Load event in the code window.
	
	3. In the Form_Click event, type a space followed by a line continuation
	  character (_) after the code line for the message box in the Form_Click
	  procedure event. The code should look like the following:
	
	        Private Sub Form_Click()
	           MsgBox "world" _
	        End Sub
	
	  After you press the ENTER key, the Form_Click and the Form_Load procedure
	  events appear in the same procedure event. If the Full Module View checkbox
	  is checked, then the line separating the procedures disappears.
	
	Additional query words: kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbVBp400 kbIDE
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
