---
layout: page
title: "Q189501: X.25 PU Passthrough Drops Transmission Header"
permalink: kb/189/Q189501/
---

## Q189501: X.25 PU Passthrough Drops Transmission Header

	Article: Q189501
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting up PU Passthrough to IBMX25 link service fails to establish a session,
	because the Transmission Header is dropped from all SNA messages transmitted
	across the X.25 network.
	
	CAUSE
	=====
	
	This is a result of the IBMX25 link service, when it checks the wrong byte in
	the Open Station for FID-2 support. Because of other settings in the Open
	Station message, this situation is only seen when using PU Passthrough.
	
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	and 4.0 SP1. This problem was corrected in the latest SNA Server version 4.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : WINDOWS:4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
