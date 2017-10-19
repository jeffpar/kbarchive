---
layout: page
title: "Q164257: Inactivity Timeout not Passed Through to TAPI Service Provider"
permalink: /kb/164/Q164257/
---

## Q164257: Inactivity Timeout not Passed Through to TAPI Service Provider

	Article: Q164257
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Setting "Disconnect a call if idle for more than xxx mins" on the on the
	Connection tab of the Modem Control Panel tool has no effect on idle timeout
	disconnect.
	
	CAUSE
	=====
	
	The registry appears to be properly updated, but the modem initialization string
	does not contain the proper timeout value.
	
	WORKAROUND
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Set the following entry to the desired value:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Class
	  \{4D36E96D-E325-11CE-BFC1-08002BE10318}\0000\Settings\InactivityTimeout
	
	  Where {4D36E96D-E325-11CE-BFC1-08002BE10318} is the general entry for modems
	  and 0000 the number that specifies the modem you want to change the value
	  for.
	
	3. Quit Registry Editor and restart your computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: remote access ras
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
