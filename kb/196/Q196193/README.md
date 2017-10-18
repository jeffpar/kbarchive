---
layout: page
title: "Q196193: PU Passthru Connection Fails To Activate During XID Negotiation"
permalink: kb/196/Q196193/
---

## Q196193: PU Passthru Connection Fails To Activate During XID Negotiation

	Article: Q196193
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP1
	Operating System(s): 
	Keyword(s): kbfixlist
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	PU Passthru connections to a remote end may stay in a pending status and not be
	able to reactivate.
	
	CAUSE
	=====
	
	When you use PU Passthru with Distributed Link Services, a window exists whereby
	one of the remote ends can send an XID to the Node after the Node has sent it
	the Open-Station-Request. This caused the Node to reject the
	Open-Station-Response and Station-Contacted message, and thus fail to activate
	either of the PU Passthru Connections.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0 Service
	Pack 1. This problem was corrected in the latest SNA Server version 4.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: SNASERVR
	
	======================================================================
	Keywords          :  kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP1
	Version           : WINDOWS:4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
