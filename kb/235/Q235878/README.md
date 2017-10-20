---
layout: page
title: "Q235878: OSPF Authentication by RRAS Server Does Not Work"
permalink: /kb/235/Q235878/
---

## Q235878: OSPF Authentication by RRAS Server Does Not Work

{% raw %}

	Article: Q235878
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool kbui
	Last Modified: 12-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	OSPF authentication using a "null" password by Windows NT Routing and Remote
	Access Server (RRAS) may not work when trying to authenticate with third-party
	OSPF routers with authentication disabled.
	
	CAUSE
	=====
	
	This behavior occurs because by default passwords are enabled and the password
	is "12345678".
	
	RESOLUTION
	==========
	
	To disable OSPF Authentication:
	
	1. Start the Routing and RAS Administration tool, expand IP Routing, and then
	  right-click "OSPF by Bay Networks".
	
	2. Click Configure OSPF, click the Areas tab, click the area, click Configure,
	  and then click to clear the "Enable clear-text password" check box.
	
	3. Quit the Routing and RAS Administration tool.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: fails failure pwd
	
	======================================================================
	Keywords          : kbnetwork kbtool kbui 
	Technology        : kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
