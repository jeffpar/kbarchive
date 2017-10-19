---
layout: page
title: "Q163579: Server Properties Shows &quot;Active Users&quot; at License Limit"
permalink: /kb/163/Q163579/
---

## Q163579: Server Properties Shows &quot;Active Users&quot; at License Limit

	Article: Q163579
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the TN3270 service, the Server Properties dialog box in the SNA
	Server Admin may display the following error, even if the number of active users
	is actually much lower than the number displayed:
	
	  Active Users: <license limit>
	
	The result is that users are not be able to connect using TN3270. Clients receive
	error messages stating that the license limit has been exceeded.
	
	CAUSE
	=====
	
	The TN3270 service did not free licenses properly once a user disconnected.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below. In the hotfix, the
	licensing portion of the TN3270 service was rewritten to resolve this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	2.0, 2.1, 2.11, and 2.11 Service Pack 1. This problem was corrected in the
	latest Microsoft SNA Server 2.11 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: sp1 prodsna snafaqtop
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
