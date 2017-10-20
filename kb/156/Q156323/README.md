---
layout: page
title: "Q156323: Error 3787: You Must Log on before Performing this Operation"
permalink: /kb/156/Q156323/
---

## Q156323: Error 3787: You Must Log on before Performing this Operation

{% raw %}

	Article: Q156323
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows 95, disabling "Log on to network" in Dial-Up Networking Advanced
	Options may disable Microsoft Networking. This will occur if Windows 95 does not
	have a network card or is using a hardware profile with no network card.
	Sockets-based applications such as FTP, Telnet, and Ping will still function.
	
	CAUSE
	=====
	
	The "Log on to Network" option may be confused with logging on to the domain,
	when actually the "Log on to Network" option enables or disables NetBIOS, if no
	network card is configured.
	
	MORE INFORMATION
	================
	
	To verify this setting, open Dial Up Networking, secondary click your
	connectoid, choose Properties, select Server Type.
	
	If the "Log on to network" option is disabled you may see the following errors.
	
	Network Neighborhood will report:
	
	  Unable to Browse the Network. The network is not accessible
	
	Mapping a drive in Explorer will report:
	
	  Not logged on
	
	A net use from the command prompt will report:
	
	  Error 3787: You must log on before performing this operation.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
