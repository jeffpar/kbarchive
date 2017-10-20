---
layout: page
title: "Q189053: SNA Server Access Violation in Function Snaservr!s1prfpda"
permalink: /kb/189/Q189053/
---

## Q189053: SNA Server Access Violation in Function Snaservr!s1prfpda

{% raw %}

	Article: Q189053
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbfixlist
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Server service may fail with an access violation after receiving a
	change number of sessions (CNOS) negotiation error for pending LU 6.2 session
	requests. If Drwtsn32.exe is configured as the default debugger on the SNA
	Server system, the Drwtsn32.log file may contain an entry similar to the
	following when this access violation occurs:
	
	  Application exception occurred:
	  App: <path> snaservr.exe (pid=<process ID #>)
	  When: <date> @ <time>
	  Exception number: c0000005 (access violation)
	
	
	In addition, the Windows NT Application Event Log may contain an event error
	message similar to the following if this access violation occurs:
	
	  Event ID: 624
	  Source: SNA Server
	  Description: Creating dump file <snaroot>\snadump.log for Snaservr.exe
	
	CAUSE
	=====
	
	This problem can occur if CNOS negotiation fails and the host returns an error
	twice with a sequence similar to the following:
	
	- The host UNBINDs the SNASVCMG Mode session.
	
	-AND-
	
	- The host returns an error to the CNOS GDS variable sent by SNA Server to
	  initiate the CNOS negotiation.
	
	When this occurs, the SNA Server service is removing pending LU 6.2 session
	requests for a local LU/remote LU/mode from an internal list twice, because
	there are two different errors being returned. The access violation occurs
	because the internal list is not being cleaned up properly when an entry is
	removed from the list, so the second attempt to remove the pending request
	causes the access violation.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest Microsoft SNA Server version 4.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3, 4.0, and 4.0 SP1. This problem was first corrected in SNA
	Server 3.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The SNA Server service checks to see whether it has already negotiated CNOS
	(change number of sessions) for a requested local APPC LU/remote APPC LU/ mode
	when it receives an open LU 6.2 request for a new LU 6.2 session. If CNOS has
	not been negotiated for the requested LU/LU/mode, the SNA Server service queues
	this request by putting it in an internal list created under the requested APPC
	mode's control block while CNOS negotiation is performed.
	
	After the CNOS negotiation completes successfully or fails, the SNA Server
	service goes through this internal list and processes all the LU 6.2 requests
	for the requested local LU/remote LU/mode. As it processes the pending requests,
	they are removed from the internal list.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
