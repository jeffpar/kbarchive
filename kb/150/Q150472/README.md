---
layout: page
title: "Q150472: Downstream PU Fails to Reactivate After an Outage"
permalink: /kb/150/Q150472/
---

## Q150472: Downstream PU Fails to Reactivate After an Outage

	Article: Q150472
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Downstream PU fails to reactivate after an outage. The event viewer will
	show the following in the application log:
	
	  Event ID: 29
	  Description: Internal Gateway error
	
	CAUSE
	=====
	
	The Downstream PU connection is not terminating properly after an outage. The
	improper termination causes problems when you try to reactivate the connection.
	
	RESOLUTION
	==========
	
	A hotfix is available from Microsoft Product Support Services. Files that have
	been modified to correct this problem are SNASERVR.EXE and TRCSERVR.EXE.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	2.0, 2.1, 2.11, and 2.11.sp1. This problem was corrected in the latest Microsoft
	SNA Server 2.11 U.S. Service Pack. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: SNA NT DSPU
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
