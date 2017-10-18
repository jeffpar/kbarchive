---
layout: page
title: "Q165942: HOWTO: Write Data to a File Using WriteFile API"
permalink: kb/165/Q165942/
---

## Q165942: HOWTO: Write Data to a File Using WriteFile API

	Article: Q165942
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
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
	
	The Win32 API allows binary files to be opened and written using the CreateFile,
	ReadFile, and WriteFile APIs. These functions offer increased flexibility to
	write and read from files. This article demonstrates a technique to write large
	amounts of data, in the form of a large array, to a binary file all at once
	instead of element by element.
	
	MORE INFORMATION
	================
	
	1. Start a new Standard EXE project. Add MODULE1.BAS.
	
	2. Type the following code into MODULE1.BAS:
	
	        Public Const GENERIC_WRITE = &H40000000
	        Public Const GENERIC_READ = &H80000000
	        Const FILE_ATTRIBUTE_NORMAL = &H80
	        Const CREATE_ALWAYS = 2
	        Const OPEN_ALWAYS = 4
	        Const INVALID_HANDLE_VALUE= -1
	        Const FILE_NAME = "TEST.DAT"     'This can be any file that does not
	                                         'currently exist.
	
	        Type MyType
	           value As Integer
	        End Type
	
	        Declare Function ReadFile Lib "kernel32" (ByVal hFile As Long, _
	           lpBuffer As Any, ByVal nNumberOfBytesToRead As Long, _
	           lpNumberOfBytesRead As Long, ByVal lpOverlapped As Long) As Long
	
	        Private Declare Function CloseHandle Lib "kernel32" ( _
	          ByVal hObject As Long) As Long
	
	        Private Declare Function WriteFile Lib "kernel32" ( _
	          ByVal hFile As Long, lpBuffer As Any, _
	          ByVal nNumberOfBytesToWrite As Long, _
	          lpNumberOfBytesWritten As Long, ByVal lpOverlapped As Long) As Long
	
	        Private Declare Function CreateFile Lib "kernel32" _
	          Alias "CreateFileA" (ByVal lpFileName As String, _
	          ByVal dwDesiredAccess As Long, ByVal dwShareMode As Long, _
	          ByVal lpSecurityAttributes As Long,  _
	          ByVal dwCreationDisposition As Long, _
	          ByVal dwFlagsAndAttributes As Long, ByVal hTemplateFile As Long) _
	          As Long
	
	        Declare Function FlushFileBuffers Lib "kernel32" ( _
	          ByVal hFile As Long) As Long
	
	        Sub fillArray(anArray() As MyType)
	           Dim x As Integer
	
	           For x = 0 To UBound(anArray)
	              anArray(x).value = x
	           Next x
	        End Sub
	
	        Sub Main()
	           Dim fHandle As Integer
	           Dim T(1000) As MyType            'Define a large array of data
	           Dim S(1000) As MyType            'Define another large array
	
	           fillArray T                      'Fill the array with some values
	           writearray FILE_NAME, T          'Write the entire array to disk
	           readArray FILE_NAME, S           'Read into a different array
	        End Sub
	
	        Sub readArray(Fname As String, anArray() As MyType)
	           Dim fHandle As Long
	           Dim fSuccess As Long
	           Dim sTest As String
	           Dim lBytesRead As Long
	           Dim BytesToRead As Long
	
	           'Get size of data to write
	           BytesToRead = (UBound(anArray) + 1) * LenB(anArray(0))
	           'Get a handle to a file Fname.
	           fHandle = CreateFile(Fname, GENERIC_WRITE Or GENERIC_READ, _
	                                0, 0, OPEN_ALWAYS, FILE_ATTRIBUTE_NORMAL, 0)
	           'Here you should test to see if you get a file handle or not.
	           'CreateFile returns INVALID_HANDLE_VALUE if it fails.
	           If fhandle <> INVALID_HANDLE_VALUE Then
	              fSuccess = ReadFile(fHandle, anArray(LBound(anArray)), _
	                                  BytesToRead, lBytesRead, 0)
	              'ReadFile returns a non-zero value if it is successful.
	              'Now you just close the file.
	              fSuccess = CloseHandle(fHandle)
	           End If
	        End Sub
	
	        Sub writearray(Fname As String, anArray() As MyType)
	           Dim fHandle As Long
	           Dim fSuccess As Long
	           Dim sTest As String
	           Dim lBytesWritten As Long
	           Dim BytesToWrite As Long
	           'Get the length of data to write
	           BytesToWrite = (UBound(anArray) + 1) * LenB(anArray(0))
	           'Get a handle to a file Fname.
	           fHandle = CreateFile(Fname, GENERIC_WRITE Or GENERIC_READ, _
	                                0, 0, OPEN_ALWAYS, FILE_ATTRIBUTE_NORMAL, 0)
	           'Here you should test to see if you get a file handle or not.
	           'CreateFile returns INVALID_HANDLE_VALUE if it fails.
	           If fhandle <> INVALID_HANDLE_VALUE Then
	              fSuccess = WriteFile(fHandle, anArray(LBound(anArray)), _
	                                   BytesToWrite, lBytesWritten, 0)
	              'Check to see if you were successful writing the data
	              If fSuccess <> 0 Then
	                 'Flush the file buffers to force writing of the data.
	                 fSuccess = FlushFileBuffers(fHandle)
	                 'Close the file.
	                 fSuccess = CloseHandle(fHandle)
	              End If
	           End If
	        End Sub
	
	REFERENCES
	==========
	
	Microsoft Win32 SDK
	
	Win32 Programmers Reference
	
	  ReadFile
	  CreateFile
	  WriteFile
	  FlushFileBuffers
	  CloseFile
	
	
	Additional query words: kbVBp kbdsd kbDSupport KBWIN32SDK KBAPI
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
