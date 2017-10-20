---
layout: page
title: "Q172800: APPC Application Unable to Cancel TEST_RTS_AND_POST"
permalink: /kb/172/Q172800/
---

## Q172800: APPC Application Unable to Cancel TEST_RTS_AND_POST

{% raw %}

	Article: Q172800
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbprogramming
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an APPC application calls TEST_RTS_AND_POST and requests asynchronous
	completion, and later attempts to cancel the call using
	WinAPPCCancelAsyncRequest, the request is not cancelled.
	
	If SNA Application APPC API tracing is enabled, the trace will indicate two
	completion events for the TEST_RTS_AND_POST function: one immediately after the
	call is made, and a second return when the TEST_RTS_AND_POST finally completes.
	The cancel request appears to have no effect.
	
	CAUSE
	=====
	
	The APPC interface is not properly canceling the TEST_RTS_AND_POST.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbprogramming 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
