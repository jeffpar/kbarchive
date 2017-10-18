---
layout: page
title: "Q169415: Routing and Remote Access Release Notes Readme.doc File"
permalink: kb/169/Q169415/
---

## Q169415: Routing and Remote Access Release Notes Readme.doc File

	Article: Q169415
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains the Release Notes Readme.doc file for Routing and Remote
	Access Service, formerly known as Steelhead.
	
	MORE INFORMATION
	================
	
	Release Notes for Windows NT Routing and Remote Access Service June 1997
	------------------------------------------------------------------------
	
	*(c) 1997 Microsoft Corporation. All rights reserved.
	
	This document contains known issues for the Microsoft Routing and Remote Access
	Service for Windows NT Server version 4.0 release.
	
	Contents
	--------
	
	- Using WordPad to View This Document
	
	- Routing and Remote Access Service Documentation
	
	- Setup Issues
	
	- Routing and Remote Access Service Packet Filtering and Windows NT 4.0 TCP/IP
	  Security
	
	- Routing and Remote Access Service Packet Filtering and the Microsoft Proxy
	  Server
	
	- Using DHCP Versus Static Pool Addresses on a RAS Server
	
	- Demand-Dial Interface Issues
	
	- IPX Issues
	
	- OSPF Issues
	
	- Miscellaneous Issues
	
	Using WordPad to View This Document
	-----------------------------------
	
	If you enlarge the WordPad window to its maximum size, this document will be
	easier to read. To do so, click the Maximize button in the upper-right corner of
	the window. Or open the Control menu in the upper-left corner of the WordPad
	window (press ALT+SPACEBAR), and then click Maximize.
	
	To move through the document, press PAGE UP or PAGE DOWN. Or click the arrows at
	the top and bottom of the scroll bar along the right side of the WordPad
	window.
	
	To wrap words to the screen size or the ruler:
	
	1. On the View menu, click Options.
	
	2. Click Wrap to window or click Wrap to ruler, then click OK.
	
	To print the document:
	
	1. On the File menu, click Print.
	
	2. Select the printer, and then click OK.
	
	Routing and Remote Access Service Documentation
	-----------------------------------------------
	
	After you download the Routing and Remote Access Service files from the Web,
	documentation is available for Routing and Remote Access Service in the \Doc
	directory of the directory in which you choose to install the files on your
	computer. For example, if you choose to install the files in theC:\Program
	Files\Routing directory, the documentation will be available in the C:\Program
	Files\Routing\Doc directory.
	
	If you want to view management information through an SNMP console, you can use
	the .mib (Management Information Base) files supported by Routing and Remote
	Access Service. The .mib files are also copied to the \Doc directory, as
	described in the preceding paragraph.
	
	NOTE: Routing and Remote Access Service running on Windows NT Server version 4.0
	is also referred to as the Windows NT router.
	
	Setup Issues
	------------
	
	General Setup Issues
	
	- You must install Routing and Remote Access Service on a computer running
	  Windows NT Server version 4.0 with Service Pack 3 installed.
	
	- You cannot run the Remote Winsock client on a Windows NT router. If you have
	  the Remote Winsock client installed on the computer, delete it before
	  installing Routing and Remote Access Service.
	
	- If Setup detects that you have any of the following services, you will be
	  prompted to delete them:
	
	   - Remote Access Service (RAS)
	
	   - RIP for IP
	
	   - RIP for IPX
	
	   - SAP Agent
	
	   - BOOTP/DHCP Relay Agent
	
	These services and the Registry settings for the services are now part of the
	Routing and Remote Access Service.
	
	For more setup information, see Chapter 2, "Installing and Configuring Routing
	and Remote Access Service," in the Administrator's Guide.
	
	Install Network Adapters Before Routing and Remote Access Service It is
	recommended that you install any network adapters or services (such as ISDN or
	PPTP) before installing Routing and Remote Access Service.
	
	If you install a network adapter or service after you have installed Routing and
	Remote Access Service, and if the adapter or service requires you to reinstall
	Service Pack 3, you must then update Routing and Remote Access Service.
	
	To update Routing and Remote Access Service:
	
	1. In Network in Control Panel, on the Services tab, select Routing and Remote
	  Access Service, and then click Update.
	
	2. When prompted, type the path of the directory that contains the Routing and
	  Remote Access Service program files.
	
	Setup Options:
	
	During the Routing and Remote Access Service Setup, you can install Remote access
	service (RAS), LAN routing, Demand-dial routing, or all three. If you install
	LAN routing, whatever network protocols are currently installed on your computer
	are automatically enabled for routing. However, if you install demand-dial
	routing, you can choose the protocols. To do this, click Network in the Routing
	and Remote Access Setup dialog box.
	
	NOTE: If you cancel Setup after the dialog box in which you choose Remote Access
	Service (RAS), LAN routing, or Demand-dial routing, then the Oemnsvra.inf file
	in your Systemroot\System32 directory is the version from Routing and Remote
	Access Service. To install Windows NT version 4.0 RAS or a previous version of
	Routing and Remote Access Service, you must manually copy the file Oemnsvra.inf
	from your Windows NT version 4.0 CD or your Service Pack CD to your
	Systemroot\System32 directory.
	
	For more information on the Setup options, see Chapter 2, "Installing and
	Configuring Routing and Remote Access Service," in the Administrator's Guide.
	
	Routing and Remote Access Service Packet Filtering and Windows NT 4.0
	
	TCP/IP Security
	---------------
	
	You can resolve the following two issues by using Network in Control Panel. On
	the Protocols tab, select TCP/IP Protocol and click Properties.
	
	- On the IP Address tab, click Advanced. The PPTP filtering option in the
	  Advanced IP Addressing dialog box has no effect after Routing and Remote
	  Access Service is installed. However, if you configured TCP/IP filters before
	  you installed Routing and Remote Access Service, those filters will migrate
	  to Routing and RAS Admin.
	
	- Click the Routing tab. If the Enable IP Forwarding check box is selected, do
	  not clear it after you install Routing and Remote Access Service. If you do
	  clear it, your router will not function properly.
	
	NOTE: This applies only if you have enabled IP routing before you installed
	Routing and Remote Access Service. If you have never enabled IP routing, you do
	not need to select this check box to enable the routing functionality of Routing
	and Remote Access Service.
	
	Routing and Remote Access Service Packet Filtering and Microsoft Proxy
	Server
	-----------------------------------------------------------------------------
	
	If you install Microsoft Proxy Server and Routing and Remote Access Service on
	the same computer, it is important to use caution when you configure filtering
	in both Microsoft Proxy Server and Routing and Remote Access Service. Packet
	filtering in Routing and Remote Access Service can impair the functionality of
	Microsoft Proxy Server in two ways:
	
	- Routing and Remote Access Service input filtering can prevent inbound
	  intranet client requests from being processed on the intranet interface. It
	  can also prevent inbound response data from Internet Web servers from being
	  processed on the Internet interface.
	
	- Routing and Remote Access Service output filtering can prevent translated Web
	  requests by Microsoft Proxy Server from being transmitted to Internet Web
	  sites on the Internet interface. It can also prevent translated Internet Web
	  server responses by Microsoft Proxy Server from being transmitted to intranet
	  clients on the intranet interface.
	
	If you want to use Microsoft Proxy Server on the same computer as Routing and
	Remote Access Service, you must configure local host filters in Routing and RAS
	Admin. For information about how to configure local host filters, see Chapter 3,
	"Administering Routing and Remote Access Service," of the Administrator's Guide,
	or see the online Help file in Routing and RAS Admin.
	
	Using DHCP Versus Static Pool Addresses on a RAS Server
	-------------------------------------------------------
	
	If a RAS server is connected to a LAN with multiple network numbers on the same
	physical wire, do not use DHCP to assign addresses to clients. Instead, use a
	static address pool to assign the addresses. If you use DHCP to assign addresses
	to RAS clients, some clients might not be able to reach other computers on the
	LAN that are on the same subnet.
	
	For example, say a RAS Server uses DHCP to assign addresses. For its LAN
	interface, it gets the address a.a.a.11 from the range a.a.a.0, with a mask of
	255.255.255.0. The RAS Server also uses the DHCP server to assign addresses for
	its RAS address pool. It gets the addresses b.b.b.10, b.b.b.11, and b.b.b.12
	from the range b.b.b.0, with a mask of 255.255.255.0.
	
	Because the DHCP server gives addresses from both ranges to computers on the LAN,
	other computers on the LAN will have addresses on the b.b.b.0 subnet.
	
	Although the RAS Server uses only a few addresses from the b.b.b.0 subnet, it
	adds a route for the whole subnet through the RAS Server interface. Therefore,
	RAS dial-in clients cannot reach other computers on the b.b.b.0 subnet because
	of this bad route.
	
	To work around this, either use a static pool on the RAS Server, or add a static
	route to the RAS Server for all logical subnets on your local segment.
	
	Demand-Dial Interface Issues
	----------------------------
	
	General Demand-Dial Interface Issues:
	
	- When you restore the configuration of a router by using Load Configuration
	  from the Server menu, the credentials for the demand-dial interfaces are not
	  restored. You must specify them manually for each interface.
	
	- When a Windows NT router connects to another Windows NT router by using a
	  demand-dial interface, both routers act as PPP clients and obtain an IP
	  address for their local demand-dial interface from the remote router. There
	  can be IP addresses from different subnets on each end of a WAN link. This is
	  not a problem because it is a point-to-point link. However, if a routing
	  protocol is used, configure the interface to use multicast, not broadcast.
	
	- You can use the Point-to-Point Tunneling Protocol (PPTP) that shipped with
	  Windows NT version 4.0, or you can use the PPTP drivers that are in the
	  directory in which you installed the Routing and Remote Access files. If you
	  run Multilink PPTP, use these drivers to improve performance and stability on
	  heavily used computers, or when connecting over congested networks. If you
	  want to use these drivers, copy Raspptpe.sys, Raspptpm.sys, and Raspptpu.sys
	  to your Systemroot\System32\Drivers directory.
	
	Demand-Dial Interface Is Unreachable:
	
	When a demand-dial interface reconnects after the WAN link has been disconnected,
	an error might appear in the Event Log. Also, in Routing and RAS Admin, the
	Connection State for the interface is temporarily marked unreachable.
	
	The event logged in Event Viewer is the result of a timing condition and is
	incorrectly marked as an error. It should be marked as information because the
	router recovers and successfully reconnects the interface in these cases.
	
	The event logged in Event Viewer is the following:
	
	  Event ID: 20111
	  Source: Router
	  Event Description: A Demand Dial connection to the remote interface
	  <interface name> on port <port name> was successfully initiated
	  but failed to complete successfully because of the following error: The
	  interface is already connected.
	
	Connect to Third-Party Routers:
	
	You can enable a Windows NT router to request an IP address when you connect to
	third-party routers through demand-dial interfaces.
	
	To enable a Windows NT router to request an IP address:
	
	1. In Network in Control Panel, on the Services tab, select Routing and Remote
	  Access.
	
	2. Click Properties, and then click Network.
	
	3. In the Network Configuration dialog box, click the TCP/IP Configure button.
	
	4. Select the Allow remote clients to request a predetermined IP address check
	  box.
	
	Removing an Interface when the Router is stopped In Routing and RAS Admin, if you
	remove a demand-dial interface when the router is stopped, the interface is
	removed from the Registry, but is left behind in the router phonebook file. If
	you want to add the interface again and you continue to receive the error
	"interface already exists," you must delete the entry from the router phonebook
	file.
	
	To delete an entry from the router phonebook:
	
	1. In your Systemroot\System32\Ras directory, open the Router.pbk file in a text
	  editor.
	
	2. Delete the entry for the demand-dial interface.
	
	3. Save and close the file.
	
	IPX Issues
	----------
	
	General IPX Issues:
	
	- If your Windows NT router is a primary domain controller (PDC) that uses only
	  the IPX protocol, then clients that dial in to that Windows NT router will
	  not be validated on the router's domain. To avoid this problem, add the IP
	  protocol on the router, or move the Windows NT router to a different
	  computer.
	
	- If your Windows NT router is using File and Print Services for NetWare
	  (FPNW), the router cannot connect to any FPNW shares on the router. This does
	  not affect any other aspect of FPNW. Clients can still connect and use FPNW
	  on the router, and the router can connect and use FPNW on other NetWare
	  servers.
	
	- If the IPX protocol does not route with Eicon Technology WAN Services for
	  Windows NT V3R4, then use the Eicon Configuration tool (Ecadmin.exe) supplied
	  by Eicon. Run Ecadmin.exe, select router, select connections, and then select
	  the X25 entry on the right. Select properties, and ensure that 00 appears in
	  the User Data field. Repeat this procedure on all the systems that use Eicon
	  WAN Services for IPX to route.
	
	Disable IPX Routing:
	
	By default, if you have installed the IPX transport protocol, your router is an
	IPX router. If you want to disable IPX routing on your computer, you must
	disable IPX on all RIP for IPX and SAP for IPX interfaces in Routing and RAS
	Admin.
	
	Do not delete the NWLink IPX/SPX Compatible Transport protocol or disable the
	bindings for IPX in Network in Control Panel. If you do, Routing and RAS Admin
	will not start.
	
	To disable IPX routing:
	
	1. In Routing and RAS Admin, under IPX Routing, select RIP for IPX or SAP for
	  IPX.
	
	2. Right-click an interface, and then select Configure Interface.
	
	3. In the Interface Configuration dialog box, clear the Enable RIP or SAP on
	  this Interface check box.
	
	You must complete this procedure for every IPX interface in Routing and RAS
	Admin.
	
	Disable RIP or SAP Protocol:
	
	There is no way to individually remove RIP for IPX or SAP for IPX routing
	protocols. However, you can disable them by using the Routing and RAS Admin tool
	in the Start/Programs/Administrative Tools (Common) folder.
	
	To disable IPX RIP or IPX SAP on an interface:
	
	1. In Routing and RAS Admin, under IPX Routing, select RIP for IPX or SAP for
	  IPX.
	
	2. Right-click an interface, and then select Configure Interface.
	
	3. In the Interface Configuration dialog box, clear the Enable RIP or SAP on
	  this Interface check box.
	
	Auto-Static Route Updates Fail for IPX Interfaces:
	
	In Routing and RAS Admin, if you do an auto-static update over an IPX demand-dial
	interface and the static table remains empty for the interface you are updating,
	check the network number of the interface.
	
	To check the network number:
	
	- Under IPX Routing, click Summary, and then select the demand-dial interface.
	  Check the number that is displayed in the Network Number column.
	
	If the network number is anything other than zero, you must replace the
	Nwlnkipx.sys file on your computer.
	
	To do this, copy the Nwlnkipx.sys file from the directory in which you installed
	the Routing and Remote Access Service files on your computer to your
	Systemroot\System32\Drivers directory, and then restart your computer.
	
	For more details about this problem, see the Ipxfix.txt file that is located in
	the \Support directory in the directory in which you installed the Routing and
	Remote Access Service files on your computer.
	
	OSPF Issues
	-----------
	
	General OSPF Issues:
	
	- In Routing and RAS Admin, in the global OSPF Configuration dialog box, do not
	  configure the router identification number to be 0.0.0.0.
	
	- When you configure an OSPF router, do not duplicate router identification
	  numbers. The router identification number must uniquely identify a router
	  throughout the OSPF autonomous system.
	
	Change One of Multiple IP Addresses on an OSPF Interface:
	
	If OSPF is configured on an interface that has multiple IP addresses and you want
	to change one of the IP addresses, complete the following steps:
	
	- Remove the interface from OSPF.
	
	- Change the IP address.
	
	- Restart your computer.
	
	- Add the interface to OSPF.
	
	To remove the interface from OSPF:
	
	1. In Routing and RAS Admin, under IP Routing, select OSPF by Bay Networks.
	
	2. Right-click the interface and then click Remove interface.
	
	To change the IP address:
	
	1. In Network in Control Panel, configure the TCP/IP Protocol.
	
	2. In the IP Address tab, click Advanced.
	
	3. In the Adapter box, select an adapter.
	
	4. In IP Addresses, click Edit.
	
	5. Type the new IP address and click OK.
	
	6. Restart your computer.
	
	To add the interface back to OSPF:
	
	1. In Routing and RAS Admin, under IP Routing, right-click OSPF by Bay Networks,
	  and then click Add interface.
	
	2. Select the interface to add and then click OK.
	
	3. On the General tab, select each IP address in the IP Address box, and then
	  click the Enable OSPF on this interface check box.
	
	4. When you are finished configuring the interface, click OK.
	
	OSPF and the Default Gateway:
	
	It is possible to unintentionally advertise a default route within an autonomous
	system (AS).
	
	If you configure the TCP/IP protocol by using Network in Control Panel and enable
	a default gateway, adding this same default gateway address on an OSPF interface
	might cause the unintentional advertisement.
	
	The problem occurs when the router is defined as an autonomous system boundary
	router (ASBR) and you add the interface to OSPF, then enable OSPF to run on the
	interface. OSPF, as a result, picks all of the non-OSPF routes that are
	configured on the interface and advertises them to the AS. This means that the
	router also picks the default route (0.0.0.0) and advertises it to the other
	OSPF routers. If the router that is the default gateway also runs OSPF, it will
	learn about the default route and thus learn that the next hop for the default
	route is itself. This causes the default gateway to drop all the packets
	destined to the default route since the next hop is its own interface. This can
	cause major network problems.
	
	NOTE: This can also occur when you add a static route to the address 0.0.0.0.
	
	If you still need the default route locally, you can prevent OSPF from picking it
	up and advertising it by adding a route filter that processes all the external
	routes except the default route.
	
	To add the route filter:
	
	1. In Routing and RAS Admin, right-click OSPF by Bay Networks and then click
	  Configure OSPF.
	
	2. On the External Routing tab, click Routes.
	
	3. In the OSPF External Route Filters dialog box, click Process all routes
	  except those listed.
	
	4. Enter a route with the address 0.0.0.0 and the mask 0.0.0.0, and then click
	  Add.
	
	NOTE: The External Routing tab is visible only after you configure the router as
	an AS boundary router on the General tab.
	
	Use OSPF and RIP Together:
	
	If two routers use OSPF, do not use any other routing protocols between them.
	This is because you do not want the routers to exchange intra-area or inter-area
	routes through another routing protocol that were originally learned by OSPF.
	
	To work around this problem, configure only one router to listen to RIP.
	Configure the other router not to listen at all.
	
	To do this, you can use either of these methods:
	
	- Set a peer filter to drop RIP packets that come from the remote OSPF router.
	
	- Ignore incoming RIP packets that come over an interface.
	
	To set a peer filter for RIP:
	
	1. In Routing and RAS Admin, right-click RIP for IP, and then click Configure
	  RIP.
	
	2. On the Security tab, select the Discard all announcements from the routers
	  listed check box.
	
	3. Enter the address of the computer to ignore, and click Add.
	
	To ignore RIP packets on an interface:
	
	1. In Routing and RAS Admin, select RIP for IP.
	
	2. Right-click the interface, and then click Configure interface.
	
	3. On the General tab, in the Protocol for incoming packets box, select Ignore
	  incoming packets.
	
	Miscellaneous Issues
	--------------------
	
	- If the router process (Routing and Remote Access Service) is not responding,
	  restart your computer.
	
	- If you save the configuration of a remote computer by using Save
	  Configuration from the Server menu, the directory and drive into which you
	  are saving must exist on both the local and the remote computers. For
	  example, if you are saving a configuration to the C:\Save directory on the
	  computer on which you are running Routing and RAS Admin, then make sure the
	  C:\Save directory exists on the remote computer you are administering.
	
	- To monitor a Windows NT router you must use the Routing and RAS Admin tool in
	  the Start/Programs/Administrative Tools (Common) folder. To administer a
	  Windows NT version 4.0 or earlier RAS Server, you must use the Remote Access
	  Admin tool (Rasadmin.exe).
	
	- Routing and Remote Access Service supports only 40-bit encryption. If you
	  upgrade a RAS server that uses 128-bit encryption to Routing and Remote
	  Access Service, you will have only 40-bit demand-dial and RAS encryption.
	
	- You cannot remove a routing protocol by using the Routing and RAS Admin tool
	  (Mpradmin.exe). However, you can remove a routing protocol by using the
	  routemon command. You can add a routing protocol by using the Routing and RAS
	  Admin tool or the routemon command. To delete a routing protocol by using
	  routemon, at the command prompt, type:
	
	  ROUTEMON IP DELETE PROTOCOL PROTO= { RIP | OSPF | BOOTP }
	
	- The following are limits for Routing and Remote Access Service:
	
	   - 16 LAN interfaces
	
	   - 48 demand-dial interfaces
	
	   - 256 RAS clients
	
	You must purchase a client access license for every remote access connection/port
	that you configure. For more information, see your license agreement.
	
	Information in this document is subject to change without notice. The names of
	companies, products, people, characters, and/or data mentioned herein are
	fictitious and are in no way intended to represent any real individual, company,
	product, or event, unless otherwise noted. Complying with all applicable
	copyright laws is the responsibility of the user. No part of this document may
	be reproduced or transmitted in any form or by any means, electronic or
	mechanical, for any purpose, without the express written permission of Microsoft
	Corporation. If, however, your only means of access is electronic, permission to
	print one copy is hereby granted.
	
	Microsoft may have patents, patent applications, trademarks, copyrights, or other
	intellectual property rights covering subject matter in this document. Except as
	expressly provided in any written license agreement from Microsoft, the
	furnishing of this document does not give you any license to these patents,
	trademarks, copyrights, or other intellectual property. Microsoft, MS-DOS, MS,
	Windows, and Windows NT are either registered trademarks or trademarks of
	Microsoft Corporation in the U.S.A. and/or other countries.
	
	Other product and company names mentioned herein may be the trademarks of their
	respective owners.
	
	Additional query words: rras
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
