---
layout: page
title: "Q291664: HOWTO: Detect Safe Mode Startup with Visual Basic"
permalink: kb/291/Q291664/
---

## Q291664: HOWTO: Detect Safe Mode Startup with Visual Basic

	Article: Q291664
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 12-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For some applications, it may be useful to detect if the local system was
	started in Safe Mode in order to run appropriately in this mode or to avoid
	running in Safe Mode. This article describes how to use a Win32 application
	programming interface (API) to determine the startup mode of the local system.
	
	MORE INFORMATION
	================
	
	You can use the GetSystemMetrics function with the SM_CLEANBOOT index specified
	to detect the startup mode of the system. The SM_CLEANBOOT index returns one of
	three values, based on how the system was started:
	
	+------------------------------------------+
	| Return Value | Meaning                   | 
	+------------------------------------------+
	| 0            | Normal Boot               | 
	+------------------------------------------+
	| 1            | Safe Mode                 | 
	+------------------------------------------+
	| 2            | Safe Mode with Networking | 
	+------------------------------------------+
	
	Step-by-Step Example
	--------------------
	
	The following Visual Basic code demonstrates how to detect Safe Mode:
	
	1. Start a new Visual Basic standard EXE project. Form1 is created by default.
	
	2. Add a new command button (Command1) to Form1.
	
	3. Paste the following code into the code window of Form1:
	
	  Private Declare Function GetSystemMetrics Lib "user32" _
	     (ByVal nIndex As Long) As Long
	
	  Const SM_CLEANBOOT& = 67
	
	  Private Sub Command1_Click()
	      Dim result As Long
	      
	      result = GetSystemMetrics(SM_CLEANBOOT)
	      
	      Select Case result
	          Case 0
	              MsgBox "System started in normal mode."
	          Case 1
	              MsgBox "System started in safe mode."
	          Case 2
	              MsgBox "System started in safe mode with networking."
	          Case Else
	              MsgBox "Unknown value returned from GetSystemMetrics."
	      End Select
	  End Sub
	
	4. Click Run, or press the F5 key, to run the project.
	
	5. Click Command1. Notice that a message appears that reflects the startup mode
	  of your system.
	
	REFERENCES
	==========
	
	For additional information using the API from Visual Basic, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q190000 HOWTO: Get Started Programming with the Windows API (LONG)
	
	The MSDN Platform SDK Help for GetSystemMetrics
	
	The Visual Basic Programmer's Guide
	
	Additional query words: SM_CLEANBOOT boot
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
