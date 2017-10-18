---
layout: page
title: "Q143132: EventLog Registry Value Does Not Enable Print Event Logging"
permalink: kb/143/Q143132/
---

## Q143132: EventLog Registry Value Does Not Enable Print Event Logging

	Article: Q143132
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	By default, Windows NT 3.51 Server logs print events to the System Log in Event
	Viewer. This article describes you can disable and enable the logging of print
	events.
	
	Page 640, Volume 1 of the Windows NT Resource Guide incorrectly states that the
	default setting for the EventLog value is 0 (zero). In fact, by default,
	EventLog is omitted from the registry.
	
	MORE INFORMATION
	================
	
	Disable Logging of Print Events
	-------------------------------
	
	You can manually disable the logging of print events to the System Log by doing
	the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the \HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Control\Print\Providers
	
	3. From the Edit menu, select Add Value.
	
	4. Enter the following:
	
	  Value Name: Eventlog
	  Data Type: REG_DWORD
	  String: 0
	
	5. Click OK and quit the Registry Editor.
	
	6. Shut down and restart Windows NT.
	
	Enable Logging of Print Events
	------------------------------
	
	If you change the value of EventLog from a 0 (zero) to a 1 (one) and then restart
	the computer, the logging of print events does not occur. The value of 1 should
	enable print logging in the System log.
	
	To re-enable the logging of all print events, remove the EventLog value from the
	registry and restart Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt Event 10
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
