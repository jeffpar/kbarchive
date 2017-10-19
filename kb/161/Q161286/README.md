---
layout: page
title: "Q161286: HOWTO: Use a Common Dialog File Open Dialog with Win32 API"
permalink: /kb/161/Q161286/
---

## Q161286: HOWTO: Use a Common Dialog File Open Dialog with Win32 API

	Article: Q161286
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides a code sample and demonstrates how to use the File Open
	dialog box in the Comdlg32.dll. Making use of Comdlg32.OCX is a good reuse of
	resources under Windows, because Windows always has its dependent file,
	Comdlg32.dll, loaded. It provides an easy-to-use interface, but can be a
	performance hit. If you use the OCX control, you have to load the module into
	memory and also distribute a 90K OCX control to users of your software. To
	improve performance, you should minimize the use of controls in your
	applications. Instead, you can use the Win32 API calls directly.
	
	If you use the API calls, you may lose some of the functionality that
	Comdlg32.OCX offers, such as the Help button. If you require the Help button,
	you will need to use the Comdlg32.OCX control.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Start Visual Basic 5.0 and select Standard EXE. If Visual Basic 5.0 is
	  already running, click New Project on the File menu and select Standard EXE.
	  Form1 is created by default.
	
	2. Place a CommandButton on Form1.
	
	3. Add the following code to the Form1 code window:
	
	        Option Explicit
	
	         Private Declare Function GetOpenFileName Lib "comdlg32.dll" Alias _
	           "GetOpenFileNameA" (pOpenfilename As OPENFILENAME) As Long
	
	         Private Type OPENFILENAME
	           lStructSize As Long
	           hwndOwner As Long
	           hInstance As Long
	           lpstrFilter As String
	           lpstrCustomFilter As String
	           nMaxCustFilter As Long
	           nFilterIndex As Long
	           lpstrFile As String
	           nMaxFile As Long
	           lpstrFileTitle As String
	           nMaxFileTitle As Long
	           lpstrInitialDir As String
	           lpstrTitle As String
	           flags As Long
	           nFileOffset As Integer
	           nFileExtension As Integer
	           lpstrDefExt As String
	           lCustData As Long
	           lpfnHook As Long
	           lpTemplateName As String
	         End Type
	
	         Private Sub Command1_Click()
	           Dim OpenFile As OPENFILENAME
	           Dim lReturn As Long
	           Dim sFilter As String
	           OpenFile.lStructSize = Len(OpenFile)
	           OpenFile.hwndOwner = Form1.hWnd
	           OpenFile.hInstance = App.hInstance
	           sFilter = "Batch Files (*.bat)" & Chr(0) & "*.BAT" & Chr(0)
	           OpenFile.lpstrFilter = sFilter
	           OpenFile.nFilterIndex = 1
	           OpenFile.lpstrFile = String(257, 0)
	           OpenFile.nMaxFile = Len(OpenFile.lpstrFile) - 1
	           OpenFile.lpstrFileTitle = OpenFile.lpstrFile
	           OpenFile.nMaxFileTitle = OpenFile.nMaxFile
	           OpenFile.lpstrInitialDir = "C:\"
	           OpenFile.lpstrTitle = "Use the Comdlg API not the OCX"
	           OpenFile.flags = 0
	           lReturn = GetOpenFileName(OpenFile)
	           If lReturn = 0 Then
	              MsgBox "The User pressed the Cancel Button"
	           Else
	              MsgBox "The user Chose " & Trim(OpenFile.lpstrFile)
	           End If
	         End Sub
	
	4. Press the F5 key to run the project, and click the CommandButton. You should
	  see the File Open dialog box appear with the options set.
	
	REFERENCES
	==========
	
	The Win32 SDK documents other calls to the Comdlg32.dll such as ChooseColor,
	ChooseFont, and GetSaveFileName.
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q106682 : Default Extension Ignores File Type in VB Common Dialog
	
	  Q137194 : GetOpenFileName nMaxFile Interpreted Incorrectly
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbintluk KBCONTROL KBWIN32SDK KBAPI
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
