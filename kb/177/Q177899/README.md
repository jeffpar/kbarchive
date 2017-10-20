---
layout: page
title: "Q177899: Dependent LU6.2 Bind Rejected with Sense Code 0835"
permalink: /kb/177/Q177899/
---

## Q177899: Dependent LU6.2 Bind Rejected with Sense Code 0835

{% raw %}

	Article: Q177899
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server 3.0 (including SP1 or SP2) and 4.0 may reject a dependent APPC LU
	Bind that is sent by the host. This causes a session activation error and the
	following entry is made to the Microsoft Windows NT event log:
	
	  Event: 17
	  Description: APPC session activation failure: BIND negative response
	  sent
	  Sense Data = 083500xx
	
	NOTE: The xx bytes in the sense code point to the hexadecimal offset within the
	host bind request of the parameter that SNA Server is rejecting. In this case,
	the xx may point to a PLU name which may not be prepended with the network
	name.
	
	
	CAUSE
	=====
	
	The host system starts an LU6.2 dependent session by sending a BIND to SNA
	Server. If the Primary LU Name (PLU) sent in the BIND request is not preceded by
	the network name, then SNA Server fails to properly match against the remote
	APPC LU names configured in SNA Server. This causes SNA Server to reject the
	BIND if no network name is specified in the PLU name sent by the host system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
