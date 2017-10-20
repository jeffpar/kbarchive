---
layout: page
title: "Q223329: XADM: Setting Server Monitor to Monitor Remote Computers"
permalink: /kb/223/Q223329/
---

## Q223329: XADM: Setting Server Monitor to Monitor Remote Computers

{% raw %}

	Article: Q223329
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to monitor and control the services of a server in a site
	(Monitored) using the Server Monitor program of another site (Monitoring).
	However, you cannot add or remove services for the monitored Exchange Server
	computer while it is connected to the monitoring site. This gives you the
	impression that services on the remote computer cannot be monitored or
	controlled. This article details the steps to set Server Monitor to monitor
	remote computers.
	
	MORE INFORMATION
	================
	
	To monitor and control the services of a remote computer from another site:
	
	1. On the server to be monitored, start the Microsoft Exchange Administrator
	  program. Click to expand the Configuration object, click to expand the
	  Servers object, and click <servername> (where <servername> is the
	  name of the monitored computer). On the File menu, click Properties, and
	  click Services, then add all of the services you want the Server Monitor to
	  monitor.
	
	2. Open the properties of the Server Monitor in the monitoring site. On the
	  right side of the Servers tab, add the remote server.
	
	3. Specify any actions you want Server Monitor to perform. To fully control each
	  of the actions offered within Server Monitor, such as Restart the Service,
	  the Windows NT account that is currently logged on to the monitoring server
	  needs to be a member of the Server Operators group on the remote server.
	
	4. When a service on the monitored server stops, the monitoring server recieves
	  an "Alert," if it is configured to.
	
	Additional query words: monitor, remote
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
