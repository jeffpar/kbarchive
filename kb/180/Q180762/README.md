---
layout: page
title: "Q180762: BUG: SetFocus Changes CommandButton Value to True"
permalink: kb/180/Q180762/
---

## Q180762: BUG: SetFocus Changes CommandButton Value to True

	Article: Q180762
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp500bug kbVBp600bug kbOSWinCE100bug kbGrpDSVB
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Value property of a CommandButton is set to False and the SetFocus
	method of the CommandButton is executed, the CommandButton Value property is set
	to True.
	
	RESOLUTION
	==========
	
	Set the Value property of the CommandButton to False after the SetFocus method
	is called, as follows:
	
	     Private Sub Command2_Click()
	        If Command1.Value = False Then
	           Command1.SetFocus      ' Set focus to Command1.
	           Command1.Value = False ' Set the Value property back to False.
	           MsgBox "Command1.Value = " & Command1.Value
	        Else
	           Command1.SetFocus   'Set focus to Command1.
	        End If
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE project in either Visual Basic or eMbedded Visual
	  Basic. Form1 is created by default.
	
	2. Add two CommandButtons to Form1.
	
	3. Add the following code to Form1:
	
	        Private Sub Form_Load()
	            Command1.Value = False
	            MsgBox "Command1.Value = " & Command1.Value
	        End Sub
	
	        Private Sub Command2_Click()
	            Command1.SetFocus
	            MsgBox "Command1.Value = " & Command1.Value
	        End Sub
	
	4. Press the F5 key to run the project.
	
	5. Click Command2 and note that a message box appears that indicates that the
	  Value property of Command1 has been set to True.
	
	Additional query words: wince wce vbce evb vbce6
	
	======================================================================
	Keywords          : kbToolkit kbVBp500bug kbVBp600bug kbOSWinCE100bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
