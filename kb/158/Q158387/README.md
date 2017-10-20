---
layout: page
title: "Q158387: RAS Cannot Use DHCP to Assign Addresses w/ PPTP Filtering"
permalink: /kb/158/Q158387/
---

## Q158387: RAS Cannot Use DHCP to Assign Addresses w/ PPTP Filtering

{% raw %}

	Article: Q158387
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	PPTP clients are unable to connect to your PPTP server with the TCP/IP protocol.
	The following error message is logged in the Event Viewer on the PPTP server:
	
	  Event ID: 20091
	  Source: RemoteAccess
	  Description: The Remote Access Server was unable to acquire an IP Address from
	  the DHCP Server to be used on the Server Adapter. Incoming users will be
	  unable to connect using IP.
	
	This problem will occur if you have two network interfaces on your PPTP server,
	one connected to your internal network and the other connected to the Internet,
	and PPTP filtering is enabled on the interface with a connection to the
	Internet.
	
	You enable PPTP filtering on the interface connected to the Internet to disable
	this interface for non-PPTP traffic. The interface connected to your internal
	network does not have PPTP filtering enabled; however, the RAS Server service
	running on this machine is still unable to obtain an IP address from the DHCP
	server for the RAS Server PPTP adapter.
	
	CAUSE
	=====
	
	DHCP traffic is sent via broadcast. On a computer with more than one network
	interface, the Tcpip.sys driver incorrectly discards broadcast packets when one
	of the network interfaces has PPTP filtering enabled. Tcpip.sys should forward
	the broadcast packets to the non-PPTP filtering interfaces instead of discarding
	the broadcasts.
	
	RESOLUTION
	==========
	
	To correct this problem, install Windows NT 4.0 service pack 2 or later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
