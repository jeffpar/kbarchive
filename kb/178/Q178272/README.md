---
layout: page
title: "Q178272: RRAS Event ID 20103 When Using Microsoft Proxy Server 1.0"
permalink: /kb/178/Q178272/
---

## Q178272: RRAS Event ID 20103 When Using Microsoft Proxy Server 1.0

{% raw %}

	Article: Q178272
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Proxy Server version 1.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Windows NT Routing and Remote Access Service (RRAS) server, which is also
	running Microsoft Proxy Server version 1.0, may log one or more of the following
	event log errors in Event Viewer:
	
	  Event ID   : 7000
	  Source     : Service Control Manager
	  Description: The IP Filter Driver service failed to start due
	               to the following error: The system cannot find the
	               file specified.
	
	-or-
	
	  Event ID   : 20103
	  Source     : Router
	  Description: Unable to load c:\winnt\system32\iprtrmgr.dll
	
	-or-
	
	  Event ID   : 7024
	  Source     : Service Control Manager
	  Description: The Routing and Remote Access Service service
	  terminated with the service-specific error 110.
	
	NOTE: This problem only happens after you have enabling filtering in RRAS Admin.
	
	CAUSE
	=====
	
	RRAS does not install the file Ipfltdrv.sys if it detects that Microsoft Proxy
	Server is already installed on the computer.
	
	
	RESOLUTION
	==========
	
	To workaround this issue, use one of the following methods:
	
	- Manually copy the file Ipfltdrv.sys from the RRAS directory into the
	  %Systemroot%\System32\Drivers folder.
	
	  NOTE: The default folder for RRAS is C:\Routing, but it may vary depending on
	  how you installed the update.
	
	  -or-
	
	- Upgrade to Microsoft Proxy Server version 2.0.
	
	  -or-
	
	- Uninstall RRAS and reinstall the update on a different server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Routing and Remote Access
	Service for Windows NT Server version 4.0. We are researching this problem and
	will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	======================================================================
	Keywords          : kberrmsg kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbProxyServ100 kbProxyServSearch kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
