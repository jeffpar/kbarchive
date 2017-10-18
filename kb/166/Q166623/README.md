---
layout: page
title: "Q166623: SNA Server Rejects FMH-5 Attach Intended for TP on NT Client"
permalink: kb/166/Q166623/
---

## Q166623: SNA Server Rejects FMH-5 Attach Intended for TP on NT Client

	Article: Q166623
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Even though an auto-started invokable APPC or CPIC Transaction Program (TP) is
	configured on an SNA Server Windows NT client computer, SNA Server may reject
	the host FMH-5 Attach request and log the following error
	
	  Event ID: 60
	  Source: SNA Server
	  Description: Failed to invoke APPC TP <tpname>, sense data = 084C0000
	
	where 084C0000 refers to AP_TRANS_PGM_NOT_AVAIL_NO_RETRY.
	
	CAUSE
	=====
	
	When the SNA Server Windows NT client loses its sponsor connection to the
	SnaBase service on the SNA Server, the client does not alway report configured
	TPs to the server when the sponsor connection is re-established. This can occur
	if SNA Server is restarted while SNA Server Windows NT clients have active
	sponsor connections and are not restarted.
	
	A timing window in the SNA Server Windows NT client software causes this problem
	to occur; the probability of the problem may increase as the client processor
	speed increases.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11, 2.11
	Service Pack 1 (SP1), and 2.11 SP2. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: dload
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
