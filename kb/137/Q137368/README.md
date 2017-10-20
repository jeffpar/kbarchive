---
layout: page
title: "Q137368: How to Disable NetBIOS Name Resolution on DNS"
permalink: /kb/137/Q137368/
---

## Q137368: How to Disable NetBIOS Name Resolution on DNS

{% raw %}

	Article: Q137368
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbnetwork kbusage msnets win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SUMMARY
	=======
	
	This article describes how to disable NetBIOS name resolution on a domain- name
	system (DNS) while retaining other DNS functionality.
	
	MORE INFORMATION
	================
	
	When Windows 95 tries to resolve a NetBIOS name using a NetBIOS name server, it
	first checks a Windows Internet Name Service (WINS) server, and then checks a
	DNS server.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	To disable NetBIOS name resolution on a DNS server, change the string value
	
	  EnableDNS
	
	in the registry key
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\VxD\MSTCP
	
	from 1 to 0.
	
	
	Additional query words: black hole tcp/ip
	
	======================================================================
	Keywords          : kbnetwork kbusage msnets win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
