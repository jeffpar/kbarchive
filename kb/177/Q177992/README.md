---
layout: page
title: "Q177992: HOWTO: Intercept Keyboard Input from Visual Basic"
permalink: /kb/177/Q177992/
---

## Q177992: HOWTO: Intercept Keyboard Input from Visual Basic

{% raw %}

	Article: Q177992
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to intercept input from the keyboard before it
	reaches your Visual Basic application. Most keyboard input can be readily
	intercepted by a Visual Basic application by using the KeyDown event of the form
	or control. The technique shown here allows you how to handle otherwise
	unavailable key combinations such as the TAB key or access key combinations.
	
	MORE INFORMATION
	================
	
	You can create a keyboard hook that intercepts all keyboard input directed to a
	given thread. To create this hook, you must replace the default KeyboardProc()
	function with a KeyboardProc() of your own. The AddressOf() construct introduced
	in Visual Basic 5.0 makes this possible. Within your KeyboardProc(), you must
	either pass along the keyboard input you receive or delete it. You cannot change
	the contents of the message you receive.
	
	Why would you want to do this? One purpose of the keyboard hook could be to
	enforce data validation before the current control loses focus. Another purpose
	is to work around the difference in event sequence when using an access (or hot
	key) as opposed to a TAB character or mouse click. For additional information on
	this problem, please see the following article in the Microsoft Knowledge Base:
	
	  Q74905 PRB: Access Key Causes Different Event Order than Mouse Click
	
	The next section illustrates how to create a sample application that works around
	this behavior by intercepting the access key, setting the focus, and then
	causing a mouse-click event to occur. Please note that this does not resolve all
	issues with the key order problems. For example, calling Message boxes from an
	event affects the event order as well.
	
	WARNING: Failure to unhook the keyboard hook before exiting your application will
	result in errors, Invalid Page Faults, and data loss. This is caused by the
	system pointing to the your KeyboardProc() function, which no longer exists
	because it has not been notified of the change. Always unhook the keyboard upon
	exiting the application. This is especially important while debugging a program
	that uses this technique within the Microsoft Visual Basic 5.0 Development
	Environment. Clicking the End button or selecting End from the Run menu without
	unhooking will cause an Invalid Page Fault and close Microsoft Visual Basic
	without giving you a chance to save your code.
	
	Steps to Create Sample Project
	------------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a TextBox and a CommandButton to Form1. Set the TabIndex of the TextBox
	  to 0.
	
	3. Add a module to the project. From the Project menu, click Add Module.
	
	4. Copy the following code to the Code window of Module1:
	
	  Public Declare Function CallNextHookEx Lib "user32" _
	     (ByVal hHook As Long, _
	     ByVal nCode As Long, _
	     ByVal wParam As Long, _
	     ByVal lParam As Long) As Long
	
	  Public Declare Function UnhookWindowsHookEx Lib "user32" _
	     (ByVal hHook As Long) As Long
	
	  Public Declare Function SetWindowsHookEx Lib "user32" _
	     Alias "SetWindowsHookExA" _
	     (ByVal idHook As Long, _
	     ByVal lpfn As Long, _
	     ByVal hmod As Long, _
	     ByVal dwThreadId As Long) As Long
	
	  Public Declare Function PostMessage Lib "user32" _
	     Alias "PostMessageA" _
	     (ByVal hwnd As Long, _
	     ByVal wMsg As Long, _
	     ByVal wParam As Long, _
	     ByVal lParam As Long) As Long
	
	  Public Const WH_KEYBOARD = 2
	  Public Const KBH_MASK = &H20000000
	  Public Const WM_LBUTTONDOWN = &H201
	  Public Const WM_LBUTTONUP = &H202
	
	  Global hHook As Long
	
	  Public Function KeyboardProc(ByVal nCode As Long, ByVal wParam As Long, _
	                                ByVal lParam As Long) As Long
	     If nCode >= 0 Then
	     'Process keys you want to filter
	        If wParam = Asc("C") And (lParam And KBH_MASK) <> 0 Then
	           If (lParam And &HC0000000) = 0 Then
	              Form1.Command1.SetFocus
	                 Call PostMessage(Form1.Command1.hwnd, _
	                                   WM_LBUTTONDOWN, 0, &H20002)
	                 Call PostMessage(Form1.Command1.hwnd, _
	                                   WM_LBUTTONUP, 0, &H20002)
	                 KeyboardProc = 1
	                 Exit Function
	           End If
	        End If
	     End If
	     KeyboardProc = CallNextHookEx(hHook, nCode, wParam, lParam)
	  End Function
	
	5. Copy the following code to the Code window of the Form1 form:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	     Debug.Print "Command1_Click"
	  End Sub
	
	  Private Sub Command1_GotFocus()
	     Debug.Print "Command1_GotFocus"
	  End Sub
	
	  Private Sub Form_Load()
	     hHook = SetWindowsHookEx(WH_KEYBOARD, _
	                              AddressOf KeyboardProc, 0&, App.ThreadID)
	  End Sub
	
	  Private Sub Form_Unload(Cancel As Integer)
	     Call UnhookWindowsHookEx(hHook)
	  End Sub
	
	  Private Sub Text1_LostFocus()
	     Debug.Print "Text1_LostFocus"
	  End Sub
	
	6. Press the F5 key to run the program.
	
	The text box should have the focus. Click the command button and note the
	sequence of events that occur as shown in the debug window:
	
	  Text1_LostFocus
	  Command1_GotFocus
	  Command1_Click
	
	Set the focus to the text box and press the ALT+C keys and note that the same
	events occur.
	
	Notes
	-----
	
	Hooks do not always behave the same way in the IDE as they do in an EXE. Make
	certain that you test your solution in an EXE before you move on to other parts
	of your project.
	
	It is possible to intercept all of the keyboard input from all of the
	applications running on a system, but not using "pure" Visual Basic. The hook
	must be placed in a standard DLL; while Visual Basic can create OLE DLLs, it
	cannot create standard DLLs.
	
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Arsenio Locsin, Microsoft Corporation
	
	
	Additional query words: subclass
	
	======================================================================
	Keywords          : kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
