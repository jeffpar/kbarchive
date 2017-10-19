---
layout: page
title: "Q221210: Browsing with a Multihomed PDC"
permalink: /kb/221/Q221210/
---

## Q221210: Browsing with a Multihomed PDC

	Article: Q221210
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may encounter browsing problems in a TCP/IP environment with a multihomed
	primary domain controller (PDC). One of the problems you may encounter is
	incomplete browse lists.
	
	RESOLUTION
	==========
	
	The Domain Master Browser service properly binds to only one network interface.
	The role of domain master browser is served by the PDC. It is preferred and
	suggested that your PDC not be multihomed.
	
	If your PDC is multihomed because it is serving as a router and you are not
	afforded the option to promote a singlehomed backup domain controller (BDC) to
	PDC, you can try the following technique to work around this problem.
	
	Unbind the WINS Client (TCP/IP) interface from all of your adapters except for
	one. This will also unbind the NetBIOS, Workstation, and Server interfaces from
	this card. It is recommended that these bindings remain on the adapter on the
	busiest segment. Although the WINS Client (TCP/IP) interface is unbound from the
	other adapters, there will still be connectivity to the PDC from the other
	segments. The TCP/IP Protocol interface is left bound, which will be able to
	route the requests to the bound interface. After unbinding the additional
	adapters, you should make sure that WINS and any LMHosts files do not refer to
	the unbound adapters.
	
	Follow these steps to unbind the WINS Client (TCP/IP) interface:
	
	1. In Control Panel, double-click Network.
	
	2. Click the Bindings tab.
	
	3. In the Show Bindings For drop down box, select All Adapters.
	
	4. Expand all of the adapters.
	
	5. Select WINS Client (TCP/IP) and click Disable.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q188305 Troubleshooting the Microsoft Computer Browser Service
	
	  Q191611 Symptoms of Multihomed Browsers
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
