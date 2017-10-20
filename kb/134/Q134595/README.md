---
layout: page
title: "Q134595: NET START WORKSTATION Command Loads Incorrect Redirector"
permalink: /kb/134/Q134595/
---

## Q134595: NET START WORKSTATION Command Loads Incorrect Redirector

{% raw %}

	Article: Q134595
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet msnets win95 win98 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Windows real-mode networking services, the commands NET LOGON
	or NET START WORKSTATION load the incorrect network redirector.
	
	CAUSE
	=====
	
	The Net.exe file contains two redirectors (VREDIR for the Microsoft Client, and
	NWREDIR for the Netware Client). Windows determines which redirector to load by
	checking the Preferredredir key in the registry. If this key is not set, VREDIR
	is loaded by default.
	
	RESOLUTION
	==========
	
	Check the Primary Network Logon setting to ensure that the desired client is
	selected. To check the Primary Network Logon setting, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network.
	
	3. In the Network dialog box, under Primary Network Logon, select the desired
	  client, and then click OK.
	
	This setting automatically makes the appropriate changes to the registry.
	
	MORE INFORMATION
	================
	
	Note that the NET LOGON command does not work with NWREDIR. The NET LOGON
	command is not supported with NetWare NCP servers. If you use this command with
	NWREDIR, you receive the following error message:
	
	  Error 50:You attempted an operation that cannot be performed from your
	  computer or that is not supported on the specified server...
	
	======================================================================
	Keywords          : 3rdpartynet msnets win95 win98 kb3rdPartyNetClient 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
