---
layout: page
title: "Q245469: Prevent DNS Server from Caching Records from Recursive Queries"
permalink: /kb/245/Q245469/
---

## Q245469: Prevent DNS Server from Caching Records from Recursive Queries

	Article: Q245469
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	As a Domain Name System (DNS) server performs name resolution for a name query,
	it caches a copy of the data. This is retained for the time period specified by
	the Time To Live (TTL) value. By default, the data is kept in memory until the
	TTL time period has expired, DNS has been stopped, or the MaxCacheTtl value on
	the DNS server has expired, whichever occurs first.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To prevent a Microsoft DNS server from caching records from recursive queries:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DNS\Parameters
	
	3. On the Edit menu, click Add Value, and then add the following value:
	
	  Value: MaxCacheTtl
	  Data Type: DWORD
	  Data value: 0
	
	4. Click OK.
	
	5. Quit Registry Editor.
	
	6. Restart the DNS server.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q198408 Microsoft DNS Server Registry Parameters, Part 1 of 3
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch kbWinNTSEnt400SP6a
	Version           : winnt:4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbinfo
	
	=============================================================================
	
