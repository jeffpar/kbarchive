---
layout: page
title: "Q110061: Effects of Pausing a Service"
permalink: /kb/110/Q110061/
---

## Q110061: Effects of Pausing a Service

{% raw %}

	Article: Q110061
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some services (such as NetLogon, Server, and Workstation) have the option of
	being paused or stopped. You may expect that no connections would be effected
	when you pause a service, but there may be other consequences. Details on the
	effects of pausing a service are not included in the System Guide.
	
	MORE INFORMATION
	================
	
	For example, when you pause the Server service, the results are:
	
	- It does not affect the connections of the existing users.
	
	- It does not allow new connections to the server for users with user level
	  privilege even if you have an established session to this server before the
	  server was paused.
	
	- It allows new connection to users who are members of the DomainAdmins,
	  Administrators, and Power Users groups.
	
	The behavior of a service when it is paused depends on the service, but mostly
	revolve around granting special privileges to accounts belonging to privileged
	groups.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
