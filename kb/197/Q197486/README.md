---
layout: page
title: "Q197486: PRB: Open Fails w/ Error #75 on Windows95 Read-Only Shared File"
permalink: /kb/197/Q197486/
---

## Q197486: PRB: Open Fails w/ Error #75 on Windows95 Read-Only Shared File

	Article: Q197486
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbFileIO kbVBp kbVBp400 kbVBp500 kbVBp600 kbOSWin95 kbGrpDSVB
	Last Modified: 28-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 4.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 4.0, 6.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	"Open For Binary" fails in Visual Basic when attempting to open a file in a
	shared resource on a Windows 95 computer where the share control has been set to
	share level access. The Open call fails with the following message:
	
	  Run-time error '75': Path/File access error.
	
	This only occurs when the shared resource is on a Windows 95 computer with
	share-level access control.
	
	RESOLUTION
	==========
	
	Here are three possible solutions:
	
	- Set the access permission on the shared resource to full control.
	
	  -or-
	
	- Use user level access. This is only possible if the computer in question is
	  part of a Windows NT domain.
	
	  -or-
	
	- Access the file using Win32 API calls.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Reproduction of this problem requires two computers connected by a network.
	  The server must be a Windows 95 computer. The client may be Windows 95,
	  Windows 98, Windows Me, Windows NT, or Windows 2000.
	
	2. On the server computer, right-click the "Neighborhood Network" icon to open
	  the shortcut menu and then select Properties. Click the "Access Control" tab
	  in the Network dialog box that displays. Select "Share Level Access Control"
	  and then click OK. Your computer is then set for share level access control.
	
	  NOTE: You may be prompted for a Windows disk.
	
	3. On the server computer, create a new folder on the C: drive named Testshare.
	  Right-click the Testshare folder to display the shortcut menu and then select
	  Sharing. Share the folder as "Read Only" without a password. Create a file
	  named Test.txt that contains a couple of lines of random text and then save
	  it in the Testshare folder.
	
	4. On the client computer, create a new Visual Basic standard exe project. Form1
	  is created by default.
	
	5. Add two command button controls to Form1.
	
	6. Add the following code to the General Declarations section of Form1.
	
	        Option Explicit
	
	        ' Constants
	        Private Const GENERIC_READ = &H80000000
	        Private Const OPEN_EXISTING = 3
	        Private Const OPEN_ALWAYS = 4
	        Private Const FILE_SHARE_READ = &H1
	        Private Const FILE_SHARE_WRITE = &H2
	        Private Const FILE_ATTRIBUTE_NORMAL = &H80
	
	        Private Const PATH_FILE = "\\winever\testshare\test.txt"
	
	        ' Functions
	
	        Private Declare Function CreateFile Lib "kernel32" _
	        Alias "CreateFileA" _
	        (ByVal lpFileName As String, ByVal dwDesiredAccess As Long, _
	         ByVal dwShareMode As Long, ByVal lpSecurityAttributes As Long, _
	         ByVal dwCreationDisposition As Long, _
	         ByVal dwFlagsAndAttributes As Long, _
	         ByVal hTemplateFile As Long) As Long
	
	        Private Declare Function CloseHandle Lib "kernel32" _
	        (ByVal hObject As Long) As Long
	
	        Private Declare Function ReadFile Lib "kernel32" _
	        (ByVal hFile As Long, _
	         lpBuffer As Any, ByVal nNumberOfBytesToRead As Long, _
	         lpNumberOfBytesRead As Long, ByVal lpOverlapped As Long) As Long
	
	        Private Sub Command1_Click()
	           Open PATH_FILE For Binary As #1
	           Close #1 ' Run-time error '75': Path/File access error
	        End Sub
	
	        Private Sub Command2_Click()
	           Dim hFileHandle As Long
	           Dim bBuffer(10) As Byte
	           Dim lResult As Long
	           Dim i As Integer
	
	           ' Open the file.
	           ' !!! Be sure to modify PATH_FILE to your servers name!
	           hFileHandle = CreateFile(PATH_FILE, GENERIC_READ, 0&, 0&, _
	                         OPEN_EXISTING, 0&, 0&)
	           ' Check filehandle to see if we get an error back, a value of -1
	           ' indicates an error.
	           MsgBox (hFileHandle)
	           ' Read the first 10 bytes of the file.
	           lResult = ReadFile(hFileHandle, bBuffer(0), 10, cBytesRead, 0)
	           ' Write the 10 bytes to the immediate pane.
	           For i = 0 To UBound(bBuffer)
	              Debug.Print bBuffer(i); " ";
	           Next i 
	           Debug.Print
	           Debug.Print StrConv(bBuffer, vbUnicode)
	           ' Close the file.
	           CloseHandle (hFileHandle)
	        End Sub
	
	        Private Sub Form_Load()
	           Command1.Caption = "Show Error"
	           Command2.Caption = "Workaround"
	        End Sub
	
	7. Modify the constant PATH_FILE to use your server computer's name.
	
	8. Run the project and click the 'Show Error' button. This displays the
	  following message:
	
	  Run-time error '75': Path/File access error.
	
	  NOTE: This only fails when the resource is read only. If you set the
	  resource's permissions to full control, no error occurs.
	
	9. To demonstrate the workaround run the program again and click the Workaround
	  button. Opening the file will succeed and you will see the values of the
	  first 10 bytes of the file printed in the debug window as well as the String
	  equivalent.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbFileIO kbVBp kbVBp400 kbVBp500 kbVBp600 kbOSWin95 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
