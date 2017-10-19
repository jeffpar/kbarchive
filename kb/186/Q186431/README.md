---
layout: page
title: "Q186431: HOWTO: Bring an Application Window to the Top with Focus"
permalink: /kb/186/Q186431/
---

## Q186431: HOWTO: Bring an Application Window to the Top with Focus

	Article: Q186431
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the BringToTop and FindWindow API functions to
	bring another window to the foreground with the focus.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add three CommandButtons to Form1. You might want to increase the size of
	  Command2 and Command3 to allow you to read the caption.
	
	3. Copy the following code to the General Declarations section of Form1:
	
	        Option Explicit
	        Dim THandle As Long
	
	        Private Declare Function BringWindowToTop Lib "user32" (ByVal _
	           hwnd As Long) As Long
	
	        Private Declare Function FindWindow Lib "user32" Alias _
	           "FindWindowA" (ByVal lpClassName As Any, ByVal lpWindowName _
	           As Any) As Long
	
	        Private Sub Form_Load()
	           Command1.Caption = "Run the Calculator"
	           Command2.Caption = "Find Calculator's Handle"
	           Command3.Caption = "Bring Calculator To The Top"
	           Command2.Enabled = False
	           Command3.Enabled = False
	        End Sub
	
	        Private Sub Command1_Click()
	           Dim X As Long
	           X = Shell("Calc.exe", 1)
	           If X <> 0 Then
	              Command2.Enabled = True
	           End If
	        End Sub
	
	        Private Sub Command2_click()
	           THandle = FindWindow(vbEmpty, "Calculator")
	           If THandle = 0 Then
	              Command3.Enabled = False
	              MsgBox "Sorry, the calculator is running"
	              Exit Sub
	           End If
	           Command3.Enabled = True
	        End Sub
	
	        Private Sub Command3_click()
	           Dim iret As Long
	           iret = BringWindowToTop(THandle)
	        End Sub
	
	4. Run the Program. When you click Command1, the calculator will appear and
	  Command2 will be enabled. Enlarge the size of this program to maximize screen
	  usage and then click Command2. If it finds the window handle for Calculator,
	  it will enable Command3.
	
	5. Click Command3, and note that the Calculator window will be brought to the
	  front so that it has the focus.
	
	REFERENCES
	==========
	
	For more information about API calls and API functions, search using the
	keywords "API" or "Declare" in the Visual Basic On-line Help.
	
	For information about creating a form that always stays on top, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q184297 : HOWTO: Create a Form That Always Stays on Top
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Richard T.
	Edwards, Microsoft Corporation
	
	
	Additional query words: SetTopMostWindow topmost kbDSupport kbDSD kbVBp500 kbSDKWin32 kbAPI 
	kbVBp400 kbVBp600 kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Issue type        : kbhowto
	
	=============================================================================
	
