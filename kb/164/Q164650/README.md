---
layout: page
title: "Q164650: SNA Server Fails to Activate DDDLU Pooled LU"
permalink: /kb/164/Q164650/
---

## Q164650: SNA Server Fails to Activate DDDLU Pooled LU

{% raw %}

	Article: Q164650
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
	
	SNA Server 2.11 and 3.0 fail to dynamically activate an LU (through the host
	dynamic definition of dependent LUs) after the connection has been active for
	five minutes. After five minutes, the SNA Server stops sending NMVTs to request
	activation, and rejects client 3270 session activation requests (that is,
	Open(SSCP) requests) with the following error:
	
	  No free LU in LU Pool.
	
	CAUSE
	=====
	
	After five minutes, SNA Server no longer attempts to activate dynamically
	defined 3270 LUs.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	The updated modules are:
	
	  <Snaroot>\System\Snaservr.exe
	  <Snaroot>\System\Trcservr.exe (used for debugging purposes only)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11, 2.11
	Service Pack 1, and 3.0.
	This problem was corrected in the latest Microsoft SNA Server 2.11 and 3.0 U.S.
	Service Packs. For information on obtaining the service packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna sna30
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ211SP1 kbSNAServ211SP2
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
