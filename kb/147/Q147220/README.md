---
layout: page
title: "Q147220: STOP 0x0000000A Attempting To Write to NetWare 3.11 Server"
permalink: /kb/147/Q147220/
---

## Q147220: STOP 0x0000000A Attempting To Write to NetWare 3.11 Server

{% raw %}

	Article: Q147220
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a user mode application attempts to write to a NetWare 3.11 server, the
	following STOP error message appears:
	
	  STOP: 0x0000000A (0xFE826000, 0x00000002, 0x00000000, 0x804042A6)
	
	NOTE: The first and fourth parameters, such as 0xFE826000 and 0x804042A6, are
	specific to your system configuration.
	
	CAUSE
	=====
	
	This problem occurs if you use the WriteFile() API on a file located on a
	NetWare 3.11 server. This problem does not occur on NetWare 3.12 and higher
	servers, which use burst mode writes by default.
	
	
	WORKAROUND
	==========
	
	To work around this problem, install the PBurst NetWare Loadable Module (NLM) to
	enable burst mode writes on NetWare 3.11 servers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Server versions 3.5, 3.51, and 4.0. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: prodnt trap 0xA
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
