---
layout: page
title: "Q186908: HOWTO: Determine When Your Application Gains or Loses Focus"
permalink: /kb/186/Q186908/
---

## Q186908: HOWTO: Determine When Your Application Gains or Loses Focus

{% raw %}

	Article: Q186908
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual Basic does not provide a built-in mechanism for allowing programmers to
	determine when their application either looses or gains user focus. At times
	though, it may be necessary or desirable to be alerted when either of these
	events take place. By using the AddressOf operator, you can implement
	"subclassing" to determine when these events occur.
	
	MORE INFORMATION
	================
	
	WARNING: ANY USE BY YOU OF THE SAMPLE CODE PROVIDED IN THIS ARTICLE IS AT YOUR
	OWN RISK. Microsoft provides this sample code "as is" without warranty of any
	kind, either express or implied, including but not limited to the implied
	warranties of merchantability and/or fitness for a particular purpose.
	
	WARNING: The following steps demonstrate how to create a sample application that
	is capable of determining when an application as a whole looses or gains focus.
	To achieve this functionality, you must use subclassing to detect when the
	WM_ACTIVATEAPP message occurs. For more information on subclassing, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q168795 : HOWTO: Hook Into a Window's Messages Using AddressOf
	
	NOTE: Failure to unhook a window before its destruction results in application
	errors, Invalid Page Faults, or data loss. This occurs because the new
	WindowProc function that is being pointed to no longer exists, but the window
	has not been notified of the change. Always unhook the subclassed window upon
	unloading the subclassed form or exiting the application.
	
	This is especially important when you use Visual Basic to debug an application
	that includes subclassing. Pressing the End button or selecting End from the Run
	menu without unhooking may cause an Invalid Page Fault and close Microsoft
	Visual Basic.
	
	Steps to Create Sample Application
	----------------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Paste the following code into the code window for Form1:
	
	        Sub Form_Load()
	           'Store handle to this form's window
	           gHW = Me.hWnd
	
	           'Call procedure to begin capturing messages for this window
	           Hook
	        End Sub
	
	        Private Sub Form_Unload(Cancel As Integer)
	           'Call procedure to stop intercepting the messages for this window
	           Unhook
	        End Sub
	
	3. Add a standard module to the project.
	
	4. Paste the following code into the module:
	
	        Option Explicit
	
	        Declare Function CallWindowProc Lib "user32" Alias _
	          "CallWindowProcA" (ByVal lpPrevWndFunc As Long, _
	          ByVal hwnd As Long, ByVal Msg As Long, _
	          ByVal wParam As Long, ByVal lParam As Long) As Long
	
	        Declare Function SetWindowLong Lib "user32" Alias "SetWindowLongA" _
	          (ByVal hwnd As Long, ByVal nIndex As Long, _
	          ByVal dwNewLong As Long) As Long
	
	        Public Const WM_ACTIVATEAPP = &H1C
	        Public Const GWL_WNDPROC = -4
	
	        Global lpPrevWndProc As Long
	        Global gHW As Long
	
	        Public Sub Hook()
	           'Establish a hook to capture messages to this window
	           lpPrevWndProc = SetWindowLong(gHW, GWL_WNDPROC, _
	             AddressOf WindowProc)
	        End Sub
	
	        Public Sub Unhook()
	           Dim temp As Long
	
	           'Reset the message handler for this window
	           temp = SetWindowLong(gHW, GWL_WNDPROC, lpPrevWndProc)
	        End Sub
	
	        Function WindowProc(ByVal hw As Long, ByVal uMsg As Long, _
	          ByVal wParam As Long, ByVal lParam As Long) As Long
	           'Check for the ActivateApp message
	
	           If uMsg = WM_ACTIVATEAPP Then
	               'Check to see if Activating the application
	               If wParam <> 0 Then
	                   'Application Received Focus
	                   Form1.Caption = "Focus Restored"
	               Else
	                   'Application Lost Focus
	                   Form1.Caption = "Focus Lost"
	               End If
	           End If
	
	           'Pass message on to the original window message handler
	           WindowProc = CallWindowProc(lpPrevWndProc, hw, uMsg, wParam, _
	             lParam)
	        End Function
	
	5. Save and run the sample.
	
	6. Click on another application (such as the Windows Desktop), and note that the
	  caption of Form1 indicates that focus was lost. (If the Form is not visible,
	  refer to the Form caption in the Windows taskbar.)
	
	7. Click on the sample application, and note that the caption of Form1 indicates
	  that focus was received.
	
	Additional query words: kbDSupport kbDSD kbHook kbSDKWin32 kbAPI kbVBp500 kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
