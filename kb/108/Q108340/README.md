---
layout: page
title: "Q108340: HOWTO: Determine Visual Basic 3.0 Trappable Errors"
permalink: kb/108/Q108340/
---

## Q108340: HOWTO: Determine Visual Basic 3.0 Trappable Errors

	Article: Q108340
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbref kbDocs kbVBp300
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how you can determine if an error you are receiving
	from a Visual Basic program is a Visual Basic trappable error or if it coming
	from another source.
	
	MORE INFORMATION
	================
	
	When you run the VB.exe file, follow these steps to get more information on a
	specific error:
	
	1. Stop your program if it is currently running.
	
	2. Press the F8 key to go from design mode to break mode.
	
	3. Press CTRL+B to activate the debug window.
	
	4. Enter the following statement and wait for the error message to appear:
	
	"Error <error-number>" (without the quotation marks)
	
	For example, type "Error 70" (without the quotation marks), and the following
	error message appears:
	
	  Permission denied
	
	5. Press F1 to get information from Help on that specific error.
	
	  For example, pressing F1 on "Error 70" (without the quotation marks) displays
	  the Permission denied page from the Visual Basic Help.
	
	To generate a list of error messages for Visual Basic 3.0:
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a Label control (Label1) and a CommandButton (Command1) to Form1. Set the
	  Label1 Caption property to Status of Error List.
	
	3. Add the following code to the Click event for Command1:
	
	     Dim i As Variant
	     Dim buf As String
	     Label1.Caption = "Error List Started"
	     For i = 1 To &H7FFF
	       If Error$(i) <> "User-defined error" Then
	         buf = buf & Format$(i, "@@@@ ") & Error$(i) & Chr$(13) & Chr$(10)
	       End If
	     Next
	     ClipBoard.Clear
	     ClipBoard.SetText buf
	     Label1.Caption = "Error List Complete"
	
	4. On the Run menu, choose Start, or press the F5 key to run the program. Click
	  Command1 and, when the label displays the following error message, then paste
	  the contents of the clipboard into an editor, such as Notepad:
	
	  Error List Complete
	
	REFERENCES
	==========
	
	For additional information on trappable errors for newer versions of Visual
	Basic, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q136250 HOWTO: Determine Visual Basic Trappable Errors
	
	Additional query words: 70
	
	======================================================================
	Keywords          : kbref kbDocs kbVBp300 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300
	Version           : :3.0
	Issue type        : kbhowto
	
	=============================================================================
	
