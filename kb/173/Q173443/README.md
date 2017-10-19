---
layout: page
title: "Q173443: Slow Response Executing Start Menu or Control Panel Applets"
permalink: /kb/173/Q173443/
---

## Q173443: Slow Response Executing Start Menu or Control Panel Applets

	Article: Q173443
	Product(s): Microsoft Windows NT
	Version(s): WINNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may experience either of the following symptoms:
	
	- When you log on to Windows NT, there is a long delay.
	
	  -or-
	
	- After you log on to Windows NT, response to some user input is very slow. For
	  example, when you click Start, it takes much longer than expected for the
	  Start Menu to be displayed.
	
	CAUSE
	=====
	
	This behavior can occur when you change the default settings for RPC services.
	
	RESOLUTION
	==========
	
	In Control Panel, double-click Services, and then confirm the following
	settings:
	
	- Remote Procedure Call (RPC) locator:
	  Status - not started
	  Startup - manual
	
	- Remote Procedure Call (RPC) service:
	  Status - started
	  Startup - automatic
	
	You can also confirm these settings remotely using the Server Manager utility
	included on the Windows NT Server 4.0 compact disc. To do so, follow these
	steps:
	
	1. In Server Manager, select the problem computer.
	
	2. On the Computer menu, click Services. Confirm the RPC settings as listed
	  above. These settings are dynamic and do not require a restarting if you make
	  a change.
	
	MORE INFORMATION
	================
	
	The server service is unaffected on a computer with the above problem;
	therefore, network file access from a remote client may appear to function
	normally.
	
	Additional query words: hung hang lock frozen startmenu login logon log in upgrade
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WINNT:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
