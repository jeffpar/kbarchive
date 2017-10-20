---
layout: page
title: "Q167093: Err Msg: The WINS Client TCP/IP Service Depends on the TCP/IP..."
permalink: /kb/167/Q167093/
---

## Q167093: Err Msg: The WINS Client TCP/IP Service Depends on the TCP/IP...

{% raw %}

	Article: Q167093
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork msnets
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log in to Windows NT Workstation version 4.0 with TCP/IP installed, the
	following message may be displayed:
	
	  At least one service or driver failed during system startup. Use Event Viewer
	  to examine the event log for details.
	
	The following information is logged in Event Viewer:
	
	  Event ID:7001
	  Source: Service Control Manager
	  Type: Error
	  Description: The WINS Client TCP/IP Service depends on the TCP/IP
	  Service and failed to load due to the following error:
	  The specified service is disabled and cannot be started.
	
	Also, using the Ping tool generates the following response:
	
	  Unable to connect to IP driver. Error code 2
	
	CAUSE
	=====
	
	This error occurs if the TCP/IP service is not started in the Devices tool in
	Control Panel.
	
	RESOLUTION
	==========
	
	Start the TCP/IP service. To do this, follow these steps:
	
	1. In Control Panel, double-click Devices.
	
	2. Click TCP/IP Service, and then click Start.
	
	NOTE: The TCP/IP service should be set to start automatically. If it is not,
	click TCP/IP Service, and then click Startup. Click the Automatic option, and
	then click OK. Restart the computer.
	
	Additional query words: wkstaonly prodnt
	
	======================================================================
	Keywords          : kberrmsg kbnetwork msnets 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
