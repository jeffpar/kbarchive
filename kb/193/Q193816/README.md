---
layout: page
title: "Q193816: SNA Server 4.0 Always Checks for Remote APPC LU Security"
permalink: /kb/193/Q193816/
---

## Q193816: SNA Server 4.0 Always Checks for Remote APPC LU Security

	Article: Q193816
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When SNA Server 4.0 receives an allocation request from an APPC or CPIC
	application, SNA Server always verifies that the user has authority to access
	the Remote APPC LU requested, even if APPC security is not enabled within SNA
	Server Manager or the Microsoft Management Console (MMC). This may reduce the
	performance of an APPC or CPIC application, including COM Transaction Integrator
	(COMTI).
	
	Under heavy APPC or CPIC application testing, this problem can cause the
	server-side SnaBase service to use 15 percent to 20 percent of the CPU (as
	measured by Windows NT Performance Monitor) even while no new SNA Server clients
	are connecting to the server.
	
	
	CAUSE
	=====
	
	SNA Server is incorrectly checking user access even when Remote APPC LU security
	is not enabled within the SNA Server configuration file.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 4.0 and 4.0
	Service Pack 1. This problem was corrected in the latest SNA Server version 4.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : WINDOWS:4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
