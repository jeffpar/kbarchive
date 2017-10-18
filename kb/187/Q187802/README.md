---
layout: page
title: "Q187802: DHCP Assigns &quot;Bad_Address&quot; to &quot;Host Unreachable&quot;"
permalink: kb/187/Q187802/
---

## Q187802: DHCP Assigns &quot;Bad_Address&quot; to &quot;Host Unreachable&quot;

	Article: Q187802
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	DHCP Duplicate IP Detection is marking the IP address as Bad_Address when the
	response is "host unreachable". Duplicate IP detection code should read the ICMP
	packet and do nothing if the host is unreachable, instead of marking the address
	as if a valid response was received. Bad_Address flagging is part of the
	Duplicate IP Detection feature added to Windows NT 4.0 in Service Pack 2.
	
	CAUSE
	=====
	
	Bad_Address indications are being caused by a Windows for Workgroups 3.11 bug
	that occurs when all of the following conditions are present:
	
	- Windows for Workgroups 3.11b clients are present on the network.
	
	- At least two DHCP servers are present on the network, and at least one of
	  them has Duplicate IP Address Detection enabled.
	
	- The DHCP servers are separated from the Windows for Workgroups clients by a
	  router.
	
	- The router has ARP cache enabled.
	
	- The router has the BOOTP relay agent enabled.
	
	The DHCP server receives a "Destination Host Unreachable" packet as a result of
	the client bug and the behavior of DHCP's Duplicate Address Detection. By
	current design, DHCP marks the IP address as BAD_ADDRESS if there is ANY
	response to ICMP echo request.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	You can work around this problem by doing one of the following:
	
	- Upgrade all WFWG clients to Windows 95 or Windows NT clients.
	
	  -or-
	
	- Disable the ARP cache on the CISCO router. (ARP cache is enabled by default
	  on most routers.)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	MORE INFORMATION
	================
	
	The problem occurs in the following scenario:
	
	1. The Windows for Workgroups client broadcasts an IP address request (a
	  DhcpDiscover packet) to the two DHCP servers.
	
	2. The first DHCP server responds to the request and assigns an IP address to
	  the client through the normal sequence of DHCP handshaking between it and the
	  client. The client binds to the given IP address.
	
	3. As part of Duplicate IP Address Detection , the second DHCP server sends an
	  ICMP echo packet to the IP address it is attempting to assign (that is, the
	  next available address in its pool). This is to confirm that the address is
	  not already in use.
	
	4. Because the router has ARP cache enabled, it associates the media access
	  control address of the Windows for Workgroups client to the IP address
	  already assigned to the client from the first DHCP server. It then sends the
	  ICMP echo packet to the media access control address of the Windows for
	  Workgroups client.
	
	5. The client receives the packet, but the packet contains a different IP
	  address (the one from the second DHCP server) than the one it has bound to
	  its stack. Because of this address discrepancy, it responds back to the
	  server with "Destination Host Unreachable".
	
	6. When the second DHCP server with Duplicate Address Detection receives an ICMP
	  error response "Host Unreachable". The Error code is set to
	  IP_DEST_HOST_UNREACHABLE.
	
	
	
	Additional query words: conflict
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
