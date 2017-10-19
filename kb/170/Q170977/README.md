---
layout: page
title: "Q170977: Error 629: The Port Was Disconnected by the Remote Machine"
permalink: /kb/170/Q170977/
---

## Q170977: Error 629: The Port Was Disconnected by the Remote Machine

	Article: Q170977
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you dial in to a computer running both Windows NT Server and Routing and
	Remote Access Service, you may encounter the following error message on your
	Windows NT RAS client:
	
	  Disconnected.
	  Error 629: The port was disconnected by the remote machine.
	
	From your Windows 95 Dial-Up Networking client, you may receive the following
	error:
	
	  Dial-Up Networking could not complete the connection to the server.
	  Check your configuration and try the connection again.
	
	CAUSE
	=====
	
	The Routing and Remote Access Service has not been configured to receive calls
	as a RAS server.
	
	RESOLUTION
	==========
	
	To enable your Routing and Remote Access server to receive RAS calls follow
	these steps:
	
	1. From the Control Panel, double-click Network.
	
	2. Click Services, click Routing and Remote Access, and click Properties.
	
	3. Click the port or ports that you want to enable to receive calls, click
	  Configure, and select Receive calls as a RAS server.
	
	4. Click OK and restart the computer when prompted.
	
	MORE INFORMATION
	================
	
	The Routing and Remote Access service is capable of being set to either answer
	calls as a normal RAS server or answer demand-dial router calls.
	
	NOTE: This error message can also occur if you install Windows NT 4.0 Service
	pack 3 or 4 and then install RAS, but do not reapply the Service Pack update.
	
	Additional query words: prodnt rras
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
