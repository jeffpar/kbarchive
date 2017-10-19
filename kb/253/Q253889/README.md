---
layout: page
title: "Q253889: Event ID: 5009 - IFS Driver Cannot be Unloaded"
permalink: /kb/253/Q253889/
---

## Q253889: Event ID: 5009 - IFS Driver Cannot be Unloaded

	Article: Q253889
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna400sp3
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start the Shared Folders Gateway service after installing SNA
	Server 4.0 Service Pack 3, the service may move from a pending state to an
	inactive state, and the following event is logged in the Application event log:
	
	  Event ID: 5009
	  Source: Shared Folders Gateway
	
	  Description:
	  IFS Driver cannot be unloaded.
	
	  EXPLANATION
	  The Shared Folders Gateway was unable to unload the Shared Folders
	  File System Driver (SFFSD.SYS).
	
	  ACTION
	  None
	
	CAUSE
	=====
	
	If the Shared Folders Gateway service was running when you installed the service
	pack, all the files associated with the service may not have been updated
	correctly, which causes a file version mismatch.
	
	RESOLUTION
	==========
	
	To resolve this issue, do the following:
	
	1. From Control Panel Services, stop all SNA Server services.
	
	2. Re-apply Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP3
	Version           : WINDOWS:4.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	
