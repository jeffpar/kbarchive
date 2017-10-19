---
layout: page
title: "Q140460: Dial-Up Networking Does Not Obtain an IP Address"
permalink: /kb/140/Q140460/
---

## Q140460: Dial-Up Networking Does Not Obtain an IP Address

	Article: Q140460
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbpolicy dun win95 kbDialUpkbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have two or more network adapters in your computer and you are using
	Dial-Up Networking to connect to a network using the TCP/IP protocol, you may
	not be assigned an IP address and may not be able to use a static IP address.
	When this occurs, running Winipcfg.exe shows an IP address and subnet mask of
	0.0.0.0, even though you are connected with the TCP/IP protocol.
	
	CAUSE
	=====
	
	This problem can occur when you have two or more network adapters installed with
	TCP/IP bound to each, and you have TCP/IP bound to the Dial-Up Networking
	adapter.
	
	
	RESOLUTION
	==========
	
	To work around this problem, follow these steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double- click
	  Network.
	
	2. Click one of the network adapters. (NOTE: Do not click the Dial-Up Networking
	  adapter.)
	
	3. Click Properties.
	
	4. On the Bindings tab, click the TCP/IP check box to clear it, and then click
	  OK.
	
	5. If you have more than two network adapters, repeat steps 2-4 until TCP/IP is
	  bound to only one network adapter and the Dial-Up Networking adapter.
	
	6. Click OK until you return to Control Panel. When you are prompted to restart
	  your computer, do so.
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	For additional information about issues resolved by updates to these components,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q165402 Windows 95 Update to Encrypt Passwords in Memory
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork kbpolicy dun win95 kbDialUp kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
