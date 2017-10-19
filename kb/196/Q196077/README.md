---
layout: page
title: "Q196077: SNARAS Ports Become Unavailable after Network Outage"
permalink: /kb/196/Q196077/
---

## Q196077: SNARAS Ports Become Unavailable after Network Outage

	Article: Q196077
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an attempt to make an SNARAS connection to a remote server occurs while the
	SNA network is down (for example, a temporary outage), the remote access server
	(RAS) port used for the unsuccessful connection becomes unavailable for further
	use. If this pattern is repeated, eventually all SNA RAS ports become
	unavailable, and RAS will report error 633, "Port Unavailable."
	
	CAUSE
	=====
	
	SNARAS is not freeing up the RAS port after the unsuccessful dial-in attempt.
	
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
	
	WORKAROUND
	==========
	
	To free up the unavailable RAS ports, stop and restart the remote access server
	service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3, 4.0, and 4.0 SP1. This problem was first corrected in SNA
	Server 3.0 Service Pack 4.
	
	Additional query words: snaras 633
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
