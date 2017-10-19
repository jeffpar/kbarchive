---
layout: page
title: "Q158146: NetLogon Service fails to start with Event 7003"
permalink: /kb/158/Q158146/
---

## Q158146: NetLogon Service fails to start with Event 7003

	Article: Q158146
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the initial startup of Windows NT, the following error message may
	appear:
	
	  At least one service or driver failed during system startup. Use Event Viewer
	  to examine the event log for details.
	
	When you check the Event Viewer, you will see the following two messages:
	
	  Event ID 7003
	  Source: Service Control Manager
	  Description: The Net Logon service depends on the following nonexistent
	  service: LmHosts
	
	  Event ID 7003
	  Source: Service Control Manager
	  Description: The Computer Browser service depends on the following
	  nonexistent service: LmHosts
	
	CAUSE
	=====
	
	Registry information for the LmHosts service is either missing or corrupt.
	
	WORKAROUND
	==========
	
	To re-create the needed information in the registry, remove and then reinstall
	the TCP/IP protocol.
	
	MORE INFORMATION
	================
	
	When the TCP/IP protocol installs it creates a dependency between NetLogon,
	Computer Browser and LmHosts. If the registry key
	HKEY_Local_Machine\SYSTEM\CurrentControlSet\Services\LmHosts
	is either missing or corrupt it will fail to load and will generate the above
	messages.
	
	This error may occur whether you use an LmHosts file or not.
	
	Additional query words: prodnt netbios helper net logon
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
