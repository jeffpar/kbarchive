---
layout: page
title: "Q137401: Cannot Access Network When Connected to NetWare Connect Server"
permalink: /kb/137/Q137401/
---

## Q137401: Cannot Access Network When Connected to NetWare Connect Server

	Article: Q137401
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): dun 3rdpartynet win95 kb3rdPartyNetClient kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Dial-Up Networking configured for NetWare Remote Networking (NRN)
	to dial into a NetWare Connect 1.0 server, you may be able to connect to the
	server, but you may receive the following error message when you try to access
	network resources:
	
	  The network is not accessible
	
	CAUSE
	=====
	
	The NetWare Connect server is not configured to use the 802.3 frame type. This
	does not prevent the Dial-Up Networking client from connecting to the NetWare
	Connect server, but it does prevent the client from logging on to the NetWare
	network and accessing network resources.
	
	RESOLUTION
	==========
	
	Configure the NetWare Connect server, and at least one network adapter in the
	server, to use the 802.3 frame type. This allows the Dial-Up Networking client
	to receive SAP broadcasts and log on to the NetWare network. For information
	about configuring a NetWare Connect server and a network adapter in the server
	to use the 802.3 frame type, contact your network administrator.
	
	
	NOTE: In Windows 95, the IPX/SPX-compatible protocol bound to the Dial-Up adapter
	should also be configured to use the 802.3 frame type. The default setting for
	the IPX/SPX-compatible protocol is Auto, which detects the current frame type in
	use on the network. To configure the IPX/SPX- compatible protocol to use the
	802.3 frame type, follow these steps:
	
	1. In Control Panel, double-click the Network icon.
	
	2. Click "IPX/SPX-Compatible Protocol -> Dial-Up Networking," and then click
	  Properties.
	
	3. Click the Advanced tab.
	
	4. Click Frame Type in the Property box, and then click Ethernet 802.3 in the
	  Value box.
	
	5. Click OK.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: ras
	
	======================================================================
	Keywords          : dun 3rdpartynet win95 kb3rdPartyNetClient kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
