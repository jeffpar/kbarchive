---
layout: page
title: "Q160449: SNA Client May Incorrectly Connect to Distributed Link Server"
permalink: /kb/160/Q160449/
---

## Q160449: SNA Client May Incorrectly Connect to Distributed Link Server

{% raw %}

	Article: Q160449
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP1, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An SNA client may attempt to connect to SNA Server running on a distributed link
	server, even though the distributed link server is running in a different SNA
	Server subdomain.
	
	There may be no observable problem from the client computer. However, if the
	distributed link server can't be reached, the client may experience a long delay
	when opening a 3270 or APPC session. This could occur if the client's sponsor
	server is connecting through a distributed link.
	
	CAUSE
	=====
	
	The SnaBase service supporting a client's sponsor session is incorrectly
	advertising the name of the distributed link server to the client computer. This
	can cause the client to attempt to connect to the distributed link server when
	opening a 3270 or APPC session.
	
	RESOLUTION
	==========
	
	An update is available for SNA Server 2.11 SP1 and 3.0. The updated modules are:
	Snadmod.dll and Snareg.dll; both are located in <snaroot>\system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11 Service
	Pack 1 (SP1) and 3.0. This problem was corrected in the latest Microsoft SNA
	Server version 2.11 and 3.0 U.S. Service Packs. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211SP1
	Version           : WINDOWS:2.11 SP1,3.0
	
	=============================================================================
	

{% endraw %}
