---
layout: page
title: "Q149454: Cannot Access Network When Connected to Dial-Up Server"
permalink: /kb/149/Q149454/
---

## Q149454: Cannot Access Network When Connected to Dial-Up Server

	Article: Q149454
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbnetwork dun win95 _IK12469 kbSDKPlatform kbGrpDSNet kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you dial in to a Windows 95 Dial-Up Networking Server that is connected to a
	local area network (LAN) using only the IPX protocol and you try to access a
	network resource on a computer other than the Dial-Up Networking Server, you may
	receive one of the following error messages:
	
	- The network name cannot be found
	
	- The computer or sharename could not be found
	
	CAUSE
	=====
	
	This behavior can occur if the network address for the IPX protocol is set to
	zero. IPX packets cannot be routed to a network with an address of zero.
	
	RESOLUTION
	==========
	
	To access network resources on a computer other than the Dial-Up Networking
	Server, use one of the following methods:
	
	- Install the NetBEUI protocol on all computers, including the Dial-Up
	  Networking Server and the client computer. To do so, follow these steps:
	
	  1. In Control Panel, double-click Network.
	
	  2. Click Add, click Protocol, and then click Add.
	
	  3. Click Microsoft in the Manufacturers box, click NetBEUI in the Network
	     Protocols box, and then click OK.
	
	- Set the network address in the IPX protocol's properties to something other
	  than zero. Follow these steps on all computers, including the Dial-Up
	  Networking Server and the client computer:
	
	  1. In Control Panel, double-click Network.
	
	  2. Click the IPX/SPX-compatible network protocol bound to the LAN adapter,
	     and then click Properties.
	
	  3. On the Advanced tab, click Network Address, change the value to a number
	     greater than zero, and then click OK.
	
	NOTE: Whichever method you choose, the steps must be performed on every computer
	on the LAN, including the Dial-Up Networking Server.
	
	MORE INFORMATION
	================
	
	Windows 95 sets the network address for the IPX protocol to zero by default.
	When a Dial-Up Networking connection tries to view or connect to a resource, the
	IPX packets are not routed because they cannot be routed to a network with a
	network address value of 0.
	
	Additional query words: ras remote access
	
	======================================================================
	Keywords          : kbnetwork dun win95 _IK12469 kbSDKPlatform kbGrpDSNet kbDialUp 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
