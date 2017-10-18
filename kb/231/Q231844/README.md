---
layout: page
title: "Q231844: HOWTO: Detect If an Application Has Stopped Responding"
permalink: kb/231/Q231844/
---

## Q231844: HOWTO: Detect If an Application Has Stopped Responding

	Article: Q231844
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.01,4.01 SP1,4.01 SP2,5,5.0,5.5,6.0
	Operating System(s): 
	Keyword(s): kbie401 kbVBp500 kbVBp600 kbie401sp1 kbie401sp2 kbGrpDSInet kbie500 kbie550
	Last Modified: 20-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Internet Explorer (Programming) versions 4.01, 4.01 SP1, 4.01 SP2, 5, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In many situations you might like to detect if an application is blocked. For
	example while automating Internet Explorer, you'd like to know if Internet
	Explorer has stopped responding.
	
	This article describes how to detect if an automated instance of Internet
	Explorer is hung or not. Although the code is written for Internet Explorer and
	Visual Basic, the idea can be used for other applications as well.
	
	The code uses the Win32 API SendMessageTimout function to determine if the target
	application is responding and the API call TerminateProcess to kill the hung
	instance of Internet Explorer.
	
	MORE INFORMATION
	================
	
	There is no clear definition of an application hanging. Typically the
	application is "busy" with some processing. However from a user's perspective,
	the application has stopped responding.
	
	The idea is to periodically detect if the application is still responding in a
	timer and depending on application logic, the target application can be killed
	or other necessary action can be taken.
	The following steps demonstrate this. The code assumes that Internet Explorer is
	installed on the target machine.
	
	1. Start a new Standard EXE project in Visual Basic.
	
	2. Form1 is created by default. Place three command buttons on the form and name
	  them cmdCheck, cmdLaunch, and cmdKill. Change their Caption property to
	  Check, Launch, and Kill, respectively.
	
	3. Add the following code to Form1:
	
	  Option Explicit
	
	  'API Constants
	  Const SMTO_BLOCK = &H1
	  Const SMTO_ABORTIFHUNG = &H2
	  Const WM_NULL = &H0
	  Const WM_CLOSE = &H10
	  Const PROCESS_ALL_ACCESS = &H1F0FFF
	  'API functions
	  Private Declare Function GetWindowThreadProcessId Lib "user32" (ByVal hwnd As Long, _
	  lpdwProcessId As Long) As Long
	
	  Private Declare Function OpenProcess Lib "kernel32" (ByVal dwDesiredAccess As Long, _
	  ByVal bInheritHandle As Long, ByVal dwProcessId As Long) As Long
	
	  Private Declare Function SendMessageTimeout Lib "user32" Alias "SendMessageTimeoutA" _
	  (ByVal hwnd As Long, ByVal msg As Long, ByVal wParam As Long, ByVal lParam As _
	  Long, ByVal fuFlags As Long, ByVal uTimeout As Long, lpdwResult As Long) As Long
	
	  Private Declare Function TerminateProcess Lib "kernel32" (ByVal hProcess As Long, _
	  ByVal uExitCode As Long) As Long
	
	  Private modObjIE As Object
	  Private modlngWndIE As Long
	
	  Private Sub cmdCheck_Click()
	      Dim lngResult As Long
	      Dim lngReturnValue As Long
	      lngReturnValue = SendMessageTimeout(modlngWndIE, WM_NULL, 0&, 
	        0&, SMTO_ABORTIFHUNG And SMTO_BLOCK, 1000, lngResult)
	      If lngReturnValue Then
	          MsgBox "Responding"
	      Else
	          MsgBox "Not Responding","Block tester"
	      End If
	  End Sub
	
	  Private Sub cmdLaunch_Click()
	      Set modObjIE = Nothing
	      Set modObjIE = CreateObject("InternetExplorer.Application")
	      modObjIE.Visible = True
	      modObjIE.Navigate2 "http://www.microsoft.com"
	      modlngWndIE = modObjIE.hwnd
	  End Sub
	
	  Private Sub cmdKill_Click()
	      Dim lngProcessID As Long
	      Dim lngReturnValue As Long
	      Dim lngProcess As Long
	      lngReturnValue = GetWindowThreadProcessId(modlngWndIE, lngProcessID)
	      lngProcess = OpenProcess(PROCESS_ALL_ACCESS, 0&, lngProcessID)
	      lngReturnValue = TerminateProcess(lngProcess, 0&)
	  End Sub
	
	4. Run this program and click the Launch button.
	
	5. Click the Check button. You should see Responding appear.
	
	Enter your own URL in the navigate2 command if you have one that causes
	blocking.
	
	NOTE: None of the automation properties of Internet Explorer will be accessible
	once Internet Explorer stops responding, which is the reason for storing hwnd in
	a form level variable.
	
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q129797 HOWTO: Launch a Win32 Application from Visual Basic
	
	  Q178893 HOWTO: Terminate an Application Cleanly in Win32
	
	  Q176391 HOWTO: Programmatically Close a Separate Application
	
	
	Additional query words: SendMessageTimeout GetWindowThreadProcessId TerminateProcess hangs hung kill terminate IE "Internet Explorer" freezes blocked blocks "stops responding" "not
	
	======================================================================
	Keywords          : kbie401 kbVBp500 kbVBp600 kbie401sp1 kbie401sp2 kbGrpDSInet kbie500 kbie550 
	Technology        : kbVBSearch kbIEsearch kbAudDeveloper kbZNotKeyword6 kbSDKIESearch kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbIE500Search kbSDKIE401 kbSDKIE401SP1 kbSDKIE401SP2 kbSDKIE500 kbSDKIE550 kbIE550Search
	Version           : :4.01,4.01 SP1,4.01 SP2,5,5.0,5.5,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
