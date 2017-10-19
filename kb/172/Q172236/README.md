---
layout: page
title: "Q172236: SNABase Status Does Not Change From Stopped to Running"
permalink: /kb/172/Q172236/
---

## Q172236: SNABase Status Does Not Change From Stopped to Running

	Article: Q172236
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
	
	When you are remotely administering an SNA Server computer through SNA Server
	Manager, the status of SnaBase may be incorrectly displayed. If you click the
	Change button on the Server Properties page when SnaBase is in a stopped state,
	and you then start SnaBase, the service status is not updated in the Service
	Control dialog box. The SNABase status does not change from stopped to running.
	The status is correctly displayed in Control Panel Services.
	
	A successful status change does not refresh the status, even though the service
	is started successfully.
	
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
	
