---
layout: page
title: "Q193907: Windows NT 4.0 SP4 Supports IGMP Version 2"
permalink: /kb/193/Q193907/
---

## Q193907: Windows NT 4.0 SP4 Supports IGMP Version 2

	Article: Q193907
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP4
	Operating System(s): 
	Keyword(s): kbnetwork kbFEA kbWinNT400sp4fea
	Last Modified: 03-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP4 
	- Microsoft Windows NT Server version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 3.51 and later supports Internet Group Management Protocol (IGMP)
	version 1. The Service Pack 4 update for Windows NT 4.0 provides support for
	IGMP version 2.
	
	MORE INFORMATION
	================
	
	IGMP is used by IP hosts to report their host group memberships to any
	immediately-neighboring multicast routers. IGMP messages are encapsulated in IP
	datagrams, with an IP protocol number of 2. Internetwork forwarding of IP
	multicast datagrams is handled by multicast routers. Windows NT currently does
	not support multicast forwarding.
	
	IP multicasting is the transmission of an IP datagram to a "host group," a set of
	zero or more hosts identified by a single IP destination address. The membership
	of a group is dynamic; that is, hosts may join and leave groups at any time.
	
	A permanent group has a well-known, administratively assigned IP address. It is
	the address, not the membership of the group, that is permanent. Host groups are
	identified by class D IP addresses (from 224.0.0.0 to 239.255.255.255).
	224.0.0.0 is guaranteed not to be assigned to any group, and 224.0.0.1 is
	assigned to the permanent group of all IP hosts (including gateways). There is
	no multicast address for all hosts on the total Internet. RFC 1700 has a list of
	permanent Internet multicast addresses.
	
	There are two types of IGMP message of concern to host-router interaction in IGMP
	v1:
	
	- Host Membership Query
	
	- Host Membership Report
	
	Multicast routers send Host Membership Query messages to discover which host
	groups have members on their attached local networks. The multicast router needs
	to know this information because, if there is a host group with no members in a
	segment, it will not forward multicast packets for that group to the segment.
	Queries are addressed to the all-hosts group (address 224.0.0.1).
	
	Hosts respond to a Query by generating Host Membership Reports, reporting each
	host group to which they belong on the network interface from which the Query
	was received. Routers do not know -- and do not need to know -- which hosts
	belong to a group, only that at least one host belongs to a group on a
	particular network. When a host joins a new group, it should immediately
	transmit a Report for that group.
	
	There are three types of IGMP message of concern to the host-router interaction
	in IGMP v2:
	
	- Membership Query
	
	- Version 2 Membership Report
	
	- Leave Group
	
	There is an additional type of message, for backwards-compatibility with IGMP
	v1:
	
	- Version 1 Membership Report
	
	IGMP v2 allows a computer to inform the router that it is leaving a group. This
	update enables the router to determine if there are no more members in a group
	and then runs a command to stop forwarding multicast packets on to the link.
	This update is useful when users are frequently joining and leaving groups.
	
	When a host leaves a multicast group, if it was the last host to reply to a Query
	with a Membership Report for that group, it should send a Leave Group message to
	the all-routers multicast group (224.0.0.2).
	
	An IGMP v2 host may be placed on a subnet where the querying router has not yet
	been upgraded to IGMP v2. The IGMP v1 router will send General Queries with the
	Max Response Time set to 0. This must be interpreted as a value of 100 (10
	seconds). An IGMP v2 host may suppress Leave Group messages on a network where
	the query is using IGMP v1.
	
	An IGMP v2 router may be placed on a subnet where at least one router on the
	subnet has not yet been upgraded to IGMP v2. The query must use IGMP v1. The use
	of IGMP v1 must be administratively configured.
	
	For additional information, check the "IGMPLevel" Windows NT registry parameter
	in the following article in the Microsoft Knowledge Base:
	
	  Q120642 TCP/IP and NBT Configuration Parameters for Windows 2000 or Windows
	  NT
	
	For additional information, also see the following RFCs:
	
	- RFC 1054 - Host Extensions for IP Multicasting
	
	- RFC 1112 - Internet Group Management Protocol, Version 2
	
	Additional query words: IGMP 2.0 4.0
	
	======================================================================
	Keywords          : kbnetwork kbFEA kbWinNT400sp4fea 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search
	Version           : :4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
