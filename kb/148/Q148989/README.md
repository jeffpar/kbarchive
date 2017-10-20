---
layout: page
title: "Q148989: Internet Server Manager Fails to Start"
permalink: /kb/148/Q148989/
---

## Q148989: Internet Server Manager Fails to Start

{% raw %}

	Article: Q148989
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you double-click the Internet Server Manager icon in the Internet
	Information Server (IIS) group, the hour glass will appear and disappear, and
	IIS will fail to start.
	
	The WWW publishing service shows started in Control Panel Services; however, the
	clients cannot connect to any pages on the server. In addition, the FTP server
	shows running; however, the clients get "connection refused" and also Gopher
	shows running, but Gopher clients can not connect to the server.
	
	CAUSE
	=====
	
	If the eventlog service is disabled or stopped, you will not be able to run
	Internet Server Manager; instead, connect to the WWW, FTP server, or Gopher
	server.
	
	RESOLUTION
	==========
	
	Enable Eventlog services from the Control Panel Services applet.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 1.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	

{% endraw %}
