---
layout: page
title: "Q196390: SNA Server Refuses New User Connection after Server Restarted"
permalink: kb/196/Q196390/
---

## Q196390: SNA Server Refuses New User Connection after Server Restarted

	Article: Q196390
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When SNA Server is configured for "per server" licensing mode, SNA Server may
	incorrectly detect that it has reached its client license limit, and log the
	following event:
	
	  Event ID: 597
	  Source: SNA Server
	  Description: User limit of <license limit> exceeded: client connection
	  rejected
	
	When this occurs, the client application may receive one of the following error
	messages:
	
	  A 3270 emulator will be unable to open a session through the SNA Server.
	
	  An APPC or CPIC application will receive a TP_STARTED, [MC_]ALLOCATE or CMALLC
	  failure when attempting to allocate a conversation.
	
	This problem does not occur when SNA Server is configured for "per seat"
	licensing mode.
	
	CAUSE
	=====
	
	SNA Server was failing to clear the client count when the SNA Server service is
	stopped and restarted.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 4.0 and 4.0
	Service Pack 1. This problem was corrected in the latest SNA Server version 4.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft SNA Server 4.0 and
	4.0 Service Pack 1.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : WINDOWS:4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
