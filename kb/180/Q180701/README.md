---
layout: page
title: "Q180701: CPIC Application CMINIT May Stop on SNA Windows NT Client"
permalink: /kb/180/Q180701/
---

## Q180701: CPIC Application CMINIT May Stop on SNA Windows NT Client

{% raw %}

	Article: Q180701
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Win32 CPIC application's call to Initialize_Conversation (CMINIT) may never
	complete on an SNA Server Windows NT client if the client is unable to
	communicate to the SNA Server.
	
	CAUSE
	=====
	
	When the SnaBase returns the remote procedure call (RPC) error to the APPC/CPIC
	interface, SnaBase does not initialize the message type correctly, causing
	APPC/CPIC to fail to return an error to the CMINIT call.
	
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
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
