---
layout: page
title: "Q177639: MngAgent Event 5137:Internal Error - Allocation Failed"
permalink: kb/177/Q177639/
---

## Q177639: MngAgent Event 5137:Internal Error - Allocation Failed

	Article: Q177639
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure SNA Server Manager with more than 250 Local or Remote APPC
	LUs, an internal error in MngAgent (Event id: 5137) may be logged in the Windows
	NT event log. The entry in the event log indicates that MngAgent was unable to
	allocate any more local LUs. In addition, SNA Manager will no longer show proper
	status for the configured Local and Remote APPC LUs.
	
	CAUSE
	=====
	
	The Manage Agent tables used for memory allocation have a limit of 250 local LUs
	and 250 remote LUs per SNA Server service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, and 3.0 SP2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
