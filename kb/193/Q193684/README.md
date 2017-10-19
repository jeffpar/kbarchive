---
layout: page
title: "Q193684: APPC/CPI-C Apps May Hang When Allocating LU 6.2 Sessions"
permalink: /kb/193/Q193684/
---

## Q193684: APPC/CPI-C Apps May Hang When Allocating LU 6.2 Sessions

	Article: Q193684
	Product(s): Microsoft SNA Server
	Version(s): 3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An APPC or CPI-C application may occasionally fail to establish a session after
	a host system (Mainframe or AS/400) initiates the Change Number of Sessions
	(CNOS) negotiation.
	
	Applications may exhibit different symptoms if this occurs, depending on how the
	application is written. If the application has timeout, the application will
	terminate the session after the timeout has been reached. Applications that do
	not have a timeout may appear to hang (stop responding) while waiting for the
	Allocate call to complete.
	
	This problem did not occur with SNA Server 3.0 SP1 and earlier.
	
	CAUSE
	=====
	
	This problem can occur when the host system initiates CNOS negotiation with the
	SNA Server. When this occurs, suspended LU 6.2 sessions are in an unusable state
	by SNA Server, causing application-generated Open LU 6.2 Requests (for example,
	ALLOCATEs) to hang.
	
	CNOS negotiation is not commonly initiated by the host system. SNA Server usually
	initiates CNOS negotiation because of application requests for LU 6.2 sessions,
	or because the SNA Server is configured to auto activate LU 6.2 sessions.
	Therefore, occurrences of this problem are not common.
	
	This problem was exposed due to a change included in SNA Server 3.0 SP2 to
	correct the problem described in the following Knowledge Base article:
	
	  Q170070 SNA Client Allocate Requests May Hang After AS/400 IPL
	
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
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0 and 4.0
	SP1. This problem was corrected in the latest SNA Server version 4.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 SP2, 3.0
	SP3, 4.0, and 4.0 SP1. This problem was first corrected in SNA Server 3.0
	Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : :3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
