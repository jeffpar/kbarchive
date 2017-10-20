---
layout: page
title: "Q155501: WINS Client Stops Querying or Renewing with WINS"
permalink: /kb/155/Q155501/
---

## Q155501: WINS Client Stops Querying or Renewing with WINS

{% raw %}

	Article: Q155501
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11,95; winnt:3.5,3.51; :3.11b
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11b 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Computer name and domain name resolution to computers on remote segments is
	failing. The more specific symptoms you may see are the inability to:
	
	- Ping a remote computer (across a router) by its computer name (NetBIOS name).
	
	- log on to a domain when the only domain controllers are on other side of
	  routers.
	
	- Net View or Net Use computers that are on the other side of routers.
	
	- retrieve the browse list of a remote domain that the client sees in its local
	  browse list.
	
	You also may discover that other remote clients can no longer Net View or Net Use
	your client, and that your client registrations in WINS have expired (as
	indicated with a hyphen "-" or a tombstone "+" character).
	
	CAUSE
	=====
	
	The client has stopped querying WINS, and instead is relying only on subnet
	broadcasts for name resolution (like a b-node client). This may happen if the
	following two conditions are met:
	
	- The primary WINS server has gone down.
	
	-and-
	
	- The client does not have a secondary WINS server listed for name resolution
	  (or the DHCP lease does not give a secondary WINS address).
	
	The reason for this behavior is in the WINS query algorithm on the client:
	
	1. When booting up, register your name with your primary WINS server. Or when
	  performing a normal name query, first send the request to your primary WINS
	  server.
	
	2. If the primary WINS server does not respond after 3 attempts, send your
	  registration or query to the secondary WINS server listed.
	
	3. If the secondary WINS server does not respond after 3 attempts, send the
	  query again to the primary WINS server, and continue alternating between
	  primary and secondary WINS server until one of them responds.
	
	The problem results if there is no secondary WINS server listed. The client
	sometimes reverts to B-Node (broadcast only) behavior and stops querying the
	WINS server completely.
	
	RESOLUTION
	==========
	
	If you only have one WINS server, you should fill in its IP address as both the
	primary and secondary WINS server on all clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.11 3.50 3.51 4.0 95 win95 wfw
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin95search kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311b
	Version           : WINDOWS:3.11,95; winnt:3.5,3.51; :3.11b
	
	=============================================================================
	

{% endraw %}
