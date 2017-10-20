---
layout: page
title: "Q177399: Event ID 20139 When Using Routing and Remote Access Service"
permalink: /kb/177/Q177399/
---

## Q177399: Event ID 20139 When Using Routing and Remote Access Service

{% raw %}

	Article: Q177399
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Routing and Remote Access Service (RRAS) Server may log the following
	information event message in Event Viewer:
	
	  Event ID   : 20139
	  Source     : Router
	  Description: The port <port number> has been disconnected due to
	               inactivity.
	
	CAUSE
	=====
	
	You have a Demand Dial Interface in the Routing and RAS Admin tool configured
	for a value other than 0 in Idle seconds before hanging up.
	
	MORE INFORMATION
	================
	
	The router service will log the above event each time the connection times out
	because the idle seconds have expired. This is normal.
	
	NOTE: Setting Idle seconds before hanging up to 0 disables the timer.
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
