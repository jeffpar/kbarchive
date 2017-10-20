---
layout: page
title: "Q176391: HOWTO: Programmatically Close a Separate Application"
permalink: /kb/176/Q176391/
---

## Q176391: HOWTO: Programmatically Close a Separate Application

{% raw %}

	Article: Q176391
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 07-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you how use API functions to programmatically close a single
	instance of most Windows programs through your Visual Basic program. You can use
	this feature to start a program, run the program without any user interaction,
	and shut down the program when all the program tasks are completed.
	
	MORE INFORMATION
	================
	
	To programmatically close a single instance of a Windows program, you begin by
	getting the handle to the Window that you want to close with the FindWindow
	function. The FindWindow API function returns the handle of a top-level window
	whose class name and window name matches the string parameters. This function
	returns the handle of the window as a long value if it is successful and a null
	if it fails. To use this function, you must supply two parameters:
	
	- lpClassName - a pointer to a null-terminated string that specifies the class
	  name or is an atom that identifies the class-name string. In this
	  application, you can pass vbNullString.
	
	- lpWindowName - a pointer to a null-terminated string that specifies the
	  window name (the window's title).
	
	Use the handle to send a message to close the Window with the PostMessage API.
	The PostMessage API function sends a message to an application message queue and
	returns a value immediately. This function returns a non-zero value if the
	function is successful and zero if the function fails. To use this function, you
	must specify four parameters:
	
	- hWnd - the handle of the window you want to close. This long value is
	  available as the result of the FindWindow function.
	
	- uInt - the message to post to the message queue. In this application, you
	  would use the WM_CLOSE message.
	
	- wParam - the first message parameter. For this message, you should pass a
	  null value.
	
	- lParam - the second message parameter. For this message, you should pass a
	  null value.
	
	A synchronization problem can occur when you send a message to close in the event
	and the program terminates before the message is processed. The
	WaitForSingleObject function makes sure the message is processed. To use this
	function, you must specify two parameters:
	
	- hHandle - the handle of the object you want to monitor.
	
	- dwMilliseconds - specifies the time-out interval, in milliseconds. If you set
	  this parameter to INFINITE, the function's time-out interval never elapses.
	
	To make sure that the program is closed, use the IsWindow function to determine
	if the handle still exists. The IsWindow function determines if the handle is
	valid. The function returns a non-zero value if the handle is valid and zero if
	the handle does not exists. To use this function, you just have to specify the
	handle to check.
	
	If the handle still exists, then you can use the TerminateProcess function to
	stop the handle process. However, this extreme approach is not recommended
	because while you may have stopped the handle process, the DLL's used by the
	handle may still reside in memory, causing a memory leak. Use the
	TerminateProcess function with caution.
	
	The next section shows how to create a sample program that demonstrates how to
	close a running application from a Visual Basic program. The program starts and
	stops the Windows calculator program.
	
	Create the Sample Project
	-------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add two CommandButtons to Form1.
	
	3. Copy the following code to the Code window of the Form1 form:
	
	        Option Explicit
	
	        Private Declare Function WaitForSingleObject Lib "kernel32" _
	           (ByVal hHandle As Long, _
	           ByVal dwMilliseconds As Long) As Long
	
	        Private Declare Function FindWindow Lib "user32" _
	           Alias "FindWindowA" _
	           (ByVal lpClassName As String, _
	           ByVal lpWindowName As String) As Long
	
	        Private Declare Function PostMessage Lib "user32" _
	           Alias "PostMessageA" _
	           (ByVal hwnd As Long, _
	           ByVal wMsg As Long, _
	           ByVal wParam As Long, _
	           ByVal lParam As Long) As Long
	
	        Private Declare Function IsWindow Lib "user32" _
	           (ByVal hwnd As Long) As Long
	
	        'Constants used by the API functions
	        Const WM_CLOSE = &H10
	        Const INFINITE = &HFFFFFFFF
	
	        Private Sub Form_Load()
	           Command1.Caption = "Start the Calculator"
	           Command2.Caption = "Close the Calculator"
	        End Sub
	
	        Private Sub Command1_Click()
	        'Starts the Windows Calculator
	           Shell "calc.exe", vbNormalNoFocus
	        End Sub
	
	        Private Sub Command2_Click()
	        'Closes the Windows Calculator
	           Dim hWindow As Long
	           Dim lngResult As Long
	           Dim lngReturnValue As Long
	
	           hWindow = FindWindow(vbNullString, "Calculator")
	           lngReturnValue = PostMessage(hWindow, WM_CLOSE, vbNull, vbNull)
	           lngResult = WaitForSingleObject(hWindow, INFINITE)
	
	           'Does the handle still exist?
	           DoEvents
	           hWindow = FindWindow(vbNullString, "Calculator")
	           If IsWindow(hWindow) = 1 Then
	              'The handle still exists. Use the TerminateProcess function
	              'to close all related processes to this handle. See the
	              'article for more information.
	              MsgBox "Handle still exists."
	           Else
	              'Handle does not exist.
	              MsgBox "Program closed."
	           End If
	        End Sub
	
	4. Press the F5 key to run the program. Click Start the Calculator to start the
	  Windows calculator program. Click Close the Calculator to close the Windows
	  calculator program.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q129797 : HOWTO: Launch a Win32 Application from Visual Basic
	
	  Q129796 : HOWTO: 32-Bit App Can Determine When a Shelled Process Ends
	
	
	Platform SDK documentation on FindWindow and PostMessage functions
	
	Visual Basic 5.0 Programmer's Guide to the Win32 API by Dan Appleman
	
	Additional query words: Platform SDK documentation terminate
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
