---
layout: page
title: "Q165919: HOWTO: Use the Windows 95/98/Me Copy and Recycle Functions in VB"
permalink: kb/165/Q165919/
---

## Q165919: HOWTO: Use the Windows 95/98/Me Copy and Recycle Functions in VB

	Article: Q165919
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 05-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows API provides the ability to perform a copy, move, rename, or delete
	operations on a file system object using the SHFileOperation function that is
	exported by Shell32.DLL. The example below shows how to copy a list of files
	into a named folder and then move them to the Recycle Bin. The SHFileOperation
	provides the ability to move, rename, or delete based on the flags passed to it.
	For more information on what options are available, see the REFERENCES section
	at the end of this article.
	
	In Visual Basic 6.0, you can use the FileSystemObject Object to copy, move,
	rename, and delete files. However, the FileSystemObject does not provide a way
	of placing files in the Recycle Bin.
	
	MORE INFORMATION
	================
	
	The following example creates a single form Visual Basic project using the
	SHFileOperation API function.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new "Standard EXE" project. Form1 is created by default.
	
	2. Place two CommandButtons on Form1 (Command1 and Command2).
	
	3. From the Project menu, select Add Module to add a module to the project.
	
	4. Add the following code, consisting of function, type, and constant
	  declarations, to Module1:
	
	  Note: This sample makes use of VB.HLP and VB.CNT that are installed with a
	  complete installation of Microsoft Visual Basic. If you do not have these
	  files, this sample can be altered to copy other existing files.
	
	        Public Const FO_MOVE As Long = &H1
	        Public Const FO_COPY As Long = &H2
	        Public Const FO_DELETE As Long = &H3
	        Public Const FO_RENAME As Long = &H4
	
	        Public Const FOF_MULTIDESTFILES As Long = &H1
	        Public Const FOF_CONFIRMMOUSE As Long = &H2
	        Public Const FOF_SILENT As Long = &H4
	        Public Const FOF_RENAMEONCOLLISION As Long = &H8
	        Public Const FOF_NOCONFIRMATION As Long = &H10
	        Public Const FOF_WANTMAPPINGHANDLE As Long = &H20
	        Public Const FOF_CREATEPROGRESSDLG As Long = &H0
	        Public Const FOF_ALLOWUNDO As Long = &H40
	        Public Const FOF_FILESONLY As Long = &H80
	        Public Const FOF_SIMPLEPROGRESS As Long = &H100
	        Public Const FOF_NOCONFIRMMKDIR As Long = &H200
	
	        Type SHFILEOPSTRUCT
	           hwnd As Long
	           wFunc As Long
	           pFrom As String
	           pTo As String
	           fFlags As Long
	           fAnyOperationsAborted As Long
	           hNameMappings As Long
	           lpszProgressTitle As String
	        End Type
	
	        Declare Function SHFileOperation Lib "Shell32.dll" _
	           Alias "SHFileOperationA" (lpFileOp As SHFILEOPSTRUCT) As Long
	
	5. Add the following code behind Form1:
	
	        Private Sub Command1_Click()
	           Dim result As Long
	           Dim fileop As SHFILEOPSTRUCT
	           With fileop
	              .hwnd = Me.hwnd
	
	              .wFunc = FO_COPY
	
	              'The files to copy separated by Nulls and terminated by 2
	              'null. The files VB.HLP and VB.CNT are installed by a complete
	              'installation of Microsoft Visual Basic. If you do not have
	              'these files, you can alter this sample to point to existing
	              'files.
	
	              .pFrom = "C:\PROGRAM FILES\MICROSOFT VISUAL BASIC\VB.HLP" & _
	                 vbNullChar & _
	                 "C:\PROGRAM FILES\MICROSOFT VISUAL BASIC\VB.CNT" & _
	                 vbNullChar & vbNullChar
	
	              'or to copy all files use this line
	              '.pFrom = "C:\*.*" & vbNullChar & vbNullChar
	
	              'The directory or filename(s) to copy into terminated in 2
	              'nulls.
	              .pTo = "C:\testfolder\" & vbNullChar & vbNullChar
	
	              .fFlags = FOF_SIMPLEPROGRESS Or FOF_FILESONLY
	           End With
	
	           result = SHFileOperation(fileop)
	
	           If result <> 0 Then        'Operation failed
	              MsgBox result, , "Copy Operation Failed"
	           Else
	              If fileop.fAnyOperationsAborted <> 0 Then
	                 MsgBox fileop.fAnyOperationsAborted, , "Operation Aborted"
	              End If
	           End If
	        End Sub
	
	        Private Sub Command2_Click()
	           Dim DelFileOp As SHFILEOPSTRUCT
	           Dim result As Long
	           With DelFileOp
	              .hwnd = Me.hwnd
	              .wFunc = FO_DELETE
	              'Delete the files you just moved to C:\TestFolder.
	              'The files VB.HLP and VB.CNT are installed by a complete
	              'installation of Microsoft Visual Basic. If you do not have
	              'these files, you can alter this sample to point to existing
	              'files.
	
	              .pFrom = "C:\testfolder\vb.hlp" & vbNullChar & _
	                       "c:\testfolder\vb.cnt" & vbNullChar & vbNullChar
	              'Allow undo--in other words, place the files into the Recycle
	              'Bin
	              .fFlags = FOF_ALLOWUNDO
	           End With
	           result = SHFileOperation(DelFileOp)
	           If result <> 0 Then        'Operation failed
	              MsgBox result, , "Delete Operation Failed"
	           Else
	              If DelFileOp.fAnyOperationsAborted <> 0 Then
	                 MsgBox DelFileOp.fAnyOperationsAborted, , "Operation Aborted"
	              End If
	           End If
	        End Sub
	
	        Private Sub Form_Load()
	           Command1.Caption = "Copy Test"
	           Command2.Caption = "Recycle Test"
	        End Sub
	
	6. From the Run menu, select Start, or press the F5 key to run the application.
	  Click the Copy Test button. If the destination directory does not exist, a
	  prompt to create the directory will be displayed. The copy animation will
	  appear if the operation requires enough time. Click the Recycle Test button.
	  A confirmation prompt regarding file deletion will be displayed.
	
	REFERENCES
	==========
	
	Microsoft Win32 SDK SHFileOperation, SHFILEOPSTRUCT
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
