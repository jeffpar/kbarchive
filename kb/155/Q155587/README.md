---
layout: page
title: "Q155587: No Administrative Tools or Common Folders Available"
permalink: /kb/155/Q155587/
---

## Q155587: No Administrative Tools or Common Folders Available

{% raw %}

	Article: Q155587
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Microsoft Windows NT 4.0 installation finishes and it is started for the
	first time, an error message may appear mentioning that a service or device
	driver failed to start and instructing the user to check Event Viewer for more
	details.
	
	Additional symptoms may include the following:
	
	- All Common group folders, including Administrative Tools, are unavailable, so
	  it is not possible to check Event Viewer or run any of the administrative
	  tools such as User Manager for Domain, Server Manager, User Profile Editor,
	  Performance Monitor, Backup, or Disk Administrator.
	
	- No output or error message is displayed when trying to obtain the network
	  configuration dialog box by right-clicking the Network Neighborhood icon.
	
	- No Network icon appears in Control Panel.
	
	- No output is produced when you run Control Network from command line.
	
	CAUSE
	=====
	
	These symptoms may appear if the Ole32.dll file in the %WinDir%\System32 folder
	is missing or corrupt.
	
	RESOLUTION
	==========
	
	Restore a fresh copy of the Ole32.dll file from the Windows NT installation CD
	to the %WinDir%\System32 folder, restart the system, and check your network
	configuration settings.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
