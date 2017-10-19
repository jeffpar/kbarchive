---
layout: page
title: "Q172428: SNA Server 3.0 Snadmod.dll Returns SEC_LOGON_FAILED_BADLY"
permalink: /kb/172/Q172428/
---

## Q172428: SNA Server 3.0 Snadmod.dll Returns SEC_LOGON_FAILED_BADLY

	Article: Q172428
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1; WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Client for Windows 95, versions 3.0, 3.0 SP1 
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to connect to SNA Server 3.0 with SNA Client for Windows 95,
	the client may fail to connect and you receive the following error message:
	
	  ERROR: No SNA Servers found in <Subdomain name>
	
	CAUSE
	=====
	
	The SNA Server Snadmod.dll returns a SEC_LOGON_FAILED_BADLY rather than
	SEC_LOGON_FAILED_RETRY. The SEC_LOGON_FAILED_BADLY causes the Windows 95 client
	to not retry the sponsor connection and to interpret the failure as an inability
	to contact an SNA server.
	
	RESOLUTION
	==========
	
	A change has been made to the SNA Server Snadmod.dll file to correctly send the
	SEC_LOGON_FAILED_RETRY.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 and 3.0 Service
	Pack 1 (SP1). This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300Win95 kbSNAServ300Win95SP1
	Version           : :3.0,3.0 SP1; WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
