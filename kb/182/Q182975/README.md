---
layout: page
title: "Q182975: XCON: X.25 Stack Installed But Unusable"
permalink: /kb/182/Q182975/
---

## Q182975: XCON: X.25 Stack Installed But Unusable

	Article: Q182975
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Messages sent over a connector using an X.25 stack are not delivered. Non-
	delivery reports (NDRs) are returned. On the server, the application event log
	shows the following:
	
	  Events 9409
	  The Microsoft MTA registry parameter is missing.  The default value
	  will be used.
	  For these parameters:
	  Eicon X.25 result threads
	  Eicon X.25 connections
	  Eicon wait timeout (ms)
	
	-AND-
	
	  Event 9106
	  An internal MTA error occurred.  The X.25 interface failed to
	  initialize. Check to make sure the X.25 card is started. (14)
	
	RESOLUTION
	==========
	
	To resolve this problem, manually add the default keys using the Registry
	Editor.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Start Registry Editor (Regedt32.exe), and go to the following subkey:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	     \MSEchangeMTA\Parameters
	
	  NOTE: The above registry key is all one path; it has been wrapped for
	  readability.
	
	2. On the Edit menu, click Add Value, and add the following information:
	
	  Eicon ait timeout (MS) as REG_DWORD 0x1F4
	  Eicon X.25 connections as REG_DWORD 0x14
	  Eicon X.25 result threads as REG_DWORD 0x2
	
	3. Quit Registry Editor.
	
	4. Restart the message transfer agent (MTA).
	
	Additional query words: kbprb kbtshoot X25
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
