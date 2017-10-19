---
layout: page
title: "Q169158: Adding Interface to OSPF Does Not Enable the OSPF Protocol"
permalink: /kb/169/Q169158/
---

## Q169158: Adding Interface to OSPF Does Not Enable the OSPF Protocol

	Article: Q169158
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you add an interface to OSPF by Bay Networks in Routing and Remote Access
	Service, the interface is not automatically OSPF enabled.
	
	MORE INFORMATION
	================
	
	After you install OSPF by Bay Networks on a Routing and Remote Access Service
	router, you must specify which network interface cards will be enabled for OSPF.
	Perform the following steps to add a network card to the computer to use through
	OSPF:
	
	1. Right-click OSPF, and then click Add Interface.
	
	2. Select the network adapter card you want, and then click OK. At this point,
	  you must select Enable OSPF on this interface. Just clicking OK will not
	  enable OSPF on the interface.
	
	Additional query words: rras prodnt 4.00 steelhead
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	
	=============================================================================
	
