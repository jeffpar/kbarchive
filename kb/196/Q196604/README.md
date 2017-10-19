---
layout: page
title: "Q196604: SNA Server Manager May Not Find Subdomain When Started"
permalink: /kb/196/Q196604/
---

## Q196604: SNA Server Manager May Not Find Subdomain When Started

	Article: Q196604
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When starting SNA Server Manager, it may intermittently fail to find the
	subdomain. This has been observed when Manager is run from an SNA Client
	computer, which is located on the other side of a router from the sponsor
	servers. The error message that is displayed is "<subdomain> NOT FOUND."
	Traces indicate that when the problem occurs, Manager is attempting to locate
	the servers using local broadcast, which fails because the servers are on the
	other side of a router.
	
	CAUSE
	=====
	
	The SNA Manage Client (Mngcli.exe), which is started when Manager (Snaexp.exe)
	starts, requires time to initialize. SNA Server Manager times out before the SNA
	Manage Client can completely initialize, resulting in a local broadcast for any
	SNA Server computer.
	
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
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	WORKAROUND
	==========
	
	The problem is timing related. Deleting the SNA Server Manager settings file
	(Snaexp.snav) seems to work around the problem, most likely because the timing
	of the SNA Manage Client (Mngcli.exe) initialization process is altered.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	Service Pack 1, 3.0 Service Pack 2, 3.0 Service Pack 3, 4.0, and 4.0 Service
	Pack 1. This problem was first corrected in SNA Server 3.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
