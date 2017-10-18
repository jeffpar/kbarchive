---
layout: page
title: "Q196000: SNA Print Server Rejects FMH-1 With Sense Code 1005"
permalink: kb/196/Q196000/
---

## Q196000: SNA Print Server Rejects FMH-1 With Sense Code 1005

	Article: Q196000
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the Host sends an FMH-1 read partition query for an LU 1 print session, SNA
	Print Server rejects this request with Sense Code 0x'1005'.
	
	CAUSE
	=====
	
	The SNA Print Service received an FMH-1 read partition query command from the
	host that was badly formatted. That is, the length field was incorrect, and it
	contained an invalid structured field type.
	
	
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
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	Service Pack 1, 3.0 Service Pack 2, 3.0 Service Pack 3, 4.0, and 4.0 Service
	Pack 1. This problem was first corrected in SNA Server 3.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	This fix slackens our tight, albeit accurate, restrictions on FM Headers.
	Headers of unknown format are now passed over.
	
	
	Additional query words: snaprintservice
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
