---
layout: page
title: "Q170133: Unable to Add Modem in Remote Access Setup"
permalink: /kb/170/Q170133/
---

## Q170133: Unable to Add Modem in Remote Access Setup

{% raw %}

	Article: Q170133
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to add a modem to Remote Access Setup, the modem is not added to
	the list of devices although it is detected and installed in the Modem icon in
	Control Panel.
	
	Also, when you try to launch HyperTerminal, the following error message appears:
	
	  HyperTerminal detected a general TAPI error
	
	When you double-click the Telephony icon in Control Panel, nothing happens.
	
	CAUSE
	=====
	
	The Telephony service is disabled.
	
	RESOLUTION
	==========
	
	In Control Panel, click the Services icon. Enable and start the Telephony
	service.
	======================================================================
	Keywords          : kbnetwork kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	

{% endraw %}
