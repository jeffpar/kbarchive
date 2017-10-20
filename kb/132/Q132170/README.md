---
layout: page
title: "Q132170: NET VIEW to LAN Manager for UNIX Server Fails from Windows NT"
permalink: /kb/132/Q132170/
---

## Q132170: NET VIEW to LAN Manager for UNIX Server Fails from Windows NT

{% raw %}

	Article: Q132170
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A NET VIEW command issued from a Windows NT Workstation against a Hewlett-
	Packard LAN Manager for UNIX version 1.4x server fails with an access denied
	error.
	
	CAUSE
	=====
	
	When Windows NT Workstation issues an OPEN and X Server Message Block (SMB) for
	\PIPE\SRVSVC, the LAN Manager for UNIX server returns an ERRbadaccess ( 1,12).
	This error prevents Windows NT from sending a NetServerEnum Api via Transact SMB
	to the LAN Manager for UNIX server.
	
	
	WORKAROUND
	==========
	
	You can work around by using the utility, NETVIEWX.EXE which lists file shares
	on a LAN Manager for UNIX server. Call Microsoft Product Support Services to get
	this utility.
	
	
	STATUS
	======
	
	Hewlett-Packard is aware of this problem. We will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : winnt:3.5
	
	=============================================================================
	

{% endraw %}
