---
layout: page
title: "Q189475: Max BTU Size Limit Increased for SNA Server Connections"
permalink: /kb/189/Q189475/
---

## Q189475: Max BTU Size Limit Increased for SNA Server Connections

{% raw %}

	Article: Q189475
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 22-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The maximum Basic Transmission Unit (BTU) length that can be specified on a
	connection has been increased to 65,536 bytes for channel connections and 32,768
	bytes for non-channel connections. These are limits imposed by SNA XID formats,
	which allow 2 bytes for maximum BTU size for channel connections and 15 bits for
	non-channel connections.
	
	CAUSE
	=====
	
	The maximum BTU length was previously hardcoded for a maximum length of 16,393
	bytes, which is the largest size supported by Token Ring networks.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3, 4.0, and 4.0 SP1. We are researching this problem in SNA
	Server version 3.0 and will post more information here in the Knowledge Base as
	it becomes available.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Setting the maximum BTU length to the limit does not guarantee that the SNA
	Server connection will actually use this value. The individual link service or
	the host can negotiate it down. For information on how the actual Max BTU value
	is determined for 802.2 DLC connection, refer to the following Knowledge Base
	article:
	
	  Q148972 How SNA Server Determines Max BTU Over 802.2 DLC
	
	Additional query words: snacfg
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
