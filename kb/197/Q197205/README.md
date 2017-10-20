---
layout: page
title: "Q197205: RRAS IPX VPNs Generate Event ID 20124"
permalink: /kb/197/Q197205/
---

## Q197205: RRAS IPX VPNs Generate Event ID 20124

{% raw %}

	Article: Q197205
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When your client computers try to access resources across a Routing and Remote
	Access (RRAS) Point-to-Point Tunneling Protocol (PPTP) tunnel routing IPX, your
	RRAS server will log the following error:
	
	  Event ID 20124
	  Source:  IPXRIP logs with the following description:
	  Description: Another IPX router claims different network number for
	  interface <ipxvpn>.
	  Offending router IPX address is in the data.
	
	RRAS will also stop forwarding IPX and SAP.
	
	CAUSE
	=====
	
	The IPX stack sees that a packet from the clients LAN is trying to go over the
	WAN adapter and it then uses this network number of the client as the autonet
	value for the adapter. The network number is incorrect and will cause routing to
	stop.
	
	RESOLUTION
	==========
	
	If you receive event ID 20124, you will need to disable the ability of RRAS to
	use unnumbered WAN connections.
	
	You can make this change by editing the following registry entry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following key in the registry:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\RemoteAccess
	     \Parameters\Ipx
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click Add Value and use the following entry (if the entry
	  already exists, just double-click it to edit the value):
	
	     Value Name:    EnableUnnumberedWanLinks
	     Data Type:     REG_DWORD
	     Value range:   0 - 0xFFFFFFFF
	     Default value: 1
	
	  By default, this value is 1. Change this value to 0.
	
	MORE INFORMATION
	================
	
	Consider the following environment:
	
	  Lclient         LRRAS ===== VPN ===== RRRAS           Rclient
	  eeee            ddcc                   ccbb             aaaa
	   |     ipx      |  |      IP only      |  |     ipx      |
	    -----dddd-----    -cccc-X-----X-cccc-    -----bbbb-----
	
	Both RRAS servers (LRRAS and RRRAS) have two network cards.
	
	On LRRAS, one network card is configured with IPX only (net ID dddd) and the
	other network card is configured with IPX (net ID cccc) and an IP address on the
	10.0.0.0/8 network. The internal network ID is configured to be ddcc. The X in
	the diagram represents IPX outbound filters (drop all) and IP outbound filters
	(allow only PPTP).
	
	On RRRAS, one network card is configured with IPX only (net ID bbbb) and the
	other network card is configured with IPX (net ID cccc) and an IP address on the
	10.0.0.0/8 network. The internal network id is configured to be ccbb. The X in
	the diagram represents IPX outbound filters (drop all) and IP outbound filters
	(allow only PPTP).
	
	The filters assure that IPX traffic will only flow over the PPTP tunnel created
	between the two RRAS servers.
	
	Lclient and Rclient only have IPX bound to their NICs and have internal network
	IDs defined as eeee and aaaa respectively.
	
	On the RRAS servers, both RIP and SAP have been configured on the LAN and WAN
	interfaces.
	
	As soon as client eeee tries to view client aaaa, the VPN adapter on LRRAS
	changes the net ID of the WAN interface from all zeroes (the default) to eeee,
	which RRRAS cannot handle. It logs error 20124 and stops routing IPX packets.
	
	  Event ID 20124
	  Source:  IPXRIP logs with the following description:
	  Description: Another IPX router claims different network number for
	  interface <ipxvpn>.
	  Offending router IPX address is in the data.
	
	After the above error is logged, IPX routing is stopped and both RIP and SAP
	timeout over the PPTP connection.
	
	Additional query words: rras ipx 20124
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
