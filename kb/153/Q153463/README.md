---
layout: page
title: "Q153463: HOWTO: Close Applications from Visual Basic"
permalink: /kb/153/Q153463/
---

## Q153463: HOWTO: Close Applications from Visual Basic

	Article: Q153463
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Periodically it may be necessary for a programmer to close down another
	application from Visual Basic code. For example, your application might conflict
	with some other known utility, so you need to close the conflicting utility so
	your application can work correctly. The step-by- step example in this article
	shows how to do it using the Windows API.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Visual Basic project. Form1 is created by default.
	
	2. Add a command button (Command1) to Form1.
	
	3. Add the following code to the General Declarations section of Form1:
	
	     Option Explicit
	
	     Private Declare Function FindWindow Lib "User" (ByVal lpClassName _
	        As Any, ByVal lpWindowName As Any) As Integer
	     Private Declare Function PostMessage Lib "User" (ByVal hWnd _
	        As Integer, ByVal wMsg As Integer, ByVal wParam As Integer, _
	        lParam As Any) As Integer
	
	     Private Const WM_QUIT = &H12
	
	     Private Sub Command1_Click()
	       Dim sTitle As String
	       Dim iHwnd As Integer
	       Dim ihTask As Integer
	       Dim iReturn As Integer
	       sTitle = "Notepad - (Untitled)"
	       iHwnd = FindWindow(0&, sTitle)
	       iReturn = PostMessage(iHwnd, WM_QUIT, 0, 0&)
	       MsgBox "Notepad has been Closed Down"
	     End Sub
	
	4. Start Notepad by double-clicking the Notepad Icon.
	
	5. Activate Visual Basic, and press F5 to start the project. Click the command
	  button and the instance of Notepad you started should automatically close
	  down. The message box will confirm this.
	
	NOTE: For Visual Basic for Windows, 32-bit only, version 4.0 and Visual Basic for
	Windows version 5.0, you need to use the following code:
	
	1. Start a new Visual Basic project. Form1 is created by default.
	
	2. Add a command button (Command1) to Form1.
	
	3. Add the following code to the General Declarations section of Form1:
	
	     Option Explicit
	
	     Private Declare Function FindWindow Lib "user32" Alias "FindWindowA" (ByVal
	       lpClassName As Any, ByVal lpWindowName As Any) As Long
	     Private Declare Function PostMessage Lib "user32" Alias "PostMessageA"
	       (ByVal hwnd As Long, ByVal wMsg As Long, ByVal wParam As Long, ByVal lParam
	       As Long) As Long
	     Private Const WM_QUIT = &H12
	     Private Sub Command1_Click()
	      Dim sTitle As String
	       Dim iHwnd As Long
	       Dim ihTask As Long
	       Dim iReturn As Long
	       sTitle = "Untitled - Notepad"
	       iHwnd = FindWindow(0&, sTitle)
	       iReturn = PostMessage(iHwnd, WM_QUIT, 0&, 0&)
	       MsgBox "Notepad has been Closed Down"
	    End Sub
	
	4. Start Notepad by double-clicking the Notepad Icon.
	
	5. Activate Visual Basic, and press the F5 key to start the project. the command
	  button and the instance of Notepad you started should automatically close
	  down. The message box will confirm this.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
