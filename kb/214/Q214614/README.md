---
layout: page
title: "Q214614: APPC Application Works on SNA 2.11, Fails on SNA 4.0"
permalink: /kb/214/Q214614/
---

## Q214614: APPC Application Works on SNA 2.11, Fails on SNA 4.0

	Article: Q214614
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0SP3,4.0,4.0SP1
	Operating System(s): 
	Keyword(s): kbsna300sp4fix kbsna400sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0SP3, 4.0, 4.0SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After upgrading from SNA Server 2.11 to SNA Server 4.0, an APPC application
	started failing with the following allocation error:
	
	  primary_rc = AP_ALLOCATION_ERROR (0x0003)
	  secondary_rc = AP_SECURITY_NOT_VALID (0x080F6051)
	
	When the application attempted to allocate a conversation by specifying security
	= AP_SAME and a user ID, SNA Server 4.0 no longer sent any security information
	to the host, causing the host to reject the FMH-5 Attach request.
	
	CAUSE
	=====
	
	Under SNA Server 4.0, SNA Server no longer sends security vectors in the FMH-5
	Attach request if the APPC application specifies security = AP_SAME, and the
	host indicates no support for "already verified" or "persistent verification."
	Byte 23 of the host BIND indicates the security options supported by the host
	for an LU6.2 session. In this particular case, the host BIND indicated support
	for receiving security information in FMH-5 Attach requests, but no support for
	"already verified" or "persistent verification."
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 SP3, 4.0, 4.0 SP1
	and 4.0 SP2. This problem was first corrected in SNA Server version 3.0 Service
	Pack 4 and SNA Server version 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	When this fix is applied, SNA Server reverts to 2.11 behavior and includes the
	user ID *and* password in the FMH-5 Attach request, when the application
	requests security = AP_SAME, and the host indicates support for receiving access
	security information in the FMH-5 Attach request.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp4fix kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:3.0SP3,4.0,4.0SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
