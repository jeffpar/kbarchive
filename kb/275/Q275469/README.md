---
layout: page
title: "Q275469: APPC Load Balancing May Fail to Choose &quot;Best&quot; SNA Server"
permalink: /kb/275/Q275469/
---

## Q275469: APPC Load Balancing May Fail to Choose &quot;Best&quot; SNA Server

	Article: Q275469
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Advanced Program-to-Program Communications (APPC) or Common Programming
	Interface for Communications (CPI-C) application may not connect to a SNA Server
	that has the best chance of providing a LU 6.2 session over the specified APPC
	Local LU/RemoteLU/Mode. As a result, the application may not be able to obtain
	an available LU 6.2 session or the application may experience a delay while
	finding a SNA Server with an available LU 6.2 session.
	
	The symptoms that are experienced by an end user who is running the APPC or CPI-C
	application may vary.
	
	CAUSE
	=====
	
	The APPC library locates an available LU 6.2 session that matches the parameters
	(Local APPC LU and Remote APPC LU, for example) that are requested by the
	application. If there are multiple SNA Server computers that can provide the
	requested Local and/or Remote APPC LUs, the APPC Library contacts the SNA Server
	computers in a random order according to how the servers are listed in the SNA
	Client's Service Table. The SNA Server computer can respond to the session
	requests with various errors depending on the state of its configured
	connections and the availability of the LU 6.2 sessions on those connections.
	
	When the APPC Library receives these error responses from the available SNA
	Server computers, the errors are ranked to determine which SNA Server computer
	has the greatest probability of providing the requested LU 6.2 session.
	
	The problem described here occurs because the errors that are returned by the SNA
	Servers are giving priority to SNA Servers that have a lower chance of being
	able to satisfy the session request than other SNA Servers that have a better
	chance of satisfying the request.
	
	NOTE: This problem occurs only when the application specifies a specific Local
	APPC LU in the TP_STARTED request. If the application specifies a "blank" Local
	APPC LU in the TP_STARTED request, this problem does not occur.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
