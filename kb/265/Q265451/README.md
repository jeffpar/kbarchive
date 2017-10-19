---
layout: page
title: "Q265451: HOWTO: Run an eVB Application Full Screen on a Pocket PC"
permalink: /kb/265/Q265451/
---

## Q265451: HOWTO: Run an eVB Application Full Screen on a Pocket PC

	Article: Q265451
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB kbDSupport kbVBM300 kbOSWinCEPsPC200 kbOSWinCE300
	Last Modified: 19-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0, on platform(s):
	   - Microsoft Windows CE Platform SDK for Pocket PC 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how to programmatically manipulate the various screen
	objects on a Pocket PC device by using the SHFullScreen API function from an
	eMbedded Visual Basic (eVB) application.
	
	It is popular for applications that target Windows CE to use as much of the
	screen of the smaller Palm-sized devices as possible. The new user interface
	(UI) of the Pocket PC platform requires additional work for an application to
	use the full screen area.
	
	MORE INFORMATION
	================
	
	To understand the comments in the code examples in the article, the new Pocket
	PC UI terms are described as follows:
	
	- The taskbar is located at the top of the screen, it displays application
	  captions, and gives the user the ability to start applications.
	
	- The command bar, also known as the menu bar, is located at the bottom of the
	  screen.
	
	- The soft input panel (SIP) button is located on the command bar, to the
	  lower-right corner of the screen.
	
	To create a window that uses as much of the screen as possible, the application
	calls SHFullScreen to hide these elements.
	
	Step-by-Step Example
	--------------------
	
	1. Start eMbedded Visual Basic, and create a new Windows CE for the Pocket PC
	  project.
	
	2. Add four CommandButton controls to Form1.
	
	3. Paste the following code into Form1:
	
	  Option Explicit
	
	  Const SW_HIDE = 0
	  Const SW_SHOWNORMAL = 1
	
	  Const SHFS_SHOWTASKBAR = &H1
	  Const SHFS_HIDETASKBAR = &H2
	  Const SHFS_SHOWSIPBUTTON = &H4
	  Const SHFS_HIDESIPBUTTON = &H8
	  Const SHFS_SHOWSTARTICON = &H10
	  Const SHFS_HIDESTARTICON = &H20
	  Const HWND_TOPMOST = -1
	  Const HWND_NOTOPMOST = -2
	
	  Const SWP_SHOWWINDOW = &H40
	  Const SM_CXSCREEN = &H0
	  Const SM_CYSCREEN = &H1
	  Const HHTASKBARHEIGHT = 26
	
	  Dim bShowMenu As Boolean
	  Dim bShowStart As Boolean
	  Dim bShowTaskbar As Boolean
	  Dim bFullScreen As Boolean
	  Dim lHwnd As Long
	
	  Declare Function GetSystemMetrics Lib "Coredll" ( _
	      ByVal nIndex As Long) As Long
	      
	  Declare Function SHFullScreen Lib "aygshell" ( _
	      ByVal hwndRequester As Long, _
	      ByVal dwState As Long) As Boolean
	
	  Declare Function MoveWindow Lib "Coredll" ( _
	      ByVal hwnd As Long, _
	      ByVal x As Long, _
	      ByVal y As Long, _
	      ByVal nWidth As Long, _
	      ByVal nHeight As Long, _
	      ByVal bRepaint As Long) As Long
	
	  Declare Function SetForegroundWindow Lib "Coredll" ( _
	      ByVal hwnd As Long) As Boolean
	
	  Declare Function GetLastError Lib "Coredll" () As Long
	
	  Declare Function ShowWindow Lib "Coredll" ( _
	      ByVal hwnd As Long, _
	      ByVal nCmdShow As Long) As Long
	
	  Declare Function FindWindow Lib "Coredll" Alias "FindWindowW" ( _
	      ByVal lpClassName As String, _
	      ByVal lpWindowName As String) As Long
	          
	  Private Sub Form_Load()
	      bShowMenu = True
	      bShowStart = True
	      bShowTaskbar = True
	      bFullScreen = False
	      lHwnd = Form1.hwnd
	      Command1.Caption = "Full Screen"
	      Command2.Caption = "Hide Menu"
	      Command3.Caption = "Hide Start"
	      Command4.Caption = "Hide Taskbar"
	      Command4.Visible = False
	      Command1.Move 120, 480, 1335, 495
	      Command2.Move 120, 1080, 1335, 495
	      Command3.Move 120, 1680, 1335, 495
	      Command4.Move 120, 2280, 1335, 495
	  End Sub
	
	  Private Sub Form_OKClick()
	      App.End
	  End Sub
	
	  Private Sub Command1_Click()
	      Dim lret
	      If bFullScreen Then
	          lret = FindWindow("menu_worker", "")
	          If lret <> 0 Then 'window found
	              ShowWindow lret, SW_SHOWNORMAL
	          End If
	          lret = SetForegroundWindow(Me.hwnd)
	          lret = MoveWindow(Me.hwnd, 0, HHTASKBARHEIGHT, _
	              GetSystemMetrics(SM_CXSCREEN), _
	              GetSystemMetrics(SM_CYSCREEN), True)
	          Command1.Caption = "Full Screen"
	      Else
	          'show form full screen
	          lret = FindWindow("menu_worker", "")
	          If lret <> 0 Then 'window found
	              ShowWindow lret, SW_HIDE
	          End If
	          lret = SetForegroundWindow(Me.hwnd)
	          lret = MoveWindow(Me.hwnd, 0, 0, _
	              GetSystemMetrics(SM_CXSCREEN), _
	              GetSystemMetrics(SM_CYSCREEN) + HHTASKBARHEIGHT, 0)
	          Command1.Caption = "Not Full Screen"
	      End If
	      bFullScreen = Not bFullScreen
	      Command4.Visible = bFullScreen
	  End Sub
	
	  Private Sub Command2_Click()
	      Dim lret
	      lret = SetForegroundWindow(lHwnd)
	      If bShowMenu Then
	          lret = SHFullScreen(lHwnd, SHFS_HIDESIPBUTTON)
	          Command2.Caption = "Show Menu"
	      Else
	          lret = SHFullScreen(lHwnd, SHFS_SHOWSIPBUTTON)
	          Command2.Caption = "Hide Menu"
	      End If
	      bShowMenu = Not bShowMenu
	  End Sub
	
	  Private Sub Command3_Click()
	      Dim lret
	      lret = SetForegroundWindow(lHwnd)
	      If bShowStart Then
	          lret = SHFullScreen(lHwnd, SHFS_HIDESTARTICON)
	          Command3.Caption = "Show Start"
	      Else
	          lret = SHFullScreen(lHwnd, SHFS_SHOWSTARTICON)
	          Command3.Caption = "Hide Start"
	      End If
	      bShowStart = Not bShowStart
	  End Sub
	
	  Private Sub Command4_Click()
	      Dim lret
	      lret = SetForegroundWindow(lHwnd)
	      If bShowTaskbar Then
	          lret = SHFullScreen(lHwnd, SHFS_HIDETASKBAR)
	          Command4.Caption = "Show TaskBar"
	      Else
	          lret = SHFullScreen(lHwnd, SHFS_SHOWTASKBAR)
	          Command4.Caption = "Hide TaskBar"
	      End If
	      bShowTaskbar = Not bShowTaskbar
	  End Sub
	
	4. Run the project and test the functionality by clicking the CommandButtons.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q266244 HOWTO: Create Full-Screen Applications for the Pocket PC
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGrpDSVB kbDSupport kbVBM300 kbOSWinCEPsPC200 kbOSWinCE300 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch
	Version           : :3.0
	Issue type        : kbhowto
	
	=============================================================================
	
