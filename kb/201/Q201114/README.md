---
layout: page
title: "Q201114: PRB: Windows 95 PCs Unable to Browse Remote Domain Across Router"
permalink: /kb/201/Q201114/
---

## Q201114: PRB: Windows 95 PCs Unable to Browse Remote Domain Across Router

{% raw %}

	Article: Q201114
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:3.1,3.11,95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 computers in a TCP/IP network are unable to browse a remote domain
	across a router, but they are able to browse a local domain. Windows NT
	computers are able to browse both the local and remote domains.
	
	Both, Windows 95 and Windows NT computers are configured to use the same WINS
	server, which has the correct Domain 1Bh entry for the remote domain. Users in
	both systems are logging on to the local domain and have no accounts in the
	remote domain. A trust relationship exists between both domains.
	
	CAUSE
	=====
	
	This problem occurs because the Windows 95 computer is configured to browse an
	incorrect Workgroup.
	
	RESOLUTION
	==========
	
	To work around this problem, configure Windows 95 computers so the Workgroup
	field in Network Configuration matches the name of the local domain (not remote
	domain):
	
	1. In Control Panel, double-click Network.
	
	2. Click the Identification tab.
	
	3. Change the Workgroup name.
	
	STATUS
	======
	
	This behavior is by design.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin3xSearch kbWin95search kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11,95; winnt:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
