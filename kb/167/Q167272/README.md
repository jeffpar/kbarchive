---
layout: page
title: "Q167272: HP NetServer Running Redundant Power Supply Agent Restarts"
permalink: /kb/167/Q167272/
---

## Q167272: HP NetServer Running Redundant Power Supply Agent Restarts

	Article: Q167272
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	HP NetServer running NetServer Assistant software version 2.51 may restart
	itself periodically for no apparent reason.
	
	CAUSE
	=====
	
	The HP NetServer system is running HP Netserver Assistant software with the
	Redundant Power Supply agent enabled, but only one power supply is installed in
	the system.
	
	RESOLUTION
	==========
	
	To resolve this problem, disable the Redundant Power Supply agent. To identify
	whether this service is enabled, check Control Panel Services for the HP
	Redundant Power Supply service. If the HP Redundant Power Supply service is
	there and it is enabled, disable the service if you have only one power supply
	installed.
	
	STATUS
	======
	
	This problem occurs when you use Microsoft Windows NT version 4.0 and HP
	NetServer Assistant software version 2.51.
	
	MORE INFORMATION
	================
	
	Typically, there will be no error or any events in Event Viewer.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt reboot reboots
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
