---
layout: page
title: "Q186483: NetDDE Service: Error 2185 - The Service Name is Invalid"
permalink: /kb/186/Q186483/
---

## Q186483: NetDDE Service: Error 2185 - The Service Name is Invalid

{% raw %}

	Article: Q186483
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
	
	By default the Network DDE service on a Terminal Server is set to start
	manually. If you attempt to start the service, you receive a 2185 error: The
	Service Name is Invalid. The service cannot be started from a command prompt
	either.
	
	This is expected behavior on a Terminal Server. The Network DDE service is
	disabled. Because Network DDE relies on the registration of unique computer
	names to share information across a DDE share, the service will not work in a
	multi-user environment. This does not mean, however, that users cannot make use
	of DDE applications.
	
	Terminal Server uses a multi-user version of NetDDE. Instead of registering
	unique computernames, the Terminal Server NetDDE registers unique usernames.
	This makes more sense in a multi-user environment, although it adds to new
	requirement (not typically seen in Windows NT environments) that users log on
	with unique user names.
	
	To start the multi-user NetDDE, all a user has to do is start a DDE application
	like Chat. This will load the necessary files, start the NetDDE agent, and
	register the user's name on the network for DDE services. Note that only the
	first instance of the user's name will allow NetDDE registration. If a user logs
	on at multiple locations, only the first logon will allow NetDDE.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
