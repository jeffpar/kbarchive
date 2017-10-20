---
layout: page
title: "Q224302: HOWTO: Suppress a TextBox Control's Popup Menu"
permalink: /kb/224/Q224302/
---

## Q224302: HOWTO: Suppress a TextBox Control's Popup Menu

{% raw %}

	Article: Q224302
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbGrpDSUser kbVBp500 kbVBp600 kbWndwMsg kbGrpDSVB kbCodeSnippet
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a user right clicks a textbox, the standard textbox popup menu appears.
	This article demonstrates how to suppress the textbox popup menu.
	
	MORE INFORMATION
	================
	
	When a user right clicks a textbox, the textbox window receives a WM_CONTEXTMENU
	message. When the WM_CONTEXTMENU message is received, the textbox window shows
	the popup menu. A window procedure can capture all WM_CONTEXTMENU messages sent
	to a textbox window, thus suppressing the default popup window.
	
	WARNING: This sample replaces the WindowProc of the text box window using a
	technique called a hook. Failure to unhook a window before its imminent
	destruction results in application errors, invalid page faults, and data loss.
	This is due to the fact that the new WindowProc function being pointed to no
	longer exists, but the window has not been notified of the change. Always unhook
	the sub-classed window upon unloading the sub-classed form or exiting the
	application. This is especially important while debugging an application that
	uses this technique within the Microsoft Visual Basic Development Environment.
	Pressing the END button on the toolbar or selecting End from the Run menu
	without unhooking will cause an invalid page fault and close Microsoft Visual
	Basic.
	
	NOTE: This functionality is not available in any release of Microsoft Visual
	Basic for Applications (VBA) prior to Microsoft Office 2000.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. Add two text boxes to Form1.
	
	3. Add a standard module to the project.
	
	4. Add the following code to the General Declarations section of Module1:
	
	  Option Explicit
	
	  Public Declare Function SetWindowLong Lib "user32" Alias _
	     "SetWindowLongA" (ByVal hWnd As Long, ByVal nIndex As Long, _
	     ByVal dwNewLong As Long) As Long
	   
	  Public Declare Function CallWindowProc Lib "user32" _
	     Alias "CallWindowProcA" (ByVal lpPrevWndFunc As Long, _
	     ByVal hWnd As Long, ByVal Msg As Long, ByVal wParam As Long, _
	     ByVal lParam As Long) As Long
	
	  Public Const GWL_WNDPROC = (-4)
	
	  Public Const WM_CONTEXTMENU = &H7B
	
	  Global lpPrevWndProc As Long
	  Global gHW As Long
	
	  Public Sub Hook()
	     lpPrevWndProc = SetWindowLong(gHW, GWL_WNDPROC, _
	     AddressOf gWindowProc)
	  End Sub
	
	  Public Sub Unhook()
	     Dim temp As Long
	     temp = SetWindowLong(gHW, GWL_WNDPROC, lpPrevWndProc)
	  End Sub
	
	  Public Function gWindowProc(ByVal hWnd As Long, ByVal Msg As Long, _
	                   ByVal wParam As Long, ByVal lParam As Long) As Long
	     If Msg = WM_CONTEXTMENU Then
	        Debug.Print "Intercepted WM_CONTEXTMENU at " & Now
	        gWindowProc = True
	     Else ' Send all other messages to the default message handler
	        gWindowProc = CallWindowProc(lpPrevWndProc, hWnd, Msg, wParam, _
	           lParam)
	     End If
	  End Function
	
	5. Add the following code to the General Declarations section of Form1:
	
	  Private Sub Form_Load()
	     gHW = Text1.hwnd
	     Hook
	  End Sub
	
	  Private Sub Form_Unload(Cancel As Integer)
	     Unhook
	  End Sub
	
	6. Run the project. Right-click Text1. No popup menu appears. Right-click Text2
	  and the standard popup menu appears.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q168795 HOWTO: Hook Into a Window's Messages Using AddressOf
	
	  Q170570 HOWTO: Build a Windows Message Handler with AddressOf in VB
	
	"Dan Appleman's Visual Basic Programmer's Guide to the Win32 API" by Dan
	Appleman
	
	Platform Software Development Kit (SDK) Online Help
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbGrpDSUser kbVBp500 kbVBp600 kbWndwMsg kbGrpDSVB kbCodeSnippet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
