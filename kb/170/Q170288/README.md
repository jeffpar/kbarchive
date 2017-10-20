---
layout: page
title: "Q170288: CMWAIT Returns Incorrectly After Canceling CMALLC"
permalink: /kb/170/Q170288/
---

## Q170288: CMWAIT Returns Incorrectly After Canceling CMALLC

{% raw %}

	Article: Q170288
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbprogramming
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the SNA Server Win32 asynchronous CPIC interface, a CPIC
	application may encounter problems when you cancell an Allocate (CMALLC) call
	with Cancel_Conversation (CMCANC).
	
	After you cancel a CMALLC using CMCANC, subsequent attempts to issue CMALLC in
	non-blocking mode appear to show that CMWAIT returns immediately, without
	waiting for the CMALLC async final completion.
	
	CAUSE
	=====
	
	Canceling an asynchronous CPI-C call (not ones that would complete by posting a
	Windows message) does not work correctly. Later CMWAITs return early because
	they pick up false completions from the cancelled calls.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11, 2.11
	Service Pack 1 (SP1), 2.11 Service Pack 2 (SP2), 3.0, and 3.0 Service Pack 1
	(SP1).
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	A supported fix for SNA Server version 2.11 is now available, but has not been
	fully regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	The following sequence was observed in an SNA Application CPIC API trace:
	
	  CMINIT ->
	     <- CMINIT OK
	  CMSPM (set non-blocking mode)
	     <- CMSPM OK
	  CMALLC ->
	     <- CMALLC (operation incomplete)
	  CMCANC ->
	     <- CMALLC (allocation_failure_no_retry)
	     <- CMCANC OK
	  CMINIT ->
	     <- CMINIT OK
	  CMSPM (set non-blocking mode) ->
	     <- CMSPM OK
	  CMALLC ->
	     <- CMALLC (operation incomplete)
	  CMWAIT ->
	     <- CMWAIT OK
	  CMDEAL ->
	     <- CMDEAL (error = state_check)
	     <- CMALLC OK
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbprogramming 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
