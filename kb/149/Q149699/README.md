---
layout: page
title: "Q149699: FIX: RichTextBox Control Prevents Click Event from Firing"
permalink: /kb/149/Q149699/
---

## Q149699: FIX: RichTextBox Control Prevents Click Event from Firing

	Article: Q149699
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbVBp400bug kbVBp600fix kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After double-clicking on the RichTextBox, the Click event for other controls
	does not fire the next time the left mouse button is pressed.
	
	RESOLUTION
	==========
	
	1. Place the following code in the Declarations portion of the form:
	
	        Private Declare Function SendMessage Lib "user32" Alias _
	           "SendMessageA" (ByVal hwnd As Long, ByVal wMsg As Long, _
	           ByVal wParam As Long, lParam As Long) As Long
	
	        Const MOUSEEVENTF_LEFTUP = &H4
	        Const WM_LBUTTONUP = &H202
	
	2. Place the following code in the DblClick event for the RichTextBox:
	
	        Private Sub RichTextBox1_DblClick()
	           Dim retval As Long
	           retval = SendMessage(RichTextBox1.hwnd, WM_LBUTTONUP, 0, 0)
	        End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default. Add a
	  RichTextBox and a CommandButton to the form. Their names become RichTextBox1
	  and Command1 by default.
	
	2. Add the following code to the CommandButton's Click event:
	
	        Private Sub Command1_Click()
	           MsgBox "Click Event!"
	        End Sub
	
	3. Run the project. Double-click on the RichTextBox and click once on the
	  CommandButton. The Click event will not fire on the first click. After the
	  first click, everything functions normally.
	
	Additional query words: kbVBp400bug kbVBp600fix kbVBp kbdsd kbDSupport kbCtrl
	
	======================================================================
	Keywords          : kbVBp400bug kbVBp600fix kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
