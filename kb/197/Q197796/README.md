---
layout: page
title: "Q197796: Informix IDS Does Not Start After Installing Service Pack 4"
permalink: /kb/197/Q197796/
---

## Q197796: Informix IDS Does Not Start After Installing Service Pack 4

{% raw %}

	Article: Q197796
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT 4.0 Service Pack 4 (SP4) on a computer that already
	has Informix Dynamic Server (IDS) version 7.2 or earlier installed, the IDS
	Insure database service may not start.
	
	CAUSE
	=====
	
	The IDS Insure database service is attempting to write to the Event Viewer
	security log without the proper security privilege. Fixes included in the latest
	service pack require that a process acquire the "Manage auditing and security
	log" right before attempting to write to the security log.
	
	RESOLUTION
	==========
	
	To resolve this issue, you can:
	
	- Grant the "Manage auditing and security log" right to the user or group,
	  including a System Account, that requires write access to the security log.
	  This right is granted by default to the Administrators group, but it is not
	  explicitly added to any other user or group.
	
	- Acquire the SE_SECURITY_PRIVILEGE before calling RegisterEventSource() in
	  your source code to write to the security log or write log data to a
	  different log that is not restricted.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
