---
layout: page
title: "Q149149: No Network Access with LAN Workplace and TCP/IP"
permalink: /kb/149/Q149149/
---

## Q149149: No Network Access with LAN Workplace and TCP/IP

	Article: Q149149
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows 95 on a computer with LAN Workplace and the TCP/IP
	protocol installed, you may not have network connectivity in Windows 95. For
	example, Network Neighborhood displays only the Entire Network icon. Attempting
	to open this icon results in the following message:
	
	  Not connected to a working network
	
	CAUSE
	=====
	
	LAN Workplace sets the Frame Type setting for the TCP/IP protocol to
	ETHERNET_II, which is correct. However, the method it uses to do so causes
	Windows 95 to assume that every protocol is using the ETHERNET_II setting, which
	is not correct. This causes the IPX/SPX-compatible protocol to use the
	ETHERNET_II setting, which causes the lack of network connectivity.
	
	RESOLUTION
	==========
	
	Adjust the Frame Type setting for the IPX/SPX-compatible protocol. To do so,
	follow these steps:
	
	1. In Control Panel, double-click Network.
	
	2. Click the Configuration tab.
	
	3. Click the IPX/SPX-compatible protocol, and then click Properties.
	
	4. Click the Advanced tab.
	
	5. In the Property box, click Frame Type. In the Value box, click the
	  appropriate setting.
	
	6. Click OK, and then click OK.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
