---
layout: page
title: "Q170918: HOWTO: Use ShellExecute to Launch Associated File (32-bit)"
permalink: kb/170/Q170918/
---

## Q170918: HOWTO: Use ShellExecute to Launch Associated File (32-bit)

	Article: Q170918
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the Windows API ShellExecute() function to start the application
	associated with a given document extension without knowing the name of the
	associated application. For example, you could start the Paintbrush program by
	passing the filename ARCADE.BMP to the ShellExecute() function.
	
	MORE INFORMATION
	================
	
	The ShellExecute function opens or prints the specified file. Following is the
	declaration to use when calling this function from Visual Basic:
	
	     Declare Function ShellExecute Lib "shell32.dll" Alias "ShellExecuteA" _
	                     (ByVal hwnd As Long, ByVal lpszOp As String, _
	                      ByVal lpszFile As String, ByVal lpszParams As String, _
	                      ByVal LpszDir As String, ByVal FsShowCmd As Long) _
	                      As Long
	
	The following table provides descriptions for each parameter:
	
	Parameter     Description
	----------------------------------------------------------------------------
	hwnd          Identifies the parent window. This window receives any
	             message boxes an application produces (for example, for error
	             reporting).
	
	lpszOp        Points to a null-terminated string specifying the operation
	             to perform. This string can be "open" or "print." If this
	             parameter is NULL, "open" is the default value.
	
	lpszFile      Points to a null-terminated string specifying the file
	             to open.
	
	lpszParams    Points to a null-terminated string specifying parameters
	             passed to the application when the lpszFile parameter
	             specifies an executable file. If lpszFile points to a string
	             specifying a document file, this parameter is NULL.
	
	LpszDir       Points to a null-terminated string specifying the default
	             directory.
	
	FsShowCmd     Specifies whether the application window is to be shown when
	             the application is opened.
	
	Step-by-Step Example
	--------------------
	
	The following example demonstrates how to start an application or load a document
	into its associated application. The Windows API ShellExecute() function is
	different from the Visual Basic Shell() function in that you can pass the
	ShellExecute() function the name of a document and it will launch the associated
	application, and then pass the filename to the application.
	
	1. Start a New project in Visual Basic. Form1 is created by default.
	
	2. Add the following code to the General Declarations section of Form1:
	
	        Option Explicit
	
	        Private Declare Function ShellExecute Lib "shell32.dll" Alias _
	        "ShellExecuteA" (ByVal hwnd As Long, ByVal lpszOp As _
	        String, ByVal lpszFile As String, ByVal lpszParams As String, _
	        ByVal lpszDir As String, ByVal FsShowCmd As Long) As Long
	
	        Private Declare Function GetDesktopWindow Lib "user32" () As Long
	
	        Const SW_SHOWNORMAL = 1
	
	        Const SE_ERR_FNF = 2&
	        Const SE_ERR_PNF = 3&
	        Const SE_ERR_ACCESSDENIED = 5&
	        Const SE_ERR_OOM = 8&
	        Const SE_ERR_DLLNOTFOUND = 32&
	        Const SE_ERR_SHARE = 26&
	        Const SE_ERR_ASSOCINCOMPLETE = 27&
	        Const SE_ERR_DDETIMEOUT = 28&
	        Const SE_ERR_DDEFAIL = 29&
	        Const SE_ERR_DDEBUSY = 30&
	        Const SE_ERR_NOASSOC = 31&
	        Const ERROR_BAD_FORMAT = 11&
	
	        Function StartDoc(DocName As String) As Long
	            Dim Scr_hDC As Long
	            Scr_hDC = GetDesktopWindow()
	            StartDoc = ShellExecute(Scr_hDC, "Open", DocName, _
	            "", "C:\", SW_SHOWNORMAL)
	        End Function
	
	        Private Sub Form_Click()
	            Dim r As Long, msg As String
	            r = StartDoc("C:\WINDOWS\ARCADE.BMP")
	            If r <= 32 Then
	                'There was an error
	                Select Case r
	                    Case SE_ERR_FNF
	                        msg = "File not found"
	                    Case SE_ERR_PNF
	                        msg = "Path not found"
	                    Case SE_ERR_ACCESSDENIED
	                        msg = "Access denied"
	                    Case SE_ERR_OOM
	                        msg = "Out of memory"
	                    Case SE_ERR_DLLNOTFOUND
	                        msg = "DLL not found"
	                    Case SE_ERR_SHARE
	                        msg = "A sharing violation occurred"
	                    Case SE_ERR_ASSOCINCOMPLETE
	                        msg = "Incomplete or invalid file association"
	                    Case SE_ERR_DDETIMEOUT
	                        msg = "DDE Time out"
	                    Case SE_ERR_DDEFAIL
	                        msg = "DDE transaction failed"
	                    Case SE_ERR_DDEBUSY
	                        msg = "DDE busy"
	                    Case SE_ERR_NOASSOC
	                        msg = "No association for file extension"
	                    Case ERROR_BAD_FORMAT
	                        msg = "Invalid EXE file or error in EXE image"
	                    Case Else
	                        msg = "Unknown error"
	                End Select
	                MsgBox msg
	            End If
	        End Sub
	
	3. Run the project and click the form.
	
	General Information About the Process
	-------------------------------------
	
	If the function succeeds, the return value is the instance handle of the
	application that was run. If there was an error, the return value is less than
	or equal to 32.
	
	The file specified by the lpszFile parameter can be a document file or an
	executable file. If it is a document file, this function opens or prints it
	depending on the value of the lpszOp parameter. If it is an executable file,
	this function opens it even if the lpszOp specifies "PRINT."
	
	REFERENCES
	==========
	
	"Programmer's Reference, Volume 2: Functions" of the Microsoft Windows Software
	Development Kit (SDK), pages 901-904
	
	Additional query words: kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbVBp400 KBWIN32SDK KBAPI
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
