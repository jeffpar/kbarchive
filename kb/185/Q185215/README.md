---
layout: page
title: "Q185215: HOWTO: Use the SeDebugPrivilege to Acquire Any Process Handle"
permalink: kb/185/Q185215/
---

## Q185215: HOWTO: Use the SeDebugPrivilege to Acquire Any Process Handle

	Article: Q185215
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbcode kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By setting the SeDebugPrivilege privilege on the running process, you can obtain
	the process handle of any running application. When obtaining the handle to a
	process, you can then specify the PROCESS_ALL_ACCESS flag, which will allow the
	calling of various Win32 APIs upon that process handle, which you normally could
	not do. Some of the Win32 APIs that could be successfully called include the
	following:
	
	- TerminateProcess
	
	- CreateRemoteThread
	
	This article contains an in-depth example on how you can set the SeDebugPrivilege
	upon your application process token, and use that to terminate another
	application. This is an advanced topic, and a strong knowledge of process
	security is highly recommended.
	
	The discussion of what Process Access, Process Tokens, and Token Privileges are
	not covered within the scope of this article. This article assumes that the
	reader already understands these advanced topics.
	
	MORE INFORMATION
	================
	
	This sample involves creating three separate Visual Basic applications. Each
	application will be built one at a time and then used together to demonstrate
	the power of the SeDebugPrivilege process privilege.
	
	Application #1 (Term01.exe)
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic 5.0.
	
	2. Change the project name to Term01.
	
	3. Rename Form1 to frmTerm01.
	
	4. Add a Command Button to frmTerm01.
	
	5. Set the caption for Command1 to "Terminate Notepad."
	
	6. Add the following code to frmTerm01:
	
	        Option Explicit
	
	        Private Sub Command1_Click()
	
	           ' This is a simple application that attempts
	           ' to shut down any process that is passed in through
	           ' the command line.
	
	           Call TerminateProcess(CLng(Command$), 0)
	
	        End Sub
	
	7. Add a standard Module to the project, and rename it to MdlApi01.
	
	8. Add the following code to MdlApi01:
	
	        Option Explicit
	
	        Declare Function TerminateProcess Lib "kernel32" _
	           (ByVal hProcess As Long, _
	           ByVal uExitCode As Long) As Long
	
	9. Save the project and make the exe file (Term01.exe).
	
	Application #2 (Term02.exe)
	---------------------------
	
	1. Create a new standard EXE in Visual Basic 5.0.
	
	2. Change the project name to Term02.
	
	3. Rename Form1 to frmTerm02.
	
	4. Add a Command Button to frmTerm02.
	
	5. Set the caption for Command1 to "Terminate Notepad."
	
	6. Add a list box to frmTerm02.
	
	7. Set the width of ListBox1 to 3735.
	
	8. Add the following code to frmTerm02:
	
	        Private Sub Command1_Click()
	
	           ' The PID of the application you want to kill will be received
	           ' through the command line. Convert it to a long so it can be
	           ' used with the various API calls.
	
	           SeDebugSample CLng(Command$)
	
	        End Sub
	
	9. Add a standard Module to the project, and rename it to mdlAPI02.
	
	10. Add the following code to the module mdlApi02:
	
	        Option Explicit
	
	        ' Constants used for various API calls. Refer to MSDN for detailed
	        ' information about what these constants mean.
	
	        Public Const TOKEN_ADJUST_PRIVILEGES = &H20
	        Public Const TOKEN_QUERY = &H8
	        Public Const ANYSIZE_ARRAY = 1
	        Public Const PROCESS_ALL_ACCESS = &H1F0FFF
	        Public Const SE_DEBUG_NAME = "SeDebugPrivilege"
	        Public Const SE_PRIVILEGE_ENABLED = &H2
	
	        ' Structures used with various API calls.
	        ' Refer to MSDN for detailed information
	        ' about what these structures are, and how they are used.
	
	        Type LARGE_INTEGER
	           lowpart As Long
	           highpart As Long
	        End Type
	
	        Type Luid
	           lowpart As Long
	           highpart As Long
	        End Type
	
	        Type LUID_AND_ATTRIBUTES
	           pLuid As Luid
	           Attributes As Long
	        End Type
	
	        Type TOKEN_PRIVILEGES
	           PrivilegeCount As Long
	           Privileges(ANYSIZE_ARRAY) As LUID_AND_ATTRIBUTES
	        End Type
	
	        ' Refer to the MSDN for detailed information on
	        ' all of these API calls.
	
	        Declare Function CloseHandle Lib "kernel32" _
	           (ByVal hObject As Long)As Long
	        Declare Function GetCurrentProcess Lib "kernel32" () As Long
	        Declare Function OpenProcessToken Lib "advapi32.dll" _
	           (ByVal ProcessHandle As Long, ByVal DesiredAccess As Long, _
	        TokenHandle As Long) As Long
	        Declare Function LookupPrivilegeValue Lib "advapi32.dll" Alias _
	           "LookupPrivilegeValueA" (ByVal lpSystemName As String, _
	           ByVal lpName As String, lpLuid As Luid) As Long
	        Declare Function AdjustTokenPrivileges Lib "advapi32.dll" _
	           (ByVal TokenHandle As Long, ByVal DisableAllPrivileges As Long, _
	           NewState As TOKEN_PRIVILEGES, ByVal BufferLength As Long, _
	           PreviousState As TOKEN_PRIVILEGES, ReturnLength As Long) As Long
	        Declare Function OpenProcess Lib "kernel32" _
	           (ByVal dwDesiredAccess As Long, ByVal bInheritHandle As Long, _
	           ByVal dwProcessId As Long) As Long
	        Declare Function TerminateProcess Lib "kernel32" _
	           (ByVal hProcess As Long, ByVal uExitCode As Long) As Long
	
	        ' SeDebugSample shows how to grab the Process Handle of any running
	        ' Application, and then use the SeDebug privilege to shut it down.
	
	        Public Sub SeDebugSample(ApplicationPID As Long)
	           Dim hProcessID As Long         ' Handle to your sample
	                                          ' process you are going to
	                                          ' terminate.
	           Dim hProcess As Long           ' Handle to your current process
	                                          ' (Term02.exe).
	           Dim hToken As Long             ' Handle to your process token.
	           Dim lPrivilege As Long         ' Privilege to enable/disable
	           Dim iPrivilegeflag As Boolean  ' Flag whether to enable/disable
	                                          ' the privilege of concern.
	           Dim lResult As Long            ' Result call of various APIs.
	
	           ' clear the list box first
	           frmTerm02.List1.Clear
	           frmTerm02.List1.AddItem "Start SeDebug Sample"
	
	           ' set the incoming PID to our internal variable
	           hProcessID = ApplicationPID
	
	           ' get our current process handle
	           hProcess = GetCurrentProcess
	
	           ' show our handle just for fun
	           frmTerm02.List1.AddItem "Current (Pseudo) Process Handle : " & _
	                                   Hex(hProcess)
	
	           ' open the tokens for this process (Term02.exe)
	           lResult = OpenProcessToken(hProcess, TOKEN_ADJUST_PRIVILEGES Or _
	                                     TOKEN_QUERY, hToken)
	
	           ' if OpenProcessToken fails, the return result is zero, test for
	           ' success here
	
	           If (lResult = 0) Then
	           frmTerm02.List1.AddItem "Error: _
	                                   Unable To Open Process Token : " _
	                                   & Err.LastDllError
	              CloseHandle (hToken)
	              Exit Sub
	           Else
	              ' show success
	              frmTerm02.List1.AddItem "Opened Process Token : " & hToken
	           End If
	
	           ' Now that you have the token for this process, you want to set
	           ' the SE_DEBUG_NAME privilege.
	
	           lResult = SetPrivilege(hToken, SE_DEBUG_NAME, True)
	
	           ' Make sure you could set the privilege on this token.
	
	           If (lResult = False) Then
	              frmTerm02.List1.AddItem _
	                 "Error : Could Not Set SeDebug Privilege on Token Handle"
	              CloseHandle (hToken)
	              Exit Sub
	           Else
	              frmTerm02.List1.AddItem "Set SeDebug Privilege On Token Handle"
	           End If
	
	           ' Now that you have changed the privileges on the token,
	           ' have some fun. You can now get a process handle to the
	           ' process ID that you passed into this program, and
	           ' demand whatever access you want on it!
	
	           hProcess = OpenProcess(PROCESS_ALL_ACCESS, 0, hProcessID)
	
	           ' Make sure you opened the process so you can do stuff with it
	           If (hProcess = Null) Then
	              frmTerm02.List1.AddItem _
	                 "Error : Unable To Open Process : " & Err.LastDllError
	              CloseHandle (hToken)
	              Exit Sub
	           Else
	              frmTerm02.List1.AddItem "Opened Process : " & hProcess
	           End If
	
	           ' Now turn the SE_DEBUG_PRIV back off,
	           lResult = SetPrivilege(hToken, SE_DEBUG_NAME, False)
	
	           ' Make sure you succeeded in reversing the privilege!
	           If (lResult = False) Then
	              frmTerm02.List1.AddItem _
	                "Error : Unable To Disable SeDebug Privilege On Token Handle"
	              CloseHandle (hProcess)
	              CloseHandle (hToken)
	              Exit Sub
	           Else
	              frmTerm02.List1.AddItem _
	                 "Disabled SeDebug Privilege On Token Handle"
	           End If
	
	           ' Now you want to kill the application, which you can do since
	           ' your process handle to the application includes full access to
	           ' romp and roam - you got the process handle when you had the
	           ' SE_DEBUG_NAME privilege enabled!
	           lResult = TerminateProcess(hProcess, 0)
	
	           ' Let's see the result, and go from there.
	           If (lResult = 0) Then
	              frmTerm02.List1.AddItem _
	              "Error : Unable To Terminate Application : " & Err.LastDllError
	              CloseHandle (hProcess)
	              CloseHandle (hToken)
	              Exit Sub
	           Else
	              frmTerm02.List1.AddItem "Terminated Application"
	           End If
	
	           ' Close our handles and get out of here.
	           CloseHandle (hProcess)
	           CloseHandle (hToken)
	
	           ' Finally, let the user know that you have completed the
	           ' SeDebug Sample.
	           frmTerm02.List1.AddItem "SeDebug Sample Completed"
	
	        End Sub
	
	        ' The SetPrivilege function will accept a handle to a token, a
	        ' privilege, and a flag to either enable/disable that privilege. The
	        ' function will attempt to perform the desired action upon the token
	        ' returning TRUE if it succeeded, or FALSE if it failed.
	
	        Private Function SetPrivilege(hToken As Long, Privilege As String, _
	                                      bSetFlag As Boolean) As Boolean
	
	           Dim TP As TOKEN_PRIVILEGES          ' Used in getting the current
	                                               ' token privileges
	           Dim TPPrevious As TOKEN_PRIVILEGES  ' Used in setting the new
	                                               ' token privileges
	           Dim Luid As Luid                    ' Stores the Local Unique
	                                               ' Identifier - refer to MSDN
	           Dim cbPrevious As Long              ' Previous size of the
	                                               ' TOKEN_PRIVILEGES structure
	           Dim lResult As Long                 ' Result of various API calls
	
	           ' Grab the size of the TOKEN_PRIVILEGES structure,
	           ' used in making the API calls.
	           cbPrevious = Len(TP)
	
	           ' Grab the LUID for the request privilege.
	           lResult = LookupPrivilegeValue("", Privilege, Luid)
	
	           ' If LoopupPrivilegeValue fails, the return result will be zero.
	           ' Test to make sure that the call succeeded.
	           If (lResult = 0) Then
	              SetPrivilege = False
	           End If
	
	           ' Set up basic information for a call.
	           ' You want to retrieve the current privileges
	           ' of the token under concern before you can modify them.
	           TP.PrivilegeCount = 1
	           TP.Privileges(0).pLuid = Luid
	           TP.Privileges(0).Attributes = 0
	           SetPrivilege = lResult
	
	           ' You need to acquire the current privileges first
	           lResult = AdjustTokenPrivileges(hToken, -1, TP, Len(TP), _
	                                          TPPrevious, cbPrevious)
	
	           ' If AdjustTokenPrivileges fails, the return result is zero,
	           ' test for success.
	           If (lResult = 0) Then
	              SetPrivilege = False
	           End If
	
	           ' Now you can set the token privilege information
	           ' to what the user is requesting.
	           TPPrevious.PrivilegeCount = 1
	           TPPrevious.Privileges(0).pLuid = Luid
	
	           ' either enable or disable the privilege,
	           ' depending on what the user wants.
	           Select Case bSetFlag
	              Case True: TPPrevious.Privileges(0).Attributes = _
	                         TPPrevious.Privileges(0).Attributes Or _
	                         (SE_PRIVILEGE_ENABLED)
	              Case False: TPPrevious.Privileges(0).Attributes = _
	                          TPPrevious.Privileges(0).Attributes Xor _
	                          (SE_PRIVILEGE_ENABLED And _
	                          TPPrevious.Privileges(0).Attributes)
	           End Select
	
	           ' Call adjust the token privilege information.
	           lResult = AdjustTokenPrivileges(hToken, -1, TPPrevious, _
	                                          cbPrevious, TP, cbPrevious)
	
	           ' Determine your final result of this function.
	           If (lResult = 0) Then
	              ' You were not able to set the privilege on this token.
	              SetPrivilege = False
	           Else
	              ' You managed to modify the token privilege
	              SetPrivilege = True
	           End If
	
	        End Function
	
	11. Save the project to the same directory as the Term01 project, and make the
	  .exe file (Term02.exe).
	
	Application #3 (MainTest.exe)
	-----------------------------
	
	1. Create a new standard EXE project in Visual Basic 5.0.
	
	2. Rename the project to MainTest.
	
	3. Rename Form1 To frmTest.
	
	4. Add three Command Buttons to the form.
	
	5. Set the caption for Command1 to "Start Notepad."
	
	6. Set the caption for Command2 to "Start Term01."
	
	7. Set the caption for Command3 to "Start Term02."
	
	8. Add the following code to frmTest:
	
	        Option Explicit
	
	        ' You want to keep the process ID of the NotePad instance
	        ' that you create
	        Private iAppPID As Long
	
	        Private Sub Command1_Click()
	
	           ' Create an instance of the NotePad.exe application.
	           iAppPID = Shell("Notepad.exe", vbNormalFocus)
	
	        End Sub
	
	        Private Sub Command2_Click()
	
	           ' You will try to terminate the NotePad application by another
	           ' application, which is running in its own process space.
	           ' This will FAIL.
	
	           Call Shell(App.Path & "\Term01.Exe " & iAppPID, vbNormalFocus)
	
	        End Sub
	
	        Private Sub Command3_Click()
	
	           ' You will try to terminate the NotePad application by another
	           ' application, which is running in its own process space.
	           ' However, this application is going to use the SeDebugPrivilege,
	           ' and will be able to terminate the application without a fuss.
	
	           Call Shell(App.Path & "\Term02.Exe " & iAppPID, vbNormalFocus)
	
	        End Sub
	
	9. Save the project to the same directory as the Term01 project, and make the
	  .exe file (MainTest.exe).
	
	Running the Sample
	------------------
	
	Once you have built and compiled the three applications, you can see the
	demonstration in action. In the second application (Term02.exe), the code
	assumes that the Notepad application (Notepad.exe) is located within the path.
	
	1. Run the MainTest.exe program. This will be our "control pad" for the
	  demonstration.
	
	2. Click the Start Notepad button. This will launch Notepad.
	
	3. Click the Start Term01 button. This will launch the Term01 application.
	
	4. Click the Terminate Notepad Button on the Term01 application. It is intended
	  to shut down Notepad, but does not succeed.
	
	5. Close the Term01 application.
	
	6. Click the Start Term02 button on the MainTest application. This will launch
	  the Term02 application.
	
	7. Click the Terminate Notepad button on the Term02 application. This will start
	  the SeDebugPrivilege demonstration, which will result in Notepad being
	  terminated. The list box provides visual feedback to what is going on in the
	  process.
	
	Additional query words: kbDSupport kbdss kbnokeyword
	
	======================================================================
	Keywords          : kbcode kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbhowto
	
	=============================================================================
	
