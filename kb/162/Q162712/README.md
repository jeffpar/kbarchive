---
layout: page
title: "Q162712: Cannot Resolve Hostname with DNS"
permalink: /kb/162/Q162712/
---

## Q162712: Cannot Resolve Hostname with DNS

{% raw %}

	Article: Q162712
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may be unable to resolve a computer's hostname with Domain Name System (DNS)
	name resolution even though your settings are mapped to a known good DNS server.
	
	CAUSE
	=====
	
	This behavior can occur if the AFD Networking Support Environment (Afd.sys) is
	either disabled or has not started properly.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. In Control Panel, double-click Devices.
	
	2. Click AFD Networking Support Environment.
	
	3. Click Startup.
	
	4. Click Automatic, and then click OK.
	
	5. Click Close, and then shut down and restart the computer.
	
	6. In Control Panel, double-click Devices. Verify that the AFD Networking
	  Support Environment is started.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	

{% endraw %}
