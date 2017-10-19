---
layout: page
title: "Q263117: Delay When Connecting MMC to Remote IIS Server"
permalink: /kb/263/Q263117/
---

## Q263117: Delay When Connecting MMC to Remote IIS Server

	Article: Q263117
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbtool kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to a remote Microsoft Internet Information Server (IIS)
	computer that has more than one network card using the Microsoft Management
	Console (MMC), a delay of approximately 30 seconds may occur on the first
	connection. Subsequent connections are much quicker.
	
	CAUSE
	=====
	
	The remote procedure call (RPC) returns the IP addresses for all of the network
	interface cards (NICs) on the IIS server. The list is tried in the order in
	which it is returned. If the first NIC returned is not reachable by the client
	where MMC is run, the process keeps trying the first address until 32 seconds
	have passed. After the timeout, it proceeds on down the list.
	
	
	RESOLUTION
	==========
	
	The order in which the list is returned is controlled by the binding order on
	the TCP/IP protocol. To alter the binding order on Microsoft Windows NT 4.0,
	follow these steps:
	
	1. Open the network control panel on the IIS Server.
	
	2. Click the Bindings tab.
	
	3. Select "Show Bindings for All Protocols".
	
	4. Expand the TCP/IP protocol.
	
	5. Highlight the NIC that you want at the top of the list, and then click Move
	  Up until it is at the top of the list.
	
	6. Restart the IIS server.
	
	To alter the binding order on Microsoft Windows 2000, follow these steps:
	
	1. Open the network control panel on the IIS Server.
	
	2. Click Advanced on the menu, and then select Advanced Settings.
	
	3. Highlight the NIC that you want at the top of the list, and then click the up
	  arrow until the NIC is at the top of the list.
	
	4. Click OK.
	
	REFERENCES
	==========
	
	For additional information about network connection delays, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q288886 PRB: Delayed DCOM Activation on Multihomed Computers
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbhw kbtool kbHardware 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
