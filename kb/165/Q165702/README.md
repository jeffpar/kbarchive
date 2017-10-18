---
layout: page
title: "Q165702: Increase Capacity of LUs in a Pool to 30,000"
permalink: kb/165/Q165702/
---

## Q165702: Increase Capacity of LUs in a Pool to 30,000

	Article: Q165702
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1,2.11 SP2,3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP1, 2.11 SP2, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	It is not possible to add more than 10,000 LUs to a single SNA Server 3270, LUA
	or Downstream pool using either 2.11 (using SNA Admin), or 3.0 (using SNA
	Manager). Even though a single SNA Server 2.11 server can support up to 10,000
	sessions and SNA Server 3.0 can support up to 15,000 sessions, an LU pool may
	span SNA Servers in an SNA subdomain.
	
	CAUSE
	=====
	
	The SNA Admin and SNA Manager programs were incorrectly limiting the number of
	LUs that could be added to an LU pool.
	
	RESOLUTION
	==========
	
	An update to SNA Server 2.11 and 3.0 is available to correct this problem. To
	resolve this problem, obtain the hotfix mentioned below.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11, 2.11
	Service Pack 1, 2.11 Service Pack 2, and 3.0.
	This problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11 SP1,2.11 SP2,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
