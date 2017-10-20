---
layout: page
title: "Q131667: Problems Clearing and Adding To Routing Tables Using ROUTE.EXE"
permalink: /kb/131/Q131667/
---

## Q131667: Problems Clearing and Adding To Routing Tables Using ROUTE.EXE

{% raw %}

	Article: Q131667
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.11,3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience problems configuring static routing tables in Windows NT and
	TCP/IP-32 for Windows for Workgroups when using the following ROUTE.EXE
	commands:
	
	  ROUTE -F      (clears routing tables for all gateway entries)
	  ROUTE ADD     (adds a route to the routing tables)
	
	ROUTE -F
	--------
	
	On a multihomed computer, the default gateway IP addresses of 0.0.0.0 for all
	network interface cards (NICs) are lost when you use the ROUTE -F command.
	
	If you add the default gateway using the ROUTE ADD command, the default gateway
	route for only the first NIC is applied. The default gateway routes of 0.0.0.0
	for other NICs are lost.
	
	ROUTE ADD
	---------
	
	If you use the ROUTE ADD command and add an incorrect entry, the entry is not
	added to the route table. No message is displayed indicating that the entry is
	incorrect and has not been added.
	
	MORE INFORMATION
	================
	
	The correct format for the ROUTE ADD command is:
	
	  route add <subnet address> MASK <subnet mask> <address to
	  add>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.1, 3.5,
	and 3.51 and in TCP/IP-32 for Windows for Workgroups version 3.11. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt wfw wfwg tcpip prodtcp32
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbTCPIPSearch kbZNotKeyword3 kbTCPIP311
	Version           : :3.1,3.11,3.5,3.51
	
	=============================================================================
	

{% endraw %}
