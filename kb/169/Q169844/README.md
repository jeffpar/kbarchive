---
layout: page
title: "Q169844: Removing an IP Routing Protocol from Routing and Remote Access"
permalink: /kb/169/Q169844/
---

## Q169844: Removing an IP Routing Protocol from Routing and Remote Access

	Article: Q169844
	Product(s): Microsoft Windows NT
	Version(s): 4.0
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
	
	An Internet Protocol (IP) routing protocol such as Routing Information Protocol
	(RIP) or OSPF cannot be completely removed from Routing and Remote Access
	Service using the Graphical User Interface Routing and Remote Access Service
	Administrator (Mpradmin.exe). However, Routing and Remote Access Service
	Administrator can be used to disable the protocol. To completely remove the
	interface, the command-line interface Routemon.exe must be used. Both options
	are discussed below.
	
	MORE INFORMATION
	================
	
	Disabling a Protocol Using the Graphical User Interface Mpradmin.exe
	--------------------------------------------------------------------
	
	To effectively disable a routing protocol, you remove all interfaces from it. If
	this is done, the routing protocol is still installed but does not function. To
	remove interfaces from a routing protocol, click the routing protocol in the
	left pane of the Routing and Remote Access Service Admin. window. Then
	right-click the interface in the right pane of the window, and click Remove
	Interface.
	
	Removing a Protocol Using the Command-Line Interface Routmon.exe
	----------------------------------------------------------------
	
	If you prefer to entirely remove the routing protocol from Routing and RAS Admin,
	you can use the following command:
	
	  ROUTEMON IP DELETE PROTOCOL PROTO= { RIP | OSPF | BOOTP }
	
	For example, if you wanted to remove OSPF, the command would be:
	
	  ROUTEMON IP DELETE PROTOCOL PROTO= OSPF
	
	When you enter the command, there must be a space between PROTO= and the routing
	protocol you choose to remove. After removing the protocol using the
	command-line interface, the graphical interface will not reflect the change
	until Mpradmin.exe is closed and restarted.
	
	Additional query words: prodnt rras
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : 4.0
	Issue type        : kbhowto
	
	=============================================================================
	
