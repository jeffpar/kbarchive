---
layout: page
title: "Q183478: HOWTO: Call EnumServicesStatus API From Visual Basic"
permalink: /kb/183/Q183478/
---

## Q183478: HOWTO: Call EnumServicesStatus API From Visual Basic

	Article: Q183478
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbOSWinNT400 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
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
	
	This article demonstrates how to call the EnumServicesStatus API on Windows NT
	4.0 (SP3) or Windows 2000 from Visual Basic. The EnumServicesStatus function
	enumerates services in the specified service control manager database. The name
	and status of each service is retrieved.
	
	MORE INFORMATION
	================
	
	Step-by-Step Instructions
	-------------------------
	
	1. Create a new Standard EXE project in Visual Basic, Project1. Form1 is created
	  by default.
	
	2. Place two command buttons and two list boxes on Form1 and place the following
	  code in Form1's code window:
	
	        Private Sub Command1_Click()
	           'Getting only the active services
	              GetServiceInfo SERVICE_ACTIVE
	        End Sub
	
	        Private Sub Command2_Click()
	           'Getting all services registered
	              GetServiceInfo SERVICE_ACTIVE Or SERVICE_INACTIVE
	        End Sub
	
	        Private Sub Form_Load()
	           Command1.Caption = "Active Services"
	           Command2.Caption = "All Registered Services"
	        End Sub
	
	3. Add a standard module (Module1) to Project1 and place the following code in
	  Module1.
	
	        '****************** MODULE1 CODE **********************
	
	        'UDTs
	        '*******************************************************
	        Type SERVICE_STATUS
	           dwServiceType As Long
	           dwCurrentState As Long
	           dwControlsAccepted As Long
	           dwWin32ExitCode As Long
	           dwServiceSpecificExitCode As Long
	           dwCheckPoint As Long
	           dwWaitHint As Long
	        End Type
	
	        Type ENUM_SERVICE_STATUS
	           lpServiceName As Long
	           lpDisplayName As Long
	           ServiceStatus As SERVICE_STATUS
	        End Type
	        '*******************************************************
	
	        'Constants
	        '*******************************************************
	        Public Const ERROR_MORE_DATA = 234
	        Public Const SERVICE_ACTIVE = &H1
	        Public Const SERVICE_INACTIVE = &H2
	        Public Const SC_MANAGER_ENUMERATE_SERVICE = &H4
	        Public Const SERVICE_WIN32_OWN_PROCESS As Long = &H10
	        Public Const SERVICE_WIN32_SHARE_PROCESS As Long = &H20
	        Public Const SERVICE_WIN32 As Long = SERVICE_WIN32_OWN_PROCESS _
	                    + SERVICE_WIN32_SHARE_PROCESS
	        '*******************************************************
	
	        'API declarations
	        '*******************************************************
	        Public Declare Function OpenSCManager Lib "advapi32.dll" _
	              Alias "OpenSCManagerA" _
	           (ByVal lpMachineName As String, ByVal lpDatabaseName As String, _
	                 ByVal dwDesiredAccess As Long) As Long
	
	        Public Declare Function EnumServicesStatus Lib "advapi32.dll" _
	              Alias "EnumServicesStatusA" (ByVal hSCManager As Long, _
	              ByVal dwServiceType As Long, ByVal dwServiceState As Long, _
	              lpServices As Any, ByVal cbBufSize As Long, _
	              pcbBytesNeeded As Long, lpServicesReturned As Long, _
	              lpResumeHandle As Long) As Long
	
	        Public Declare Function CloseServiceHandle Lib "advapi32.dll" _
	              (ByVal hSCObject As Long) As Long
	
	        Public Declare Function lstrcpy Lib "kernel32.dll" Alias "lstrcpyA" _
	              (szDest As String, szcSource As Long) As Long
	        '*******************************************************
	
	        'Where the real work is done.
	        '*******************************************************
	        Public Sub GetServiceInfo(lngServiceType As Long)
	           Dim hSCM As Long
	           Dim lpEnumServiceStatus() As ENUM_SERVICE_STATUS
	           Dim lngServiceStatusInfoBuffer As Long
	           Dim strServiceName As String * 250
	           Dim lngBytesNeeded As Long
	           Dim lngServicesReturned As Long
	           Dim hNextUnreadEntry As Long
	           Dim lngStructsNeeded As Long
	           Dim lngResult As Long
	           Dim i As Long
	
	           'Open connection to Service Control Manager.
	           hSCM = OpenSCManager(vbNullString, vbNullString, _
	                                SC_MANAGER_ENUMERATE_SERVICE)
	
	           If hSCM = 0 Then
	              MsgBox "OpenSCManager failed. LastDllError = " _
	              & CStr(Err.LastDllError)
	              Exit Sub
	           End If
	
	           'Get buffer size (bytes) without passing a buffer
	           'and make sure starts at 0th entry.
	           hNextUnreadEntry = 0
	           lngResult = EnumServicesStatus(hSCM, _
	                                          SERVICE_WIN32, _
	                                          lngServiceType, _
	                                          ByVal &H0, _
	                                          &H0, _
	                                          lngBytesNeeded, _
	                                          lngServicesReturned, _
	                                          hNextUnreadEntry)
	
	           'We should receive MORE_DATA error.
	           If Not Err.LastDllError = ERROR_MORE_DATA Then
	              MsgBox "LastDLLError = " & CStr(Err.LastDllError)
	              Exit Sub
	           End If
	
	           'Calculate the number of structures needed.
	           lngStructsNeeded = _
	           lngBytesNeeded / Len(lpEnumServiceStatus(0)) + 1
	
	           'Redimension the array according to our calculation.
	           ReDim lpEnumServiceStatus(lngStructsNeeded - 1)
	
	           'Get buffer size in bytes.
	           lngServiceStatusInfoBuffer = _
	              lngStructsNeeded * Len(lpEnumServiceStatus(0))
	
	           'Get services information starting entry 0.
	           hNextUnreadEntry = 0
	           lngResult = EnumServicesStatus(hSCM, _
	                                         SERVICE_WIN32, _
	                                         lngServiceType, _
	                                         lpEnumServiceStatus(0), _
	                                         lngServiceStatusInfoBuffer, _
	                                         lngBytesNeeded, _
	                                         lngServicesReturned, _
	                                         hNextUnreadEntry)
	
	           If lngResult = 0 Then
	              MsgBox "EnumServicesStatus failed. LastDllError = " _
	                 & CStr(Err.LastDllError)
	              Exit Sub
	           End If
	
	           'Get the strings and display them.
	           With Form1
	              .List1.Clear
	              .List1.AddItem "Display Names"
	              .List2.Clear
	              .List2.AddItem "Service Names"
	              For i = 0 To lngServicesReturned - 1
	                 lngResult = lstrcpy(ByVal strServiceName, _
	                    ByVal lpEnumServiceStatus(i).lpDisplayName)
	                 .List1.AddItem strServiceName
	                 lngResult = lstrcpy(ByVal strServiceName, _
	                    ByVal lpEnumServiceStatus(i).lpServiceName)
	                 .List2.AddItem strServiceName
	              Next
	           End With
	
	           'Clean up.
	           CloseServiceHandle (hSCM)
	
	        End Sub
	        '******************* END OF MODULE1 **************************
	
	4. Run the project.
	
	REFERENCES
	==========
	
	Win32 System Services by Marshall Brain
	
	Additional query words: NT Service EnumServicesStatus kbdss
	
	======================================================================
	Keywords          : kbOSWinNT400 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
