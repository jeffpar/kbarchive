---
layout: page
title: "Q154576: HOWTO: Write to the Windows NT Event Log from Visual Basic"
permalink: /kb/154/Q154576/
---

## Q154576: HOWTO: Write to the Windows NT Event Log from Visual Basic

{% raw %}

	Article: Q154576
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 28-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Event logging in Windows provides a standard, centralized way for Windows and
	any other applications to record important software and hardware events. It also
	supplies a standard user interface for viewing the logs and a programming
	interface for examining the logs.
	
	This article illustrates how to write to the NT or Windows 2000 Event Log with
	Visual Basic versions 4.0 and later. With Visual Basic version 4.0, you must use
	the Win32 API. Visual Basic versions 5.0 and later have built-in functionality
	for event-logging so the API functions are unnecessary.
	
	MORE INFORMATION
	================
	
	Visual Basic versions 5.0 and Later
	-----------------------------------
	
	Visual Basic versions 5.0 and later expose three methods and properties of the
	App object by which event-logging can be enabled:
	
	  LogMode Property
	  LogPath Property
	  LogEvent Method
	
	The LogMode property returns a value that determines how logging (through the
	LogEvent method) will be carried out. (Read-only at run time).
	
	The LogPath property returns the path and filename of the file used to capture
	output from the LogEvent method. (Read-only at run time).
	
	The LogEvent method writes an event into the application's log target. On Windows
	NT or Windows 2000 platforms, the method writes to the NT or Windows 2000 Event
	log. On Windows 95, Windows 98, and Windows Me platforms, the method writes to
	the file specified in the LogPath property; by default, if no file is specified,
	events will be written to a file named vbevents.
	
	The Event Log only updates when your application is running as a compiled .EXE.
	It will not write events to the Event log when run from the IDE. This is to
	prevent excessive data from being written to the Event Log during debugging.
	
	Visual Basic 4.0 (32-bit)
	-------------------------
	
	The following example shows how to send three different types of events. These
	steps are for applications written with Visual Basic 4.0 only.
	
	Information, Warnings, and Errors:
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. From the File menu, choose Remove file to remove the default form.
	
	3. From the Insert menu, choose Module to add a new module, "Module1" (without
	  the quotation marks), to the project.
	
	4. Insert the following code into Module1:
	
	        Option Explicit
	
	        Declare Function RegisterEventSource Lib "advapi32.dll" Alias _
	          "RegisterEventSourceA" ( ByVal lpUNCServerName As String, _
	          ByVal lpSourceName As String) As Long
	        Declare Function DeregisterEventSource Lib "advapi32.dll" ( _
	          ByVal hEventLog As Long) As Long
	        Declare Function ReportEvent Lib "advapi32.dll" Alias  _
	        "ReportEventA" ( _
	          ByVal hEventLog As Long, ByVal wType As Integer, _
	          ByVal wCategory As Integer, ByVal dwEventID As Long, _
	          ByVal lpUserSid As Any, ByVal wNumStrings As Integer, _
	          ByVal dwDataSize As Long, plpStrings As Long, _
	          lpRawData As Any) As Boolean
	        Declare Function GetLastError Lib "kernel32" () As Long
	        Declare Sub CopyMemory Lib "kernel32" Alias "RtlMoveMemory" ( _
	          hpvDest As Any,hpvSource As Any, _
	          ByVal cbCopy As Long)
	        Declare Function GlobalAlloc Lib "kernel32" ( _
	           ByVal wFlags As Long, _
	           ByVal dwBytes As Long) As Long
	        Declare Function GlobalFree Lib "kernel32" ( _
	           ByVal hMem As Long) As Long
	
	        Public Const EVENTLOG_SUCCESS = 0
	        Public Const EVENTLOG_ERROR_TYPE = 1
	        Public Const EVENTLOG_WARNING_TYPE = 2
	        Public Const EVENTLOG_INFORMATION_TYPE = 4
	        Public Const EVENTLOG_AUDIT_SUCCESS = 8
	        Public Const EVENTLOG_AUDIT_FAILURE = 10
	
	        Public Sub LogNTEvent(sString As String, iLogType As Integer, _
	          iEventID As Long)
	          Dim bRC As Boolean
	          Dim iNumStrings As Integer
	          Dim hEventLog As Long
	          Dim hMsgs As Long
	          Dim cbStringSize As Long
	          hEventLog = RegisterEventSource("", App.Title)
	          cbStringSize = Len(sString) + 1
	          hMsgs = GlobalAlloc(&H40, cbStringSize)
	          CopyMemory ByVal hMsgs, ByVal sString, cbStringSize
	          iNumStrings = 1
	          If ReportEvent(hEventLog, _
	             iLogType, 0, _
	             iEventID, 0&, _
	             iNumStrings, cbStringSize, _
	             hMsgs,hMsgs) = 0 Then
	             MsgBox GetLastError()
	          End If
	          Call GlobalFree(hMsgs)
	          DeregisterEventSource (hEventLog)
	        End Sub
	
	        Sub Main()
	          Call LogNTEvent("Information from " & App.EXEName, _
	            EVENTLOG_INFORMATION_TYPE, 1001)
	          Call LogNTEvent("Warning from " & App.EXEName, _
	            EVENTLOG_WARNING_TYPE, 1002)
	          Call LogNTEvent("Error from " & App.EXEName, _
	            EVENTLOG_ERROR_TYPE, 1003)
	          Msgbox "Done"
	        End Sub
	
	5. Press the F5 key to start the project.
	
	You need to start the NT Applet, EVENTVWR.EXE, to view the events entered with
	the code. Because your events are coming from an Application, you need to select
	the "Application" option from the Log Menu and then press the F5 key to refresh
	the view. Your events should be there under the name of Project1.
	
	REFERENCES
	==========
	
	For additional information, please click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q184747 INFO: Event Logging in Visual Basic
	
	  Q161306 INFO: App.LogEvent Only Logs in Compiled Applications
	
	  Q161283 INFO: Default Filename for Text File Error Log: VBEVENTS.LOG
	
	Microsoft Developer Support Network (MSDN)
	
	Platform SDK; Reference; Functions -- Win32 Functions
	
	Microsoft Visual Basic 5.0 Online Help
	
	Additional query words: Win32 ReportEvent
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
