---
layout: page
title: "Q297060: HOWTO: Load a User Profile into the Registry with Visual Basic"
permalink: kb/297/Q297060/
---

## Q297060: HOWTO: Load a User Profile into the Registry with Visual Basic

	Article: Q297060
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbOSWinNT kbOSWinNT400 kbOSWin2000 kbRegistry kbSDKWin32 kbVBp kbVBp500 kbVBp600
	Last Modified: 07-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0, used with:
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows NT 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0, used with:
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows NT 4.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0, used with:
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to use the RegLoadKey registry function to load a
	user profile into the registry and, subsequently, how to use RegUnLoadKey to
	unload the user profile. Because RegLoadKey requires the SE_RESTORE_NAME
	privilege to be successful, this article also uses the OpenProcessToken,
	LookupPrivilegeValue, and AdjustTokenPrivileges functions.
	
	MORE INFORMATION
	================
	
	In part, the registry consists of files that store information about a user
	profile. When this file is loaded, it maps to the HKEY_USERS or
	HKEY_LOCAL_MACHINE key, whichever is specified in the call to RegLoadKey.
	
	To retrieve user profile-specific information, you can load the NtUser.dat file
	that is located in the profile path of the user profile that you want to load.
	It may be necessary to load a hive (user profile) when you try to provide
	profile-specific data. For example, either the ImpersonateLoggedOnUser function
	or the CreateProcessAsUser function is generally used to run under a different
	security context and does not load the profile of that user.
	
	The following steps illustrate how to load NtUser.dat and unload it when
	finished. These methods are not a threat to security because they only succeed
	if the calling process and the impersonated user have sufficient privileges.
	
	Step-by-Step Example
	--------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a TextBox control (Text1) and two CommandButton controls (Command1 and
	  Command2) to Form1.
	
	3. Paste the following code into the General Declarations section of Form1:
	
	  Option Explicit
	
	  Private Type LUID
	      LowPart As Long
	      HighPart As Long
	  End Type
	
	  Private Type LUID_AND_ATTRIBUTES
	      pLuid As LUID
	      Attributes As Long
	  End Type
	
	  Private Type TOKEN_PRIVILEGES
	      PrivilegeCount As Long
	      Privileges(1) As LUID_AND_ATTRIBUTES
	  End Type
	
	  Private Const TOKEN_ADJUST_PRIVLEGES = &H20
	  Private Const TOKEN_QUERY = &H8
	  Private Const SE_PRIVILEGE_ENABLED = &H2
	  Private Const HKEY_USERS = &H80000003
	  Private Const SE_RESTORE_NAME = "SeRestorePrivilege"
	  Private Const SE_BACKUP_NAME = "SeBackupPrivilege"
	
	  Private Declare Function GetCurrentProcess Lib "kernel32" () As Long
	
	  Private Declare Function OpenProcessToken Lib "advapi32.dll" _
	  (ByVal ProcessHandle As Long, ByVal DesiredAccess As Long, _
	                               TokenHandle As Long) As Long
	                               
	  Private Declare Function LookupPrivilegeValue Lib "advapi32.dll" Alias _
	  "LookupPrivilegeValueA" (ByVal lpSystemName As String, _
	  ByVal lpName As String, lpLuid As LUID) As Long
	
	  Private Declare Function AdjustTokenPrivileges Lib "advapi32.dll" _
	  (ByVal TokenHandle As Long, ByVal DisableAllPrivileges As Long, _
	  NewState As TOKEN_PRIVILEGES, ByVal BufferLength As Long, _
	  ByVal PreviousState As Long, ByVal ReturnLength As Long) As Long
	
	  Private Declare Function RegLoadKey Lib "advapi32.dll" Alias "RegLoadKeyA" _
	  (ByVal hKey As Long, ByVal lpSubKey As String, ByVal lpFile As String) _
	  As Long
	
	  Private Declare Function RegUnLoadKey Lib "advapi32.dll" Alias "RegUnLoadKeyA" _
	  (ByVal hKey As Long, ByVal lpSubKey As String) As Long
	
	  Private Retval As Long
	  Private strKeyName As String
	  Private MyToken As Long
	  Private TP As TOKEN_PRIVILEGES
	  Private RestoreLuid As LUID
	  Private BackupLuid As LUID
	
	  Private Sub Form_Load()
	      strKeyName = "keyLoaded"
	      ' Path to file on Windows NT: C:\WinNT\Profiles\<Profile Name>\NtUser.Dat
	      ' Path to file on Windows 2000: C:\Documents and Settings\<Profile Name>\NtUser.Dat
	      
	      Text1.Text = "<Path to File>"
	      Command2.Enabled = False
	      
	      Retval = OpenProcessToken(GetCurrentProcess, TOKEN_ADJUST_PRIVLEGES _
	         Or TOKEN_QUERY, MyToken)
	      If Retval = 0 Then MsgBox "OpenProcess: " & Err.LastDllError
	      
	      Retval = LookupPrivilegeValue(vbNullString, SE_RESTORE_NAME, _
	         RestoreLuid)
	      If Retval = 0 Then MsgBox "LookupPrivileges: " & Err.LastDllError
	      
	      Retval = LookupPrivilegeValue(vbNullString, SE_BACKUP_NAME, BackupLuid)
	      If Retval = 0 Then MsgBox "LookupPrivileges: " & Retval
	      
	      TP.PrivilegeCount = 2
	      TP.Privileges(0).pLuid = RestoreLuid
	      TP.Privileges(0).Attributes = SE_PRIVILEGE_ENABLED
	      TP.Privileges(1).pLuid = BackupLuid
	      TP.Privileges(1).Attributes = SE_PRIVILEGE_ENABLED
	          
	      Retval = AdjustTokenPrivileges(MyToken, vbFalse, TP, Len(TP), 0&, 0&)
	      If Retval = 0 Then MsgBox "AdjustTokenPrivileges: " & Err.LastDllError
	  End Sub
	      
	  Private Sub Command1_Click()
	      Retval = RegLoadKey(HKEY_USERS, strKeyName, Text1.Text)
	      If Retval <> 0 Then MsgBox "RegLoadKey: " & Retval
	      Command2.Enabled = True
	  End Sub
	
	  Private Sub Command2_Click()
	      Retval = RegUnLoadKey(HKEY_USERS, strKeyName)
	      If Retval <> 0 Then MsgBox "RegUnloadKey: " & Retval
	  End Sub
	
	  Private Sub Form_Unload(Cancel As Integer)
	      Retval = AdjustTokenPrivileges(MyToken, vbTrue, TP, Len(TP), 0&, 0&)
	      If Retval = 0 Then MsgBox "AdjustTokenPrivileges: " & Err.LastDllError
	  End Sub
	
	4. Save the project, and then press the F5 key to run it.
	
	5. Type the path to a specific user profile .dat file, for example:
	
	  "C:\WinNT\Profiles\Administrator\NtUser.dat" (without the quotation marks)
	
	  and then click Command1.
	
	6. Click Start, click Run, type "regedit" (without the quotation marks) (on
	  Windows NT) or regedt32 (on Windows 2000), and then click OK.
	
	7. Locate the HKEY_USERS subtree. Notice that this subtree includes the new key,
	  KeyLoaded.
	
	8. In the Visual Basic project, click Command2 to remove this key from the
	  registry.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q161334 Guide To Windows NT 4.0 Profiles and Policies (Part 1 of 6)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbOSWinNT kbOSWinNT400 kbOSWin2000 kbRegistry kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbCodeSnippet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
