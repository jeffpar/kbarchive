---
layout: page
title: "Q174231: DHCP Uses 100% CPU If First Network Card Is Disabled"
permalink: kb/174/Q174231/
---

## Q174231: DHCP Uses 100% CPU If First Network Card Is Disabled

	Article: Q174231
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a multihomed computer, you disable the loading of the network card driver (in
	Control Panel, double-click Devices) or the driver fails to load because of a
	problem. Following a restart, you observe excessive CPU usage by the Tcpsvcs.exe
	process.
	
	
	CAUSE
	=====
	
	When DHCP initializes, it attempts to open a socket on each TCP/IP interface.
	Because the network card driver was disabled, this results in an error. The DHCP
	service does not correctly handle this case.
	
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Go to Control Panel and double-click Network.
	
	2. Click the Bindings tab.
	
	3. Select the network adapter that has the disabled driver.
	
	4. Click Disable, and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: DHCP binding prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
