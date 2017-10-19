---
layout: page
title: "Q158212: SNA Server Unable to Reconnect to Distributed Link Service"
permalink: /kb/158/Q158212/
---

## Q158212: SNA Server Unable to Reconnect to Distributed Link Service

	Article: Q158212
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server 2.11 Service Pack 1 allows a SNA Server to communicate through an SNA
	Server link service residing on a different server (referred to as the
	Distributed Link Service feature). However, SNA Server will be unable to reopen
	a connection through the "distributed" link service under the following
	conditions:
	
	- If the LAN session between the SNA Server and the "remoted" link service is
	  lost.
	
	- If the computer running SNA Server is powered off without gracefully shutting
	  down the server.
	
	
	CAUSE
	=====
	
	The SNA Server link service interface (SNALINK.DLL) was not passing "lost
	locality" messages to the link service. This caused the link service to fail to
	end, and to fail to accept a new connection from an SNA Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	2.11 Service Pack 1.
	This problem was corrected in the latest Microsoft SNA Server 2.11 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: sp1 prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211SP1
	Version           : WINDOWS:2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
