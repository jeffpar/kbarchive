---
layout: page
title: "Q164649: SNA Server Rejects Open (SSCP) for Pooled LU"
permalink: kb/164/Q164649/
---

## Q164649: SNA Server Rejects Open (SSCP) for Pooled LU

	Article: Q164649
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user attempts to open a 3270 session, SNA Server returns the error
	message
	
	  No LU in LU Group Free
	
	even though the LUs appear to be available in the SNA Server Admin or Manager.
	
	CAUSE
	=====
	
	When an Open (SSCP) client request is received for a pooled LU that is defined
	on an SNA Server connection configured for "incoming-only" activation, SNA
	Server treats the connection as though it was disabled.
	
	RESOLUTION
	==========
	
	A fix is available to correct this problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11, 2.11
	Service Pack 1, 2.11 Service Pack 2, and 3.0. This problem was corrected in the
	latest Microsoft SNA Server 3.0 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna sna30
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ211SP1 kbSNAServ211SP2
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
