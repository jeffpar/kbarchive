---
layout: page
title: "Q306368: HOWTO: Use RAPI to Add Keys and Values to the Remote Registry"
permalink: /kb/306/Q306368/
---

## Q306368: HOWTO: Use RAPI to Add Keys and Values to the Remote Registry

{% raw %}

	Article: Q306368
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,2.11,3.0,6.0
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Windows CE Operating System versions 2.0, 2.11, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the Remote APIs (RAPI) from Visual Basic to add keys and values to
	the registry on remote Windows CE-based devices, such as a Pocket PC.
	
	This article demonstrates how to call the RAPI functions to add keys, subkeys,
	and string and DWORD values to the registry on the remote devices.
	
	MORE INFORMATION
	================
	
	WARNING: One or more of the following functions are discussed in this article;
	VarPrt, VarPtrArray, VarPtrStringArray, StrPtr, ObjPtr. These functions are not
	supported by Microsoft Technical Support. They are not documented in the Visual
	Basic documentation and are provided in this Knowledge Base article "as is".
	Microsoft does not guarantee that they will be available in future releases of
	Visual Basic.
	
	Performing calls to RAPI functions from Visual Basic can be somewhat complicated.
	RAPI functions are UNICODE, and Visual Basic automatically converts strings from
	UNICODE to ANSI when you call API functions. To prevent Visual Basic from doing
	the conversion, you must use the StrPtr function to get the address of the
	UNICODE string buffer and pass it to the RAPI functions. The following example
	illustrates this process:
	
	1. Create a new Standard EXE project in Visual Basic.
	
	2. Place a command button on Form1.
	
	3. Paste the following code into Form1's code module:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	         Dim lret As Long
	         Dim lcon As Long
	         
	         ' Initialize RAPI
	         lcon = ConnectRapi
	         If lcon <> ERROR_SUCCESS Then
	            MsgBox "Failure to initialize RAPI"
	         Else
	            MsgBox "RAPI was initialized successfully"
	         End If
	         
	         lret = CreateCERegistryKeys
	         
	          ' Uninitialize RAPI
	         lcon = DisconnectRapi
	         If lcon <> ERROR_SUCCESS Then
	            MsgBox "Failure to uninitialize RAPI"
	         Else
	            MsgBox "RAPI was uninitialized successfully"
	         End If
	  End Sub
	
	4. From the Project menu, click Add Module to add a .bas module to the project.
	
	5. Paste the following code into Module1:
	
	  Option Explicit
	
	  Public Const HKEY_CLASSES_ROOT = &H80000000
	  Public Const HKEY_CURRENT_USER = &H80000001
	  Public Const HKEY_LOCAL_MACHINE = &H80000002
	  Public Const ERROR_SUCCESS = 0
	  Public Const REG_DWORD = 4
	  Public Const REG_SZ = 1
	
	  Type RAPIINIT
	      cbsize As Long
	      heRapiInit As Long
	      hrRapiInit As Long
	  End Type
	
	  Public Declare Function CeRapiUninit Lib "rapi.dll" () As Long
	
	  Public Declare Function CeRapiInitEx Lib "rapi.dll" ( _
	      pRapiInit As RAPIINIT) As Long
	
	  Public Declare Function CeRegCreateKeyEx Lib "rapi.dll" ( _
	      ByVal hKey As Long, _
	      ByVal lpSubKey As Long, _
	      ByVal Reserved As Long, _
	      ByVal lpclass As Long, _
	      ByVal dwOptions As Long, _
	      ByVal samDesired As Long, _
	      ByVal lpSecurityAttributes As Long, _
	      phkResult As Long, _
	      lpdwdisposition As Long) As Long
	
	  Public Declare Function CeRegOpenKeyEx Lib "rapi.dll" ( _
	      ByVal hKey As Long, _
	      ByVal lpSubKey As Long, _
	      ByVal ulOptions As Long, _
	      ByVal samDesired As Long, _
	      phkResult As Long) As Long
	
	  Public Declare Function CeRegQueryValueEx Lib "rapi.dll" ( _
	      ByVal hKey As Long, _
	      ByVal lpValueName As Long, _
	      ByVal lpReserved As Long, _
	      lpType As Long, _
	      ByVal lpData As Long, _
	      lpcbData As Long) As Long
	
	  Public Declare Function CeRegSetValueEx Lib "rapi.dll" ( _
	      ByVal hKey As Long, _
	      ByVal lpValueName As Long, _
	      ByVal Reserved As Long, _
	      ByVal dwType As Long, _
	      ByVal lpData As Long, _
	      ByVal cbData As Long) As Long
	
	  Public Declare Function CeRegDeleteKey Lib "rapi.dll" ( _
	      ByVal hKey As Long, _
	      ByVal lpSubKey As Long) As Long
	
	  Public Declare Function CeRegCloseKey Lib "rapi.dll" ( _
	      ByVal hKey As Long) As Long
	
	  ' Initialize RAPI
	  Public Function ConnectRapi() As Long
	      Dim lcon As Long
	      Dim lRapiInit As RAPIINIT
	      
	      With lRapiInit
	          .cbsize = Len(lRapiInit)
	          .heRapiInit = 0
	          .hrRapiInit = 0
	      End With
	      
	      lcon = CeRapiInitEx(lRapiInit)
	      ConnectRapi = lcon
	  End Function
	
	  ' Uninitialize RAPI
	  Public Function DisconnectRapi() As Long
	      Dim lcon As Long
	      lcon = CeRapiUninit
	      DisconnectRapi = lcon
	  End Function
	
	  Public Function CreateCERegistryKeys() As Long
	      Dim lret As Long
	      Dim phkResult As Long
	      Dim phskResult As Long
	      Dim subkey As String
	      Dim key As String
	      Dim lpclass As String
	      Dim lpdwdisposition As Long
	      Dim Value As String
	      Dim sData As String
	      Dim lData As Long
	
	      'Create a key named "MyKey" under HKEY_LOCAL_MACHINE
	      key = "MyKey"
	      lpclass = "MyKeyClass"
	      lret = CeRegCreateKeyEx(HKEY_LOCAL_MACHINE, StrPtr(key), _
	          0, StrPtr(lpclass), 0, 0, 0, phkResult, lpdwdisposition)
	
	      If lret <> ERROR_SUCCESS Then
	          MsgBox "Failure to create key.  Error: " & lret
	      Else
	          'Create the subkey
	          subkey = "MySubKey"
	          lpclass = "SubKeyClass"
	          lret = CeRegCreateKeyEx(phkResult, StrPtr(subkey), _
	              0, StrPtr(""), 0, 0, 0, phskResult, lpdwdisposition)
	          
	          If lret <> ERROR_SUCCESS Then
	              MsgBox "Failure to create sub key: " & _
	              subkey & "  Error: " & lret
	          Else
	              'Add a string value to the subkey
	              Value = "Name"
	              sData = "John Smith"
	              lret = CeRegSetValueEx(phskResult, StrPtr(Value), 0, _
	                  REG_SZ, StrPtr(sData), (Len(sData) + 1) * 2)
	              'Add a DWORD value to the subkey
	              Value = "Age"
	              lData = 23
	              lret = CeRegSetValueEx(phskResult, StrPtr(Value), 0, _
	              REG_DWORD, VarPtr(lData), 4)
	          End If
	          
	      End If
	      
	      CreateCERegistryKeys = lret
	  End Function
	
	6. Make sure the connection between the device and the desktop is working. You
	  must also have a partnership established.
	
	7. Run the project, and then click Command1.
	
	8. Use the Remote Registry Editor that is included with Microsoft Embedded
	  Visual Tools 3.0 (or included with the Windows CE Toolkit for Visual Basic
	  6.0 if the target device is running Windows CE 2.0) to view the registry on
	  the device and verify that the registry key was created.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q249144 HOWTO: Identify the CE Device Connected to the Desktop Machine
	
	Additional query words: rapi registry remote ce device
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbOSWinCE kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbWinCESearch kbWinCE200 kbWinCE211 kbWinCE300
	Version           : :2.0,2.11,3.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
