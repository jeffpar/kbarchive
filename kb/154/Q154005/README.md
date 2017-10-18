---
layout: page
title: "Q154005: HOWTO: Delete a File into the Win95/98/Me Recycle Bin"
permalink: kb/154/Q154005/
---

## Q154005: HOWTO: Delete a File into the Win95/98/Me Recycle Bin

	Article: Q154005
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual Basic function called KILL enables a user to delete a file from disk.
	Under Windows 95, Windows 98, Windows Me, Windows NT 4.0, and Windows 2000,
	files can be deleted into the Recycle Bin, giving a user the ability to reclaim
	deleted items. The KILL function does not offer this functionality to the Visual
	Basic Programmer. This article describes how to use the SHFileOperation Win32
	API to enable a user to delete a file and place it in the Recycle Bin. Below is
	a code sample showing how to use the API in Visual Basic.
	
	The Recycle Bin option to remove files immediately when deleted should be turned
	off in order for this sample to function as designed.
	
	MORE INFORMATION
	================
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place a Command button on Form1.
	
	3. Add the following code to the Form1 code window:
	
	        Option Explicit
	
	        Private Type SHFILEOPSTRUCT
	          hwnd As Long
	          wFunc As Long
	          pFrom As String
	          pTo As String
	          fFlags As Integer
	          fAnyOperationsAborted As Boolean
	          hNameMappings As Long
	          lpszProgressTitle As String
	        End Type
	
	        Private Declare Function SHFileOperation Lib "shell32.dll" Alias _
	          "SHFileOperationA" (lpFileOp As SHFILEOPSTRUCT) As Long
	        Private Declare Function GetTempFileName Lib "kernel32" _
	          Alias "GetTempFileNameA" (ByVal lpszPath As String, _
	          ByVal lpPrefixString As String, ByVal wUnique As Long, _
	          ByVal lpTempFileName As String) As Long
	
	        Private Const FO_DELETE = &H3
	        Private Const FOF_ALLOWUNDO = &H40
	
	        Sub Command1_Click()
	          Dim FileOperation As SHFILEOPSTRUCT
	          Dim lReturn As Long
	          Dim sTempFilename As String * 100
	          Dim sSendMeToTheBin As String
	          lReturn = GetTempFileName("c:\", "VB_", 0, sTempFilename)
	          sSendMeToTheBin = Left(sTempFilename, InStr(sTempFilename, _
	             Chr$(0)))
	          With FileOperation
	             .wFunc = FO_DELETE
	             .pFrom = sSendMeToTheBin
	             .pTO = vbNullChar   ' Not used
	             .fFlags = FOF_ALLOWUNDO
	          End With
	          lReturn = SHFileOperation(FileOperation)
	          MsgBox "View your Recycle Bin for files beginning with VB_"
	        End Sub
	
	4. Press the F5 key to run the project, and click the Command button. You will
	  be prompted to confirm the deletion of the file. In your Recycle Bin, there
	  will be a file with the prefix "VB_" that is the file created by the
	  GetTempFileName Win32 API call.
	
	REFERENCES
	==========
	
	The Win32 SDK Helpfile refers to other SHFileOperation functionality.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
