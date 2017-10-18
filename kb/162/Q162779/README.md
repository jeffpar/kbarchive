---
layout: page
title: "Q162779: Control Panel Fails to Stop an Already Stopped Service"
permalink: kb/162/Q162779/
---

## Q162779: Control Panel Fails to Stop an Already Stopped Service

	Article: Q162779
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Services tool in Control Panel tries to stop a service upon which
	another service depends, it prompts the user to first stop all the services that
	depend on the service that has to be stopped.
	
	If, in the meantime, one of the dependent services is stopped, the Control Panel
	stops with the following error message:
	
	  The service has not been started.
	
	CAUSE
	=====
	
	Steps to reproduce:
	
	1. In Control Panel, double-click the Services icon.
	
	2. Select the Server service and click the Stop button. You are prompted to stop
	  the following services:
	
	  Computer Browser
	  Directory Replicator
	  Net Logon
	
	3. Before clicking OK, run a CMD session and enter the following command:
	
	  net stop replicator
	
	4. Go back to the Services tool and click OK. You will receive the following
	  error message:
	
	  The service has not been started.
	
	The other dependent services will not be stopped.
	
	RESOLUTION
	==========
	
	Stop the service in the correct order (for example, first stop the services that
	depend on the service that has to be stopped).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbbug
	
	=============================================================================
	
