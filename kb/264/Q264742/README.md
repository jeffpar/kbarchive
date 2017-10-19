---
layout: page
title: "Q264742: Inactive LUs May Cause SnaPrint Service Utilization to Increase"
permalink: /kb/264/Q264742/
---

## Q264742: Inactive LUs May Cause SnaPrint Service Utilization to Increase

	Article: Q264742
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the LU that is being used by an SNA Server print session is inactive, the
	SnaPrint service keeps trying to activate the session. The status of the print
	session remains pending.
	
	When many LUs are inactive and many print sessions are pending, the CPU
	utilization may reach 90 percent or higher. Task Manager shows that the SnaPrint
	service is using most of the processor time.
	
	CAUSE
	=====
	
	The SnaPrint session waits for the LU to become available, and then the SnaPrint
	service activates the print session.
	
	WORKAROUND
	==========
	
	If you stop some of the pending print sessions, the amount of CPU utilization
	should decrease.
	
	STATUS
	======
	
	This behavior is by design for cases where the SNA Server is restarted, but the
	SnaPrint Server is not restarted.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	
