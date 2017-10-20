---
layout: page
title: "Q277916: HOWTO: Use GetKeyState() to Check If the TAB Key Was Pressed"
permalink: /kb/277/Q277916/
---

## Q277916: HOWTO: Use GetKeyState() to Check If the TAB Key Was Pressed

{% raw %}

	Article: Q277916
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbCodeSnippet
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you press the TAB key while the focus is on a control, the focus goes to
	the next control in the TAB order, and the KeyPress, KeyUp, and KeyDown events
	of the original control do not fire. As a result, you cannot use these events to
	trap the TAB key. However, you can use the GetKeyState function to check if the
	TAB key was pressed.
	
	MORE INFORMATION
	================
	
	To check if the TAB key was pressed, follow these steps:
	
	1. Start a Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Add a Textbox and a CommandButton to Form1. Set the CausesValidation property
	  of the Textbox to True.
	
	3. In the code module of Form1, add the following code:
	
	  Option Explicit
	
	  Private Declare Function GetKeyState Lib "user32" (ByVal nVirtKey As Long) As Integer
	
	  Private Sub Text1_KeyDown(KeyCode As Integer, Shift As Integer)
	     Debug.Print "in keyDown"
	  End Sub
	
	  Private Sub Text1_KeyPress(KeyAscii As Integer)
	     Debug.Print "in keyPress"
	  End Sub
	
	  Private Sub Text1_KeyUp(KeyCode As Integer, Shift As Integer)
	     Debug.Print "in keyUp"
	  End Sub
	
	  Private Sub Text1_Validate(Cancel As Boolean)
	     Dim retval As Integer
	
	     retval = GetKeyState(vbKeyTab)
	     If retval < 0 Then Debug.Print "Tab key was pressed in Text1"
	  End Sub
	
	4. Press the F5 key to run the project.
	
	5. The focus is in the Textbox. Press the TAB key, and the focus shifts to the
	  CommandButton.
	
	6. Check the Immediate window. Although the KeyPress, KeyUp, and KeyDown events
	  do not fire, the Validate event indicates that the Tab key was pressed.
	
	
	Additional query words: tab trap GetKeyState
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbCodeSnippet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
