---
layout: page
title: "Q245079: Cannot Synchronize Time Across Time Zone on Windows 95"
permalink: /kb/245/Q245079/
---

## Q245079: Cannot Synchronize Time Across Time Zone on Windows 95

{% raw %}

	Article: Q245079
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the 'net time \\servername /set /y' command to synchronize the time
	on a client computer in a domain running Microsoft Windows 95 to a time server
	computer running Microsoft Windows NT Server 4.0 that is in a different domain
	and the time server is not in the same time zone as the client, you may
	incorrectly change the time on the client to the time on the time server.
	
	CAUSE
	=====
	
	The cause is unknown.
	
	RESOLUTION
	==========
	
	To work around this behavior, configure a time server for each domain in each
	time zone.
	
	MORE INFORMATION
	================
	
	You can use the Nettime.exe utility that is included on the Microsoft Windows 98
	Resource Kit CD-ROM to replace the 'net time' command. This utility performs the
	WIN32 function calls that gather the time information from the client computer,
	compares the time zone information to that of the time server, and then makes
	the appropriate time zone adjustment on the client computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
