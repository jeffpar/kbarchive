---
layout: page
title: "Q193989: Opening Subdomain in SNA Manager Fails on Every Other Attempt"
permalink: kb/193/Q193989/
---

## Q193989: Opening Subdomain in SNA Manager Fails on Every Other Attempt

	Article: Q193989
	Product(s): Microsoft SNA Server
	Version(s): 3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Open Subdomain feature in SNA Manager from either a SNA Server
	or computer running Windows NT Workstation with the SNA Server Manager
	components installed, the first attempt will complete the request, but the next
	attempt will fail.
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. In SNA Manager, on the File menu, click Open Subdomain.
	
	2. Type in the desired SNA Subdomain using any of the following three possible
	  syntaxes: Subdomain, \\<Server_name> or \\<IP_Address>.
	
	3. If the request fails, a series of diagonal lines will be displayed across
	  Manager with the following error message also being displayed: <syntax>
	  NOT FOUND error message.
	
	4. Close this window and try opening it again using the same syntax as before,
	  this time it will work displaying the SNA Subdomain chosen.
	
	CAUSE
	=====
	
	This problem was inadvertently introduced as part of an unrelated change
	implemented in SNA Server version 3.0 Service Pack 3.
	
	
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
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 Service
	Pack 3, 4.0, and 4.0 Service Pack 1. This problem was first corrected in SNA
	Server 3.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ400SP1
	Version           : :3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
