---
layout: page
title: "Q160042: HOWTO: Retrieve Language and Code Page id Using VerQueryValue"
permalink: /kb/160/Q160042/
---

## Q160042: HOWTO: Retrieve Language and Code Page id Using VerQueryValue

	Article: Q160042
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using the VerQueryValue API, the language identifier and the character set
	identifier can be retrieved from the version-information resource within a file.
	You can concatenate these two identifiers to form a hexadecimal string and pass
	the string to another VerQueryValue call to retrieve the following version
	information: CompanyName, FileDescription, FileVersion, InternalName,
	LegalCopyright, OriginalFileName, ProductName, and ProductVersion.
	
	This article presents a Visual Basic 4.0 32-bit sample application that retrieves
	the language identifier, the character set identifier, and the information
	mentioned above for the Windows system file, gdi32.dll.
	
	This article also supplements the following Microsoft Knowledge Base article that
	extracts a VS_FIXEDFILEINFO structure from a file's version- information
	resource:
	
	  Q139491 How To Use Functions in VERSION.DLL - A 32-bit Sample App
	
	MORE INFORMATION
	================
	
	This section shows you how to create a sample project that displays file
	information for the system file gdi32.dll in a list box by using the
	VerQueryValue function. The section assumes you are familiar with using Visual
	Basic to access the Windows API functions:
	
	To Create The Sample Project
	----------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a command button and a listbox control to the Form1 form:
	
	3. Copy the following code to the Code window of the Form1 form:
	
	        Option Explicit
	        Private Declare Function GetFileVersionInfo Lib "Version.dll" _
	           Alias "GetFileVersionInfoA" _
	           (ByVal lptstrFilename As String, _
	           ByVal dwhandle As Long, _
	           ByVal dwlen As Long, _
	           lpData As Any) As Long
	
	        Private Declare Function GetFileVersionInfoSize Lib "Version.dll" _
	           Alias "GetFileVersionInfoSizeA" _
	           (ByVal lptstrFilename As String, _
	           lpdwHandle As Long) As Long
	
	        Private Declare Function VerQueryValue Lib "Version.dll" _
	           Alias "VerQueryValueA" _
	           (pBlock As Any, _
	           ByVal lpSubBlock As String, _
	           lplpBuffer As Any, _
	           puLen As Long) As Long
	
	        Private Declare Function GetSystemDirectory Lib "kernel32" _
	           Alias "GetSystemDirectoryA" _
	           (ByVal Path As String, _
	           ByVal cbBytes As Long) As Long
	
	        Private Declare Sub MoveMemory Lib "kernel32" _
	           Alias "RtlMoveMemory" _
	           (dest As Any, _
	           ByVal Source As Long, _
	           ByVal Length As Long)
	
	        Private Declare Function lstrcpy Lib "kernel32" _
	           Alias "lstrcpyA" _
	           (ByVal lpString1 As String, _
	           ByVal lpString2 As Long) As Long
	
	        Private Sub Command1_Click()
	           Dim Buffer As String
	           Dim rc As Long
	           Dim FullFileName As String
	           '*** We will check the FileDescription of the gdi32.dll****
	           Buffer = String(255, 0)
	           rc = GetSystemDirectory(Buffer, Len(Buffer))
	           Buffer = LCase$(Mid$(Buffer, 1, InStr(Buffer, Chr(0)) - 1))
	           FullFileName = Buffer & "\gdi32.dll"
	
	           Dim lBufferLen As Long, lDummy As Long
	           '*** Get size ****
	           lBufferLen = GetFileVersionInfoSize(FullFileName, lDummy)
	           If lBufferLen < 1 Then
	              MsgBox "No Version Info available!"
	              Exit Sub
	           End If
	
	           Dim sBuffer()  As Byte
	           ReDim sBuffer(lBufferLen)
	           rc = GetFileVersionInfo(FullFileName, _
	                                   0&, _
	                                   lBufferLen, _
	                                   sBuffer(0))
	           If rc = 0 Then
	              MsgBox "GetFileVersionInfo failed."
	              Exit Sub
	           End If
	
	           Dim lVerPointer As Long
	
	           rc = VerQueryValue(sBuffer(0), _
	                             "\VarFileInfo\Translation", _
	                             lVerPointer, _
	                             lBufferLen)
	
	           If rc = 0 Then
	              MsgBox "VerQueryValue failed."
	              Exit Sub
	           End If
	           'lVerPointer is a pointer to four 4 bytes of Hex number,
	           'first two bytes are language id, and last two bytes are code
	           'page. However, Lang_Charset_String needs a  string of
	           '4 hex digits, the first two characters correspond to the
	           'language id and last two the last two character correspond
	           'to the code page id.
	
	           Dim bytebuffer(255) As Byte
	           MoveMemory bytebuffer(0), lVerPointer, lBufferLen
	           Dim Lang_Charset_String As String
	           Dim HexNumber As Long
	
	           HexNumber = bytebuffer(2) + bytebuffer(3) * &H100 + _
	           bytebuffer(0) * &H10000 + bytebuffer(1) * &H1000000
	           Lang_Charset_String = Hex(HexNumber)
	           'now we change the order of the language id and code page
	           'and convert it into a string representation.
	           'For example, it may look like 040904E4
	           'Or to pull it all apart:
	           '04------        = SUBLANG_ENGLISH_USA
	           '--09----        = LANG_ENGLISH
	           ' ----04E4 = 1252 = Codepage for Windows:Multilingual
	
	           Do While Len(Lang_Charset_String) < 8
	              Lang_Charset_String = "0" & Lang_Charset_String
	           Loop
	
	           List1.Clear
	
	           Dim strVersionInfo(7) As String
	           strVersionInfo(0) = "CompanyName"
	           strVersionInfo(1) = "FileDescription"
	           strVersionInfo(2) = "FileVersion"
	           strVersionInfo(3) = "InternalName"
	           strVersionInfo(4) = "LegalCopyright"
	           strVersionInfo(5) = "OriginalFileName"
	           strVersionInfo(6) = "ProductName"
	           strVersionInfo(7) = "ProductVersion"
	
	           Dim i As Integer
	           Dim strTemp As String
	           For i = 0 To 7
	              Buffer = String(255, 0)
	              strTemp = "\StringFileInfo\" & Lang_Charset_String _
	              & "\" & strVersionInfo(i)
	              rc = VerQueryValue(sBuffer(0), strTemp, _
	              lVerPointer, lBufferLen)
	
	              If rc = 0 Then
	                 MsgBox "VerQueryValue failed at" & i
	              Exit Sub
	              End If
	
	              lstrcpy Buffer, lVerPointer
	              Buffer = Mid$(Buffer, 1, InStr(Buffer, Chr(0)) - 1)
	              List1.AddItem strVersionInfo(i) & ": " & Buffer
	           Next i
	        End Sub
	
	4. On the Run menu, select Start, or press the F5 key to start the program.
	  Click the Command1 command button. The file information for gdi32.dll appears
	  in the text box.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Wei Hua, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
