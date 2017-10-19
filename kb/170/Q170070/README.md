---
layout: page
title: "Q170070: SNA Client Allocate Requests May Hang After AS/400 IPL"
permalink: /kb/170/Q170070/
---

## Q170070: SNA Client Allocate Requests May Hang After AS/400 IPL

	Article: Q170070
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
	
	If an APPC or CPIC application issues several conversation startup requests
	(that is, [MC_]ALLOCATE or CMALLC) immediately after an AS/400 IPL, some
	allocates may fail to complete, or complete after further client ALLOCATEs are
	issued.
	
	This problem occurs after SNA Server renegotiates session limits for an LU/LU
	pair, where some pending client ALLOCATE requests are queued incorrectly and
	fail to be processed.
	
	The symptoms of the problem may vary, based on the application being used. This
	problem would occur most commonly with an APPC or CPIC application which
	initiates many conversations concurrently to the same remote system (say, an
	AS/400 or CICS). It would be unlikely to occur when starting a single
	conversation (for example, 5250 emulation) on multiple client computers.
	
	
	CAUSE
	=====
	
	After the remote system is stopped and started (the AS/400 in this example), the
	existing session limits on all LU6.2 pairs have not been reset. If one or more
	users attempt to activate a new LU6.2 session at the same time, after the remote
	system has been reactivated, the remote system rejects the BIND request with
	sense code 08050000 (session limit exceeded), which causes SNA Server to
	reinitiate change-number-of-sessions (CNOS) renegotiation with the remote
	system.
	
	The problem is that SNA Server was incorrectly queueing the user's initial
	activation requests after CNOS renegotiation had taken place, causing the client
	application to hang on the ALLOCATE request (for an APPC application) or CMALLC
	request (for a CPIC application).
	
	RESOLUTION
	==========
	
	An update to SNA Server 3.0 Service Pack 1 is available to correct this problem.
	The updated module is Snaservr.exe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11
	(including SP1 and SP2) and SNA Server 3.0 (including SP1). This problem was
	corrected in the latest SNA Server version 3.0 U.S. Service Pack. For
	information on obtaining this Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
