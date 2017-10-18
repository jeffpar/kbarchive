---
layout: page
title: "Q187912: HOWTO: Pass a String Between Visual Basic and Your C DLL"
permalink: kb/187/Q187912/
---

## Q187912: HOWTO: Pass a String Between Visual Basic and Your C DLL

	Article: Q187912
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0; winnt:5.0
	Operating System(s): 
	Keyword(s): kbAPI kbDLL kbVBp kbVBp500 kbVBp600 kbVC500 kbGrpDSO kbDSupport
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When creating a C dynamic-link library (DLL) for use with Visual Basic, it is
	important to remember that C and Visual Basic treat strings differently. You
	must take every precaution to ensure that all strings are passed correctly;
	otherwise, a fatal error may occur. This article will show you how to write a C
	DLL that takes a string as a parameter to a function, and how to call the
	exported function from a Visual Basic application.
	
	MORE INFORMATION
	================
	
	In order to develop your C DLL, it is important to know how Visual Basic handles
	strings internally in order to know how they will be passed to your DLL
	functions. Most C functions expect a string to be a null-terminated, ASCII
	character array. But Visual Basic uses a type-safe Automation string called a
	BSTR. For the Win32 platform, a BSTR is a long pointer to an allocated memory
	structure containing a Unicode character string and a 32- bit integer prefix
	that stores the length of the string.
	
	You can ignored most of this difference, because Visual Basic will automatically
	convert any Unicode BSTRs to ASCII before passing them to an external function.
	The problem, however, is with the parameter itself. By default, Visual Basic
	passes all variables by reference, including strings. Because a BSTR variable is
	a pointer to a string, when Visual Basic passes it by reference it is actually
	passing a pointer to a pointer to a string. Most C functions simply expect a
	pointer to a string (such as LPSTR).
	
	Create Your C DLL: Step-by-Step Example
	---------------------------------------
	
	1. Open Visual C++ 5.0 and click New on the File menu. On the Projects tab,
	  select "Win32 Dynamic-Link Library" and name the project "StrSamp."
	
	2. Once again, click New on the File menu, and select "C++ Source File." On the
	  Files tab, name the file "StrSamp.c," and press OK.
	
	3. Repeat step 2 and this time choose "Text File" as the file type. Name the
	  file "StrSamp.def," and press OK.
	
	4. Next, add the following code to "StrSamp.c:"
	
	        #include <windows.h>
	
	        void __stdcall DisplayStringByVal(LPCSTR pszString)
	        {
	           //pszString is a pointer to a string
	           MessageBox(NULL, pszString, "Display String ByVal",
	                     MB_OK | MB_ICONINFORMATION);
	        }
	
	        void __stdcall DisplayStringByRef(LPCSTR* ppszString)
	        {
	           //ppszSting is a pointer to a pointer to a string
	           MessageBox(NULL, *ppszString, "Display String ByRef",
	                     MB_OK | MB_ICONINFORMATION);
	        }
	
	           void __stdcall FillString(LPSTR pszString, LONG cSize)
	        {
	           // Create a temp buffer with our string
	           char buffer[] = "Hello from the C DLL!";
	
	           // Copy our temp string to pszString
	           // but check the size to make sure we have a buffer
	           // big enough to hold the entire string.
	           if (cSize > strlen(buffer))
	              strcpy(pszString, buffer);
	        }
	
	        int __stdcall InStrRev(LPCSTR pszString, short iChar)
	        {
	           // This function is similar to Visual Basic's InStr function
	           // except that it searches for the given ASCII character from
	           // right to left, returning the character position of the
	           // last occurrence (rather than the first) of the character
	           // in the string.
	           char* pszTmp;
	           int nRet = 0;
	
	           // Scan for iChar in pszString backwards
	           pszTmp = strrchr(pszString, (int)iChar);
	           if(pszTmp != NULL)
	              nRet = pszTmp - pszString + 1;
	
	           return nRet;
	        }
	
	5. To make the functions exportable, add the following to "StrSamp.def:"
	
	        LIBRARY StrSamp
	        DESCRIPTION 'Microsoft KB Sample DLL'
	        EXPORTS
	           DisplayStringByVal
	           DisplayStringByRef
	           FillString
	           InStrRev
	
	6. Compile your DLL from the Build menu. When complete, copy the new DLL to your
	  Visual Basic directory for testing.
	
	The VB Test Application: Step-by-Step Example
	---------------------------------------------
	
	1. Create a Standard Project in Visual Basic and name it "StrTest." Form1 is
	  created by default.
	
	2. Add three CommandButtons to Form1.
	
	3. In the code window for Form1, add the following to the General Declarations
	  section:
	
	        Option Explicit
	
	        Private Declare Sub DisplayStringByRef Lib "StrSamp.dll" _
	           (sMyString As String)
	        Private Declare Sub DisplayStringByVal Lib "StrSamp.dll" _
	           (ByVal sMyString As String)
	        Private Declare Sub FillString Lib "StrSamp.dll" _
	           (ByVal sMyString As String, ByVal cBufferSize As Long)
	        Private Declare Function InStrRev Lib "StrSamp.dll" _
	           (ByVal sMyString As String, ByVal iChar As Integer) _
	           As Long
	
	Note that most of the strings are declared ByVal. This does not mean that you are
	passing these strings by value; rather, you are passing the value of the BSTR
	variable by value (remember that a BSTR variable is a pointer to a string). So
	the ByVal keyword has the effect of passing a long pointer to a string (LPSTR),
	just what the C functions expect.
	
	4. Add the following code to the click events for each of the CommandButtons:
	
	        Private Sub Command1_Click()
	           Dim sTestString1 As String
	           Dim sTestString2 As String
	
	           sTestString1 = "This is my string passed to the dll by value."
	           DisplayStringByVal sTestString1
	
	           sTestString2 = "This is my string passed to the dll by reference."
	           DisplayStringByRef sTestString2
	
	        End Sub
	
	        Private Sub Command2_Click()
	           Dim sFillTest As String
	
	           sFillTest = Space$(260)
	           FillString sFillTest, 260
	           MsgBox Trim$(sFillTest), vbInformation, "Fill String"
	        End Sub
	
	        Private Sub Command3_Click()
	           Dim sPathString As String
	           Dim sMsg As String
	           Dim lCharPosition As Long
	
	           sPathString = "C:\My Documents\Temp\Item.txt"
	           lCharPosition = InStrRev(sPathString, Asc("\"))
	
	           If CBool(lCharPosition) Then
	              sMsg = "The file '" & Mid$(sPathString, lCharPosition + 1)
	              sMsg = sMsg & "' is at this location:" & vbCrLf & vbCrLf
	              sMsg = sMsg & Left$(sPathString, lCharPosition - 1)
	              MsgBox sMsg, vbInformation, "InStrRev"
	           Else
	              MsgBox "Cannot find '/' in " & sPathString, vbCritical
	          End If
	
	        End Sub
	
	5. Press the F5 key to run the Visual Basic project in the IDE.
	
	  NOTE: If you receive an error message, it may be because Visual Basic cannot
	  find your DLL. Make sure you have copied it to the Visual Basic directory
	  before you run your test application.
	
	REFERENCES
	==========
	
	For detailed information on how to create a C DLL and use it in Visual Basic,
	please see the following article:
	
	  "DLLs for Beginners" in the Microsoft Developer Network (MSDN) Library
	  "VB5DLL.DOC" located on the Visual Basic 5.0 CD-ROM in the "Tools\Docs"
	  directory.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q142840 : Visual Basic Requirements for Exported DLL Functions
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Richard R. Taylor, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbDLL kbVBp kbVBp500 kbVBp600 kbVC500 kbGrpDSO kbDSupport 
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVC500 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS:5.0,6.0; winnt:5.0
	Issue type        : kbhowto
	
	=============================================================================
	
