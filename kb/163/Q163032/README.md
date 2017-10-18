---
layout: page
title: "Q163032: XCON: Description of Diagnostics Logging for MTA"
permalink: kb/163/Q163032/
---

## Q163032: XCON: Description of Diagnostics Logging for MTA

	Article: Q163032
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 03-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article provides descriptions of the logging categories on the message
	transfer agent (MTA) of Exchange Server.
	
	MORE INFORMATION
	================
	
	X.400 Service
	-------------
	
	X.400 protocol events, such as submission and delivery reports.
	
	Resource
	--------
	
	Events related to the use of MTA resources.
	
	Security
	--------
	
	Events related to attempted security violations.
	
	Interface
	---------
	
	Communication among MTA components and between MTAs. Includes RPC use.
	
	Field Engineering
	-----------------
	
	Internal debugging trace.
	
	MTA Administration
	------------------
	
	Administration program access to MTA queues and routing information.
	
	Configuration
	-------------
	
	The configuration of internal parameters and/or problems in one or more MTA
	configuration files.
	
	Directory Access
	----------------
	
	Events related to the MTA's use of the directory.
	
	Operating System
	----------------
	
	Events related to the MTA's use of Windows NT functions, such as thread creation
	and file operations.
	
	Internal Processing
	-------------------
	
	Events related to the internal operation of MTA application code. Error events in
	this category indicate serious problems in the MTA.
	
	Interoperability
	----------------
	
	Tracks the binary content of protocol messages. Use this category and Interface
	to log stack traces and XAPI traces to MTADATA\AP*.LOG. NOTE: No additional
	events are logged to the application or EV*.LOGs when logging is turned up on
	this category.
	
	APDU (Application Protocol Data Unit)
	-------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Tracks full P1 content (MTA send/receive) and fully encoded P1 APDU
	(communication between remote MTAs) to diagnose interoperability or conformance
	problems. Use this category and X.400 Service to log binary data to
	MTADATA\BF*.LOG.
	
	NOTE: No additional events are logged to the program or EV*.LOGs when logging is
	turned up on this category.
	
	EV*.LOGs are Text Event Logs. You can enable these logs by updating the registry
	key TextEventLogging. To do so:
	
	1. Start the Registry Editor (Regedt32.exe).
	
	2. Locate the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeMTA\Parameters\TextEventLogging
	
	3. Change the DWord value to 1.
	
	4. Quit the Registry Editor.
	
	' ------------------------------------------------------------------------
	' Q153188 Script to enable bf*.log, ev*.log and ap*.log for 5.x MTA
	' ------------------------------------------------------------------------
	'               Copyright (C) 1996-2000 Microsoft Corporation
	'
	' You have a royalty-free right to use, modify, reproduce and distribute
	' the Sample Application Files (and/or any modified version) in any way
	' you find useful, provided that you agree that Microsoft has no warranty,
	' obligations or liability for any Sample Application Files.
	' ------------------------------------------------------------------------
	
	Windows Script Host must be installed. To do so, visit the following MSDN Web
	site:
	
	  http://msdn.microsoft.com/scripting
	
	NOTE: In the code that follows, "HKLM" means "HKEY_LOCAL_MACHINE".
	
	  Choice = Inputbox("Enter 1 to make the changes or 2 to set them to defaults")
	  Select Case Choice
	    Case "1"
	      L_Welcome_MsgBox_Message_Text   = "This script configures the MTA to provide bf, ev and ap logs for advanced analysis."
	      L_Welcome_MsgBox_Title_Text     = "Modifying registry values"
	      Call Welcome()
	      Dim WSHShell
	      Set WSHShell = WScript.CreateObject("WScript.Shell")
	      WSHShell.Popup "Setting value HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Parameters\Text Event Log to 1"
	      WSHShell.RegWrite "HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Parameters\Text Event Log" , 1, "REG_DWORD"
	      WSHShell.Popup "Setting value HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\X.400 Service to Level 4"
	      WSHShell.RegWrite "HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\1 X.400 Service" , 4, "REG_DWORD"
	      WSHShell.Popup "Setting value HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\APDU to Level 4"
	      WSHShell.RegWrite "HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\12 APDU" , 4, "REG_DWORD"
	      WSHShell.Popup "Setting value HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\Interface to Level 5"
	      WSHShell.RegWrite "HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\4 Interface" , 5, "REG_DWORD"
	      WSHShell.Popup "Setting value HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\Interoperability to Level 5"
	      WSHShell.RegWrite "HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\11 Interoperability" , 5, "REG_DWORD"
	    Case "2"
	      L_Welcome_MsgBox_Message_Text   = "This script sets MTA diagnostic logging to default levels."
	      L_Welcome_MsgBox_Title_Text     = "Modifying registry values"
	      Call Welcome()
	      Set WSHShell = WScript.CreateObject("WScript.Shell")
	      WSHShell.Popup "Setting value HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Parameters\Text Event Log to 0"
	      WSHShell.RegWrite "HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Parameters\Text Event Log" , 0, "REG_DWORD"
	      WSHShell.Popup "Setting value HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\X.400 Service to Level 0"
	      WSHShell.RegWrite "HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\1 X.400 Service" , 0, "REG_DWORD"
	      WSHShell.Popup "Setting value HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\APDU to Level 0"
	      WSHShell.RegWrite "HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\12 APDU" , 0, "REG_DWORD"
	      WSHShell.Popup "Setting value HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\Interface to Level 0"
	      WSHShell.RegWrite "HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\4 Interface" , 0, "REG_DWORD"
	      WSHShell.Popup "Setting value HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\Interoperability to Level 0"
	      WSHShell.RegWrite "HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Diagnostics\11 Interoperability" , 0, "REG_DWORD"
	    Case Else
	      MsgBox "Invalid Input. Enter 1 or 2"
	  End Select
	
	  Sub Welcome()
	      Dim intDoIt
	      intDoIt =  MsgBox(L_Welcome_MsgBox_Message_Text,    _   
	                        vbOKCancel + vbInformation,       _
	                        L_Welcome_MsgBox_Title_Text )
	      If intDoIt = vbCancel Then
	          WScript.Quit
	      End If
	  End Sub
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
