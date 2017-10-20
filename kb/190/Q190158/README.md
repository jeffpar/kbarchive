---
layout: page
title: "Q190158: Reset vs. Logoff in Terminal Server Administration Program"
permalink: /kb/190/Q190158/
---

## Q190158: Reset vs. Logoff in Terminal Server Administration Program

{% raw %}

	Article: Q190158
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An administrator has the option to either reset or logoff existing Terminal
	Server sessions. The differences between these options are:
	
	1. Logging off from a session will tell the session to log off normally.
	  Applications will be closed. The user profile will be written. Application
	  data could be lost, however.
	
	2. Resetting a session frees it immediately. You lose all user profile changes.
	  Applications are not terminated gracefully, and you lose data.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
