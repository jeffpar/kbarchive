---
layout: page
title: "Q315586: HOW TO: Access Registry on Remote Computer Using VB6 &amp; WIN API"
permalink: /kb/315/Q315586/
---

## Q315586: HOW TO: Access Registry on Remote Computer Using VB6 &amp; WIN API

{% raw %}

	Article: Q315586
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbAPI kbRegistry kbAudDeveloper kbHOWTOmaster
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Requirements
	- Create a Demonstration Application
	- Verification
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This article explains how to use a Visual Basic application to access the
	registry on a remote computer in conjunction with the Windows application
	programming interface (API).
	
	Requirements
	------------
	
	You need the following hardware and software to perform the procedures in this
	article:
	
	- A Microsoft Windows XP, Microsoft Windows 2000, or Microsoft Windows NT
	  4.0-based computer
	
	- Visual Basic 6.0
	
	NOTE: If the remote registry is on a system that is running Windows NT 4.0,
	Windows 2000, or Windows XP, you must run the code from an account that has
	permission to read that registry.
	
	You also need the following skills:
	
	- Visual Basic 6.0 programming experience
	
	- Familiarity with the Windows registry
	
	Create a Demonstration Application
	----------------------------------
	
	1. Start Visual Basic 6.0, and then create a new project of type Standard EXE.
	
	2. Right-click the form, and then click View Code on the Shortcut menu. Add the
	  following statement at the start of the code:
	
	  Option Explicit
	
	3. Add the following code to declare the constants used to access the registry:
	
	  Private Const HKEY_CLASSES_ROOT = &H80000000
	  Private Const HKEY_CURRENT_USER = &H80000001
	  Private Const HKEY_LOCAL_MACHINE = &H80000002
	  Private Const HKEY_USERS = &H80000003
	
	  Private Const KEY_QUERY_VALUE = &H1
	  Private Const KEY_SET_VALUE = &H2
	  Private Const KEY_ALL_ACCESS = &H3F
	
	  Private Const REG_SZ  As Long = 1
	  Private Const ERROR_SUCCESS = 0&
	
	4. Add the following code to declare the entry points for the registry functions
	  in the Windows application programming interface (API):
	
	  Private Declare Function RegConnectRegistry Lib "advapi32.dll" _
	  Alias "RegConnectRegistryA" _
	      (ByVal lpMachineName As String, _
	       ByVal hKey As Long, _
	       phkResult As Long) As Long
	
	  Private Declare Function RegCloseKey Lib "advapi32.dll" _
	      (ByVal hKey As Long) As Long
	
	  Private Declare Function RegOpenKeyEx Lib "advapi32.dll" _
	  Alias "RegOpenKeyExA" _
	      (ByVal hKey As Long, _
	       ByVal lpSubKey As String, _
	       ByVal ulOptions As Long, _
	       ByVal samDesired As Long, _
	       phkResult As Long) As Long
	     
	  Private Declare Function RegQueryValueExString Lib "advapi32.dll" _
	  Alias "RegQueryValueExA" _
	      (ByVal hKey As Long, _
	       ByVal lpValueName As String, _
	       ByVal lpReserved As Long, _
	       lpType As Long, _
	       ByVal lpData As String, _
	       lpcbData As Long) As Long
	
	5. Add the following global variable declaration:
	
	  Private hRemoteReg As Long
	
	6. Add the following code to handle the Form_Load event. This code calls the
	  RegConnectRegistry function to connect to the remote registry. Replace the
	  \\RemoteMachineName parameter with the name of the computer whose registry
	  you want to access:
	
	  Private Sub Form_Load()
	      Dim lRet As Long
	      
	      'Connect to the remote registry 
	      lRet = RegConnectRegistry("\\RemoteMachineName", _
	                                HKEY_LOCAL_MACHINE, _
	                                hRemoteReg)
	      
	      If (lRet = ERROR_SUCCESS) Then
	          MsgBox "Successfully connected to remote registry"
	      Else
	          MsgBox "Error:" & Err.LastDllError
	          Unload Me
	          Exit Sub
	      End If
	  End Sub
	
	7. Add the following code to handle the Form_Unload event:
	
	  Private Sub Form_Unload(Cancel As Integer)
	      Dim lRet As Long
	      If hRemoteReg <> 0 Then
	          lRet = RegCloseKey(hRemoteReg)
	      End If
	  End Sub
	
	8. In the Form Designer, add a Command control to the form. The control has the
	  default name of Command1.
	
	9. Double-click Command1 to create a click handler for the command button. Add
	  the following code to the click handler function:
	
	  Private Sub Command1_Click()
	      Dim lRetVal As Long
	      Dim hKey As Long
	      Dim sValue As String
	      
	      lRetVal = RegOpenKeyEx(hRemoteReg, _
	          "HARDWARE\DESCRIPTION\System", 0, KEY_QUERY_VALUE, hKey)
	      If lRetVal <> ERROR_SUCCESS Then
	          MsgBox "Cannot open key"
	      Else
	          sValue = String(255, " ")
	          lRetVal = RegQueryValueExString(hKey, _
	              "SystemBIOSVersion", 0&, REG_SZ, sValue, 255)
	          If lRetVal <> ERROR_SUCCESS Then
	              MsgBox "Cannot query value"
	          Else
	              MsgBox sValue
	          End If
	          lRetVal = RegCloseKey(hKey)
	          If lRetVal <> ERROR_SUCCESS Then
	              MsgBox "Cannot close key"
	          End If
	      End If
	  End Sub
	
	Verification
	------------
	
	1. Press F5 to build and run the application.
	
	2. A message box appears, indicating that the registry on the remote computer
	  has been contacted. Click OK.
	
	  The main form of the application appears.
	
	3. Click Command1. The value stored in the following location in the remote
	  registry is displayed:
	
	  HKEY_LOCAL_MACHINE\HARDWARE\DESCRIPTION\System\SystemBIOSVersion
	
	4. To verify this registry value, run regedit.exe on the remote computer. In
	  Registry Editor, click Find on the Edit menu. Type SystemBIOSVersion, and
	  then click Find Next. After a short pause, Registry Editor displays the value
	  for this key; verify that this is the same value displayed in your Visual
	  Basic application.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q145679 HOWTO: Use the Registry API to Save and Retrieve Setting
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbRegistry kbAudDeveloper kbHOWTOmaster 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	

{% endraw %}
