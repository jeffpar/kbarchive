---
layout: page
title: "Q130963: Summary of Network Intermediate Systems"
permalink: /kb/130/Q130963/
---

## Q130963: Summary of Network Intermediate Systems

{% raw %}

	Article: Q130963
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-FEB-2002
	
	kbnetwork
	---------
	
	Intermediate Systems; Repeaters, Bridges, Routers, and Gateways, are
	networking devices that facilitate the transmission of packets between the
	source computer and the final destination computer. Although the gateway
	involves all seven levels of the OSI model, these devices are generally
	thought of as functioning at the lowest three levels; Physical, Data Link,
	and Network.
	
	MORE INFORMATION
	================
	
	Repeaters strengthen the physical transmission signal. In analog electronic
	networks, such as Ethernet and Token Ring, the signal is also improved or
	cleaned up by regenerating the square wave that has degenerated as it traveled
	down the wire.
	
	Bridges connect multiple subnets, networks, or rings into one large logical
	network. A bridge maintains a table of node addresses and based on this,
	forwards packets to a specific subnet, reducing traffic on other subnets. In a
	bridged network, there can be only one path to any destination. Otherwise
	packets would circle the network causing network storms.
	
	Routers are more intelligent and use the network address in the frame to decide
	how to best send a packet to its final destination. Some protocol suites provide
	a dynamic client protocol that routers send between themselves to exchange
	information regarding their status and optimal paths between nodes. IPX and its
	client protocol, RIP (Routing Information Protocol) is an example of this.
	
	Gateways are the most intelligent of the intermediate systems. They allow network
	nodes using different protocols to communicate with each other. The gateway
	understands both protocols and receives and disassembles a packet of one
	protocol and then reassembles and transmits it using other protocol.
	
	Definitions
	-----------
	
	Gateway: (All OSI layers)
	
	  Translator. Allows communication between two dissimilar protocols (eg: IPX
	  and NetBEUI) or physical networks (eg: Ethernet and Token Ring).
	
	NOTE: In TCP/IP terminology, a gateway = router.
	
	Router: (Network Layer.)
	
	  Uses the Network address. Protocol independent. Can change between topologies
	  even in the frame size changes between the segments or networks. Breaks-up
	  the network into separate physical segments, filtering out traffic and
	  increasing each segments bandwidth or capacity.
	
	Bridge: (Data Link level.)
	
	  Frame-level, Understands the network adapter address in the packet. Protocol
	  independent. Can change between topologies if the frame size between the
	  networks is the same.
	
	Brouter: A combination device.
	
	  A Bridge with some of the features of a Router.
	
	Repeater: (Physical level)
	
	  Bit-level. Topology and Protocol independent. Strengthens and/or cleans-up
	  the transmission signal.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
