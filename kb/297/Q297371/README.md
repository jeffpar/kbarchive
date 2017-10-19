---
layout: page
title: "Q297371: Unexpected High Memory Usage When You Use Index Server"
permalink: /kb/297/Q297371/
---

## Q297371: Unexpected High Memory Usage When You Use Index Server

	Article: Q297371
	Product(s): Internet Information Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use third party IFilter components with Index Server, the Cidaemon
	process may consume a large amount of memory. This may cause a low memory
	situation on the server, and the server processing may slow down.
	
	CAUSE
	=====
	
	The Cidaemon process is designed as a sandbox for IFilter components, which
	means that every IFilter is loaded into this process. Thus, if an IFilter is
	poorly designed or coded, the IFilter can cause Cidaemon to consume a large
	amount of memory.
	
	RESOLUTION
	==========
	
	To resolve this problem, contact the IFilter vendor, and request a fixed IFilter
	component.
	
	WORKAROUND
	==========
	
	Index Service 3.0 (Microsoft Windows 2000) introduces a new mechanism that
	limits the memory usage of the Cidaemon process. The Cisvc process monitors the
	memory consumption of the Cidaemon process. If the Cidaemon exceeds 40 megabytes
	(MB) of memory usage, the Cisvc process automatically ends and restarts the
	Cidaemon process. This mechanism prevents the server from reaching a low memory
	situation and a slow down in server processing.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
