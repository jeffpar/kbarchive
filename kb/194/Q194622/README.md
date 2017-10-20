---
layout: page
title: "Q194622: No SNA Manager Status Changes When TN3270 Session Load Under 30K"
permalink: /kb/194/Q194622/
---

## Q194622: No SNA Manager Status Changes When TN3270 Session Load Under 30K

{% raw %}

	Article: Q194622
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbfixlist
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the TN3270 server is under a session load of 30,000 sessions and a client
	is started, the connection and Logical Unit (LU) status in SNA Server Manager
	does not change. In some cases, however, status updates might occur after thirty
	minutes or more have elapsed.
	
	CAUSE
	=====
	
	The status information is not being sent to the SNA Manager.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0 and 4.0
	Service Pack 1. This problem was corrected in the latest SNA Server version 4.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : WINDOWS:4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
