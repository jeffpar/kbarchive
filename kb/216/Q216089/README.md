---
layout: page
title: "Q216089: HOWTO: Back Up the NT Event Log in Visual Basic"
permalink: /kb/216/Q216089/
---

## Q216089: HOWTO: Back Up the NT Event Log in Visual Basic

	Article: Q216089
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbEventLog kbOSWinNT400 kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbD
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
	applications to record important software and hardware events. It also supplies
	a standard user interface for viewing the logs and a programming interface for
	examining the logs.
	
	This article illustrates how to back up the NT Event Log with Visual Basic
	versions 4.0 and later. This can be done using the BackupEventLog API call.
	While Visual Basic versions 5.0 and later have built-in functionality for
	event-logging, they do not provide the backup functionality that the Win32 API
	does.
	
	MORE INFORMATION
	================
	
	The following example shows how to back up the local Application Event Log to a
	file named appback.evt:
	
	Step by Step Example:
	
	1. Create a new standard project in Visual Basic. Form1 is created by default.
	
	2. Add a CommandButton to Form1 and change its name to "cmdBackupEventLog "
	  (without the quotation marks).
	
	3. Add the following code to the Form1 code window:
	
	  Private Declare Function BackupEventLog Lib "advapi32.dll" Alias "BackupEventLogA" ( _
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
	
	  Private Sub cmdBackupEventLog_Click()
	      Dim hEventLog As Long
	      Dim lretv As Long
	      
	      hEventLog = OpenEventLog(VBNullString, "Application")
	      If hEventLog = 0 Then
	           Debug.Print "OpenEventLog Failed"
	           Exit Sub
	      End If
	      
	      lretv = BackupEventLog(hEventLog, "appback.evt")
	      If lretv = 0 Then
	           Debug.Print "BackupEventLog Failed"
	           Exit Sub
	      End If
	                  
	      lretv = CloseEventLog(hEventLog)
	      If lretv = 0 Then
	           Debug.Print "CloseEventLog Failed"
	           Exit Sub
	      End If
	
	  End Sub
	
	4. Press the F5 key to run the project and click cmdBackupEventLog. This backs
	  up the Event Log to the file appback.evt.
	
	REFERENCES
	==========
	
	  For additional information about event logging from Visual Basic, click the
	  article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q154576 HOWTO: Write to the NT Event Log from Visual Basic
	
	  
	
	  Q161306 INFO: App.LogEvent Only Logs in Compiled Applications
	
	  
	
	  Q184747 INFO: Event Logging in Visual Basic
	
	  
	
	  Q216097 HOWTO: Clear the NT Event Log in Visual Basic
	
	  
	
	  Q216146 HOWTO: Get the Number of NT Event Log Records in Visual Basic
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbEventLog kbOSWinNT400 kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
