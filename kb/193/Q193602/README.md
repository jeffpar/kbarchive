---
layout: page
title: "Q193602: Configuration Options for WLBS Hosts Connected to Layer 2 Switch"
permalink: /kb/193/Q193602/
---

## Q193602: Configuration Options for WLBS Hosts Connected to Layer 2 Switch

	Article: Q193602
	Product(s): Microsoft Windows NT
	Version(s): 1.0,2000,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Load Balancing Service 1.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The purpose of this article is to describe how to interconnect two or more
	Windows NT Load Balancing Service (WLBS) servers in a switched environment. For
	Windows Load Balancing Service (WLBS) to work properly, every packet directed to
	the virtual IP (VIP) address must reach all WLBS hosts. The WLBS host then
	decides which packets to accept.
	
	MORE INFORMATION
	================
	
	When the cluster network adapter of each WLBS host is connected to a port on a
	Layer 2 switch (the same switch) instead of a hub, the switch tries to learn the
	media access control (MAC) address of the computer connected to each of its
	ports so it can associate a port to a MAC address. Ethernet switches send frames
	to a MAC address using the port associated with the MAC address.
	
	If a switch associates the cluster's MAC addresses to one of its ports, WLBS is
	unable to correctly load-balance traffic. There are multiple ways you can
	configure WLBS to prevent a switch from associating the cluster's MAC address:
	
	Unicast
	-------
	
	NOTE: For optimal results, the default gateway should be configured as follows;
	the default gateway address should be set on the dedicated network adapter. Do
	not set the gateway address for the WLBS Virtual adapter in the TCP/IP
	configuration dialog.
	
	This will result in requests to the cluster flowing through the cluster network
	adapter, and the appropriate host will reply through its dedicated network
	adapter (because this network adapter has the gateway information associated
	with it), which connects to a dedicated switch port with either of the Unicast
	configurations.
	
	Masking the WLBS Cluster MAC Address:
	
	When you use unicast, keep the MaskSourceMAC registry value set to its default
	value of 1. This forces the cluster to use a "dummy" MAC address when sending
	packets through the switch. The switch maps the dummy MAC address to a port, but
	sends traffic to the real cluster MAC address to all ports in the switch. If a
	switch does not have a MAC address associated to a port, it sends the frames to
	all ports. This is port "flooding" and can only be contained with a VLAN. This
	configuration has the highest bandwidth, and completely eliminates collisions.
	
	The MaskSourceMAC is located in the following folder:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WLBS\Parameters
	
	Using a Hub:
	
	Reconfigure MaskSourceMAC = 0 on all WLBS nodes. Connect all of the cluster
	network adapters to a hub, which is in turn uplinked to a switch port. Connect
	the dedicated network adapter to a free switch port. This configuration permits
	the switch to learn the WLBS cluster MAC address, eliminating port flooding
	without the requirement to use a VLAN. This configuration has a bandwidth
	limitation on the hub, however this approach automatically improves the
	pipelining of traffic, and minimizes collisions.
	
	Multicast
	---------
	
	NOTE: When the local router needs to send a packet to the VIP, the local router
	uses address resolution protocol (ARP) to determine the VIP's MAC address. WLBS
	replies to these ARP requests. When you mask the source MAC address, the ARP
	response from WLBS has a dummy source MAC address in the Ethernet frame, but
	contains the correct cluster MAC address in the ARP header. Some routers cannot
	make this ARP mapping and require a static ARP entry to be made in the router.
	For additional information about static ARP requirements, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q197862 WLBS Cluster Is Unreachable from Outside
	
	The cluster uses a multicast MAC address mapped to a unicast IP address. The
	switch does not associate the multicast MAC addresses to a port, so the switch
	sends frames to this MAC address on all ports. IP Multicast pruning
	implementations cannot limit the port flooding and a VLAN would have to be used.
	Notice that multicast provides no advantage over unicast from the switches
	perspective, and the increased multicast processing overhead for routers and
	switches may lead to degraded or slower performance. You should carefully
	analyze the network impact when multicast is used, to avoid congesting other
	network devices.
	
	
	Additional query words: convoy nlb
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTLBS100 kbWinNTLBSSearch kbwin2000ServSearch kbwin2000Search kbWinAdvServSearch kbWinDataServSearch
	Version           : :1.0,2000,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
