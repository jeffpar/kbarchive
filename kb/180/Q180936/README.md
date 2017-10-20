---
layout: page
title: "Q180936: HOWTO: Position a MsgBox Using a Windows Hook Procedure"
permalink: /kb/180/Q180936/
---

## Q180936: HOWTO: Position a MsgBox Using a Windows Hook Procedure

{% raw %}

	Article: Q180936
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
	
	SUMMARY
	=======
	
	This article illustrates how to position a message box on the screen.
	
	MORE INFORMATION
	================
	
	You can create a CBT hook for your application so that it receives notifications
	when windows are created and destroyed. If you display a message box with this
	CBT hook in place, your application will receive a HCBT_ACTIVATE message when
	the message box is activated. Once you receive this HCBT_ACTIVATE message, you
	can position the window with the SetWindowPos API function and then release the
	CBT hook if it is no longer needed.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. Add a module to the project and add the following code to the new module:
	
	        Type RECT
	           Left As Long
	           Top As Long
	           Right As Long
	           Bottom As Long
	        End Type
	
	        Public Declare Function UnhookWindowsHookEx Lib "user32" ( _
	           ByVal hHook As Long) As Long
	        Public Declare Function GetWindowLong Lib "user32" Alias _
	           "GetWindowLongA" (ByVal hwnd As Long, ByVal nIndex As Long) _
	           As Long
	        Public Declare Function GetCurrentThreadId Lib "kernel32" () As Long
	        Public Declare Function SetWindowsHookEx Lib "user32" Alias _
	           "SetWindowsHookExA" (ByVal idHook As Long, ByVal lpfn As Long, _
	           ByVal hmod As Long, ByVal dwThreadId As Long) As Long
	        Public Declare Function SetWindowPos Lib "user32" ( _
	           ByVal hwnd As Long, ByVal hWndInsertAfter As Long, _
	           ByVal x As Long, ByVal y As Long, ByVal cx As Long, _
	           ByVal cy As Long, ByVal wFlags As Long) As Long
	        Public Declare Function GetWindowRect Lib "user32" (ByVal hwnd _
	           As Long, lpRect As RECT) As Long
	
	        Public Const GWL_HINSTANCE = (-6)
	        Public Const SWP_NOSIZE = &H1
	        Public Const SWP_NOZORDER = &H4
	        Public Const SWP_NOACTIVATE = &H10
	        Public Const HCBT_ACTIVATE = 5
	        Public Const WH_CBT = 5
	
	        Public hHook As Long
	
	        Function WinProc1(ByVal lMsg As Long, ByVal wParam As Long, _
	           ByVal lParam As Long) As Long
	
	           If lMsg = HCBT_ACTIVATE Then
	              'Show the MsgBox at a fixed location (0,0)
	              SetWindowPos wParam, 0, 0, 0, 0, 0, _
	                           SWP_NOSIZE Or SWP_NOZORDER Or SWP_NOACTIVATE
	              'Release the CBT hook
	              UnhookWindowsHookEx hHook
	           End If
	           WinProc1 = False
	
	        End Function
	
	        Function WinProc2(ByVal lMsg As Long, ByVal wParam As Long, _
	           ByVal lParam As Long) As Long
	
	        Dim rectForm As RECT, rectMsg As RECT
	        Dim x As Long, y As Long
	
	           'On HCBT_ACTIVATE, show the MsgBox centered over Form1
	           If lMsg = HCBT_ACTIVATE Then
	              'Get the coordinates of the form and the message box so that
	              'you can determine where the center of the form is located
	              GetWindowRect Form1.hwnd, rectForm
	              GetWindowRect wParam, rectMsg
	              x = (rectForm.Left + (rectForm.Right - rectForm.Left) / 2) - _
	                  ((rectMsg.Right - rectMsg.Left) / 2)
	              y = (rectForm.Top + (rectForm.Bottom - rectForm.Top) / 2) - _
	                  ((rectMsg.Bottom - rectMsg.Top) / 2)
	              'Position the msgbox
	              SetWindowPos wParam, 0, x, y, 0, 0, _
	                           SWP_NOSIZE Or SWP_NOZORDER Or SWP_NOACTIVATE
	              'Release the CBT hook
	              UnhookWindowsHookEx hHook
	           End If
	           WinProc2 = False
	
	        End Function
	
	3. Add two CommandButtons to Form1.
	
	4. Add the following code to Form1:
	
	        Private Sub Command1_Click()
	        Dim hInst As Long
	        Dim Thread As Long
	
	           'Set up the CBT hook
	           hInst = GetWindowLong(Me.hwnd, GWL_HINSTANCE)
	           Thread = GetCurrentThreadId()
	           hHook = SetWindowsHookEx(WH_CBT, AddressOf WinProc1, hInst, _
	                                    Thread)
	
	           'Display the message box
	           MsgBox "This message box has been positioned at (0,0)."
	
	        End Sub
	
	        Private Sub Command2_Click()
	        Dim hInst As Long
	        Dim Thread As Long
	
	           'Set up the CBT hook
	           hInst = GetWindowLong(Me.hwnd, GWL_HINSTANCE)
	           Thread = GetCurrentThreadId()
	           hHook = SetWindowsHookEx(WH_CBT, AddressOf WinProc2, hInst, _
	                                    Thread)
	
	           'Display the message box
	           MsgBox "This message box is centered over Form1."
	        End Sub
	
	5. Press the F5 key to run the program. Click Command1 and the message box
	  appears at the upper-left corner of the screen (0,0). Click OK to dismiss the
	  message box. Click Command2 and the message box appears at the center of
	  Form1. Click OK to dismiss the message box.
	
	REFERENCES
	==========
	
	For additional information about creating message hooks with Visual Basic,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q168795 : HOWTO: Hook Into a Window's Messages Using AddressOf
	
	  Q170570 : HOWTO: Build a Windows Message Handler with AddressOf in VB5
	
	Additional query words: MessageBox kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport KBWIN32SDK KBAPI
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
