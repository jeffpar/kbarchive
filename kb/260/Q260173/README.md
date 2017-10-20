---
layout: page
title: "Q260173: Err Msg: Could Not Bind to the Microsoft Exchange Directory..."
permalink: /kb/260/Q260173/
---

## Q260173: Err Msg: Could Not Bind to the Microsoft Exchange Directory...

{% raw %}

	Article: Q260173
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are configuring the Microsoft Exchange (MAPI-based) Management Agent
	(MA) and you click "Test your configuration", you may receive the following
	error message:
	
	  Error was encountered in function: CheckDAPI calling DAPIStart.
	  Error message: Could not bind to the Microsoft Exchange Directory server.
	  Please check that the DSA name "<Servername>" is valid and is running.
	
	  The server connection test was a failure.
	
	CAUSE
	=====
	
	This behavior occurs if either of the following conditions exists:
	
	- You are running Microsoft Metadirectory Services (MMS) as a service and the
	  account that is used to start the service does not have permissions to the
	  Exchange server.
	
	- You are running MMS as a program and the user account that you are using to
	  log on to Windows does not have permission to the Exchange server directory.
	
	RESOLUTION
	==========
	
	If you are running MMS as a service, use the appropriate steps to resolve the
	issue.
	
	Microsoft Windows 2000
	----------------------
	
	1. Click Start, point to Settings, click Control Panel, double-click
	  Administrative Tools, and then double-click Services.
	
	2. Double-click the Zoomit Server service.
	
	
	3. On the General tab, click Stop.
	
	4. After the service is stopped, click the Log On tab.
	
	5. In the Log On As section, click This Account. Use the button to the right of
	  the This Account box to select the domain account with appropriate
	  administrative permissions for the Exchange server.
	
	6. Type and confirm a password for the account, and then click OK.
	
	7. Right-click the Zoomit Server service, and then click Start.
	
	Microsoft Windows NT 4.0
	------------------------
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Services.
	
	2. Click the Zoomit Server service, and then click Startup.
	
	3. In the Log On As section, click This Account. Use the button to the right of
	  the This Account box to select the domain account with appropriate
	  administrative permissions for the Exchange server.
	
	4. Type and confirm a password for the account, and then click OK.
	
	5. Click Start.
	
	If you are running MMS as a program, you must log on to the console with an
	account that has administrative permission to the Exchange server.
	
	Additional query words: Zoomit Via MA Metadirectory MMS
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
