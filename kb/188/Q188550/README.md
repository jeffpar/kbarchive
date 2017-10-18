---
layout: page
title: "Q188550: BUG: vbKeySeparator Constant Does Not Work"
permalink: kb/188/Q188550/
---

## Q188550: BUG: vbKeySeparator Constant Does Not Work

	Article: Q188550
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
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the constant vbKeySeparator to evaluate keystrokes in the KeyUp,
	KeyDown, or KeyPress event, the comparison always returns False.
	
	CAUSE
	=====
	
	The Visual Basic documentation lists a keycode constant of vbKeySeparator. The
	value of this constant is 108 (0x6C) and that value corresponds to the ENTER key
	on the Numeric Keypad. It also lists the constant vbKeyReturn that has the value
	13 (0xD) and corresponds to the ENTER key on the Keyboard. In the KeyDown,
	KeyPress, or KeyUp events, the keycode returned is 13 regardless of which ENTER
	key is pressed. A test to see if the keycode is equal to 108 will always return
	False because 13 is obviously not equal to 108. The result is that there is no
	way to determine which ENTER key was depressed.
	
	RESOLUTION
	==========
	
	It is possible to differentiate between the two ENTER keys using the Win32 API
	PeekMessage. A bitwise comparison can then be made to determine which of the
	ENTER keys was pressed.
	
	WORKAROUND
	==========
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add the following code to Form1:
	
	        Private Declare Function PeekMessage Lib "user32" Alias _
	          "PeekMessageA" (lpMsg As MSG, ByVal hwnd As Long, _
	          ByVal wMsgFilterMin As Long, ByVal wMsgFilterMax As Long, _
	          ByVal wRemoveMsg As Long) As Long
	
	        Private Type POINTAPI
	           x As Long
	           y As Long
	        End Type
	
	        Private Type MSG
	           hwnd As Long
	           message As Long
	           wParam As Long
	           lParam As Long
	           time As Long
	           pt As POINTAPI
	        End Type
	
	        Const PM_NOREMOVE = &H0
	        Const WM_KEYDOWN = &H100
	        Const WM_KEYUP = &H101
	        Const VK_RETURN = &HD
	
	        Private Sub Form_KeyDown(KeyCode As Integer, Shift As Integer)
	        Dim MyMsg As MSG, RetVal As Long
	
	        ' pass:
	        '   MSG structure to receive message information
	        '   my window handle
	        '   low and high filter of 0, 0 to trap all messages
	        '   PM_NOREMOVE to leave the keystroke in the message queue
	        '   use PM_REMOVE (1) to remove it
	        RetVal = PeekMessage(MyMsg, Me.hwnd, 0, 0, PM_NOREMOVE)
	
	        ' now, per Q77550, you should look for a MSG.wParam of VK_RETURN
	        ' if this was the keystroke, then test bit 24 of the lparam - if ON,
	        ' then keypad was used, otherwise, keyboard was used
	        If RetVal <> 0 Then
	           If MyMsg.wParam = VK_RETURN Then
	              If MyMsg.lParam And &H1000000 Then
	                 MsgBox "Enter from Keypad pressed"
	              Else
	                MsgBox "Enter from Keyboard pressed"
	              End If
	        End If
	        Else
	        MsgBox "No message waiting, or possible problems calling PeekMessage"
	        End If
	        End Sub
	
	3. Run the project and press on both ENTER keys. You will get a message box
	  correctly identifying which ENTER key was pressed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual basic. Form1 is created by
	  default.
	
	2. Add the following code to Form1.
	
	        Private Sub Form_KeyDown(KeyCode As Integer, Shift As Integer)
	        Select Case KeyCode
	
	           Case vbKeyReturn
	              MsgBox "KeyCode 13. Keyboard Enter Key Pressed."
	
	           Case vbKeySeparator
	              MsgBox "KeyCode 108. NumPad Enter Key Pressed."
	
	        End Select
	        End Sub
	
	3. Run the project and press both ENTER keys. Note that the KeyCode is 13
	  regardless of which ENTER key is pressed.
	
	REFERENCES
	==========
	
	For a more detailed explanation of this bitwise comparison, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q77550 Differentiating Between the Two ENTER Keys
	
	
	Additional query words: kbDSupport kbDSD kbVBp kbvbp400bug kbVBp500bug kbVBp600bv kbKeyIn kbHook
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
