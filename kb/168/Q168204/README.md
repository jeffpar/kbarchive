---
layout: page
title: "Q168204: HOWTO: Kill an Application with System Menu Using VB"
permalink: /kb/168/Q168204/
---

## Q168204: HOWTO: Kill an Application with System Menu Using VB

	Article: Q168204
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Visual Basic for Windows can use the Microsoft Windows API SendMessage
	function to close any active window that has a system menu (referred to as the
	Control Box within Visual Basic for Windows) with the Close option.
	
	MORE INFORMATION
	================
	
	This sample program uses the Windows API SendMessage function to post a message
	to any window in the environment, provided the handle to the window is known.
	The API FindWindow function is used to determine the handle associated with the
	window the user wants to close. To use FindWindow, you must know either the
	ClassName or the Caption (if any) of that window. Please see the REFERENCES
	section below for more information.
	
	Steps to Create Example Program
	-------------------------------
	
	1. Start Visual Basic and select Standard EXE. If Visual Basic is already
	  running, click New Project on the File menu and select Standard EXE. Form1 is
	  created by default.
	
	2. Create two Command Buttons called Command1 and Command2.
	
	3. On the Project menu, click Add Module (ALT, P, M). Module1 is created by
	  default.
	
	4. In the Declarations section, declare the following two API functions:
	
	        Declare Function FindWindow _
	         Lib "user32" Alias "FindWindowA" _
	         (ByVal lpClassName As String, _
	         ByVal lpWindowName As String) _
	         As Long
	
	        Declare Function SendMessage _
	         Lib "user32" Alias "SendMessageA" _
	         (ByVal hwnd As Long, _
	         ByVal wMsg As Long, _
	         ByVal wParam As Long, _
	         lParam As Long) _
	         As Long
	
	5. Within the Command1 Click event, add the following code:
	
	        Private Sub Command1_Click()
	           Shell "Calc.exe", vbNormalFocus
	        End Sub
	
	6. Within the Command2 Click event, add the following code:
	
	        Private Sub Command2_Click()
	           Dim lpClassName As String
	           Dim lpCaption As String
	           Dim Handle As Long
	
	           Const NILL = 0&
	           Const WM_SYSCOMMAND = &H112
	           Const SC_CLOSE = &HF060&
	
	           lpClassName = "SciCalc"
	           lpCaption = "Calculator"
	
	        '* Determine the handle to the Calculator window.
	           Handle = FindWindow(lpClassName$, lpCaption$)
	
	        '* Post a message to Calc to end its existence.
	           Handle = SendMessage(Handle, WM_SYSCOMMAND, SC_CLOSE, NILL)
	
	        End Sub
	
	7. On the Run menu, click Start or press the F5 key to start the program.
	  Clicking the Command1 button starts a (new) instance of the Windows
	  Calculator accessory. Clicking on the Command2 button kills an instance of
	  the Calculator.
	
	REFERENCES
	==========
	
	For more information on the FindWindow and SendMessage functions, query on the
	following words in the Microsoft Knowledge Base:
	
	  FindWindow and Visual Basic or SendMessage and Visual Basic
	
	For information on a different sample application that returns assorted
	information for a windowed application, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q112649 : How to Get a Window's Class Name and Other Window Attributes
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	
