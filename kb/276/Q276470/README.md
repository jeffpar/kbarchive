---
layout: page
title: "Q276470: Dynamically Defined LUs Show Pending Status After PU Recycled"
permalink: /kb/276/Q276470/
---

## Q276470: Dynamically Defined LUs Show Pending Status After PU Recycled

	Article: Q276470
	Product(s): Microsoft SNA Server
	Version(s): 3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Server may fail to dynamically activate a logical unit (LU), through the
	host Dynamic Definition of Dependent LUs (DDDLUs), after the physical unit (PU)
	on the mainframe has been recycled. The result is that the LUs that are defined
	on this host connection may show a "pending" status when viewed in SNA Server
	Manager after an application tries to connect to the LUs. The application that
	is trying to reconnect to the LU at this point cannot get an active session to
	the host.
	
	The same problem may occur when the host connection is stopped and restarted
	through SNA Server Manager.
	
	CAUSE
	=====
	
	The SNA Server service doesn't check whether the LU-System Services Control
	Point (SSCP) session is down before it tries to send the Network Management
	Vector Table (NMVT) request to deactivate the session when an application
	disconnects. This results in the SNA Server not sending an NMVT request to
	activate the LU when an application tries to reconnect to an available LU.
	
	NOTE: The LU will be available again once the PU is activated on the host or the
	connection is restarted on SNA Server.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0 (all Service Packs), 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	For additional information about SNA Server and DDDLUs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q161492 INFO: LU Session Activation Using Dynamically Defined Dependent LUs
	
	  Q164592 Dynamically Defined Dependent LU Support for LUA LUs
	
	  Q276453 Dynamically Defined Dependent LU Support for Printer LUs
	
	Additional query words: Snaservr sp1 sp2 sp3 service pack sp
	
	======================================================================
	Keywords          : kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
