---
layout: page
title: "Q177335: How to Create a Demand Dial PPTP Interface"
permalink: /kb/177/Q177335/
---

## Q177335: How to Create a Demand Dial PPTP Interface

{% raw %}

	Article: Q177335
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork sbs
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With a Microsoft Windows NT Server computer that is using the Microsoft Routing
	and Remote Access Service (RRAS) Update, you may want to create a Point-to-Point
	Tunneling Protocol (PPTP) interface that automatically connects to a PPTP server
	when a resource is requested. This article discusses the steps needed to create
	a demand dial PPTP interface.
	
	MORE INFORMATION
	================
	
	To configure a demand dial PPTP connection, use the following steps:
	
	NOTE: The following procedure assumes that you have successfully installed RRAS
	and PPTP.
	
	1. From Routing and RAS Admin, right-click LAN and Demand Dial Interfaces and
	  then click Add Interface.
	
	2. Use the Demand Dial Wizard to create a Demand Dial interface for a
	  Point-to-Point (PPP) connection using a modem or ISDN RAS device and
	  appropriate phone number.
	
	  NOTE: In a branch office that uses the Internet, the phone number would be the
	  phone number of the local Internet Service Provider (ISP).
	
	3. Repeat steps 1 and 2, but use a Virtual Private Network (VPN) RAS device and
	  the IP address of the PPTP server.
	
	  NOTE: In a branch office that uses the Internet, the IP address would be the
	  IP address of the PPTP server's Internet interface.
	
	4. From Routing and RAS Admin, expand the IP Routing folder, right-click Static
	  Routes, and then click Add Static Route.
	
	5. Create a static host route to the PPTP server's PPP interface. An example is
	  shown below where the IP address of the PPTP Server is 192.100.100.1:
	
	     Destination : 192.100.100.1
	     Network Mask: 255.255.255.255
	     Gateway     : 1.1.1.1
	     Metric      : 1
	     Interface   : PPP Connection to the ISP
	
	6. Create a static route (or routes) for the IP network IDs of the corporate
	  intranet that will be accessed through the PPTP tunnel. An example is shown
	  below where the corporate intranet network ID is 10.0.0.0:
	
	     Destination : 10.0.0.0
	     Network Mask: 255.0.0.0
	     Gateway     : 1.1.1.1
	     Metric      : 1
	     Interface   : PPTP Connection to the Corporate network
	
	The PPTP tunnel is automatically bought up through the following process (using
	the example information above):
	
	1. Packets destined for the network ID 10.0.0.0 are forwarded using the
	  corporate intranet static route to the "PPTP Connection to the Corporate
	  network" interface object.
	
	2. The PPTP Connection to the Corporate network interface object must establish
	  a PPTP tunnel with the PPTP Server at its configured IP address of
	  192.100.100.1.
	
	3. To establish a tunnel, a TCP connection must be established.
	
	4. TCP connection packets to the address of 192.100.100.1 are forwarded to the
	  "PPP Connection to ISP" interface object using the host route for the
	  corporate PPTP Server.
	
	5. The "PPP Connection to ISP" interface is connected.
	
	6. The PPTP tunnel is connected over the PPP connection.
	
	7. Packets sent to the corporate intranet are sent over the PPTP tunnel.
	
	For additional information about configuring Routing and Remote Access Service on
	Small Business Server, please see the following article in the Microsoft
	Knowledge Base:
	
	ARTICLE-ID: Q192614
	TITLE : Routing and Remote Access Service on Small Business Server
	
	Additional query words: dod dial on demand
	======================================================================
	Keywords          : kbnetwork sbs 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
