---
layout: page
title: "Q169856: SNA Print Service Leak When All Print Sessions Are Stopped"
permalink: /kb/169/Q169856/
---

## Q169856: SNA Print Service Leak When All Print Sessions Are Stopped

{% raw %}

	Article: Q169856
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Memory is not de-allocated when all print sessions are stopped.
	
	CAUSE
	=====
	
	SNA Print service fails to de-allocate 317 KB of memory after each time all
	printer session are stopped.
	
	Every time a first session starts, a new thread is created. When the number of
	sessions goes down to zero, the thread is destroyed but not all memory hanging
	off this thread is freed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 and 3.0 sp1. This
	problem was corrected in the latest SNA Server version 3.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	MORE INFORMATION
	================
	
	A change was made so that threads are never destroyed until SNAPrint Service is
	actually stopped. The threads will wait around until a new session uses them.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
