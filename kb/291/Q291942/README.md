---
layout: page
title: "Q291942: Simultaneous Queries with WMI SNA Provider May Cause &quot;Hang&quot;"
permalink: /kb/291/Q291942/
---

## Q291942: Simultaneous Queries with WMI SNA Provider May Cause &quot;Hang&quot;

	Article: Q291942
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbhis2000
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Applications that use the Host Integration Server WMI (Windows Management
	Instrumentation) SNA status provider (Wmisnastatus.dll) to determine the status
	of logical units (LUs) may cause the system to stop responding ("hang") if
	multiple simultaneous queries are performed. Access violations may also occur
	when an application issues multiple WMI queries to check LU status. The specific
	access violations may vary but you can capture them by attaching a debugger to
	the Windows Management Instrumentation (Winmgmt.exe) service.
	
	CAUSE
	=====
	
	The WMI SNA status provider doesn't properly synchronize requests when the
	provider accesses the shared memory that stores all the management data when
	multiple simultaneous WMI queries are issued.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbhis2000 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
