---
layout: page
title: "Q222819: Terminal Server Clock Does Not Reflect Client Time Zone Setting"
permalink: /kb/222/Q222819/
---

## Q222819: Terminal Server Clock Does Not Reflect Client Time Zone Setting

{% raw %}

	Article: Q222819
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The clock displayed on the taskbar on a Terminal Server-based computer always
	reports the time relative to the time zone setting on the Terminal Server-based
	computer. This time is displayed in all client sessions, regardless of the time
	zone settings on the client computers.
	
	MORE INFORMATION
	================
	
	If a user has the appropriate user rights, he or she can change the time zone
	setting in the client session. This change affects all Terminal Server sessions,
	including the console.
	
	Note that the registry entry for the time zone is stored under
	HKEY_LOCAL_MACHINE. Thus, the entry is per computer, and not per user.
	
	
	Additional query words: systray system tray
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbwin2000ServSearch kbwin2000Search kbNTTermServ400 kbNTTermServSearch
	Version           : WINDOWS:2000; winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
