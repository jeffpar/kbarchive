---
layout: page
title: "Q141024: How to Start a Visual Basic Screen Saver Using SendMessage API"
permalink: /kb/141/Q141024/
---

## Q141024: How to Start a Visual Basic Screen Saver Using SendMessage API

	Article: Q141024
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample code below shows how to start a Visual Basic screen saver by sending
	a Windows message to the Control-menu box on a form.
	
	MORE INFORMATION
	================
	
	Microsoft Windows starts screen savers through the System-menu box on a form.
	The System-menu box is also known as the Control-menu box in Visual Basic. You
	can send Windows messages to the Control-menu box by using the SendMessage
	Windows API (application programming interface) function.
	
	  [general declarations]
	  #If Win32 Then
	      Private Declare Function SendMessage Lib "user32" Alias _
	  "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, _     ByVal wParam
	  As Long, ByVal lParam As Long) As Long
	      Const WM_SYSCOMMAND = &H112&
	      Const SC_SCREENSAVE = &HF140&
	  #Else
	      Private Declare Function SendMessage Lib "User" (ByVal _         hWnd
	  As Integer, ByVal wMsg As Integer, ByVal wParam As _             Integer,
	  lParam As Any) As Long
	      Const WM_SYSCOMMAND = &H112
	      Const SC_SCREENSAVE = &HF140&
	  #End If
	
	  Private Sub Command1_Click()
	      Dim result As Long
	      result = SendMessage(Form1.hWnd, WM_SYSCOMMAND, _
	       SC_SCREENSAVE, 0&)
	  End Sub
	
	REFERENCES
	==========
	
	You can find two sample programs and a complete explanation showing how to write
	your own screen savers in Visual Basic in the following book:
	
	"Visual Basic Workshop 3.0" by John C. Craig, published by Microsoft Press.
	
	Additional query words: 3.00 4.00 vb4win vb4all .SCR TOPMOST SETWINDOWPOS SCRNSAVE timer
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0
	
	=============================================================================
	
