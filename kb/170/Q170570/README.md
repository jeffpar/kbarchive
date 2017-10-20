---
layout: page
title: "Q170570: HOWTO: Build a Windows Message Handler with AddressOf in Visual"
permalink: /kb/170/Q170570/
---

## Q170570: HOWTO: Build a Windows Message Handler with AddressOf in Visual

{% raw %}

	Article: Q170570
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbVBp500 kbVBp600 kbOSWin98 kbGrpDSVBDB
	Last Modified: 23-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to build a Windows message handler in Visual
	Basic. It traps the right-click message and replaces the default context menu
	with a custom built one.
	
	MORE INFORMATION
	================
	
	Prior to the release of Visual Basic 5.0, many developers used third-party
	Windows message-handling tools or developed their own with tools such as
	Microsoft Visual C++. With the addition of the AddressOf function to Visual
	Basic 5.0 and higher, developers can now create their own Windows message
	handling routines within their Visual Basic applications.
	
	For example, when a user right-clicks on a textbox in Windows 95, Windows 98,
	Windows Me, Windows NT 4.0 or Windows 2000, the operating system automatically
	displays a default context menu. This default behavior occurs before the Visual
	Basic application fires the MouseUp event. Without the use of a Windows message
	handler, there is no way to replace the default context menu with a custom built
	context menu.
	
	The following code shows how to build a Windows message handler to trap and
	discard the right-click message and to replace the default context menu with a
	custom built one.
	
	WARNING: Using AddressOf may cause unpredictable results if you don't completely
	understand the concept of function callbacks. You must understand how the basic
	portion of the callback works, and also the code of the DLL into which you are
	passing your function address. Debugging such interactions is difficult because
	the program runs in the same process as the development environment. In some
	cases, systematic debugging may not be possible. See details in the REFERENCES
	section of this article for more information.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Use the Menu Editor to add two menu items to the form:
	
	  a. For the first menu item, set its Caption property to "My Popup," its Name
	     property to "mnuPopup," and its Visible property to "False."
	
	  b. For the second menu item, set its Caption property to "My Context," its
	     Name property to "mnuPopupContext," and use the arrow keys to indent the
	     item to be a submenu of the first item.
	
	3. Add two CommandButtons and a textbox to the form:
	
	  a. For the first CommandButton, set its Name property to "cmdHook" and its
	     Caption property to "&Hook."
	
	  b. For the second CommandButton, set its Name property to "cmdUnHook" and its
	     Caption property to "&UnHook."
	
	  c. For the textbox, set its Name property to "txtHook" and its Text property
	     to "Right Click On Me!"
	
	4. Add the following code to the form:
	
	        Private Sub cmdHook_Click()
	            Hook
	        End Sub
	
	        Private Sub cmdUnHook_Click()
	            UnHook
	        End Sub
	
	        Private Sub Form_Load()
	            gHW = txtHook.hWnd
	        End Sub
	
	        Private Sub txtHook_MouseUp(Button As Integer, Shift As Integer, _
	                                    X As Single, Y As Single)
	            If Button = vbRightButton Then
	                PopupMenu mnuPopup
	            End If
	        End Sub
	
	5. Add a Module to the project.
	
	6. Add the following code to the new Module:
	
	      Declare Function CallWindowProc Lib "user32" Alias "CallWindowProcA" _
	             (ByVal lpPrevWndFunc As Long, _
	              ByVal hWnd As Long, _
	              ByVal Msg As Long, _
	              ByVal wParam As Long, _
	              ByVal lParam As Long) As Long
	
	      Declare Function SetWindowLong Lib "user32" Alias "SetWindowLongA" _
	             (ByVal hWnd As Long, _
	              ByVal nIndex As Long, _
	              ByVal dwNewLong As Long) As Long
	
	      Public Const GWL_WNDPROC = -4
	
	      Public Const WM_RBUTTONUP = &H205
	
	      Global lpPrevWndProc As Long
	      Global gHW As Long
	
	      Public Sub Hook()
	          lpPrevWndProc = SetWindowLong(gHW, GWL_WNDPROC, _
	                                       AddressOf WindowProc)
	      End Sub
	
	      Public Sub UnHook()
	          Dim lngReturnValue As Long
	          lngReturnValue = SetWindowLong(gHW, GWL_WNDPROC, lpPrevWndProc)
	      End Sub
	
	      Function WindowProc(ByVal hw As Long, _
	                          ByVal uMsg As Long, _
	                          ByVal wParam As Long, _
	                          ByVal lParam As Long) As Long
	
	          Select Case uMsg
	              Case WM_RBUTTONUP
	                  Form1.PopupMenu Form1.mnuPopup
	              Case Else
	                  WindowProc = CallWindowProc(lpPrevWndProc, hw, _
	                                             uMsg, wParam, lParam)
	          End Select
	      End Function
	
	7. Save the project and run it. Right-click on the textbox and notice that the
	  default context menu appears before the custom menu. Click on the
	  CommandButton marked "Hook" to enable the Windows message handler.
	  Right-click on the textbox and note that the default context menu no longer
	  appears. Be sure to click on the CommandButton marked "UnHook" before
	  quitting the application. Always disable a custom Windows message handler
	  before the application terminates. Clicking the End button, while the Windows
	  message handler is still enabled, will cause an IPF.
	
	REFERENCES
	==========
	
	If you are not familiar with the use of callbacks, then the following references
	may help:
	
	"Dan Appleman's Visual Basic Programmer's Guide to the Win32 API" by Dan
	Appleman
	
	Platform Software Development Kit (SDK) Online Help
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by David
	Sceppa, Microsoft Corporation
	
	
	Additional query words: AddressOf subclass sub-class
	
	======================================================================
	Keywords          : kbAPI kbVBp500 kbVBp600 kbOSWin98 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
