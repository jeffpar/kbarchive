---
layout: page
title: "Q176020: SNA Server Starts Slowly When Configured with 15000 3270 LUs"
permalink: /kb/176/Q176020/
---

## Q176020: SNA Server Starts Slowly When Configured with 15000 3270 LUs

	Article: Q176020
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If SNA Server is configured to support up to 15000 3270 LUs, it may take several
	minutes to start the SNA Server service and for the LUs to change to an
	available status.
	
	
	CAUSE
	=====
	
	The SNA Server service is not processing ACTLUs efficiently, causing performance
	delays when a large number of 3270 LUs are configured.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the SNA Server versions 3.0, 3.0
	Service Pack 1, and 3.0 Service Pack 2. This problem was corrected in SNA Server
	version 3.0 U.S. Service Pack 3. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: slow
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
