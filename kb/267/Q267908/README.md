---
layout: page
title: "Q267908: HOWTO: Enumerate the Subkeys of an Open Registry Key"
permalink: kb/267/Q267908/
---

## Q267908: HOWTO: Enumerate the Subkeys of an Open Registry Key

	Article: Q267908
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbRegistry kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbCodeSnippet
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides an example of how to use API functions to programmatically
	find keys in the system registry. The sample demonstrates searches of root
	subkeys for specified text strings. An option to perform case-sensitive text
	searches is presented.
	
	The example uses the RegEnumKeyEx API function to enumerate subkeys of a
	specified open registry key. The function retrieves information about one subkey
	each time it is called.
	
	MORE INFORMATION
	================
	
	The following steps create a project that displays the subkeys of an open
	registry key in a list box. You can use search criteria to isolate specific keys
	to be returned.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new project Standard EXE in Visual Basic. Form1 is created by
	  default.
	
	2. Set the BorderStyle property of Form1 to 4 - FixedToolWindow.
	
	3. Add the following controls to Form1: three Labels, two ComboBoxs, one
	  TextBox, two CommandButtons, one CheckBox, and one ListBox.
	
	4. Set the Style property for each ComboBox to 2 - Dropdown List.
	
	5. Add the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  Private Type FILETIME
	      intLow As Long
	      intHigh As Long
	  End Type
	
	  Private Declare Function RegOpenKeyEx Lib "advapi32.dll" _
	      Alias "RegOpenKeyExA" _
	      (ByVal hKey As Long, _
	      ByVal lpSubKey As String, _
	      ByVal ulOptions As Long, _
	      ByVal samDesired As Long, phkResult As Long) As Long
	
	  Private Declare Function RegEnumKeyEx Lib "advapi32.dll" _
	      Alias "RegEnumKeyExA" _
	      (ByVal hKey As Long, _
	      ByVal dwIndex As Long, _
	      ByVal lpName As String, _
	      lpcbName As Long, _
	      ByVal lpReserved As Long, _
	      ByVal lpClass As String, _
	      lpcbClass As Long, _
	      lpftLastWriteTime As FILETIME) As Long
	
	  Private Declare Function RegCloseKey Lib "advapi32.dll" _
	      (ByVal hKey As Long) As Long
	
	  Const HKEY_CLASSES_ROOT = &H80000000
	  Const HKEY_CURRENT_USER = &H80000001
	  Const HKEY_LOCAL_MACHINE = &H80000002
	  Const HKEY_USERS = &H80000003
	
	  Const ERROR_SUCCESS = 0&
	
	  Const SYNCHRONIZE = &H100000
	  Const STANDARD_RIGHTS_READ = &H20000
	  Const KEY_QUERY_VALUE = &H1
	  Const KEY_ENUMERATE_SUB_KEYS = &H8
	  Const KEY_NOTIFY = &H10
	  Const KEY_READ = ((STANDARD_RIGHTS_READ Or _
	                    KEY_QUERY_VALUE Or _
	                    KEY_ENUMERATE_SUB_KEYS Or _
	                    KEY_NOTIFY) And _
	                    (Not SYNCHRONIZE))
	
	  Dim strBranch As Long
	
	  Private Sub Combo1_Click()
	      ' Set the branch to search depending on
	      ' what is selected in the ComboBox
	      Select Case Combo1.ListIndex
	          Case 0
	              strBranch = HKEY_CLASSES_ROOT
	          Case 1
	              strBranch = HKEY_CURRENT_USER
	          Case 2
	              strBranch = HKEY_LOCAL_MACHINE
	          Case Else
	              strBranch = HKEY_USERS
	      End Select
	  End Sub
	
	  Private Sub Command1_Click()
	      Dim i As Integer
	      Dim lngKeyHandle As Long
	      Dim lngResult As Long
	      Dim lngCurIdx As Long
	      Dim strValue As String
	      Dim lngValueLen As Long
	      Dim strClass As String
	      Dim lngClassLen As Long
	      Dim strResult As String
	      Dim lngTime As FILETIME
	      Dim strSearch As String
	      Dim intSearchLen As Integer
	      Dim blnMatch As Boolean
	      
	      i = 0
	      ' Clear the current results
	      List1.Clear
	      ' Assign the new string to search for
	      strSearch = Text1.Text
	      intSearchLen = Len(strSearch)
	      
	      ' Open the Root Branch to search
	      lngResult = RegOpenKeyEx(strBranch, _
	              "", _
	               0&, _
	               KEY_READ, _
	               lngKeyHandle)
	      
	      If lngResult <> ERROR_SUCCESS Then
	          MsgBox "Cannot open key.", , "Search Registry Keys"
	      Else
	      ' If the Root branch can be opened, disable
	      ' the buttons and begin the search
	          Command1.Enabled = False
	          Command2.Enabled = False
	          List1.Enabled = False
	          Form1.MousePointer = 11
	          
	          lngCurIdx = 0
	          Do
	              lngValueLen = 2000
	              strValue = String(lngValueLen, 0)
	              lngClassLen = 2000
	              strClass = String(lngClassLen, 0)
	          
	              ' Enumerate all the sub keys
	              lngResult = RegEnumKeyEx(lngKeyHandle, _
	                   lngCurIdx, _
	                   ByVal strValue, _
	                   lngValueLen, _
	                   0&, _
	                   ByVal strClass, _
	                   lngClassLen, _
	                   lngTime)
	             
	              ' Increment the index of found keys
	              lngCurIdx = lngCurIdx + 1
	          
	              If lngResult = ERROR_SUCCESS Then
	                  ' Trim the current key to its actual length
	                  strResult = Left(strValue, lngValueLen)
	                  
	                  ' Eliminate case if the search is insensitive
	                  blnMatch = False
	                  strValue = strResult
	                  If Check1.Value = 0 Then
	                      strResult = LCase(strResult)
	                      strSearch = LCase(strSearch)
	                  End If
	
	                  ' Compare strings based upon search type
	                  Select Case Combo2.ListIndex
	                      Case 0
	                          ' Check if any portion of the search string is found.
	                          If InStr(strResult, strSearch) Then blnMatch = True
	                      Case 1
	                          ' Check if an exact match is found.
	                          If strResult = strSearch Then blnMatch = True
	                      Case 2
	                          ' Check if the search string matches the
	                          ' left portion of the key string.
	                          If Left(strResult, intSearchLen) = strSearch Then blnMatch = True
	                      Case Else
	                          ' Check if the search string matches the 
	                          ' right portion of the key string.
	                          If Right(strResult, intSearchLen) = strSearch Then blnMatch = True
	                  End Select
	                  
	                  ' Populate the list with keys that match
	                  ' the search criteria
	                  If blnMatch Then
	                      i = i + 1
	                      List1.AddItem strValue
	                  End If
	              End If
	          
	          ' Keep looking for more keys
	          Loop While lngResult = ERROR_SUCCESS
	          ' Close the Root Branch
	          lngResult = RegCloseKey(lngKeyHandle)
	      
	          ' Enable the buttons
	          Form1.MousePointer = 0
	          List1.Enabled = True
	          Command1.Enabled = True
	          Command2.Enabled = True
	          
	          ' Display the total matches
	          MsgBox "Total matches:" & Str(i), , "Search Registry Keys"
	      End If
	  End Sub
	
	  Private Sub Command2_Click()
	      Unload Me
	  End Sub
	
	  Private Sub Form_Load()
	      ' Set up the Form interface
	      Form1.Caption = "Search Registry Keys"
	      Form1.Move 0, 0, 6960, 4230
	      
	      Label1.Caption = "Search Branch:"
	      Label1.Move 240, 240, 1215, 255
	      
	      Label2.Caption = "Search Mode:"
	      Label2.Move 240, 720, 1215, 255
	      
	      Label3.Caption = "Find What:"
	      Label3.Move 240, 1200, 1215, 255
	
	      Combo1.Move 1680, 240, 2535
	      Combo1.AddItem "HKEY_CLASSES_ROOT"
	      Combo1.AddItem "HKEY_CURRENT_USER"
	      Combo1.AddItem "HKEY_LOCAL_MACHINE"
	      Combo1.AddItem "HKEY_USERS"
	      Combo1.ListIndex = 0
	      Combo1.TabIndex = 0
	      
	      Combo2.Move 1680, 720, 2535
	      Combo2.AddItem "Portion"
	      Combo2.AddItem "All"
	      Combo2.AddItem "Left"
	      Combo2.AddItem "Right"
	      Combo2.ListIndex = 0
	      Combo2.TabIndex = 1
	      
	      Text1.Move 1680, 1200, 2535, 350
	      Text1.Text = ""
	      Text1.TabIndex = 2
	      
	      Command1.Caption = "Find Keys"
	      Command1.Move 4560, 240, 1935, 375
	      Command1.TabIndex = 3
	      Command1.Default = True
	      
	      Command2.Caption = "Close"
	      Command2.Move 4560, 720, 1935, 375
	      Command2.TabIndex = 4
	      
	      Check1.Caption = "Match Case"
	      Check1.Move 4680, 1320, 1275, 255
	      Check1.TabIndex = 5
	
	      List1.Move 240, 1920, 6255, 1620
	      List1.TabIndex = 6
	  End Sub
	
	6. Run the project and execute a search. Note that Keys that match the search
	  criteria are displayed in the ListBox.
	
	REFERENCES
	==========
	
	For more information the Registry API functions, please search on the following
	topics in either the Win32 Programmer's Reference or the Microsoft Developer
	Network (MSDN) Library CD-ROM:
	
	- RegCloseKey
	
	- RegEnumKeyEx
	
	- RegOpenKeyEx
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q145679 HOWTO: Use the Registry API to Save and Retrieve Setting
	
	Additional query words: win32 winapi
	
	======================================================================
	Keywords          : kbAPI kbRegistry kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbCodeSnippet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
