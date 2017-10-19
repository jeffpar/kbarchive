---
layout: page
title: "Q196237: SDLC Multiport Connection Only Works with One DSPU at a Time"
permalink: /kb/196/Q196237/
---

## Q196237: SDLC Multiport Connection Only Works with One DSPU at a Time

	Article: Q196237
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Only one SDLC connection to a Downstream PU (DSPU) will function correctly even
	though multiple SDLC connections are configured for concurrent usage to multiple
	DSPUs over the same SDLC adapter. Even though only one connection is actually in
	use at a time, SNA Server Manager shows an active status for all of the
	configured DSPU SDLC connections. This was reported by a customer using the IBM
	MPCA SDLC adapter, but can occur with any SDLC adapter that uses the SDLC "dumb
	card" driver interface provided by SNA Server.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article. This problem was first corrected in SNA Server 3.0
	Service Pack 4.
	
	Additional query words: MPCA DSPU
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
