---
layout: page
title: "Q163311: Number of Active Users Exceeds Number of Active Sessions"
permalink: /kb/163/Q163311/
---

## Q163311: Number of Active Users Exceeds Number of Active Sessions

{% raw %}

	Article: Q163311
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Server Properties in the SNA Server Administrator program show that the
	number of active users exceeds the number of active sessions and over time
	continues to increase. When the number of active users increases past 2,000, SNA
	Server starts to reject requests for new sessions. It will still continue to
	provide sponsors connections.
	
	CAUSE
	=====
	
	This problem is related to the TN3270 service included with SNA Server 2.11
	SP1.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, apply the updated TN3270 service referenced below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11 Service
	Pack 1 (SP1).
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: Clicount prodsna
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.1,2.11,2.11 SP1
	
	=============================================================================
	

{% endraw %}
