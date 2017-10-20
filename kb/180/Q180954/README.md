---
layout: page
title: "Q180954: Allocation of Print Server Threads May Cause Delays"
permalink: /kb/180/Q180954/
---

## Q180954: Allocation of Print Server Threads May Cause Delays

{% raw %}

	Article: Q180954
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Host Print service's method of allocating threads may result in poor
	printing performance if a network printer is extremely busy or becomes
	unavailable for some reason.
	
	CAUSE
	=====
	
	The Host Print service currently allocates one thread for every 32 print
	sessions. In this case, if one printer is slow to respond or is unavailable, the
	other print sessions running on the same thread may experience performance
	degradation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server Versions 3.0, 3.0
	SP1, 3.0 SP2, and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, thread allocation is changed to allow for Print Server to
	run 1 thread per session for up to 32 sessions. The next 32 sessions will be run
	at 2 sessions per thread increasing up to 32 sessions per thread. By running
	fewer sessions per thread, potential delays will be minimized.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
