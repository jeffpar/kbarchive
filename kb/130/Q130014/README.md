---
layout: page
title: "Q130014: Unable To Connect SQL Server Using NWLink"
permalink: /kb/130/Q130014/
---

## Q130014: Unable To Connect SQL Server Using NWLink

{% raw %}

	Article: Q130014
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:; winnt:3.5
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
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the IPX/SPX compatible transport protocol (NWLink) in Windows NT or
	Windows for Workgroups, it may not connect to a Microsoft SQL Server.
	
	
	CAUSE
	=====
	
	When SQL Server starts listening on SPX, it registers itself with the bindery on
	a NetWare server. Clients attempting to connect read from the bindery to make
	the connection to the SQL Server computer. This process fails if no NetWare
	server exists on the network.
	
	RESOLUTION
	==========
	
	To correct this problem, use the following format to connect to a SQL server:
	
	     isql -Usa -P -S<MAC address>,<IPX port number>,<Network number>
	
	NOTE: The default IPX port number for a SQL server is 33854. A network number is
	not required if the SQL server is on the same segment.
	
	Additional query words: prodnt 3.10 3.11 nwfp ncp
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbWFWSearch
	Version           : WINDOWS:; winnt:3.5
	
	=============================================================================
	

{% endraw %}
