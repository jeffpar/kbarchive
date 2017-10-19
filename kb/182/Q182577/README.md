---
layout: page
title: "Q182577: Dynamic Definition of Dependent APPC LUs Doesn't Work Properly"
permalink: /kb/182/Q182577/
---

## Q182577: Dynamic Definition of Dependent APPC LUs Doesn't Work Properly

	Article: Q182577
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a dependent Local APPC LU is defined on two different connections (where each
	connection is configured to support Dynamic Definition of Remote APPC LUs), and
	the APPC application attempts to allocate a conversation over each Local LU to
	the same Remote APPC LU, the SNA INITSELF command for both dependent sessions
	flows over the first connection only.
	
	
	CAUSE
	=====
	
	Dynamic definition of dependent APPC LUs is not working correctly. If two remote
	APPC LUs are given the same name but defined to use different connections, the
	allocate to the second APPC LU causes the initself command to be sent across the
	wrong connection.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0, 3.0 SP1, 3.0
	SP2, 3.0 SP3 and 4.0. This problem was corrected in the latest SNA Server
	version 4.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
