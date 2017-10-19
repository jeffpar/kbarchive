---
layout: page
title: "Q202563: HOWTO: Call Win32 WinHelp API from Visual Basic"
permalink: /kb/202/Q202563/
---

## Q202563: HOWTO: Call Win32 WinHelp API from Visual Basic

	Article: Q202563
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbWinHelp kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to programmatically invoke the Windows 32-bit Help
	engine using the WinHelp API from a Visual Basic program.
	
	MORE INFORMATION
	================
	
	The steps below provide sample code to programmatically call the 32-bit WinHelp
	API from a 32-bit Visual Basic application:
	
	Step-by-Step Example
	--------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a CommandButton (Command1) to Form1.
	
	3. Paste the following code into Form1's module:
	
	     Option Explicit
	     
	     Private Declare Function WinHelp Lib "user32" Alias "WinHelpA" _
	        (ByVal hwnd As Long, ByVal lpHelpFile As String, _
	        ByVal wCommand As Long, ByVal dwData As Long) As Long
	
	     Private Const HELP_CONTENTS = 3
	     Private Const HELP_FINDER = 11
	
	     Private Sub Command1_Click()
	        Dim lResult As Long
	        Dim sHelpFile As String
	        Dim lCommand as Long, lOption as Long
	        sHelpFile = "winfile.hlp"
	        lCommand = HELP_CONTENTS
	        lOption = 0
	        lResult = WinHelp(Me.hwnd, sHelpFile, lCommand, lOption)
	     End Sub
	
	4. Run the project and click on the CommandButton.
	
	NOTE: The Help Constants topic of the Visual Basic Help file has additional
	values for the third parameter (command parameter). HELP_CONTENTS is still kept
	in WinHelp for backward compatibility with 16-bit Help files. The HELP_FINDER
	command is preferred for 32-bit Help files.
	
	REFERENCES
	==========
	
	Visual Basic API Text Viewer, Online Help and Books Online.
	
	For additional information about invoking WinHelp, please click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q86771 HOWTO: Invoke Search in Windows Help from Visual Basic Program
	
	======================================================================
	Keywords          : kbAPI kbWinHelp kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
