---
layout: page
title: "Q257541: HOWTO: Write to the NT Sys Log with the Windows Script Host"
permalink: /kb/257/Q257541/
---

## Q257541: HOWTO: Write to the NT Sys Log with the Windows Script Host

	Article: Q257541
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbWSH kbGrpDSFox kbDSu
	Last Modified: 06-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Script Host makes it easy to write to the Windows NT or Windows
	2000 System Application Event Log. The Event Viewer is used to view and manage
	logs of system, program, and security events on computers running Windows NT or
	Windows 2000. You can use the event logs in Event Viewer to gather information
	about hardware, software, and system problems and monitor Windows security
	events.
	
	MORE INFORMATION
	================
	
	Windows NT and Windows 2000 record events in three kinds of logs:
	
	- Application log
	  The application log contains events logged by applications or programs. For
	  example, a database program might record a file error in the application log.
	  The developer decides which events to record.
	
	- System log
	  The system log contains events logged by the Windows NT or Windows 2000 system
	  components. For example, the failure of a driver or other system component to
	  load during startup is recorded in the system log. The event types logged by
	  system components are predetermined.
	
	- Security log
	  The security log can record security events such as valid and invalid logon
	  attempts, as well as events related to resource use, such as creating,
	  opening, or deleting files. An administrator can specify what events are
	  recorded in the security log. For example, if you have enabled logon
	  auditing, attempts to log on to the system are recorded in the security log.
	
	Event Viewer displays these types of events:
	
	- Error
	  A significant problem, such as loss of data or loss of functionality. For
	  example, if a service fails to load during startup, an error is logged.
	
	- Warning
	  An event that is not necessarily significant, but might indicate a possible
	  future problem. For example, when disk space is low, a warning is logged.
	
	- Information
	  An event that describes the successful operation of an application, driver, or
	  service. For example, when a network driver loads successfully, an
	  information event is logged.
	
	- Success audit
	  An audited security access attempt that succeeds. For example, a user's
	  successful attempt to log on to the system is logged as a success audit
	  event.
	
	- Failure audit
	  An audited security access attempt that fails. For example, if a user tries to
	  access a network drive and fails, the attempt is logged as a failure audit
	  event.
	
	The event log service starts automatically when you start Windows NT or Windows
	2000. Application and system logs can be viewed by all users, but security logs
	are accessible only to administrators.
	
	The following code demonstrates how to use the Windows Script Host to write to
	the Windows NT or Windows 2000 application log. If you are using this code on
	Windows 95 or Windows 98, it will write to Wsh.log in the user's Windows
	directory. The Wsh.log file contains a time stamp, the event type, and the text
	of the log entry.
	
	The LogEvent method uses the following syntax:
	
	  
	
	  LogEvent(intType, strMessage [,strTarget])
	
	where:
	
	  intType is a number representing the type of the event.
	  strMessage is the text of the log entry.
	  strTarget is optional. It represents the name of the system where the event
	  should be logged. The default is the local system. (This parameter is for
	  Windows NT or Windows 2000. It's ignored on Windows 9x.)
	
	To write an event to another computer's log, change the first #DEFINE in the
	following code to a valid Windows NT or Windows 2000 computer name, such as
	MYSERVER. Backslashes are not required.
	
	   
	  #DEFINE TARGET_SYSTEM SUBSTR(SYS(0),1,ATC('#',SYS(0))-1)
	  #DEFINE SUCCESS 0
	  #DEFINE ERROR 1
	  #DEFINE WARNING 2
	  #DEFINE INFORMATION 4
	  #DEFINE AUDIT_SUCCESS 8
	  #DEFINE AUDIT_FAILURE 16
	  WshShell = CreateObject("WScript.Shell")
	  *!* Logevent returns .t. for SUCCESS for .f. for FAILURE
	  ?WshShell.LogEvent(SUCCESS, "Logon Script Completed Successfully")
	  WshShell.LogEvent(ERROR, "Logon Script Completed Successfully")
	  WshShell.LogEvent(WARNING, "We are getting low on disk space!!")
	  WshShell.LogEvent(INFORMATION, "Start nightly backup")
	  WshShell.LogEvent(AUDIT_SUCCESS, "Checksum Success!!")
	  WshShell.LogEvent(AUDIT_FAILURE, "Checksum Failure")
	  WshShell.LogEvent(AUDIT_FAILURE, "Checksum Failure",TARGET_SYSTEM)
	  WshShell=.NULL.
	
	REFERENCES
	==========
	
	See the following topics at:
	
	  Microsoft Windows Script Technologies
	  (http://www.msdn.Microsoft.com/scripting/)
	
	Click Windows Script Host in the left pane, and then click Documentation. Under
	Documentation, click either Whitepaper or Technical paper to reach these
	documents:
	
	  White paper:
	  Windows Script Host: A Universal Scripting Host for Scripting Languages
	
	  Technical paper:
	  Windows Script Host Programmer's Reference
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMiscTools kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbWSH kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
