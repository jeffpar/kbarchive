---
layout: page
title: "Q192252: BUG: Menu Accelerators Still Work When Form is Disabled"
permalink: /kb/192/Q192252/
---

## Q192252: BUG: Menu Accelerators Still Work When Form is Disabled

	Article: Q192252
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a Visual Basic form whose Enabled property has been set to False. All
	user input is disabled except for the menu accelerator keys. The user can still
	invoke code on a disabled form through the accelerator keys (such as pressing
	ALT+F X on the keyboard to invoke the File|Exit command).
	
	RESOLUTION
	==========
	
	When disabling a Form to prevent all user input, top-level menu items must be
	disabled as well. For example:
	
	     Private Sub DisableForm()
	        Form1.Enabled = False
	        mnuFile.Enabled = False
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a CommandButton to Form1.
	
	3. Open the Menu Editor (CTRL+E) and add the following menu items:
	
	  Caption: &File Name: mnuFile
	
	  The next item should be indented:
	
	  Caption: E&xit Name: mnuExit
	
	4. Add the following code to the Code Window for Form1:
	
	        Private Sub Form_Load()
	           Command1.Caption = "Disable Form"
	        End Sub
	
	        Private Sub Command1_Click()
	           Me.Enabled = False
	        End Sub
	
	        Private Sub mnuExit_Click()
	           MsgBox "Exit Called!!"
	           Me.Enabled = True
	        End Sub
	
	5. Compile the program and run it as an EXE.
	
	6. Click the Disable Form button and then click the Exit menu. As expected, all
	  user input is disabled. This means you cannot select menu items using the
	  mouse. However, you can use the accelerator key combination ALT+X to invoke
	  the menu command. The code in the mnuExit_Click event resets the Enabled
	  property to True.
	
	  NOTE: Depending on the version of Windows and Visual Basic you are using, the
	  problem may not appear in the IDE. However, the problem does occur in the
	  compiled executable.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp600bug kbVBp500bug kbMenu kbIDE
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
