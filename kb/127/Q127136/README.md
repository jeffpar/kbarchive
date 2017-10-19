---
layout: page
title: "Q127136: Direct Cable Connection Fails with Only NetBEUI Loaded"
permalink: /kb/127/Q127136/
---

## Q127136: Direct Cable Connection Fails with Only NetBEUI Loaded

	Article: Q127136
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbnetwork dun msnets win95 kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Direct Cable Connection may not work when one or both computers are using only
	the NetBEUI protocol with the Dial-Up Adapter and are located on the same
	network.
	
	On the computer configured as the guest, the Direct Cable Connection Status
	dialog box displays the message "Verifying Username and Password," and then
	"Disconnect."
	
	On the host computer, the Direct Cable Connection Status dialog box displays the
	message "Verifying Username and Password," and then "Waiting for the guest
	machine."
	
	CAUSE
	=====
	
	You are using the Microsoft Client for Microsoft Networks and the NetBEUI
	protocol to log on to the network. The direct connection fails because you are
	connected to the network with an Ethernet adapter when you try to make the
	direct connection. This causes the NETBIOS name projection to fail, which in
	turn causes NetBEUI to fail negotiation. Since NetBEUI is the only installed
	protocol, when it fails negotiation the connection is dropped. This may also
	occur when you are using Dial-up Networking with only the NetBEUI protocol
	installed.
	
	RESOLUTION
	==========
	
	Install the IPX/SPX-compatible network protocol. To do so, follow these steps:
	
	1. Click the Start button, point to Settings, and click Control Panel.
	
	2. Double-click the Network icon.
	
	3. Click the Add button.
	
	4. Click Protocol, then click the Add button.
	
	5. Click Microsoft.
	
	6. Click IPX/SPX-Compatible Protocol.
	
	7. Click the OK button.
	
	MORE INFORMATION
	================
	
	The NetBEUI protocol requires a unique name to identify a computer. You cannot
	connect to the same network using the same name with two different network
	adapters with this protocol.
	
	The IPX/SPX-compatible protocol relies on a unique network ID and is negotiated
	even if there is a name conflict. When you use this protocol, you can make a
	direct connection while you are connected to the network.
	
	
	Note that the behavior described in this article can also occur if the host
	computer uses the TCP/IP and IPX/SPX-compatible protocols and is connected to
	the network and the guest computer uses the TCP/IP protocol and is not connected
	to the network. In this case, add the IPX/SPX- compatible protocol to the guest
	computer to enable the direct connection.
	
	The behavior described in this article can also occur if both computers are using
	only the TCP/IP network protocol.
	
	Additional query words: dcc
	
	======================================================================
	Keywords          : kbnetwork dun msnets win95 kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
