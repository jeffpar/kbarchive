---
layout: page
title: "Q163519: DSPU Reconnect Failure After An Outage"
permalink: kb/163/Q163519/
---

## Q163519: DSPU Reconnect Failure After An Outage

	Article: Q163519
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Downstream physical unit (DSPU) fails to recover its connection to SNA Server
	after a link failure between the two devices.
	
	CAUSE
	=====
	
	When SNA Server receives a format 3 XID from an incoming DSPU that specifies a
	secondary link station role without preceding it with a negotiable XID, the SNA
	Server may cause a SABM(E) to be sent immediately without first sending its own
	format 3 XID. This causes the DSPU to drop the connection.
	
	RESOLUTION
	==========
	
	An update to SNA Server ensures that SNA Server always sends at least one
	non-NULL XID.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	2.11 and 2.11 Service Pack 1 (SP1).
	This problem was corrected in the latest Microsoft SNA Server 2.11 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
