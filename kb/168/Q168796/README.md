---
layout: page
title: "Q168796: HOWTO: Programmatically Restart or Log Off a Computer"
permalink: /kb/168/Q168796/
---

## Q168796: HOWTO: Programmatically Restart or Log Off a Computer

	Article: Q168796
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbGrpDSVBDB kbDSupport kbVBA600 kbVBA500 kb32bitOn
	Last Modified: 22-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic for Applications versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to programmatically restart or log off a computer
	in Visual Basic. The sample code shown in this article creates a project that
	can normally or forcibly perform these functions on a computer with a Windows
	95, Windows 98, Windows Me, Windows 2000, or Windows NT operating system. A
	normal procedure allows the user the opportunity to close all open programs
	before executing a restart or log off. A forced procedure automatically closes
	all open programs before executing a restart or log off.
	
	MORE INFORMATION
	================
	
	The Windows API has a function to programmatically shut down and restart or log
	off a computer. The Boolean function ExitWindowsEx performs the following
	tasks:
	
	- Shut down the system.
	
	- Shut down and restart the system.
	
	- Log off and force all running applications to terminate.
	
	The function returns a value as soon as the function initiates a shutdown. The
	function returns True if the shutdown will be successful and False if the
	function fails. Extended error information is available by calling the function
	GetLastError.
	
	To use this function under Windows NT and Windows 2000, enable the
	SE_SHUTDOWN_NAME security privilege by using the AdjustTokenPrivileges function.
	Windows 95, Windows 98, and Windows Me do not support or require these security
	privileges.
	
	The flag passed to the ExitWindowsEx function determines whether the function
	performs a forced or normal log off, shutdown, or a restart. You can pass the
	following flags to this function:
	
	- EWX_FORCE - Forcibly terminates processes that do not respond to a shut down
	  command.
	
	  NOTE: Using this flag can cause data loss because Windows does not send the
	  messages WM_QUERYENDSESSION and WM_ENDSESSION to applications currently
	  running in the computer. Use this flag only in cases where data loss is not
	  critical.
	
	- EWX_LOGOFF - terminates all processes and then logs off the computer.
	
	- EWX_POWEROFF - shuts down the computer and turns off the power in systems
	  with a power-off feature. Under Windows NT and Windows 2000, the process that
	  calls the ExitWindowsEx function with this flag must have the
	  SE_SHUTDOWN_NAME privilege. Windows 95, Windows 98, and Windows Me do not
	  support or require this privilege.
	
	- EWX_REBOOT [ASCII 150] shuts down and then restarts the computer. Under
	  Windows NT and Windows 2000, the process that calls the ExitWindowsEx
	  function with this flag must have the SE_SHUTDOWN_NAME privilege. Windows 95,
	  Windows 98, and Windows Me do not support or require this privilege.
	
	- EWX_SHUTDOWN - shuts down the computer to a point that is safe to turn off
	  the power. All file buffers have been flushed to disk, and all running
	  processes have stopped. Under Windows NT and Windows 2000, the process that
	  calls the ExitWindowsEx function with this flag must have the
	  SE_SHUTDOWN_NAME privilege. Windows 95, Windows 98, and Windows Me do not
	  support or require this privilege.
	
	Sample Program
	--------------
	
	The sample program illustrates how you can use the ExitWindowsEx function to
	perform a shut down or log off. The project has a form with four command
	buttons. The program begins by determining the operating system through the
	GetVersion function. The operating system determines whether privileges should
	be set in order to perform a log off or shut down. The operating system version
	is stored in a variable and is then displayed in a message box. Close the
	message box and a form appears with four command buttons. The command buttons
	perform the following tasks:
	
	1. Log Off - calls the ExitWindowsEx function with the EWX_Logoff flag to log
	  off the user. The user can shut down all running programs.
	
	2. Forced Log off - calls the ExitWindowsEx function with the EWX_Logoff or the
	  EWX_Forced flags to initiate a forced log off.
	
	3. Shut Down - if the operating system is Windows NT or Windows 2000, the
	  correct privilege is set. A message box then displays the last error value of
	  the process thread. Otherwise, the ExitWindowsEx function is called with the
	  EWX_Shutdown flag.
	
	4. Forced Shut Down - if the operating system is Windows NT or Windows 2000, the
	  correct privilege is set. A message box then displays the last error value of
	  the process thread. Otherwise, the ExitWindowsEx function is called with the
	  EWX_Shutdown or the EWX_Force flags to initiate a forced shutdown.
	
	Steps To Reproduce Behavior
	---------------------------
	
	1. Start the development environment and add a new form (Access and Visual
	  Basic) or UserForm (other Office 97 programs). In Excel 95, you can call the
	  code from the Tools|Macro menu.
	
	2. Place the following objects on the form (or UserForm) and set the appropriate
	  properties:
	
	  Control          Name               Caption
	  ---------------------------------------------------
	  Command Button   cmdLogoff          Log Off
	  Command Button   cmdForceLogoff     Force Log Off
	  Command Button   cmdShutdown        Shut Down
	  Command Button   cmdForceShutdown   Forced Shut Down
	
	3. Copy and paste the following code to the form's Module:
	
	         Option Explicit
	        Private Const EWX_LogOff As Long = 0
	        Private Const EWX_SHUTDOWN As Long = 1
	        Private Const EWX_REBOOT As Long = 2
	        Private Const EWX_FORCE As Long = 4
	        Private Const EWX_POWEROFF As Long = 8
	
	        'The ExitWindowsEx function either logs off, shuts down, or shuts
	        'down and restarts the system.
	        Private Declare Function ExitWindowsEx Lib "user32" _
	           (ByVal dwOptions As Long, _
	            ByVal dwReserved As Long) As Long
	
	        'The GetLastError function returns the calling thread's last-error
	        'code value. The last-error code is maintained on a per-thread basis.
	        'Multiple threads do not overwrite each other's last-error code.
	        Private Declare Function GetLastError Lib "kernel32" () As Long
	
	        Private Const mlngWindows95 = 0
	        Private Const mlngWindowsNT = 1
	
	        Public glngWhichWindows32 As Long
	
	        'The GetVersion function returns the operating system in use.
	        Private Declare Function GetVersion Lib "kernel32" () As Long
	
	        Private Type LUID
	           UsedPart As Long
	           IgnoredForNowHigh32BitPart As Long
	        End Type
	
	        Private Type LUID_AND_ATTRIBUTES
	           TheLuid As LUID
	           Attributes As Long
	        End Type
	
	        Private Type TOKEN_PRIVILEGES
	           PrivilegeCount As Long
	           TheLuid As LUID
	           Attributes As Long
	        End Type
	
	        'The GetCurrentProcess function returns a pseudohandle for the
	        'current process.
	        Private Declare Function GetCurrentProcess Lib "kernel32" () As Long
	
	        'The OpenProcessToken function opens the access token associated with
	        'a process.
	        Private Declare Function OpenProcessToken Lib "advapi32" _
	           (ByVal ProcessHandle As Long, _
	            ByVal DesiredAccess As Long, _
	            TokenHandle As Long) As Long
	
	        'The LookupPrivilegeValue function retrieves the locally unique
	        'identifier (LUID) used on a specified system to locally represent
	        'the specified privilege name.
	        Private Declare Function LookupPrivilegeValue Lib "advapi32" _
	           Alias "LookupPrivilegeValueA" _
	           (ByVal lpSystemName As String, _
	            ByVal lpName As String, _
	            lpLuid As LUID) As Long
	
	        'The AdjustTokenPrivileges function enables or disables privileges
	        'in the specified access token. Enabling or disabling privileges
	        'in an access token requires TOKEN_ADJUST_PRIVILEGES access.
	        Private Declare Function AdjustTokenPrivileges Lib "advapi32" _
	           (ByVal TokenHandle As Long, _
	            ByVal DisableAllPrivileges As Long, _
	            NewState As TOKEN_PRIVILEGES, _
	            ByVal BufferLength As Long, _
	            PreviousState As TOKEN_PRIVILEGES, _
	            ReturnLength As Long) As Long
	
	        Private Declare Sub SetLastError Lib "kernel32" _
	           (ByVal dwErrCode As Long)
	
	        Private Sub AdjustToken()
	
	        '********************************************************************
	        '* This procedure sets the proper privileges to allow a log off or a
	        '* shut down to occur under Windows NT.
	        '********************************************************************
	
	           Const TOKEN_ADJUST_PRIVILEGES = &H20
	           Const TOKEN_QUERY = &H8
	           Const SE_PRIVILEGE_ENABLED = &H2
	
	           Dim hdlProcessHandle As Long
	           Dim hdlTokenHandle As Long
	           Dim tmpLuid As LUID
	           Dim tkp As TOKEN_PRIVILEGES
	           Dim tkpNewButIgnored As TOKEN_PRIVILEGES
	           Dim lBufferNeeded As Long
	
	           'Set the error code of the last thread to zero using the
	           'SetLast Error function. Do this so that the GetLastError
	           'function does not return a value other than zero for no
	           'apparent reason.
	           SetLastError 0
	
	           'Use the GetCurrentProcess function to set the hdlProcessHandle
	           'variable.
	           hdlProcessHandle = GetCurrentProcess()
	
	           If GetLastError <> 0 Then
	              MsgBox "GetCurrentProcess error==" & GetLastError
	           End If
	
	           OpenProcessToken hdlProcessHandle, _
	              (TOKEN_ADJUST_PRIVILEGES Or TOKEN_QUERY), hdlTokenHandle
	
	           If GetLastError <> 0 Then
	              MsgBox "OpenProcessToken error==" & GetLastError
	           End If
	
	           'Get the LUID for shutdown privilege
	           LookupPrivilegeValue "", "SeShutdownPrivilege", tmpLuid
	
	           If GetLastError <> 0 Then
	              MsgBox "LookupPrivilegeValue error==" & GetLastError
	           End If
	
	           tkp.PrivilegeCount = 1    ' One privilege to set
	           tkp.TheLuid = tmpLuid
	           tkp.Attributes = SE_PRIVILEGE_ENABLED
	
	           'Enable the shutdown privilege in the access token of this process
	           AdjustTokenPrivileges hdlTokenHandle, _
	                                 False, _
	                                 tkp, _
	                                 Len(tkpNewButIgnored), _
	                                 tkpNewButIgnored, _
	                                 lBufferNeeded
	
	           If GetLastError <> 0 Then
	              MsgBox "AdjustTokenPrivileges error==" & GetLastError
	           End If
	
	        End Sub
	
	        Private Sub cmdLogoff_Click()
	
	           ExitWindowsEx (EWX_LogOff), &HFFFF
	           MsgBox "ExitWindowsEx's GetLastError " & GetLastError
	
	        End Sub
	
	        Private Sub cmdForceLogoff_Click()
	
	           ExitWindowsEx (EWX_LogOff Or EWX_FORCE), &HFFFF
	           MsgBox "ExitWindowsEx's GetLastError " & GetLastError
	
	        End Sub
	
	        Private Sub cmdShutdown_Click()
	
	           If glngWhichWindows32 = mlngWindowsNT Then
	              AdjustToken
	              MsgBox "Post-AdjustToken GetLastError " & GetLastError
	           End If
	
	           ExitWindowsEx (EWX_SHUTDOWN), &HFFFF
	           MsgBox "ExitWindowsEx's GetLastError " & GetLastError
	
	        End Sub
	
	        Private Sub cmdForceShutdown_Click()
	           If glngWhichWindows32 = mlngWindowsNT Then
	              AdjustToken
	              MsgBox "Post-AdjustToken GetLastError " & GetLastError
	           End If
	
	        ExitWindowsEx (EWX_SHUTDOWN Or EWX_FORCE), &HFFFF
	        MsgBox "ExitWindowsEx's GetLastError " & GetLastError
	
	        End Sub
	
	        Private Sub Form_Load()
	        '********************************************************************
	        '* When the project starts, check the operating system used by
	        '* calling the GetVersion function.
	        '********************************************************************
	           Dim lngVersion As Long
	
	           lngVersion = GetVersion()
	
	           If ((lngVersion And &H80000000) = 0) Then
	              glngWhichWindows32 = mlngWindowsNT
	              MsgBox "Running Windows NT or Windows 2000"
	           Else
	              glngWhichWindows32 = mlngWindows95
	              MsgBox "Running Windows 95/98/Me"
	           End If
	
	        End Sub
	
	4. To run the code:
	
	   - In Visual Basic, run the project or compile to an EXE and run the EXE.
	
	   - In Access, open the form.
	
	   - In the other Office 97 applications, add a macro to show the UserForm:
	
	        Sub ShowShutDownForm()
	          UserForm1.Show
	        End Sub
	
	     You can run this code from the Tools|Macro menu.
	
	     Also, in the UserForm, the last procedure's declaration needs to be changed
	     from:
	
	     Private Sub Form_Load()
	
	     to:
	
	     Sub Form_Initialize()
	
	   - In Excel 95, you can assign the code to be run from a Dialog or from the
	     Tools|Macro menu.
	
	Notes
	-----
	
	If you aren't implementing the code on a form, the code contained in the
	Form_Load must be run prior to the other code.
	
	Make sure you have saved all running programs before clicking a command button.
	
	In Windows 95, Windows 98, or Windows Me, your application may remain visible
	when executing the logoff and force logoff code. You may want to close your
	application after the API call returns. This is not a problem with the shutdown
	or force shutdown code.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q174883 DOC: ExitWindows Function Declaration Incorrect in API Viewer
	
	Win32 Programmer's Reference-Search on the following topics:
	
	- AdjustTokenPrivileges
	
	- ExitWindowsEx
	
	- GetLastError
	
	- Privileges
	
	- Logging Off or Shutting Down
	
	Additional query words: Log Off Shut Down ExitWindowsEx
	
	======================================================================
	Keywords          : kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbGrpDSVBDB kbDSupport kbVBA600 kbVBA500 kb32bitOnly 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVBASearch kbZNotKeyword3
	Version           : :4.0,5.0,6.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
