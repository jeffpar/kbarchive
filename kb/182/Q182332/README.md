---
layout: page
title: "Q182332: SNA Clients Experience Delay Connecting to Multihomed Server"
permalink: /kb/182/Q182332/
---

## Q182332: SNA Clients Experience Delay Connecting to Multihomed Server

{% raw %}

	Article: Q182332
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Server clients configured to use TCP/IP sockets may experience a delay
	during the initial connection to a multihomed SNA Server computer. The time
	delay before getting the application session depends upon the TCP/IP retry
	timers configured on the client, but should be 45 to 55 seconds assuming the
	retry-timer settings have not been modified from their defaults.
	
	CAUSE
	=====
	
	Multihomed server support was added to SNA Server and SNA Server clients in SNA
	Server 3.0 Service Pack 2. This new feature allows the SnaBase service to send
	two entries (a new entry, TCPIP2, that lists all IP addresses of the server, and
	the original entry, TCPIP, that lists only one of possibly many IP addresses
	associated with the server) in its service-table updates for the TCP/IP
	transport. The original entry is retained for backward compatibility with
	earlier-version (pre-3.0 SP2) clients and servers.
	
	SNA Server 3.0 SP2 (and later) clients now receive all of the TCP/IP addresses
	configured on the SNA Server computer. However, the clients try to connect to
	the SNA Server computer by trying the TCP/IP addresses in the order they are
	listed in the service-table update received from the SNA Server computer. If the
	first TCP/IP address exists on a subnet that is not reachable from the client's
	subnet, the client is not able to try the next TCP/IP address in its list until
	the TCP/IP retry timers expire. This can lead to a 45 to 55 second delay between
	connection attempts over the different TCP/IP addresses.
	
	Note: Once the initial connection is made, the SNA Server client will continue to
	use the correct TCP/IP address for the duration of the application session. The
	potential delay is only noticeable upon the initial application startup.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 SP2 and
	4.0. This problem was corrected in the latest SNA Server version 3.0 and 4.0
	U.S. Service Packs. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	With this update applied, clients that try connecting to multihomed servers will
	search the TCP/IP address list received from the server and will choose an IP
	address that it is most likely to get a successful connection based on the
	client's own TCP/IP address. The client will attempt to connect to this TCP/IP
	address first, and if that fails, it will then try the other addresses in the
	list.
	
	If SNA Server 3.0 SP1 clients (and earlier versions) fail to connect to a
	multihomed Windows NT Server 4.0 computer running SNA Server, please refer to
	the following Knowledge Base article:
	
	  Q161778 TCP/IP Clients Can't Connect to SNA Server on Windows NT 4.0
	
	For related information on SNA Server 3.0 SP2 and 4.0 client issues, please refer
	to the following Knowledge Base article:
	
	  Q177579 SNA Client Loses One TCP/IP Address on a Multihomed Server
	
	Additional query words: snaip multi-homed multiple nics adapters
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP2
	Version           : WINDOWS:3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
