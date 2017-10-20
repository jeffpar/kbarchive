---
layout: page
title: "Q231298: HOWTO: Use SetWaitableTimer With Visual Basic"
permalink: /kb/231/Q231298/
---

## Q231298: HOWTO: Use SetWaitableTimer With Visual Basic

{% raw %}

	Article: Q231298
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 17-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many programmers use the Sleep API function to pause the execution of their
	programs. One of the disadvantages of using Sleep is that it pauses the thread
	that the application is running in, and that any window that the application has
	open will not repaint properly. This may present an unattractive user interface
	to the user. An alternative to Sleep is to use SetWaitableTimer, which will
	allow the screen to repaint, receive DDE messages, and so forth.
	
	MORE INFORMATION
	================
	
	The following code sample illustrates the use of the SetWaitableTimer API.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Place two CommandButtons on Form1.
	
	3. Paste the following code into the code module of Form1:
	
	  Option Explicit
	
	  ' Sleep API is declared in the form to keep the
	  ' SetWaitableTimer code in its own re-usable module.
	  Private Declare Sub Sleep Lib "kernel32" ( _
	      ByVal dwMilliseconds As Long)
	
	  Private Sub Command1_Click()
	      Command1.Enabled = False
	      Wait 10 ' seconds
	      Command1.Enabled = True
	  End Sub
	
	  Private Sub Command2_Click()
	      Command2.Enabled = False
	      Sleep 10000 ' milliseconds
	      Command2.Enabled = True
	  End Sub
	
	  Private Sub Form_Load()
	      With Form1
	          .Height = 1400
	          .Width = 2400
	      End With
	      With Command1
	          .Move 100, 100, 2000, 300
	          .Caption = "SetWaitableTimer"
	      End With
	      With Command2
	          .Move 100, 500, 2000, 300
	          .Caption = "Sleep"
	      End With
	  End Sub
	
	4. From the Project menu, click Add Module to add a new module (Module1) to the
	  project.
	
	5. Paste the following code into Module1:
	
	  Option Explicit
	
	  Private Type FILETIME
	      dwLowDateTime As Long
	      dwHighDateTime As Long
	  End Type
	
	  Private Const WAIT_ABANDONED& = &H80&
	  Private Const WAIT_ABANDONED_0& = &H80&
	  Private Const WAIT_FAILED& = -1&
	  Private Const WAIT_IO_COMPLETION& = &HC0&
	  Private Const WAIT_OBJECT_0& = 0
	  Private Const WAIT_OBJECT_1& = 1
	  Private Const WAIT_TIMEOUT& = &H102&
	
	  Private Const INFINITE = &HFFFF
	  Private Const ERROR_ALREADY_EXISTS = 183&
	
	  Private Const QS_HOTKEY& = &H80
	  Private Const QS_KEY& = &H1
	  Private Const QS_MOUSEBUTTON& = &H4
	  Private Const QS_MOUSEMOVE& = &H2
	  Private Const QS_PAINT& = &H20
	  Private Const QS_POSTMESSAGE& = &H8
	  Private Const QS_SENDMESSAGE& = &H40
	  Private Const QS_TIMER& = &H10
	  Private Const QS_MOUSE& = (QS_MOUSEMOVE _
	                              Or QS_MOUSEBUTTON)
	  Private Const QS_INPUT& = (QS_MOUSE _
	                              Or QS_KEY)
	  Private Const QS_ALLEVENTS& = (QS_INPUT _
	                              Or QS_POSTMESSAGE _
	                              Or QS_TIMER _
	                              Or QS_PAINT _
	                              Or QS_HOTKEY)
	  Private Const QS_ALLINPUT& = (QS_SENDMESSAGE _
	                              Or QS_PAINT _
	                              Or QS_TIMER _
	                              Or QS_POSTMESSAGE _
	                              Or QS_MOUSEBUTTON _
	                              Or QS_MOUSEMOVE _
	                              Or QS_HOTKEY _
	                              Or QS_KEY)
	
	  Private Declare Function CreateWaitableTimer Lib "kernel32" _
	      Alias "CreateWaitableTimerA" ( _
	      ByVal lpSemaphoreAttributes As Long, _
	      ByVal bManualReset As Long, _
	      ByVal lpName As String) As Long
	      
	  Private Declare Function OpenWaitableTimer Lib "kernel32" _
	      Alias "OpenWaitableTimerA" ( _
	      ByVal dwDesiredAccess As Long, _
	      ByVal bInheritHandle As Long, _
	      ByVal lpName As String) As Long
	      
	  Private Declare Function SetWaitableTimer Lib "kernel32" ( _
	      ByVal hTimer As Long, _
	      lpDueTime As FILETIME, _
	      ByVal lPeriod As Long, _
	      ByVal pfnCompletionRoutine As Long, _
	      ByVal lpArgToCompletionRoutine As Long, _
	      ByVal fResume As Long) As Long
	      
	  Private Declare Function CancelWaitableTimer Lib "kernel32" ( _
	      ByVal hTimer As Long)
	      
	  Private Declare Function CloseHandle Lib "kernel32" ( _
	      ByVal hObject As Long) As Long
	      
	  Private Declare Function WaitForSingleObject Lib "kernel32" ( _
	      ByVal hHandle As Long, _
	      ByVal dwMilliseconds As Long) As Long
	      
	  Private Declare Function MsgWaitForMultipleObjects Lib "user32" ( _
	      ByVal nCount As Long, _
	      pHandles As Long, _
	      ByVal fWaitAll As Long, _
	      ByVal dwMilliseconds As Long, _
	      ByVal dwWakeMask As Long) As Long
	
	  Public Sub Wait(lNumberOfSeconds As Long)
	      Dim ft As FILETIME
	      Dim lBusy As Long
	      Dim lRet As Long
	      Dim dblDelay As Double
	      Dim dblDelayLow As Double
	      Dim dblUnits As Double
	      Dim hTimer As Long
	      
	      hTimer = CreateWaitableTimer(0, True, App.EXEName & "Timer")
	      
	      If Err.LastDllError = ERROR_ALREADY_EXISTS Then
	          ' If the timer already exists, it does not hurt to open it
	          ' as long as the person who is trying to open it has the
	          ' proper access rights.
	      Else
	          ft.dwLowDateTime = -1
	          ft.dwHighDateTime = -1
	          lRet = SetWaitableTimer(hTimer, ft, 0, 0, 0, 0)
	      End If
	      
	      ' Convert the Units to nanoseconds.
	      dblUnits = CDbl(&H10000) * CDbl(&H10000)
	      dblDelay = CDbl(lNumberOfSeconds) * 1000 * 10000
	      
	      ' By setting the high/low time to a negative number, it tells
	      ' the Wait (in SetWaitableTimer) to use an offset time as
	      ' opposed to a hardcoded time. If it were positive, it would
	      ' try to convert the value to GMT.
	      ft.dwHighDateTime = -CLng(dblDelay / dblUnits) - 1
	      dblDelayLow = -dblUnits * (dblDelay / dblUnits - _
	          Fix(dblDelay / dblUnits))
	      
	      If dblDelayLow < CDbl(&H80000000) Then
	          ' &H80000000 is MAX_LONG, so you are just making sure
	          ' that you don't overflow when you try to stick it into
	          ' the FILETIME structure.
	          dblDelayLow = dblUnits + dblDelayLow
	      End If
	      
	      ft.dwLowDateTime = CLng(dblDelayLow)
	      lRet = SetWaitableTimer(hTimer, ft, 0, 0, 0, False)
	      
	      Do
	          ' QS_ALLINPUT means that MsgWaitForMultipleObjects will
	          ' return every time the thread in which it is running gets
	          ' a message. If you wanted to handle messages in here you could,
	          ' but by calling Doevents you are letting DefWindowProc
	          ' do its normal windows message handling---Like DDE, etc.
	          lBusy = MsgWaitForMultipleObjects(1, hTimer, False, _
	              INFINITE, QS_ALLINPUT&)
	          DoEvents
	      Loop Until lBusy = WAIT_OBJECT_0
	      
	      ' Close the handles when you are done with them.
	      CloseHandle hTimer
	
	  End Sub
	
	6. Run the project.
	
	7. Click the Sleep button. While the application is sleeping, notice that the
	  screen does not repaint (drag another window over top of the application, and
	  then drag it away). Then, try the same test with the SetWaitableTimer button.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q184796 HOWTO: Use a Waitable Timer with an Asynchronous Procedure Call
	
	
	The Microsoft Win32 Software Developers Kit documents the SetWaitableTimer,
	MsgWaitForMultipleObjects and CloseHandle API calls.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
