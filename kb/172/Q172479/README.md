---
layout: page
title: "Q172479: DMOD limited to 4 Non-RPC Callbacks for API Libraries"
permalink: kb/172/Q172479/
---

## Q172479: DMOD limited to 4 Non-RPC Callbacks for API Libraries

	Article: Q172479
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an application calls the Microsoft SNA Server APIs and these functions need
	to register a callback, the application will fail when it tries to register more
	than four callbacks.
	
	CAUSE
	=====
	
	The Microsoft SNA Server DMOD component is limited to four non-RPC callback
	routines for API libraries per process.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	When an application needs to perform its own routing of received messages, the
	DMOD adds the specified procedure to a list of procedures called whenever a
	message is received.
	
	The following example will illustrate a failing situation:
	
	When an application issues the following function calls,
	
	  sli_open();
	  acssvc_convert();
	  appc_display();
	
	the sequence of registring callback routines is as follows:
	
	  RPC registers a callback, rout_cnt (the count of callbacks
	     registered) = 1
	  RUI registers a callback, rout_cnt = 2
	  CSV registers a callback, rout_cnt = 3
	  APPC registers a callback (for conversation verbs), rout_cnt = 4
	
	  APPC tries to register another callback (for DISPLAY & CNOS management
	     verbs)
	
	The DMOD fails this request and the DISPLAY verb fails, because it already has
	four callbacks registered.
	
	
	Additional query words: route
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
