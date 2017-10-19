---
layout: page
title: "Q149597: Peer SDLC Connections Allow Invalid Idle Timeout/Retry Values"
permalink: /kb/149/Q149597/
---

## Q149597: Peer SDLC Connections Allow Invalid Idle Timeout/Retry Values

	Article: Q149597
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetserv
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server Admin allows the configuration of Idle Timeout and Idle Retry values
	outside the valid range for SDLC connections configured as Remote End = Peer
	System.
	
	RESOLUTION
	==========
	
	Use values within the valid range for Idle Timeout and Idle Retry Limit.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	2.0, 2.1, 2.11, and 2.11.sp1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The valid range for Idle Timeout is 1 (1/10 of a second) through 300. The valid
	range for Idle Retry Limit is 1 through 255.
	
	SNA Server Admin will report the following errors when invalid Idle Timeout and
	Retry values are entered for SDLC connections:
	
	  Error: 3862
	
	  The Idle Timeout is invalid.
	  The range is from 1 (one-tenth of a second) through 300 (30
	  seconds). The default is 300 (30 seconds).
	
	  Error: 3861
	
	  The Idle Retry Limit is invalid
	  The range is from 1 through 255; The default is 10.
	
	These errors are not reported if the SDLC connection is configured as Remote End
	= Peer System.
	
	Additional query words: prodsna timers
	
	======================================================================
	Keywords          : kbnetserv 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
