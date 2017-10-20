---
layout: page
title: "Q216664: HOWTO: Prevent the ENTER Key From Firing in TreevView Control"
permalink: /kb/216/Q216664/
---

## Q216664: HOWTO: Prevent the ENTER Key From Firing in TreevView Control

{% raw %}

	Article: Q216664
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbCtrl kbTreeView kbGrpDSUser kbVBp kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can intercept keyboard input before it reaches a control by creating a
	keyboard hook. The example below illustrates how to intercept the ENTER key
	before it reaches a TreeView control.
	
	WARNING: Failure to unhook the keyboard hook before exiting your application will
	result in errors, Invalid Page Faults, and data loss. This is caused by the
	system still pointing to your KeyboardProc() function, which no longer exists
	because it has not been notified of the change.
	
	Always unhook the keyboard upon exiting the application. This is especially
	important while debugging a program that uses this technique within the
	Microsoft Visual Basic Development Environment. Clicking the END button on the
	toolbar or selecting END from the Run menu without unhooking first will cause an
	Invalid Page Fault and close Microsoft Visual Basic without giving you a chance
	to save your code. For this reason it is best to test hooks in the EXE rather
	than from the IDE.
	
	MORE INFORMATION
	================
	
	This method is necessary because the TreeView control processes certain
	navigational keyboard messages before it actually raises the corresponding
	keyboard events for those respective messages. The only way to prevent the
	control from acting on the keyboard messages is to trap and intercept them.
	
	The following sample renders the ENTER, RIGHT ARROW, and LEFT ARROW keys useless
	when used on a TreeView control. It still allows the UP and DOWN ARROWS to be
	used to navigate the tree as well as collapse and expand selected nodes.
	
	1. Create a Visual Basic 6.0 Standard EXE project. Form1 is create by default.
	
	2. On the Project menu, click Components. Select Microsoft Windows Common
	  Controls 6.0 (5.0 for Visual Basic 5.0) and click OK.
	
	3. Add a TreeView control to Form1.
	
	4. Paste the following code in the General Declarations section of Form1:
	
	  Option Explicit
	  Private nodx As Node
	
	  Private Sub Form_Load()
	  ' Set keyboard hook
	     hHook = SetWindowsHookEx(WH_KEYBOARD, _
	                              AddressOf KeyboardProc, _
	                              0&, _
	                              App.ThreadID)
	  ' Create Tree
	     TreeView1.Style = tvwTreelinesPlusMinusPictureText ' Style 7
	     TreeView1.LineStyle = tvwRootLines  ' Linestyle 1
	         Set nodx = TreeView1.Nodes.Add(, , "r", "Root")
	     Set nodx = TreeView1.Nodes.Add("r", tvwChild, "Child1", "Child1")
	     Set nodx = TreeView1.Nodes.Add("r", tvwChild, "Child2", "Child2")
	     Set nodx = TreeView1.Nodes.Add("r", tvwChild, "Child3", "Child3")
	  End Sub
	
	  Private Sub Form_Unload(Cancel As Integer)
	     Call UnhookWindowsHookEx(hHook)
	  End Sub
	        
	  Private Sub TreeView1_KeyDown(KeyCode As Integer, Shift As Integer)
	     Select Case KeyCode
	        Case vbKeyDown
	           ' Expand tree on down arrow
	           TreeView1.SelectedItem.Expanded = True
	        Case vbKeyUp
	           ' Collapse tree on up arrow
	           TreeView1.SelectedItem.Expanded = False
	     End Select
	  End Sub
	
	5. On the Project menu, click Add Module. Module1 is created by default.
	
	6. Paste the following code in the General Declaration section of Module1:
	
	  Option Explicit
	
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
	
	  Public Const WH_KEYBOARD = 2
	  Public hHook As Long
	
	  Public Function KeyboardProc(ByVal nCode As Long, _
	                               ByVal wParam As Long, _
	                               ByVal lParam As Long) As Long
	     If nCode >= 0 Then
	     ' Process keys you want to filter in TreeView1 control.
	        If Form1.ActiveControl.Name = "TreeView1" Then
	           Select Case wParam
	              Case vbKeyReturn
	                 Debug.Print "    Enter Key"
	                 KeyboardProc = 1
	                 Exit Function
	              Case vbKeyRight
	                 Debug.Print "    Right Arrow"
	                 KeyboardProc = 1
	                 Exit Function
	              Case vbKeyLeft
	                 Debug.Print "    Left Arrow"
	                 KeyboardProc = 1
	                 Exit Function
	           End Select
	        End If
	     End If
	     KeyboardProc = CallNextHookEx(hHook, nCode, wParam, lParam)
	  End Function
	
	7. Press the F5 key to run the application. When the TreeView control has focus,
	  try the ENTER key along with the LEFT and RIGHT ARROW keys to verify that
	  they are inoperative (as intended). Try the UP and DOWN ARROW keys,
	  confirming that they can be used to navigate the tree, including collapse and
	  expand selected nodes.
	
	NOTE: Hooks do not always behave the same way in the IDE as they do in an EXE.
	Make certain that you test your solution in an EXE before you move on to other
	parts of your project.
	
	REFERENCES
	==========
	
	For additional information about intercepting keyboard input, please see the
	following article in the Microsoft Knowledge Base:
	
	Q177992 HOWTO: Intercept Keyboard Input from Visual Basic
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbCtrl kbTreeView kbGrpDSUser kbVBp kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
