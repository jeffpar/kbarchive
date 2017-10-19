---
layout: page
title: "Q268884: HOWTO: Set or Retrieve the Authentication Level of a DCOM Client"
permalink: /kb/268/Q268884/
---

## Q268884: HOWTO: Set or Retrieve the Authentication Level of a DCOM Client

	Article: Q268884
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): KbClientServer kbDCOM kbRegistry kbSecurity kbVBp kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you need to set a custom value for the Authentication Level for a DCOM client
	application, you can use one of the following options:
	
	- Call CoInitializeSecurity.
	
	- Create an AppId in the registry that has a double word (DWORD) value set for
	  AuthenticationLevel and map this AppId to the executable file name of your
	  DCOM client.
	
	This article uses the second option.
	
	MORE INFORMATION
	================
	
	DCOM security settings are process-specific. If you do not set the
	AuthenticationLevel of the client's process, then the default
	AuthenticationLevel is used. Because you do not use CoInitilizeSecurity from
	your client to set the AuthenticationLevel and your client executable is not
	included in the Dcomcnfg utility, you must create your own registry mapping in
	order to set the client's authentication level either programmatically or by
	using Regedit.
	
	Do the mapping in the registry by starting under:
	
	  HKEY_CLASSES_ROOT\AppId\
	
	and then adding a key with the name of your client's executable name
	(myclient.exe). In this key there should be a string value, AppId, with your
	generated GUID. You also need to have a key under:
	
	  HKEY_CLASSES_ROOT\AppId\
	
	with your generated GUID. In this key there should be a DWORD value,
	AuthenticationLevel, which is set to the value of the authentication level you
	want the client to use. This completes the registry mapping for the client's
	executable.
	
	Assuming that your client executable is named myclient.exe, the mapping should
	look like the following in the registry.
	
	+-----------------------------------------------------------------------------------------------+
	| Key                     | Value                                                               | 
	+-----------------------------------------------------------------------------------------------+
	| HKCR\AppId\myclient.exe | (Default)<A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0>REG_SZ<A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0>(value not set)  | 
	+-----------------------------------------------------------------------------------------------+
	|                         | AppId<A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0>REG_SZ<A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0>{GUID}          | 
	+-----------------------------------------------------------------------------------------------+
	| HKCR\AppId\{GUID}       | (Default)<A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0>REG_SZ <A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0>(value not set) | 
	+-----------------------------------------------------------------------------------------------+
	|                         | AuthenticationLevel<A0><A0><A0><A0><A0><A0><A0><A0>REG_DWORD<A0><A0><A0><A0><A0><A0><A0>0x00000001               | 
	+-----------------------------------------------------------------------------------------------+
	
	The following is sample code for an application that creates the preceding
	registry entries for a given executable:
	
	1. Start a Standard EXE Project in Visual Basic. Form1 is created by default.
	
	2. Add two TextBox, two Label, and two CommandButton controls to the form.
	
	3. Add the following code to the form:
	
	  Private Sub Command1_Click()
	      If Text1 = "" Or Val(Text2) < 1 Or Val(Text2) > 6 Then Exit Sub
	      SetAuthentication Val(Text2), Text1
	  End Sub
	
	  Private Sub Command2_Click()
	      Dim auth As Integer
	      auth = GetAuthenticationLevel(Text1)
	      MsgBox "The Authentication Level for: " & Text1 & " is " & auth
	  End Sub
	
	  Private Sub Form_Load()
	      With Me
	          .Width = 3225
	          .Height = 1950
	          .Caption = "Set DCOM Client Authentication Level"
	      End With
	      With Command1
	          .Height = 615
	          .Width = 1450
	          .Left = 1650
	          .Top = 120
	          .Caption = "Set Authentication Level"
	          .TabIndex = 2
	      End With
	      With Command2
	          .Height = 615
	          .Width = 1450
	          .Left = 1650
	          .Top = 840
	          .Caption = "Get Authentication Level"
	          .TabIndex = 2
	      End With
	      With Text1
	          .Text = ""
	          .Height = 285
	          .Left = 0
	          .Top = 360
	          .Width = 1455
	          .TabIndex = 0
	      End With
	      With Text2
	          .Text = ""
	          .Height = 285
	          .Left = 0
	          .Top = 1200
	          .Width = 255
	          .TabIndex = 1
	      End With
	      With Label1
	          .Caption = "Client EXE name"
	          .Left = 0
	          .Top = 0
	      End With
	      With Label2
	          .Caption = "Authentication Level (1-6)"
	          .Left = 0
	          .Top = 720
	      End With
	  End Sub
	
	4. On the Project menu, add a standard module to the project, and then paste the
	  following code in the code module:
	
	  Private Type GUID
	      Data1 As Long
	      Data2 As Integer
	      Data3 As Integer
	      Data4(7) As Byte
	  End Type
	
	  Private Const GUID_LENGTH As Long = 39
	
	  Private Const REG_SZ As Long = 1
	  Private Const REG_DWORD As Long = 4
	
	  Private Const ERROR_SUCCESS = 0
	  Private Const ERROR_NONE = 0
	
	  Private Const HKEY_CLASSES_ROOT = &H80000000
	
	  Private Const KEY_ALL_ACCESS = &H3F
	  Private Const KEY_QUERY_VALUE = &H1
	
	  Private Const REG_OPTION_NON_VOLATILE = 0
	
	  Private Declare Function RegCloseKey Lib "advapi32.dll" _
	  (ByVal hKey As Long) As Long
	
	  Private Declare Function RegCreateKeyEx Lib "advapi32.dll" Alias _
	  "RegCreateKeyExA" (ByVal hKey As Long, ByVal lpSubKey As String, _
	  ByVal Reserved As Long, ByVal lpClass As String, ByVal dwOptions _
	  As Long, ByVal samDesired As Long, ByVal lpSecurityAttributes _
	  As Long, phkResult As Long, lpdwDisposition As Long) As Long
	
	  Private Declare Function RegSetValueExString Lib "advapi32.dll" Alias _
	  "RegSetValueExA" (ByVal hKey As Long, ByVal lpValueName As String, _
	  ByVal Reserved As Long, ByVal dwType As Long, ByVal lpValue As _
	  String, ByVal cbData As Long) As Long
	
	  Private Declare Function RegSetValueExLong Lib "advapi32.dll" Alias _
	  "RegSetValueExA" (ByVal hKey As Long, ByVal lpValueName As String, _
	  ByVal Reserved As Long, ByVal dwType As Long, lpValue As Long, _
	  ByVal cbData As Long) As Long
	
	  Private Declare Function RegOpenKeyEx Lib "advapi32.dll" Alias _
	  "RegOpenKeyExA" (ByVal hKey As Long, ByVal lpSubKey As String, _
	  ByVal ulOptions As Long, ByVal samDesired As Long, phkResult As Long) _
	  As Long
	
	  Private Declare Function RegQueryValue Lib "advapi32.dll" Alias _
	  "RegQueryValueA" (ByVal hKey As Long, ByVal lpSubKey As String, _
	  ByVal lpValue As String, lpcbValue As Long) As Long
	
	  Private Declare Function RegQueryValueExString Lib "advapi32.dll" _
	  Alias "RegQueryValueExA" (ByVal hKey As Long, ByVal lpValueName As String, _
	  ByVal lpReserved As Long, lpType As Long, ByVal lpData As String, _
	  lpcbData As Long) As Long
	
	  Private Declare Function RegQueryValueExLong Lib "advapi32.dll" Alias _
	  "RegQueryValueExA" (ByVal hKey As Long, ByVal lpValueName As _
	  String, ByVal lpReserved As Long, lpType As Long, lpData As _
	  Long, lpcbData As Long) As Long
	        
	  Private Declare Function CoCreateGuid Lib "ole32.dll" (pGUID As GUID) _
	  As Long
	
	  Private Declare Function StringFromGUID2 Lib "ole32.dll" (pGUID As GUID, _
	  ByVal PointerToString As Long, ByVal MaxLength As Long) As Long
	
	  Public Function CreateGUID() As String
	      Dim udtGUID As GUID
	      Dim sGUID As String
	      Dim lResult As Long
	      If (CoCreateGuid(udtGUID) = 0) Then
	          sGUID = String$(GUID_LENGTH, 0)
	          lResult = StringFromGUID2(udtGUID, StrPtr(sGUID), GUID_LENGTH)
	          CreateGUID = sGUID
	      End If
	  End Function
	
	  Public Sub SetAuthentication(AuthLevel As Integer, ExeName As String)
	      Dim hNewKey As Long
	      Dim lRetVal As Long
	      Dim sMyGUID As String
	      Dim sNewKey As String
	      Dim lpData As Long
	      Dim lpcbData As Long
	      
	      lpData = CLng(AuthLevel)
	      lpcbData = Len(lpData)
	      sMyGUID = CreateGUID()
	      sNewKey = "AppId\" & sMyGUID
	      
	      lRetVal = RegCreateKeyEx(HKEY_CLASSES_ROOT, sNewKey, 0&, _
	         vbNullString, REG_OPTION_NON_VOLATILE, KEY_ALL_ACCESS, 0&, _
	         hNewKey, lRetVal)
	      lRetVal = RegSetValueExLong(hNewKey, "AuthenticationLevel", 0&, _
	         REG_DWORD, lpData, lpcbData)
	      RegCloseKey (hNewKey)
	      
	      sNewKey = "AppId\" & ExeName & ".exe"
	      lRetVal = RegCreateKeyEx(HKEY_CLASSES_ROOT, sNewKey, 0&, _
	         vbNullString, REG_OPTION_NON_VOLATILE, KEY_ALL_ACCESS, 0&, _
	         hNewKey, lRetVal)
	      lRetVal = RegSetValueExString(hNewKey, "AppId", 0&, REG_SZ, _
	         sMyGUID, Len(sMyGUID))
	      RegCloseKey (hNewKey)
	      MsgBox sMyGUID
	  End Sub
	
	  Public Function GetAuthenticationLevel(ExeName As String) As Integer
	      Dim hKey As Long
	      Dim lRetVal As Long
	      Dim sKeyName As String
	      Dim lpData As String
	      Dim lpdata2 As Long
	      Dim lpcbData As Long
	      Dim myappid As String
	      Dim auth As Integer
	      
	      If ExeName = "" Then
	          GetAuthenticationLevel = -1
	          MsgBox "Invalid File Name"
	          Exit Function
	      End If
	      
	      lRetVal = RegOpenKeyEx(HKEY_CLASSES_ROOT, "AppId\" & ExeName, 0, _
	         KEY_QUERY_VALUE, hKey)
	      If lRetVal = ERROR_SUCCESS Then
	          lpcbData = 40
	          lpData = Space$(lpcbData)
	          lRetVal = RegQueryValueExString(hKey, "AppId", 0&, REG_SZ, _
	             lpData, lpcbData)
	          If lRetVal = ERROR_NONE Then
	              myappid = Left$(lpData, lpcbData - 1)
	              RegCloseKey (hKey)
	              sKeyName = "AppID\" & myappid & "\"
	              lRetVal = RegOpenKeyEx(HKEY_CLASSES_ROOT, sKeyName, 0&, _
	              KEY_ALL_ACCESS, hKey)
	              If lRetVal = ERROR_SUCCESS Then
	                  lpdata2 = CLng(0)
	                  lpcbData = Len(lpdata2)
	                  lRetVal = RegQueryValueExLong(hKey, _
	                     "AuthenticationLevel", 0&, REG_DWORD, lpdata2, lpcbData)
	                  If lRetVal = ERROR_NONE Then
	                      auth = CInt(lpdata2)
	                      GetAuthenticationLevel = auth
	                  Else
	                      MsgBox lRetVal & " - Unable to read authentication level."
	                      GetAuthenticationLevel = -2
	                  End If
	              Else
	                  MsgBox lRetVal & " - Cannot find AppID for " & sKeyName
	                  GetAuthenticationLevel = -3
	              End If
	              RegCloseKey (hKey)
	          Else
	               MsgBox lRetVal & " - Cannot read AppID value for " & sKeyName
	               GetAuthenticationLevel = -4
	          End If
	      Else
	          MsgBox lRetVal & " - Cannot find exe name - " & sKeyName
	          GetAuthenticationLevel = -5
	      End If
	
	  Exit Function
	  QueryValueExExit:
	      MsgBox lRetVal & " - Unexpected error"
	      GetAuthenticationLevel = -7
	      Exit Function
	  QueryValueExError:
	      Resume QueryValueExExit
	  End Function
	
	5. Run the project. Type the executable file name of the client application into
	  Text1, and then type the authentication level you want to set into Text2.
	
	6. Click the Set Authentication Level CommandButton. The mapping is now created
	  in the registry and the authentication level is set for the client
	  executable. Click the Get Authentication Level CommandButton and note that a
	  message box appears containing the authentication level you just set.
	
	REFERENCES
	==========
	
	For more information on AppId, see the following directory in MSDN:
	
	  \Platform SDK\Component Services\COM\COM Fundamentals\Reference\Registry
	  Entries\AppId
	
	For additional information on securing objects in code, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q239561 HOWTO: Use CoInitializeSecurity in Visual Basic
	
	  Q249636 HOWTO: Use the CoSetProxyBlanket Function in Visual Basic
	
	Additional query words: myclient
	
	======================================================================
	Keywords          : KbClientServer kbDCOM kbRegistry kbSecurity kbVBp kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	
