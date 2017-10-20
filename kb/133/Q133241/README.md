---
layout: page
title: "Q133241: Browsing Domain Master Browsers w/ Multiple NICs and Protocols"
permalink: /kb/133/Q133241/
---

## Q133241: Browsing Domain Master Browsers w/ Multiple NICs and Protocols

{% raw %}

	Article: Q133241
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a Domain Master Browser runs on multiple network transport stacks, or uses
	multiple network adapters (multihomed), it maintains a separate list of servers
	for each of its transport/network adapter pairs (also known as an endpoints).
	When a client browses the Domain Master Browser, it returns a list of only those
	servers associated with the endpoint the request was received on.
	
	
	A client requests a browse list for every transport that is bound (and running)
	to the network adapter over which the client is connected to the server.
	
	Because the Domain Master Browser cannot determine if the browsing client has
	access to servers on endpoints other than the one it received the request on, it
	sends the client a list of only those servers associated with that endpoint.
	
	If you browse from the Domain Master Browser computer (using File Manager or the
	NET VIEW command), you see a merged list of all servers from all endpoints. This
	is because all of the servers in each endpoint's list are reachable from the
	Domain Master Browser.
	
	NWLink supports a virtual network and presents a single interface to it's
	clients, performing internal routing if necessary. Therefore, there is no
	endpoint pairing as there is with other protocols. Thus when an NWLink client
	browses the Domain Master Browser over NwLnkIpx/Spx, the returned list includes
	the servers from each network adapter that the Domain Master Browser has NWLink
	bound to.
	
	MORE INFORMATION
	================
	
	For example, assume "ServerOne" is a Domain Controller acting as the Domain
	Master Browser. ServerOne has two network adapters connected to segments A and
	B. ServerOne has both TCP/IP and NetBEUI bound to the adapter connected to
	segment A and only TCP/IP bound to the adapter connected to segment B.
	
	A client workstation attached to segment A and running only TCP/IP will receive
	only the browse list of servers associated with the server's endpoint for TCP/IP
	on segment A.
	
	A client workstation attached to segment A and running both TCP/IP and NetBEUI
	will receive the list of servers associated with both of the server's TCP/IP and
	NetBEUI endpoints on segment A.
	
	Neither of the client workstations receive the list of servers associated with
	the TCP/IP endpoint on segment B.
	
	
	Additional query words: prodnt pdc
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
