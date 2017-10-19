---
layout: page
title: "Q102534: Disabled Servers Not Dimmed in Server Manager"
permalink: /kb/102/Q102534/
---

## Q102534: Disabled Servers Not Dimmed in Server Manager

	Article: Q102534
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an Advanced Server (controller or server) is turned off or down, Server
	Manager will not dim (gray out) the entry. Refreshing or reloading Server
	Manager will not correct this problem.
	
	CAUSE
	=====
	
	Server Manager relies on the Browser service for its information on the status
	of workstations and servers. The Browser service may take up to 52 minutes to
	refresh its list.
	
	RESOLUTION
	==========
	
	Type NET VIEW \\<servername>, which calls the server directly, giving you
	the immediate status of the server.
	
	NOTE: The Domain Monitor utility, DOMMON.EXE, in the Windows NT Resource Kit
	accurately shows the status of the servers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt win32 grey AS
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : :3.1
	Issue type        : kbprb
	
	=============================================================================
	
