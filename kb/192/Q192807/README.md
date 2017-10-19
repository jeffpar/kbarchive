---
layout: page
title: "Q192807: SNABase Service Fails to Start on SNA Server"
permalink: /kb/192/Q192807/
---

## Q192807: SNABase Service Fails to Start on SNA Server

	Article: Q192807
	Product(s): Microsoft SNA Server
	Version(s): 3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNABase service may not start initially but can be started manually after
	the system completes startup. In addition, an event ID 590 may be logged in the
	application event log.
	
	CAUSE
	=====
	
	The SNABase service cannot start until all dependency services have completed
	initialization. The SNABase service is designed to time out if the dependency
	services do not start after 10 seconds. SNA Server's SNABase service is
	dependent upon the following services:
	
	  Workstation, Server, and NT LM Security Support Provider
	
	If any of these other services do not start in a timely fashion, the SNABase
	service will not be able to start, and an event ID 590 may be logged in the
	application event log.
	
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
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 SP3,
	4.0, and 4.0 SP1. This problem was first corrected in SNA Server 3.0 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	The following registry entry has been added to allow a configurable timeout
	parameter for the SNABase service:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SnaBase\Param eters:
	
	  Name: ServerStartupTimeout
	  Type: REG_DWORD
	  Value: <timeout in seconds> (The default is 10.)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ400SP1
	Version           : :3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
