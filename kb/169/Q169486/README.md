---
layout: page
title: "Q169486: SnaBase and SNA Server Don't Accept New Client Connections"
permalink: /kb/169/Q169486/
---

## Q169486: SnaBase and SNA Server Don't Accept New Client Connections

{% raw %}

	Article: Q169486
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SnaBase and SNA Server may unexpectedly stop accepting new client connections
	after changes to the SNA Server configuration are saved using SNA Server
	Manager. Clients who are already connected through the SnaBase or server
	continue to function correctly. New clients may fail to get a sponsor
	connection, and will display one of the following error messages:
	
	Windows NT client:
	
	  SNA Server - ERROR # 1003
	  SnaBase could not open a sponsor connection to server <server>
	
	Windows 95 client:
	
	  SnaBase
	  ERROR: Could not open sponsor connection to <server>
	
	Windows 3.x client:
	
	  SNA Server Error: 546 Cannot establish connection with SNA Server
	  <servername>.
	
	If SNA Server or SnaBase full internal tracing is enabled while this is
	occurring, no internal trace files are generated.
	
	CAUSE
	=====
	
	Under SNA Server 3.0, every time a 3.0 client opens the sponsor connection, the
	SnaBase makes a local remote procedure call (RPC) to check if the encryption
	flag is enabled for the user record. If this occurs while another thread of the
	SnaBase is notified of a configuration file change, an SnaBase deadlock can
	occur.
	
	When the deadlock occurs, the DMOD critical section is held, preventing new users
	from connecting to either SnaBase or SNA Server.
	
	NOTE: For information on other potential causes of client connection problems to
	SNA Server 3.0 servers, see the following articles in the Microsoft Knowledge
	Base:
	
	  Q168546 Access Violation May Occur After Upgrading to 3.0 SP1
	
	  Q167196 SNA Server 3.0 SP1 Update May Break Named Pipe Clients
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, the asynchronous RPC requests done from the SnaBase DMOD
	are really asynchronous; without the fix, they are synchronous, which can cause
	a deadlock in certain situations.
	
	
	Additional query words: hang crash
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
