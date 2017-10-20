---
layout: page
title: "Q186604: Terminal Server Client Error 193"
permalink: /kb/186/Q186604/
---

## Q186604: Terminal Server Client Error 193

{% raw %}

	Article: Q186604
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A non-administrator user tries to log on through the Terminal Server Client, and
	receives the following error:
	
	  An error (193) occurred while creating user logon. Failing component:
	  explorer.exe.
	
	When the user clicks OK, the client terminates.
	
	CAUSE
	=====
	
	The user does not have access to Explorer.exe. The cause is most probably that
	the administrator has turned on the administrative utility, Application
	Security, but has not added Explorer.exe to the list of allowed applications.
	
	RESOLUTION
	==========
	
	At the Terminal Server, the administrator can add Explorer.exe to the list of
	authorized applications. To do this, run the Application Security application
	and choose ADD. Browse for the application or enter the path (which is
	drive:\systemroot\explorer.exe).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
