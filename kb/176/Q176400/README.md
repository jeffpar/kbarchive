---
layout: page
title: "Q176400: HOWTO: Print the WebBrowser Control"
permalink: /kb/176/Q176400/
---

## Q176400: HOWTO: Print the WebBrowser Control

	Article: Q176400
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbVBp400 kbVBp500 kbGrpDSVB kbDSupport kbhowto kb32bitOnly kbgrpdsvc
	Last Modified: 15-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Internet Explorer 3.0 includes a custom ActiveX control called
	WebBrowser. The WebBrowser control does not include a Print method that can be
	directly called from Visual Basic. Tto print the contents of the WebBrowser
	Control in Visual Basic, you must set the focus to the content portion of the
	control and a CTRL-P keystroke sequence must be sent to the control.
	
	The difficulty with this is that the WebBrowser window is actually made up of
	more than one window. The window that needs to have the focus to print is the
	one with a class name of "HTML_Internet Explorer," and the SetFocus method sets
	the focus to the "SHELL DocObject View" window. Before sending a CTRL-P
	keystroke sequence to the WebBrowser control, the proper child window of the
	control must have the focus.
	
	MORE INFORMATION
	================
	
	To print the control, simply follow the steps below to set focus to the correct
	window and initiate the SendKeys function:
	
	1. Start a new standard Exe project in Visual Basic. Form1 is created by
	  default.
	
	2. Add the "Microsoft Internet Controls" (shdocvw.dll) to the project.
	
	3. Place the WebBrowser control on the default form (Form1).
	
	4. Add the following code to load the default page:
	
	        Private Sub Form_Load()
	            WebBrowser1.Navigate "http://www.microsoft.com"
	        End Sub
	
	5. Place a CommandButton on the form and change its caption to "Print." Add the
	  following code to the Click event of the button:
	
	        Private Sub Command1_Click()
	            Dim hwnd As Long
	            WebBrowser1.SetFocus
	            hwnd = GetFocus
	            SetFocusToBrowser (hwnd)
	            SendKeys "^p"   'CTRL+P to print
	        End Sub
	
	6. Add a module to the project, and then add the following code to it:
	
	        Option Explicit
	
	        Declare Function GetWindow Lib "user32" (ByVal hwnd As Long, _
	            ByVal wCmd As Long) As Long
	
	        Declare Function GetWindowLong Lib "user32" _
	            Alias "GetWindowLongA" (ByVal hwnd As Long, _
	            ByVal nIndex As Long) As Long
	
	        Declare Function SetFocusAPI Lib "user32" _
	            Alias "SetFocus" (ByVal hwnd As Long) As Long
	
	        Declare Function GetFocus Lib "user32" () As Long
	
	        Declare Function SendMessage Lib "user32" _
	            Alias "SendMessageA" (ByVal hwnd As Long, _
	            ByVal wMsg As Long, ByVal wParam As Long, _
	            lParam As Long) As Long
	
	        'GetWindow constants
	        Public Const GW_CHILD = 5
	        'GetWindowLong constants
	        Public Const GWL_STYLE = (-16)
	        Public Const WS_VSCROLL = &H200000
	
	        Sub SetFocusToBrowser(hBrowserHwnd As Long)
	            Dim lStyle As Long
	            Dim lResult As Long
	            Dim hwnd As Long
	            hwnd = hBrowserHwnd
	            While (lResult = 0) And (hwnd <> 0)
	                hwnd = GetWindow(hwnd, GW_CHILD)
	                lStyle = GetWindowLong(hwnd, GWL_STYLE)
	                lResult = lStyle And WS_VSCROLL
	            Wend
	            SetFocusAPI (hwnd)
	        End Sub
	
	7. Run the project, and click Print.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q162719 HOWTO: Use the WebBrowser Control from Visual Basic 5.0
	
	  Q155969 HOWTO: Distribute the WebBrowser Control
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp400 kbVBp500 kbGrpDSVB kbDSupport kbhowto kb32bitOnly kbgrpdsvc 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
