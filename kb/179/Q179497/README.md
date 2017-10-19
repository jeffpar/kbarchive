---
layout: page
title: "Q179497: HOWTO: Select a Directory Without the Common Dialog Control"
permalink: /kb/179/Q179497/
---

## Q179497: HOWTO: Select a Directory Without the Common Dialog Control

	Article: Q179497
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
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to display the directory structure of a computer
	and allow a user to select a directory without using the Common Dialog control.
	
	MORE INFORMATION
	================
	
	The sample project uses the following API functions to display the directory
	structure of a computer:
	
	- SHBrowseForFolder - displays a dialog box that enables the user to select a
	  shell folder.
	
	- SHGetPathFromIDList - converts an item identifier list to a file system path.
	
	Create the Sample Project
	-------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a CommandButton to Form1.
	
	3. Copy the following code to the Code window of Form1:
	
	        Option Explicit
	
	        Private Const BIF_RETURNONLYFSDIRS = 1
	        Private Const BIF_DONTGOBELOWDOMAIN = 2
	        Private Const MAX_PATH = 260
	
	        Private Declare Function SHBrowseForFolder Lib "shell32" _
	                                          (lpbi As BrowseInfo) As Long
	
	        Private Declare Function SHGetPathFromIDList Lib "shell32" _
	                                          (ByVal pidList As Long, _
	                                          ByVal lpBuffer As String) As Long
	
	        Private Declare Function lstrcat Lib "kernel32" Alias "lstrcatA" _
	                                          (ByVal lpString1 As String, ByVal _
	                                          lpString2 As String) As Long
	
	        Private Type BrowseInfo
	           hWndOwner      As Long
	           pIDLRoot       As Long
	           pszDisplayName As Long
	           lpszTitle      As Long
	           ulFlags        As Long
	           lpfnCallback   As Long
	           lParam         As Long
	           iImage         As Long
	        End Type
	
	        Private Sub Command1_Click()
	        'Opens a Treeview control that displays the directories in a computer
	
	           Dim lpIDList As Long
	           Dim sBuffer As String
	           Dim szTitle As String
	           Dim tBrowseInfo As BrowseInfo
	
	           szTitle = "This is the title"
	           With tBrowseInfo
	              .hWndOwner = Me.hWnd
	              .lpszTitle = lstrcat(szTitle, "")
	              .ulFlags = BIF_RETURNONLYFSDIRS + BIF_DONTGOBELOWDOMAIN
	           End With
	
	           lpIDList = SHBrowseForFolder(tBrowseInfo)
	
	           If (lpIDList) Then
	              sBuffer = Space(MAX_PATH)
	              SHGetPathFromIDList lpIDList, sBuffer
	              sBuffer = Left(sBuffer, InStr(sBuffer, vbNullChar) - 1)
	              MsgBox sBuffer
	           End If
	        End Sub
	
	4. On the Run menu, click Start or press the F5 key to start the program. Click
	  the CommandButton to display the directory structure of the computer. Select
	  a directory and click the OK button to display the directory you selected in
	  a message box.
	
	Additional query words: directory chooser picker kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport 
	KBWIN32SDK KBAPI
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	
