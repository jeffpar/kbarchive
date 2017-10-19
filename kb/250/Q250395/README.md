---
layout: page
title: "Q250395: Stopping TN3270 LU from SNA Manager Fails to Clean Out Session"
permalink: /kb/250/Q250395/
---

## Q250395: Stopping TN3270 LU from SNA Manager Fails to Clean Out Session

	Article: Q250395
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): _IK sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A TN3270 client cannot connect to a TN3270 LU after the TN3270 LU is stopped
	through SNA Server Manager. The TN3270 LU shows an "Available" status after it
	is stopped from within SNA Server Manager, but TN3270 clients cannot use the
	session for a connection to the mainframe.
	
	The session remains unavailable until after the TN3270 Idle Timeout expires or
	until the TN3270 service is stopped and restarted. The TN3270 Idle Timeout
	defaults to two hours.
	
	CAUSE
	=====
	
	The TN3270 server was not designed to clean up an active TN3270 session when the
	session was stopped through SNA Server Manager.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The following steps describe how to stop a TN3270 LU from within SNA Server
	Manager:
	
	1. Highlight the TN3270 service in SNA Server Manager.
	
	2. Highlight the active TN3270 LU in the right pane of SNA Server Manager.
	
	3. Right-click the TN3270 LU, and then click Stop on the context menu.
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
