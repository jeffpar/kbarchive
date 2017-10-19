---
layout: page
title: "Q170659: Can't Open Multiple TN3270 Sessions"
permalink: /kb/170/Q170659/
---

## Q170659: Can't Open Multiple TN3270 Sessions

	Article: Q170659
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you upgrade from SNA Server 3.0 to 3.0 Service Pack 1 (SP1), TN3270 users
	who are assigned multiple LUs to their IP address (to support multiple sessions)
	are only able to open a single session. This problem affects TN3270-only clients
	(not TN3270E).
	
	When attempting to open a second session from the same TN3270 client, the TN3270
	emulator receives the following error:
	
	  PROG 505
	
	  TN3270E Service Error 511 Telnet negotiation failure: client did not
	  send a valid configured TN3270 terminal type.
	
	CAUSE
	=====
	
	This problem was introduced in SNA Server 3.0 Service Pack 1, by the addition of
	TN3270 server support for multiple ports.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 Service
	Pack 1. This problem was corrected in the latest SNA Server version 3.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP1
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
