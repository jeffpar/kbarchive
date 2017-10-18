---
layout: page
title: "Q276196: NMVT Power Off Now Supported in SNA Server"
permalink: kb/276/Q276196/
---

## Q276196: NMVT Power Off Now Supported in SNA Server

	Article: Q276196
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna400sp1 kbsna400sp2 kbsna400sp3kbbuglist kbfixlist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Network Management Vector Table (NMVT) Power Off messages for Self-Defining
	Dependent Logical Units (SDDLUs) are now supported with SNA Server 4.0. This
	feature allows SNA Server to send this message to the host when a Close System
	Services Control Point (SSCP) is received from the client. This in turn allows
	the host to free the LUs from System Services Control Point (VTAM) control
	blocks.
	
	MORE INFORMATION
	================
	
	For additional information about the latest service pack for SNA Server 4.0,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna400sp1 kbsna400sp2 kbsna400sp3 kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
