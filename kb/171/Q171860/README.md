---
layout: page
title: "Q171860: Duplicate IP Address in RAS Pool Causes Event ID 20050"
permalink: /kb/171/Q171860/
---

## Q171860: Duplicate IP Address in RAS Pool Causes Event ID 20050

	Article: Q171860
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Remote Access Service (RAS) client dials into your Windows NT RAS server
	running remote access server, the client may be disconnected during the
	authentication process or shortly thereafter. Also, you may receive an event log
	message in the event viewer on the RAS server similar to the following:
	
	  Event ID: 20050
	  Source: RemoteAccess
	  Description: The user DOM\User connected on port Com1 on <date> at
	  <time> and disconnected on <date> at <time>. The user was
	  active for <time length>. 326 bytes were sent and 512 bytes were
	  received. The port speed was 28800. The reason for disconnecting was
	  administrator's request.
	
	CAUSE
	=====
	
	The cause of this problem may be a duplicate IP address on the network. This can
	be due to one or more of the following:
	
	- A user may be using an address that is in the server's RAS static pool.
	
	  -or-
	
	- The RAS administrator added entries to the RAS IP static pool that are
	  already in use on the local area network (LAN).
	
	  -or-
	
	- The RAS server is using Dynamic Host Configuration Protocol (DHCP) for its
	  RAS address pool and the DHCP server has had its database rebuilt.
	
	RESOLUTION
	==========
	
	To resolve this issue, regardless of the cause affecting you, you must verify
	that the pool of addresses being used by the RAS server is not in use by other
	computers on the LAN. This can be done by using the following steps:
	
	1. Verify that there are no RAS clients connected to the RAS server.
	
	2. From a command prompt, type the following:
	
	  ping <ip address>
	
	where <ip address> represents the IP addresses in the RAS pool.
	
	3. Repeat step 2 for each address in the RAS pool.
	
	If you receive a response from another computer, either the RAS server addresses
	must be changed or the LAN workstation must have its address changed.
	
	To change the RAS pool of addresses, follow these steps:
	
	1. Double-click Network in Control Panel and click Services.
	
	2. Click Remote Access Service (or Routing and Remote Access).
	
	3. Click Properties, click Network, and click Configure for the TCP/IP protocol.
	
	4. If the RAS server is configured to assign addresses through DHCP, force the
	  RAS server to obtain a new set of leases from the DHCP Server. If the RAS
	  server is configured with a static pool of addresses, edit the address range
	  to include unique addresses.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q124358 RAS Server Assigns Cached IP Addresses to RAS Clients
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
