---
layout: page
title: "Q180620: APPC or CPIC Performance Is Degraded When Using Host Security"
permalink: kb/180/Q180620/
---

## Q180620: APPC or CPIC Performance Is Degraded When Using Host Security

	Article: Q180620
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an APPC or CPIC application uses LU6.2 conversational security with the SNA
	Server host security integration feature, performance may be degraded in
	unexpected ways. For example, when measuring transaction throughput with
	multiple concurrent requests, a single LU6.2 conversation may take longer to
	complete than multiple concurrent LU6.2 conversation requests.
	
	This problem was initially found while beta testing SNA Server 4.0's COM
	Transaction Integrator (COMTI), when configured to use LU6.2 conversation
	security in conjunction with the SNA Server Host Security integration feature.
	
	NOTE: While this problem was fixed in the SNA Server 4.0 general release, the
	problem can occur with other APPC or CPIC applications which run over SNA Server
	3.0 (including 3.0 SP1 or 3.0 SP2).
	
	CAUSE
	=====
	
	When the SNA Server communicates with the Host Security Integration service, to
	retrieve a replicated or mapped username or password, the SNA Server's callback
	function is not being signalled properly, leading to an average 2.5 second
	delay.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0, 3.0 SP1,
	and 3.0 SP2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
