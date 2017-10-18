---
layout: page
title: "Q181024: DHCP Event ID 1002: DHCP Received an Unknown Option..."
permalink: kb/181/Q181024/
---

## Q181024: DHCP Event ID 1002: DHCP Received an Unknown Option...

	Article: Q181024
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbinterop kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Windows NT Remote Access Service (RAS) server or Routing and Remote Access
	Service (RRAS) server may log the following event message in Event Viewer about
	once every minute:
	
	  Event ID   : 1002
	  Source     : DHCP
	  Description: DHCP received an unknown option 006 of length 007. The raw
	               option data is given below.
	
	CAUSE
	=====
	
	This error is usually caused when the following conditions exist:
	
	- Your Windows NT RAS server is configured to use Dynamic Host Configuration
	  Protocol (DHCP) to assign remote TCP/IP client addresses.
	
	- You have a router on your network with a feature known as DHCP Spoofing
	  enabled.
	
	- You do not have a DHCP server currently on your network.
	
	RESOLUTION
	==========
	
	To resolve this issue, you will need to do one of the following:
	
	- Configure your RAS server to statically assign IP address using the following
	  steps:
	
	  1. Click Start, point to Settings, click Control Panel, and double-click
	     Network.
	
	  2. Click the Services tab and double-click Remote Access Service.
	
	  3. Click Network, click Configure for TCP/IP in Server Settings of the
	     Network Configuration dialog box.
	
	  4. Click Use Static Address Pool and enter the IP address pool that you want
	     to use.
	
	  5. Click OK and close until you are prompted to restart your computer.
	
	  6. Restart your computer.
	
	  -or-
	
	- Disable the DHCP Spoofing feature on your router. Consult your router
	  manufacturer for information on how to do this.
	
	  -or-
	
	- Configure a DHCP server on your network.
	
	MORE INFORMATION
	================
	
	With a default installation, a Windows NT RAS server is configured with the
	option to "Use DHCP to assign remote TCP/IP client addresses." With this option
	set, the RAS server will broadcast DHCPDISCOVER packets to a DHCP server. After
	the DHCP server responds, the RAS server will cache a range of IP addresses for
	its dial-in clients. What are not cached are the other configuration options
	such as Domain Name Service (DNS) servers, Windows Internet Name Service (WINS)
	servers, and default gateway information.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q160699 Understanding DHCP IP Address Assignment for RAS Clients
	
	Some routers, including Ascend Pipeline routers, have a feature known as DHCP
	Spoofing.
	
	NOTE: Ascend Corporation has been purchased by Lucent Technologies, Inc.
	
	This feature is essentially similar to a DHCP Relay Agent. The router will listen
	for DHCP broadcasts and attempt to answer the requests by responding with a
	temporary IP address, along with other optional parameters that are
	pre-configured in the router.
	
	The temporary IP address is the IP address of the router plus 1 for each
	sequential client request. A client who receives an address from the router will
	have a lease duration of only 1 minute and will have to renew its address after
	the lease expires in 50 percent of its lease time.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	For additional information about how to contact the manufacturer, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
