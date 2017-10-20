---
layout: page
title: "Q180416: APPC or CPI-C TPs May Fail When Using Dependent LU 6.2 Sessions"
permalink: /kb/180/Q180416/
---

## Q180416: APPC or CPI-C TPs May Fail When Using Dependent LU 6.2 Sessions

{% raw %}

	Article: Q180416
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 U.S. SP1,3.0 U.S. SP2,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 U.S. SP1, 3.0 U.S. SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An APPC or CPI-C application may fail to get an active conversation with a host
	if a previous conversation over the same Local APPC LU has ended. For example,
	if there was a conversation over local LU LOCAL1 and remote LU REMOTE1, an APPC
	or CPI-C application may fail to get an active conversation over local LU LOCAL1
	and remote LU REMOTE2 even if the previous conversation has ended.
	
	When this occurs, the APPC or CPI-C application call to [MC_]ALLOCATE or CMALLC
	never completes because SNA Server has not unbound the previous dependent LU/LU
	session before attempting to solicit a bind to a different Remote APPC LU.
	
	NOTE: This does not occur when you use Independent LU 6.2 sessions.
	
	For additional information about a related problem in SNA Server versions 3.0
	SP3, 4.0 SP1, and 4.0 SP2, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q225207 APPC/CPIC App Unable To Allocate Conversation over Dependent LU
	
	CAUSE
	=====
	
	SNA Server is not ending the previous dependent APPC session by sending an
	UNBIND to the host. This causes any additional APPC sessions over the same local
	APPC LU and different remote APPC LUs to fail to get active conversations until
	the first APPC session is shut down.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The SNA Server service has been updated so that it will send an UNBIND Cleanup
	to the host to end the initial dependent APPC session if it is not active when
	it receives a request to open a new APPC session over the same local APPC LU and
	a different remote APPC LU.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0 U.S. SP1,3.0 U.S. SP2,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
