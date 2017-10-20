---
layout: page
title: "Q159219: NWLink Binding Cannot Be Disabled for Specific Services"
permalink: /kb/159/Q159219/
---

## Q159219: NWLink Binding Cannot Be Disabled for Specific Services

{% raw %}

	Article: Q159219
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to disable the NWLink (IPX/SPX Compatible Transport) protocol
	on a specific network adapter in a service (such as Workstation or Server), no
	network adapters are listed when you double-click the service and then
	double-click NWLink (IPX/SPX Compatible Transport).
	
	RESOLUTION
	==========
	
	To work around this problem, disable the NWLink (IPX/SPX Compatible Transport)
	protocol on all network adapters. To do so, follow these steps:
	
	NOTE: These steps disable the NWLink (IPX/SPX Compatible Transport) protocol in
	all services.
	
	1. Click Start, point to Settings, click Control Panel, and then double- click
	  Network.
	
	2. Click the Bindings tab.
	
	3. In the Show Bindings For box, click All Adapters or All Protocols.
	
	4. Click NWLink (IPX/SPX Compatible Transport), and then click Disable.
	
	5. Click OK, and then click Yes when you are prompted to restart your computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT 4.0.
	
	
	Additional query words: nw nwlnk netware
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
