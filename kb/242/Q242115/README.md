---
layout: page
title: "Q242115: Computer Is Slow Locally But Is Normal Over Remote Connection"
permalink: /kb/242/Q242115/
---

## Q242115: Computer Is Slow Locally But Is Normal Over Remote Connection

{% raw %}

	Article: Q242115
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use your Microsoft Windows NT 4.0-based computer locally, it may
	respond slowly. For example, Windows NT Explorer, Control Panel, Network
	Neighborhood, and so on, may take several minutes to start. However, your
	computer may respond normally over a remote connection.
	
	CAUSE
	=====
	
	This behavior can occur if the Remote Procedure Call (RPC) service is not
	running.
	
	RESOLUTION
	==========
	
	To resolve this issue, set the RPC service to Automatic, and then start the
	service:
	
	1. In Control Panel, double-click Services.
	
	2. In the Service box, click Remote Procedure Call (RPC) Service, and then click
	  Startup.
	
	3. Click Automatic, and then click OK.
	
	4. Click Start.
	
	5. Click Close to close the Services dialog box.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
