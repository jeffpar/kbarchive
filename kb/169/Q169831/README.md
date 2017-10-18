---
layout: page
title: "Q169831: PPTP May Fail with Error: Remote PPP Peer is Not Responding"
permalink: kb/169/Q169831/
---

## Q169831: PPTP May Fail with Error: Remote PPP Peer is Not Responding

	Article: Q169831
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): _IK12469 kbhowto
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to make a PPTP connection between a computer running Windows NT
	Server version 4.0 Routing and Remote Access (RRAS) routers, the connection may
	fail with the error message "Remote PPP peer is not responding". The PPTP
	connection must be initiated to the correct IP address on that computer. For
	this reason, using the computer name in the phone book entry results in
	sporadically successful PPTP connections. This basic concept is also true for
	legacy Windows NT 4.0 RAS clients tunneling to legacy Windows NT 4.0 servers or
	Routing and Remote Access servers.
	
	MORE INFORMATION
	================
	
	The PPTP service responds to connection requests using the IP address of the
	interface that has the best route back to the PPTP client. You should use this
	address as the connection endpoint of your PPTP connection. This is important
	because the interface that receives the PPTP request is not necessarily the
	interface associated with the best route back to the PPTP client.
	
	If the target PPTP server has a dedicated circuit, the IP address will be that of
	the WAN adapter. If the target PPTP server has a PPP connection to a local ISP,
	you will need to PPTP to the IP address assigned by the ISP.
	
	In a rare case, you may have an end to end PPP connection between two Windows NT
	routers and try to bring up PPTP over that PPP link. When Windows NT routers
	connect through demand dial, both routers will assign each other an IP address.
	In this case, you would then PPTP to the PPP address that your local router
	assigned the peer router.
	
	Example
	-------
	
	- Router 1 has a RAS IP address pool of 192.168.0.0 mask 255.255.255.0 (address
	  pool 192.168.0.1-254)
	
	- Router 2 has a RAS IP address pool of 172.16.0.0 mask 255.255.255.0 (address
	  pool 172.16.0.1-254)
	
	When Router 1 demand dials Router 2 over PPP, Router 1 will create an NDISWAN
	interface with IP address 192.168.0.1. This address is used internally by
	Routing and Remote Access Service. The address can be seen using the IPCONFIG
	command. You will also see this in the route table using the KERNROUT PRINT
	command. Router 1 will then be assigned an NDISWAN address of 172.16.0.2 by its
	peer router. This assigned address will show up in IPCONFIG as well as ROUTE
	PRINT, KERNROUT PRINT, and the GUI route table in Routing and Remote Access
	Administrator.
	
	Router 2 will use the NDISWAN address 172.16.0.1 internally and will be assigned
	the NDISWAN address 192.168.0.2. To bring up the PPTP connection over PPP,
	Router 1 will need to connect to 192.168.0.2 (an address from its own RAS
	pool).
	
	Router-to-Router PPTP Over PPP Addressing in Table Form
	
	Router 1
	RAS IP address pool statically defined as 192.168.0.0, mask 255.255.255.0
	NDISWAN1 192.168.0.1 uses the first address of the pool internally
	NDISWAN2 172.16.0.2 assigned during the PPP connection to Router 2
	NDISWAN3 172.16.0.3 assigned during the PPTP connection to Router 2
	
	Router 2
	RAS IP address pool statically defined as 172.16.0.0, mask 255.255.255.0
	NDISWAN1 172.16.0.1 uses the first address of the pool internally
	NDISWAN2 192.168.0.2 assigned during the PPP connection to Router 2
	NDISWAN3 192.168.0.3 assigned during the PPTP connection to Router 2
	
	If Router 1 were a legacy Windows NT 4.0 RAS client, it could have simply
	tunneled to the address 172.16.0.1. Legacy Windows NT 4.0 RAS clients do not
	dynamically assign an IP address to the server, so the server side internal
	address of 172.16.0.1 can be used.
	
	Additional query words: 721
	======================================================================
	Keywords          : _IK12469 kbhowto 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : 4.0
	Issue type        : kbhowto
	
	=============================================================================
	
