---
layout: page
title: "Q178755: HOWTO: Enumerate the Values of a Registry Key"
permalink: /kb/178/Q178755/
---

## Q178755: HOWTO: Enumerate the Values of a Registry Key

	Article: Q178755
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbDSupport
	Last Modified: 12-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The RegEnumValue function allows you to enumerate the values of a registry key.
	Program settings are commonly stored in the registry. Enumerating through a
	registry key enables you to read the registry settings of a program so that you
	can restore the settings the next time you start the program.
	
	This article shows you how to use the RegEnumValue function to enumerate the
	values of a registry key.
	
	MORE INFORMATION
	================
	
	The following is the Visual Basic declaration statement for RegEnumValue:
	
	     Private Declare Function RegEnumValue Lib "advapi32.dll" _
	                     Alias "RegEnumValueA" _
	                     (ByVal hKey As Long, _
	                     ByVal dwIndex As Long, _
	                     ByVal lpValueName As String, _
	                     lpcbValueName As Long, _
	                     ByVal lpReserved As Long, _
	                     lpType As Long, _
	                     lpData As Any, _
	                     lpcbData As Long) As Long
	
	NOTE: The function declaration listed in the API text viewer for the RegEnumValue
	function is incorrect. The fifth parameter, lpReserved, should be passed by
	value as illustrated above. For more information, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q173009 PRB: Runtime Error 87 Using RegEnumValue Function
	
	The next section illustrates how to create a sample project that displays the
	values of a specified registry key in a list box.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a CommandButton and a ListBox control to Form1. Because many of the
	  entries are lengthy, you should extend the ListBox across the full width of
	  the form. The height of the ListBox should be several lines.
	
	3. Paste the following code into the code window of Form1:
	
	        Option Explicit
	
	        Private Declare Function RegOpenKeyEx Lib "advapi32.dll" _
	            Alias "RegOpenKeyExA" _
	            (ByVal hKey As Long, _
	            ByVal lpSubKey As String, _
	            ByVal ulOptions As Long, _
	            ByVal samDesired As Long, phkResult As Long) As Long
	
	        Private Declare Function RegEnumValue Lib "advapi32.dll" _
	            Alias "RegEnumValueA" _
	            (ByVal hKey As Long, _
	            ByVal dwIndex As Long, _
	            ByVal lpValueName As String, _
	            lpcbValueName As Long, _
	            ByVal lpReserved As Long, _
	            lpType As Long, _
	            lpData As Any, _
	            lpcbData As Long) As Long
	
	        Private Declare Function RegCloseKey Lib "advapi32.dll" _
	            (ByVal hKey As Long) As Long
	
	        Const HKEY_CLASSES_ROOT = &H80000000
	        Const HKEY_CURRENT_USER = &H80000001
	        Const HKEY_LOCAL_MACHINE = &H80000002
	        Const HKEY_USERS = &H80000003
	
	        Const ERROR_SUCCESS = 0&
	
	        Const SYNCHRONIZE = &H100000
	        Const STANDARD_RIGHTS_READ = &H20000
	        Const STANDARD_RIGHTS_WRITE = &H20000
	        Const STANDARD_RIGHTS_EXECUTE = &H20000
	        Const STANDARD_RIGHTS_REQUIRED = &HF0000
	        Const STANDARD_RIGHTS_ALL = &H1F0000
	        Const KEY_QUERY_VALUE = &H1
	        Const KEY_SET_VALUE = &H2
	        Const KEY_CREATE_SUB_KEY = &H4
	        Const KEY_ENUMERATE_SUB_KEYS = &H8
	        Const KEY_NOTIFY = &H10
	        Const KEY_CREATE_LINK = &H20
	        Const KEY_READ = ((STANDARD_RIGHTS_READ Or _
	                          KEY_QUERY_VALUE Or _
	                          KEY_ENUMERATE_SUB_KEYS Or _
	                          KEY_NOTIFY) And _
	                          (Not SYNCHRONIZE))
	
	        Const REG_DWORD = 4
	        Const REG_BINARY = 3
	        Const REG_SZ = 1
	
	        Private Sub Command1_Click()
	           Dim lngKeyHandle As Long
	           Dim lngResult As Long
	           Dim lngCurIdx As Long
	           Dim strValue As String
	           Dim lngValueLen As Long
	           Dim lngData As Long
	           Dim lngDataLen As Long
	           Dim strResult As String
	
	           lngResult = RegOpenKeyEx(HKEY_LOCAL_MACHINE, _
	                   "SOFTWARE\Microsoft\Windows\CurrentVersion\SharedDlls", _
	                    0&, _
	                    KEY_READ, _
	                    lngKeyHandle)
	
	           If lngResult <> ERROR_SUCCESS Then
	               MsgBox "Cannot open key"
	               Exit Sub
	           End If
	
	           lngCurIdx = 0
	           Do
	              lngValueLen = 2000
	              strValue = String(lngValueLen, 0)
	              lngDataLen = 2000
	
	              lngResult = RegEnumValue(lngKeyHandle, _
	                                       lngCurIdx, _
	                                       ByVal strValue, _
	                                       lngValueLen, _
	                                       0&, _
	                                       REG_DWORD, _
	                                       ByVal lngData, _
	                                       lngDataLen)
	              lngCurIdx = lngCurIdx + 1
	
	           If lngResult = ERROR_SUCCESS Then
	              strResult = lngCurIdx & ": " & Left(strValue, lngValueLen)
	              List1.AddItem strResult
	           End If
	
	           Loop While lngResult = ERROR_SUCCESS
	           Call RegCloseKey(lngKeyHandle)
	        End Sub
	
	4. On the Start menu, click Run, or press the F5 key, to start the program.
	  Click CommandButton. All the values for the following registry key appear in
	  the list box:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\SharedDlls
	
	REFERENCES
	==========
	
	For additional information about using Visual Basic to manipulate registry
	settings, click the article numbers below to view the articles in the Microsoft
	Knowledge Base:
	
	  Q145679 HOWTO: Use the Registry API to Save and Retrieve Settings
	
	  Q267908 HOWTO: Enumerate the Subkeys of an Open Registry Key
	
	Additional query words: win32 api winapi kbRegistry
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
