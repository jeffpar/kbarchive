---
layout: page
title: "Q185883: HOWTO: Extract an Icon from a Windows Program"
permalink: /kb/185/Q185883/
---

## Q185883: HOWTO: Extract an Icon from a Windows Program

{% raw %}

	Article: Q185883
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
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
	
	The sample code given below demonstrates how to extract an icon from a 32-bit
	Microsoft Windows program or DLL file.
	
	MORE INFORMATION
	================
	
	The sample program displays the icon of an application in a picture box. It also
	shows how to cause the image to remain by using the AutoRedraw property of the
	picture box.
	
	Step-by-Step Example
	--------------------
	
	1. Start Visual Basic, or from the File menu, click New Project (ALT+F, N) if
	  Visual Basic is already running. Form1 is created by default.
	
	2. Add a Command button and a Picture box control to Form1. Adjust the size of
	  Picture1 so that a 32*32 icon fits inside the picture box.
	
	3. Add the following code to the General Declarations section of Form1:
	
	        Option Explicit
	        Private Const MAX_PATH = 260
	
	        Private Declare Function GetSystemDirectory Lib "kernel32" Alias _
	        "GetSystemDirectoryA" (ByVal lpBuffer As String, _
	                               ByVal nSize As Long) As Long
	
	        Private Declare Function ExtractIcon Lib "shell32.dll" Alias _
	        "ExtractIconA" (ByVal hInst As Long, _
	                        ByVal lpszExeFileName As String, _
	                        ByVal nIconIndex As Long) As Long
	
	        Private Declare Function DrawIcon Lib "user32" (ByVal hdc As Long, _
	        ByVal x As Long, ByVal y As Long, ByVal hIcon As Long) As Long
	
	        Dim path$, nIcon As Long
	
	        Private Sub Command1_Click()
	            Dim hIcon As Long
	
	            hIcon = ExtractIcon(App.hInstance, path$, nIcon)
	            Set Picture1.Picture = LoadPicture("") ' Clear the picture box
	            Picture1.AutoRedraw = True
	            Call DrawIcon(Picture1.hdc, 0, 0, hIcon)
	            Picture1.AutoRedraw = False
	            Picture1.Refresh
	            nIcon = nIcon + 1
	        End Sub
	
	        Private Sub Form_Load()
	        ' Store the full path to the file containing the icon(s).
	            path$ = Space$(MAX_PATH)
	            Call GetSystemDirectory(path$, MAX_PATH)
	            path$ = Trim$(path$) ' Trim trailing blanks & Null terminator
	            path$ = Left$(path$, Len(path$) - 1) & "\Shell32.dll"
	            nIcon = 0
	        End Sub
	
	4. Press F5 to run the program. Click Command1 to copy the first icon stored in
	  Shell32.dll to Picture1. Each subsequent click of Command1 displays a
	  different icon.
	
	REFERENCES
	==========
	
	For more information, please see the following Web page on the Microsoft
	Developer Network (MSDN):
	
	  http://msdn.microsoft.com/library/default.asp?URL=/library/psdk/shellcc/shell/functions/shgetfileinfo.htm
	
	Additional query words: ExtractIcon
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
