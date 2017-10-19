---
layout: page
title: "Q111670: ArpCacheSize Defaults to 62 Entries"
permalink: /kb/111/Q111670/
---

## Q111670: ArpCacheSize Defaults to 62 Entries

	Article: Q111670
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT server may not be able to maintain reliable connections to a large
	number of active TCP/IP clients.
	
	CAUSE
	=====
	
	The default ArpCacheSize is set to 62 entries. The ArpCache maintains a mapping
	between IP and machine addresses, so the size should be adjusted to accommodate
	the number of active clients. Otherwise the oldest entries will be purged and
	then address resolution protocol (ARP) will be used to re- obtain the mappings
	when they're needed.
	
	RESOLUTION
	==========
	
	NOTE: This resolution only applies to Windows NT version 3.1. In Windows NT 3.5
	and 3.51, the ArpCacheSize is dynamic and the registry parameter does not exist
	anymore.
	
	You can adjust the ArpCacheSize in Windows NT 3.1 by using the following
	procedure:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor.
	
	2. Select the HKEY_LOCAL_MACHINE on Local Machine window.
	
	3. Go to the SYSTEM\CurrentControlSet\Services\tcpip\parameters key.
	
	4. Create a new value of type REG_DWORD named ArpCacheSize.
	
	5. Set it for the highest number of clients that is likely to be active at one
	  time.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
