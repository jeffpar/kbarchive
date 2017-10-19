---
layout: page
title: "Q275280: Workstation Definitions That Use MAC Addresses Fail on Win 2000"
permalink: /kb/275/Q275280/
---

## Q275280: Workstation Definitions That Use MAC Addresses Fail on Win 2000

	Article: Q275280
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Server 4.0 Service Pack 2 (SP2) and Service Pack 3 (SP3) clients that are
	running on Microsoft Windows 2000 cannot connect to their assigned SNA resources
	(3270 LUs or Pools) when the resources are assigned to a workstation record by
	using the SNA client's MAC address.
	
	The error that is displayed varies depending on the 3270 Emulator (or
	application) that is being used. The following error message is displayed when
	the 3270 application that is included with SNA Server is used:
	
	  ERROR - There are no configured sessions for your user record.
	
	NOTE: SNA Server 4.0 Service Pack 1 (SP1) and earlier do not include the feature
	that allows workstation records to be defined by using MAC addresses for
	Transfer Control Protocol/Internet Protocol (TCP/IP) connected clients.
	
	CAUSE
	=====
	
	SNA Server 4.0 SP2 and SP3 clients call the CoCreateGUID function to obtain a
	global unique ID (GUID) for the system. On Microsoft Windows NT 4.0, the last
	six bytes of the GUID contain the MAC address of the client's network adapter.
	CoCreateGUID changed in Windows 2000 so that it no longer returns the MAC
	address as part of the resulting GUID. This change results in the problem
	described in the "Symptoms" section.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The ability to define workstation definitions for TCP/IP-connected SNA Server
	clients by using the client's MAC address was added in SNA Server 4.0 SP2. For
	additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q191610 Assigning LUs/Pools to Workstation MAC Addresses Not Supported
	
	NOTE: This problem does not occur with either the End User client or the Admin
	client that are included with Microsoft Host Integration Server 2000.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
