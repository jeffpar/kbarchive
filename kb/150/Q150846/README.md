---
layout: page
title: "Q150846: Event 1955 Does Not Report LU Name for RUI_INIT Failure"
permalink: kb/150/Q150846/
---

## Q150846: Event 1955 Does Not Report LU Name for RUI_INIT Failure

	Article: Q150846
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbprogramming
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an LUA application fails on an RUI_INIT, SNA Server logs an event 1955 in the
	Microsoft Windows NT Application Event log. The following information is logged
	as the description for the event:
	
	  RUI_INIT failed for LU         , primary_rc = <numeric>, secondary_rc =
	  <numeric>.
	
	The description should include the name of LU where the failure occurred.
	
	CAUSE
	=====
	
	The error routine for LUA RUI verbs is not returning the name of the LU that
	failed to initialize.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11 and
	2.11.sp1. This problem was corrected in the latest Microsoft SNA Server 2.11
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
