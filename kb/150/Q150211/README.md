---
layout: page
title: "Q150211: HOWTO: Determine if a Program Is Running as a DLL or an EXE"
permalink: /kb/150/Q150211/
---

## Q150211: HOWTO: Determine if a Program Is Running as a DLL or an EXE

	Article: Q150211
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to determine whether Visual Basic is presently
	running an EXE or DLL program. This is useful to know if both an EXE and a DLL
	version of a program have been created, and different actions need to take place
	based on which version is loaded.
	
	MORE INFORMATION
	================
	
	There are several ways to determine whether a running program was loaded as an
	EXE or DLL.
	
	Method 1 - Place the information in one of the resource stamps
	--------------------------------------------------------------
	
	Choose the Options button when making the EXE or DLL. In the Version Information
	section, select File Description, and type in the type of file to be compiled.
	To test this in the running program, enter the code below to see a MsgBox with
	the correct type:
	
	     If App.FileDescription = "EXE" Then
	        MsgBox "I am an EXE"
	     ElseIf App.FileDescription = "DLL" Then
	        MsgBox "I am a DLL"
	     End If
	
	Method 2 - Conditional Compilation
	----------------------------------
	
	If the version information fields are being used, use Conditional Compilation to
	determine if a program is a DLL or an EXE, as in the following code:
	
	     #If EXE Then
	        Msgbox "I am an EXE"
	     #Else
	        MsgBox "I am a DLL"
	     #EndIf
	
	Before compiling the EXE, from the Tools menu, select Options, select Advanced
	Tab, and type the following in the Conditional Compilation Arguments field:
	
	     EXE=1
	
	If a DLL is being compiled, type the following in the Conditional Compilation
	Arguments field:
	
	     EXE=0
	
	In Method 2, code that is not required for a DLL or an EXE is not compiled. This
	is significant if a DLL and an EXE version of a program need to behave
	differently.
	
	Method 3 - Use the Windows API to dynamically determine the file extension
	--------------------------------------------------------------------------
	
	If the Instance handle of the program is passed to the GetModuleFileName API
	function, the full path is returned to the program. Microsoft Visual Basic
	exposes the hInstance as a property of the App object. For example:
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. In the General Declarations section of Form1, place the following:
	
	        Private Declare Function GetModuleFileName Lib "kernel32" Alias _
	        "GetModuleFileNameA" (ByVal hModule As Long, _
	        ByVal lpFileName As String, ByVal nSize As Long) As Long
	
	        Option Compare Text
	
	3. In the Click event of Form1, place the following:
	
	        Private Sub Form_Click()
	           Dim sFilePath As String * 255
	           Dim sVarFilePath As String
	           Dim sFileExt As String
	
	           GetModuleFileName App.hInstance, sFilePath, Len(sFilePath)
	           'Trim out the trailing characters
	
	           sVarFilePath = Trim(sFilePath)
	
	           'Capture the file extension
	           sFileExt = Mid(sVarFilePath, Len(sVarFilePath) - 3, 3)
	
	           'Make the comparison
	           If sFileExt = "EXE" Then
	              MsgBox "I am an EXE"
	           Else
	              MsgBox "I am a DLL"
	           End If
	
	           End Sub
	
	4. Compile the program as an EXE. Click on the form, and it correctly informs
	  the user whether it was loaded as an EXE or a DLL.
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport KBWIN32SDK KBAPI
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Issue type        : kbhowto
	
	=============================================================================
	
