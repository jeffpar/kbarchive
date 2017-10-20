---
layout: page
title: "Q222156: MSClient 3.0 Enforces Source Routing in Token Ring Broadcasts"
permalink: /kb/222/Q222156/
---

## Q222156: MSClient 3.0 Enforces Source Routing in Token Ring Broadcasts

{% raw %}

	Article: Q222156
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Network Client for MS-DOS version 3.0 
	- Microsoft LAN Manager, version 2.2c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a Token ring environment using transparent bridging, MS-DOS clients are
	unable to obtain an IP address through DHCP. When using static IP addresses,
	clients can log on but no servers are available on the network.
	
	RESOLUTION
	==========
	
	To work around the issue, enable source routing on your Token ring bridges to
	operate either as Source Route Transparent (SRT) or Source Route only bridges.
	
	If changing your bridge configuration is not an option, the client must be
	configured not to rely on broadcasts for network communication. Using static IP
	addresses and WINS or a LMHOSTS file for NetBIOS name resolution will allow the
	client to function normally.
	
	MORE INFORMATION
	================
	
	The MS-DOS client software mentioned above always includes source routing
	information in broadcast frames. Token ring bridges configured for transparent
	bridging may discard frames that contain source routing information. In this
	environment, broadcasts can only reach stations in the same ring.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q102373 Token Ring Bridge/Ring Numbering and Routing Avoids Looping
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbZNotKeyword kbLanManSearch kbNetworkClientSearch kbLanMan220c kbNetworkClient300DOS
	Version           : winnt:3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
