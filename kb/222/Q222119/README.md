---
layout: page
title: "Q222119: SNA Server Fails With Event 686 Using Persistent Verification"
permalink: /kb/222/Q222119/
---

## Q222119: SNA Server Fails With Event 686 Using Persistent Verification

	Article: Q222119
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna300sp4fix kbsna400sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0SP3, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When using persistent verification on LU6.2 sessions, SNA Server may fail
	unexpectedly with the following event:
	
	  Event ID: 686
	  Source: SNA Server
	  Description: SNA Server Internal buffer pool error
	
	When this occurs, all SNA Server processes must be restarted, including SnaBase
	and the SNA Server service.
	
	CAUSE
	=====
	
	To support persistent verification, the SNA Server service may be required to
	remove the password vector from the FMH-5 Attach request received from the SNA
	Server APPC DLL (Wappc32.dll). In one case, SNA Server failed to properly
	reformat the message, which resulted in internal SNA buffer pool corruption.
	
	RESOLUTION
	==========
	
	SNA Server 4.0 (post SP2)
	-------------------------
	
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
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 SP3, SNA Server
	4.0, 4.0 SP1 and 4.0 SP2. This problem was first corrected in SNA Server version
	3.0 Service Pack 4 and SNA Server version 4.0 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp4fix kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
