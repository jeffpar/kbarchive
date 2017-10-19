---
layout: page
title: "Q172062: SNADATABASE Shuts Down and Restarts During Startup"
permalink: /kb/172/Q172062/
---

## Q172062: SNADATABASE Shuts Down and Restarts During Startup

	Article: Q172062
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 01-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During the startup process of the Host Account Cache (SNADATABASE), this service
	will stop, restart, and then log the following informational events in the
	application log of the Event Viewer.
	
	  Event 1325 - SNA Host Account Cache Stopped.
	
	  Event 1324 - SNA Host Account Cache Started - Database Synchronized.
	
	CAUSE
	=====
	
	The Master database (MDB) is not storing the name(s) of the primary domain
	controller (PDC) correctly during initialization. Because this information is
	not stored correctly, when the Host Account Cache checks to see if the PDC name
	has changed (as it periodically does), it incorrectly concludes that it has, and
	therefore it shuts down and then restarts its service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
