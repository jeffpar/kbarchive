---
layout: page
title: "Q196238: SNARAS Goes Into Infinite Loop When Invalid Msg Type Is Received"
permalink: kb/196/Q196238/
---

## Q196238: SNARAS Goes Into Infinite Loop When Invalid Msg Type Is Received

	Article: Q196238
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
	
	SNARAS may stop responding (hang) after a port is disconnected. SNARAS internal
	traces show that it has entered an infinite loop.
	
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
	
	MORE INFORMATION
	================
	
	The following is an excerpt of SNARAS internal trace that was captured while the
	service was in this infinite loop:
	
	rassna.c 2857 SriCallback-message at 0x0021C2E0 of type 1311224 with rc 22
	rassna.c 2942 SriCallback: Bad message 1311224 rassna.c 2944 SriCallback: Send
	Internal Error Response rassna.c 2857 SriCallback-message at 0x0021C2E0 of type
	1311224 with rc 22 rassna.c 2942 SriCallback: Bad message 1311224 rassna.c 2944
	SriCallback: Send Internal Error Response rassna.c 2857 SriCallback-message at
	0x0021C2E0 of type 1311224 with rc 22 rassna.c 2942 SriCallback: Bad message
	1311224
	
	This is a deadlock situation with repeated occurrences of the rc=22 error.
	
	Additional query words: SNARAS rc 22
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
