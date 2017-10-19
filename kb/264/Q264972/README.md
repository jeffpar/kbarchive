---
layout: page
title: "Q264972: Event ID 5072 and Error 5216 Appear When You Restart Cluster Ser"
permalink: /kb/264/Q264972/
---

## Q264972: Event ID 5072 and Error 5216 Appear When You Restart Cluster Ser

	Article: Q264972
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you restart Node A of a cluster, the Cluster Service does not start, and
	Event Viewer records Event ID 5072 and Error 5216.
	
	CAUSE
	=====
	
	This behavior can occur when the startup type of the Internet Information
	Service (IIS) Admin Service is set to Manual.
	
	RESOLUTION
	==========
	
	To resolve this behavior, set the startup type of the IIS Admin Service to
	Automatic; the cluster starts normally.
	
	MORE INFORMATION
	================
	
	Follow these steps:
	
	1. Start Control Panel, and then double-click Services.
	
	2. In the Service list, click IIS Admin Service.
	
	3. Click Startup.
	
	4. In the Startup Type group, click Automatic, and then click OK.
	
	5. Click Close, and then quit Control Panel.
	
	Additional query words: mscs
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
