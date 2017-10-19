---
layout: page
title: "Q244312: HOWTO: Add Keyboard Functionality to MDI form Scrollbars"
permalink: /kb/244/Q244312/
---

## Q244312: HOWTO: Add Keyboard Functionality to MDI form Scrollbars

	Article: Q244312
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbCtrl kbHook kbKeyAccel kbScrollBar kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbWndwMsg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An MDI form displays scrollbars when a portion of an MDI child form is moved out
	of the view of the client area of the MDI parent form. In Visual Basic these
	scrollbars support mouse clicks but not the keyboard navigation keys. This
	article shows how to add keyboard support to these scrollbars. The MDIForm can
	also be made to scroll to the bottom automatically when it loads so that hidden
	forms are visible. This functionality is added by sending messages to the
	MDIForm window.
	
	MORE INFORMATION
	================
	
	Two API calls are needed to achieve this functionality:
	
	- GetWindow to obtain the Window Handle of the MDI form's client window so that
	  it can be sent a message telling it to scroll.
	
	- SendMessage to actually send the message.
	
	Step-by-Step Example::
	
	1. Start a new Standard EXE project. Form1 is created by default. Set the
	  MDIChild property of Form1 to True.
	
	2. Add the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  ' The child window in the client area generates the scrollbars, sends a
	  ' message to the MDI client to scroll to the bottom of the window, and
	  ' traps the key pressed.
	
	  Private Sub Form_KeyDown(KeyCode As Integer, Shift As Integer)
	     processKey KeyCode
	  End Sub
	
	  Private Sub Form_Load()
	     Move 2500, 2500
	  End Sub
	
	3. On the Project menu, click Add MDI Form to add an MDI form to the project.
	
	4. On the Project menu click Add Module to add a BAS module to the project.
	
	5. Add the following code to the General Declarations section of Module1:
	
	  Option Explicit
	
	  Declare Function SendMessage Lib "user32" Alias "SendMessageA" _
	        (ByVal hwnd As Long, ByVal wMsg As Long, ByVal wParam As Long, _
	         lParam As Any) As Long
	
	  Declare Function GetWindow Lib "user32" (ByVal hwnd As Long, _
	         ByVal wCmd As Long) As Long
	
	  Public Const SB_BOTTOM = 7
	  Public Const SB_LEFT = 6
	  Public Const SB_LINEDOWN = 1
	  Public Const SB_LINELEFT = 0
	  Public Const SB_LINERIGHT = 1
	  Public Const SB_LINEUP = 0
	  Public Const SB_PAGEDOWN = 3
	  Public Const SB_PAGELEFT = 2
	  Public Const SB_PAGERIGHT = 3
	  Public Const SB_PAGEUP = 2
	  Public Const SB_RIGHT = 7
	  Public Const SB_THUMBPOSITION = 4
	  Public Const SB_THUMBTRACK = 5
	  Public Const SB_TOP = 6
	  Public Const SB_ENDSCROLL = 8
	
	  Public Const WM_HSCROLL = &H114
	  Public Const WM_VSCROLL = &H115
	
	  Public Const GW_CHILD = 5
	
	  Public Sub processKey(KeyCode As Integer)
	     Dim mdiclientwin As Long
	
	     Select Case KeyCode
	      Case vbKeyDown
	        mdiclientwin = GetWindow(MDIForm1.hwnd, GW_CHILD)
	        SendMessage mdiclientwin, WM_VSCROLL, SB_LINEDOWN, ByVal 0&
	
	      Case vbKeyUp
	        mdiclientwin = GetWindow(MDIForm1.hwnd, GW_CHILD)
	        SendMessage mdiclientwin, WM_VSCROLL, SB_LINEUP, ByVal 0&
	
	      Case vbKeyPageUp
	        mdiclientwin = GetWindow(MDIForm1.hwnd, GW_CHILD)
	        SendMessage mdiclientwin, WM_VSCROLL, SB_PAGEUP, ByVal 0&
	
	      Case vbKeyPageDown
	        mdiclientwin = GetWindow(MDIForm1.hwnd, GW_CHILD)
	        SendMessage mdiclientwin, WM_VSCROLL, SB_PAGEDOWN, ByVal 0&
	
	      Case vbKeyRight
	        mdiclientwin = GetWindow(MDIForm1.hwnd, GW_CHILD)
	        SendMessage mdiclientwin, WM_HSCROLL, SB_LINERIGHT, ByVal 0&
	
	      Case vbKeyLeft
	        mdiclientwin = GetWindow(MDIForm1.hwnd, GW_CHILD)
	        SendMessage mdiclientwin, WM_HSCROLL, SB_LINELEFT, ByVal 0&
	
	     End Select
	
	  End Sub
	
	6. Run the project. The MDIForm scrolls down to the end. The UP, DOWN, PAGEUP,
	  PAGEDOWN, LEFT and RIGHT keys are now functional.
	
	REFERENCES
	==========
	
	For additional information on accelerator keys and ScrollBars in MDI
	applications, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q192183 PRB: Accelerator Keys Fail to Work in MDI Child Forms
	
	Additional query words: hot key
	
	======================================================================
	Keywords          : kbAPI kbCtrl kbHook kbKeyAccel kbScrollBar kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbWndwMsg kbGrpDSVB kbDSupport kbAcceleratorKey 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
