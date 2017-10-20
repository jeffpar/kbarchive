---
layout: page
title: "Q170029: Remote Access Service Fails If Plug and Play Service Disabled"
permalink: /kb/170/Q170029/
---

## Q170029: Remote Access Service Fails If Plug and Play Service Disabled

{% raw %}

	Article: Q170029
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to detect a modem in the Remote Access Service (RAS) setup, Windows
	NT queries the modem but returns the following error message:
	
	  Windows NT did not find any modems attached to your computer.
	
	If you try to start the Remote Access Connection Manager service or Dial-up
	Networking, the following error message appears:
	
	  Cannot load the Remote Access Connection Manager service.
	  Error 711: RasMan initialization failure. Check the event log.
	
	In the event log you will see:
	
	  Event 7024 Service Control Manager
	  The Remote Access Connection Manager service terminated with server-specific
	  error 620.
	
	If you try to open the Modem Control Panel, the application fails to open.
	
	CAUSE
	=====
	
	The Plug and Play service is stopped or disabled.
	
	RESOLUTION
	==========
	
	1. Go into Control Panel and click Services.
	
	2. Start the Plug and Play service, and change the Startup mode from Manual or
	  Disabled to Enabled.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	

{% endraw %}
