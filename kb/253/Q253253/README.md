---
layout: page
title: "Q253253: Proxy: WSP Clients Cannot Reach Remote Segments of the LAN"
permalink: /kb/253/Q253253/
---

## Q253253: Proxy: WSP Clients Cannot Reach Remote Segments of the LAN

{% raw %}

	Article: Q253253
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,2.0,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Proxy Server versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Local area network (LAN) clients that are using the Winsock Proxy (WSP) client
	may be unable to reach certain segments of the the LAN if those segments are
	separated by a router and on a logically different TCP/IP Network ID.
	
	For example, this behavior may occur if one office is connected to another office
	(possibly across town) with a router and one or both offices may have its own
	independent Proxy servers for Internet connectivity. Or, a second office may
	have been added to the network after the Proxy server was initially set up.
	
	Even though the router provides IP routing, clients that are configured to access
	the Internet by using a Winsock proxy through the Proxy server may not be able
	to connect to computers on the LAN across their router.
	
	CAUSE
	=====
	
	This behavior can occur if the local address table (LAT) on the Proxy server
	does not include the remote LAN's IP address range or Network ID.
	
	The WSP client program consults the local copy of the LAT to make decisions about
	routing the IP packets. If the destination is in the LAT, it lets them pass
	through. If the destination is not in the LAT, the WSP client intercepts it,
	repackages it in the WSP protocol, and forwards it to the Proxy server to be
	transmitted to the internet.
	
	Note that only Winsock Proxy requests consult the (LAT) to determine which route
	to take.
	
	RESOLUTION
	==========
	
	To resolve this issue, add the network address ranges that are in use on all the
	LANs you need to gain access to without going through the Proxy server. (By
	definition, this information is what constitutes the LAT.)
	
	You can add to or change the LAT on the Proxy server by clicking Start, pointing
	to Programs, clicking Proxy Administration, clicking Winsock or Web Proxy
	Service, clicking the Service tab, and then clicking Local Address Table.
	
	Clients receive a copy of the LAT at the next restart, or you can force a new
	copy by clicking Update Now in the WSP Client tool in Control Panel on the
	client computers.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbProxyServ100 kbProxyServSearch kbProxyServ200
	Version           : winnt:1.0,2.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
