---
layout: page
title: "Q151760: Error 20091 When Client Dials RAS Server Using TCP/IP"
permalink: kb/151/Q151760/
---

## Q151760: Error 20091 When Client Dials RAS Server Using TCP/IP

	Article: Q151760
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbusagekbfaq
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT, Windows 95, or third-party PPP clients fail to connect to your
	Windows NT Remote Access Service (RAS) server using the TCP/IP protocol.
	
	In the System Log of the Event Viewer on your Windows NT RAS server, you see the
	following error message:
	
	  Event ID: 20091
	  Source: RemoteAccess
	  Type: Error
	  Description: The Remote Access Server was unable to acquire an IP Address from
	  the DHCP Server to be used on the Server Adapter. Incoming users will be
	  unable to connect using IP.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions exist:
	
	- You are using DHCP on your network, but you have not created an active scope
	  that includes addresses from the same subnet as the subnet of the RAS
	  server's network card.
	
	- Your RAS server is configured to use DHCP to assign remote TCP/IP client
	  addresses (the default option), however, there is no DHCP server on your
	  network.
	
	RESOLUTION
	==========
	
	If there is a DHCP Server on your network, make sure you have an active scope on
	your DHCP server that includes addresses from the same subnet as the subnet of
	the RAS server's network card. For information on creating and activating scopes
	using DHCP Manager, refer to DHCP Help.
	
	If there is no DHCP server on your network, configure RAS to use a static address
	pool to assign remote TCP/IP client addresses by performing the appropriate
	method below:
	
	Windows NT 4.0
	--------------
	
	1. In Control Panel, double-click Network, click the Services tab, and then
	  double-click Remote Access Service.
	
	2. Click Network, click the TCP/IP check box under Server Settings to select it,
	  and then click Configure.
	
	3. Click Use Static Address Pool, set the Begin and End addresses, and then
	  click OK.
	
	Windows NT 3.51 and earlier
	---------------------------
	
	1. In Control Panel, double-click Network, and then double-click Remote Access
	  Service.
	
	2. Click Network, and then click Configure (for TCP/IP) under Server Settings.
	
	3. Click Use Static Address Pool, set the Begin and End addresses, and then
	  click OK.
	
	Additional query words: 3.50 3.51 4.00 20090 736 629 negotiate compatible
	
	======================================================================
	Keywords          : kbusage kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
