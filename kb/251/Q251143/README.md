---
layout: page
title: "Q251143: Problems Installing Proxy Server 2.0 Update in Windows 2000"
permalink: /kb/251/Q251143/
---

## Q251143: Problems Installing Proxy Server 2.0 Update in Windows 2000

{% raw %}

	Article: Q251143
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.5
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 22-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.5 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	For Microsoft Proxy Server 2.0 to function properly on a Windows 2000-based
	server, you must update it by using the Microsoft BackOffice Server 4.5
	Readiness Kit for Windows 2000. When you install this update, Setup stops and
	later restarts the World Wide Web Publishing (WWW) service. Setup may seem to
	stop responding (hang) while it is stopping and restarting the WWW service,
	while displaying either of following messages:
	
	  Setup is stopping the WWW services
	
	  -or-
	
	  Setup is starting the WWW services
	
	RESOLUTION
	==========
	
	The Setup program is not actually hung; the services do eventually stop and
	restart. There are two options:
	
	- Wait for the WWW service to stop and start. This may take a long time.
	
	- Manually stop and start the WWW service. Click Start, point to Programs,
	  point to Administrative Tools, and then click Services. When Setup is
	  attempting to stop the WWW service, manually stop the World Wide Web
	  Publishing service. After the update is complete and Setup is attempting to
	  restart the WWW service, manually restart the World Wide Web Publishing
	  service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with installing BackOffice Server
	4.5 in Windows 2000.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ450
	Version           : WINDOWS:2000; winnt:4.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
