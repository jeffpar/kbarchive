---
layout: page
title: "Q195811: DNS Server May Write Back Incorrect Root Hints"
permalink: /kb/195/Q195811/
---

## Q195811: DNS Server May Write Back Incorrect Root Hints

{% raw %}

	Article: Q195811
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Your DNS server may stop resolving domain names for which it is not
	authoritative.
	
	CAUSE
	=====
	
	When a DNS server boots, it needs a list of root server "hints" -- NS and A
	records for the servers -- historically called the cache file. Traditionally DNS
	administrators could keep this file current by downloading a new copy from the
	InterNIC. This method works adequately when the root servers stay fairly static,
	but does require attention on the part of the administrator when updates and
	changes are made (for example, the massive renaming in late 1995).
	
	The Microsoft DNS server has a feature to allow the server to attempt to write
	back a new cache file based on the response from the root servers.
	
	If the AutoCacheUpdate key does NOT exist or is non-zero, the Microsoft DNS
	server will rewrite the cache file based on the data received from querying the
	root DNS servers on startup.
	
	RESOLUTION
	==========
	
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
	
	If the key is zero, the DNS server does not do this update.
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DNS\Parameters
	
	Key     : AutoCacheUpdate
	Type    : DWORD (Boolean)
	Default : NoKey (Do automatic cache updates)
	Function: Determine whether server attempts to update cache entries
	using data from root servers.
	
	NOTE: This change will only take affect after restarting the DNS service.
	
	After you add the key and set the value to 0, copy the Cache.dns file from the
	<winnt root>\System32\Dns\Backup over the one that just contains the bad
	entries, typically in the <winnt root>\System32\Dns folder.
	
	NOTE: The AutoCacheUpdate is turned off by default in Windows NT Service Pack 4.
	
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
