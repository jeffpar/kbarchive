---
layout: page
title: "Q180736: HOWTO: Create a Timer Event Using the Windows API Functions"
permalink: /kb/180/Q180736/
---

## Q180736: HOWTO: Create a Timer Event Using the Windows API Functions

	Article: Q180736
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbControl
	Last Modified: 06-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you how to create a timer event using the SetTimer and
	KillTimer Windows API functions. The article also includes a sample project that
	demonstrates how to use these functions.
	
	You can use these functions if you need to execute events at intervals greater
	than what the Visual Basic Timer control allows. The Timer control allows a
	maximum interval of slightly over a minute while these API functions allow you
	to set an interval up to 24.86 days.
	
	MORE INFORMATION
	================
	
	
	The SetTimer function creates a timer that executes a function at the specified
	time-out value. This function requires the following parameters:
	
	- hWnd identifies the window to be associated with the timer. This window is
	  owned by the calling thread. If this parameter is NULL, no window is
	  associated with the timer and the nIDEvent parameter is ignored.
	
	- nIDEvent specifies a nonzero timer identifier. If the hWnd parameter is NULL,
	  this parameter is ignored.
	
	- uElapse specifies the time-out value, in milliseconds. You can use a Long
	  data type with a value of up to 2,147,483,647 milliseconds. Values beyond
	  this limit result in a Run-time Error '6' Overflow.
	
	  NOTE: Visual Basic adds a pound sign (#) to the end of the time value if the
	  value exceeds this limit.
	
	- lpTimerFunc points to the function to be notified when the time-out value
	  elapses. Use the AddressOf operator to return a pointer to the function. The
	  callback function receives the hWnd, the NIDEvent, the UElapse, and
	  lpTimerFunc parameters from the AddressOf function.
	
	If the SetTimer function is successful, the function returns an integer that
	identifies the new timer. The KillTimer function requires this integer to
	destroy the timer. If the SetTimer function fails, the function returns zero.
	
	After creating a timer, you must destroy the timer using the KillTimer function.
	The KillTimer function requires the following parameters:
	
	- hWnd identifies the window associated with the specified timer. This value
	  must be the same as the hWnd value passed to the SetTimer function that
	  created the timer.
	
	- uIDEvent specifies the timer to be destroyed. If the window handle passed to
	  SetTimer is valid, this parameter must be the same as the uIDEvent value
	  passed to SetTimer. If the application calls SetTimer with hWnd set to NULL,
	  this parameter must be the timer identifier returned by SetTimer.
	
	The KillTimer function returns a non-zero value if the function successfully
	destroys the timer.
	
	The next section shows how to create a sample project that demonstrates how to
	use these functions in Visual Basic.
	
	To Create the Sample Project
	----------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a TextBox and CommandButton to Form1.
	
	3. Add a module to the project by completing the following steps:
	
	  a. From the Project menu, click Add Module. The Add Module dialog box
	     appears.
	
	  b. On the New tab, choose Module and click OK. A new module is added to your
	     project.
	
	4. Copy the following code to the Code window of Module1:
	
	    
	       Option Explicit
	
	        Declare Function SetTimer Lib "user32" _
	              (ByVal hwnd As Long, _
	              ByVal nIDEvent As Long, _
	              ByVal uElapse As Long, _
	              ByVal lpTimerFunc As Long) As Long
	
	        Declare Function KillTimer Lib "user32" _
	              (ByVal hwnd As Long, _
	              ByVal nIDEvent As Long) As Long
	
	        Global iCounter As Integer
	
	        Sub TimerProc(ByVal hwnd As Long, _
	                       ByVal uMsg As Long, _
	                       ByVal idEvent As Long, _
	                       ByVal dwTime As Long)
	
	            iCounter = iCounter + 1
	            Form1.Text1.Text = CStr(iCounter)
	        End Sub
	
	5. Copy the following code to the Code window of Form1:
	
	        Option Explicit
	        Dim lngTimerID As Long
	        Dim BlnTimer As Boolean
	
	        Private Sub Form_Load()
	           BlnTimer = False
	           Command1.Caption = "Start Timer"
	        End Sub
	
	        Private Sub Command1_Click()
	        'Starts and stops the timer.
	
	           If BlnTimer = False Then
	              lngTimerID = SetTimer(0, 0, 200, AddressOf TimerProc)
	              If lngTimerID = 0 Then
	                MsgBox "Timer not created. Ending Program"
	                Exit Sub
	              End If
	              BlnTimer = True
	              Command1.Caption = "Stop Timer"
	           Else
	              lngTimerID = KillTimer(0, lngTimerID)
	              If lngTimerID = 0 Then
	                 MsgBox "couldn't kill the timer"
	              End If
	              BlnTimer = False
	              Command1.Caption = "Start Timer"
	            End If
	
	        End Sub
	
	6. On the Run menu, click Start or press the F5 key to start the program. Click
	  Start Timer to create a timer event. At each specified interval, the TextBox
	  is updated with a new value. Click Stop Timer to stop the timer event.
	
	REFERENCES
	==========
	
	For additional information about the SetTimer and KillTimer functions, refer to
	the Platform SDK Product Documentation.
	
	For additional information about the AddressOf operator, refer to the Visual
	Basic Help.
	
	Visual Basic Programmer's Guide, version 5.0; "Using the Timer Control"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbControl 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
