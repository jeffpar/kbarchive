---
layout: page
title: "Q195686: Explanation of ICMP Redirect Behavior"
permalink: /kb/195/Q195686/
---

## Q195686: Explanation of ICMP Redirect Behavior

	Article: Q195686
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The assumption on IP internetworks is that the IP hosts (nonrouters) only need
	minimal routing information and can rely on IP routers having knowledge of the
	topology of the internetwork and all of the best routes. Therefore, IP hosts are
	typically only configured with an IP address of a default router (also called a
	default gateway). Any remote traffic from the IP host is forwarded to the
	default IP router. While this makes it easier to configure the IP hosts, in IP
	internetworks where there are multiple routers on a given network, the behavior
	of sending all remote traffic to the same router can produce non-optimal host
	routing. To prevent the perpetuation of non-optimal host routing, IP routers can
	update the routing tables of hosts using an ICMP Redirect message.
	
	MORE INFORMATION
	================
	
	The ICMP Redirect message is only sent in the following situation:
	
	1. Host A is sending a packet to Host B. Host A's default IP router is router
	  R1. Because Host B is a remote host, Host A forwards the packet destined for
	  Host B to its default router R1.
	
	2. R1 checks its routing table and finds that the next hop for the route to the
	  network for Host B is router R2.
	
	3. If Host A and R2 are on the same network that is also directly attached to
	  R1, an ICMP Redirect message is sent to Host A informing it that R2 is the
	  better route when sending to Host B.
	
	4. Router R1 then forwards the IP datagram to R2.
	
	5. Host A adds a host route to its routing table for Host B's IP address with
	  router R2's IP address as the forwarding address. Subsequent datagrams from
	  Host A to Host B are forwarded by means of router R2.
	
	An ICMP Redirect message is not sent for IP datagrams with IP source route
	options even if there is a better route to the ultimate destination than the
	next address in the source route.
	
	In the ICMP Redirect message:
	
	  Type - Set to 5.
	  Code - Set to 0 - 3 (details below).
	
	Router IP Address - The IP address of the router corresponding to the better
	route as determined by the router originally sent the IP datagram. The sending
	host uses this information to update its routing table to include this new
	route.
	
	IP Header and First 64 Bits of Original IP Payload - To identify the forwarded
	packet for the source, the IP header and 64 bits of the IP payload are
	encapsulated and sent back to the source. Included in the encapsulated IP header
	is the IP Identification field uniquely identifying a specific IP packet as sent
	by the source and the destination IP address. Between the destination IP address
	stored here and the router IP address field in the ICMP header, a routing table
	entry is made.
	
	Code Value  Meaning
	----------  -------
	
	0           Redirected datagrams for the network (obsolete).
	1           Redirected datagrams for the host.
	2           Redirected datagrams for the Type of Service and the network.
	3           Redirected datagrams for the Type of Service and the host.
	
	Windows NT Specifics:
	
	A host route learned by means of an ICMP Redirect will be added to the route
	table for 10 minutes, after which time it is removed and must be relearned
	through another ICMP Redirect.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95; winnt:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
