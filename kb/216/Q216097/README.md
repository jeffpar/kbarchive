---
layout: page
title: "Q216097: HOWTO: Clear the Windows NT Event Log in Visual Basic"
permalink: kb/216/Q216097/
---

## Q216097: HOWTO: Clear the Windows NT Event Log in Visual Basic

	Article: Q216097
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbEventLog kbOSWinNT kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSup
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Event logging in Windows provides a standard, centralized way for Windows and
	applications to record important software and hardware events. Event logging
	also supplies a standard user interface for viewing the logs and a programming
	interface for examining the logs.
	
	This article illustrates how to clear the Windows NT Event Log with Visual Basic
	version 4.0 (32-bit) and later. This can be done using the ClearEventLog API
	call. While Visual Basic 5.0 and later versions have built in functionality for
	event logging, they do not provide the clearing functionality that the Win32 API
	does.
	
	MORE INFORMATION
	================
	
	Although the parameter lpBackupFileName of ClearEvent is set to VbNullString,
	this can be set to a backup filename as well making a separate call to
	BackupEventLog unnecessary.
	
	The following example illustrates how to clear the local Application Event Log.
	
	Step by Step Example:
	
	1. Create a project with a Visual Basic form (named Form1) and a command button
	  named cmdClearEventLog.
	
	2. Add the following code to the Form1 code window:
	
	  Private Declare Function ClearEventLog Lib "advapi32.dll" Alias "ClearEventLogA" ( _
	      ByVal hEventLog As Long, _
	      ByVal lpBackupFileName As String) _
	      As Long
	
	  Private Declare Function CloseEventLog Lib "advapi32.dll" ( _
	      ByVal hEventLog As Long) _
	      As Long
	
	  Private Declare Function OpenEventLog Lib "advapi32.dll" Alias "OpenEventLogA" ( _
	      ByVal lpUNCServerName As String, _
	      ByVal lpSourceName As String) _
	      As Long
	
	  Private Sub cmdClearEventLog_Click()
	      Dim hEventLog As Long
	      Dim lretv As Long
	      
	      hEventLog = OpenEventLog(vbNullString, "Application")
	      If hEventLog = 0 Then
	           Debug.Print "OpenEventLog Failed"
	           Exit Sub
	      End If
	      
	      lretv = ClearEventLog(hEventLog, vbNullString)
	      If lretv = 0 Then
	           Debug.Print "ClearEventLog Failed"
	           Exit Sub
	      End If
	                  
	      lretv = CloseEventLog(hEventLog)
	      If lretv = 0 Then
	           Debug.Print "CloseEventLog Failed"
	           Exit Sub
	      End If
	
	  End Sub
	
	3. Press F5 to run the project, and then the click cmdClearEventLog command
	  button. If you check the Event log, it should be clear.
	
	REFERENCES
	==========
	
	For additional information on event logging from Visual Basic, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q154576 HOWTO: Write to the Windows NT Event Log from Visual Basic
	
	  Q161306 INFO: App.LogEvent Only Logs in Compiled Applications
	
	  Q184747 INFO: Event Logging in Visual Basic
	
	  Q216146 HOWTO: Get the Number of Windows NT Event Log Records in Visual Basic
	
	  Q216089 HOWTO: Backup the NT Event Log in Visual Basic
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbEventLog kbOSWinNT kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbCodeSnippet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
