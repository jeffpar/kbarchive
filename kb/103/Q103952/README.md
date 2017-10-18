---
layout: page
title: "Q103952: Basic Network Architecture Terms"
permalink: kb/103/Q103952/
---

## Q103952: Basic Network Architecture Terms

	Article: Q103952
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-FEB-2002
	
	SUMMARY
	=======
	
	LOCAL AREA NETWORK
	------------------
	
	A local area network (LAN) provides peer-to-peer communication among independent
	devices located within a moderately sized geographical area.
	
	DEVICES
	-------
	
	The computer devices attached to the local area network and intended for running
	application programs are called stations, hosts, or end systems. Examples are
	LAN Manager workstations and servers.
	
	PHYSICAL MEDIUM
	---------------
	
	The cable system used to carry data from station to station is called the
	physical medium. Examples are twisted wire pair, coaxial, and fiber optic
	cable.
	
	INTERMEDIATE SYSTEMS
	--------------------
	
	Intermediate systems equipment passes information between physical medium
	segments. Examples include repeaters, bridges, routers and brouters.
	
	NODE
	----
	
	A network connected byte-level information processor. Stations, bridges, routers
	and brouters are nodes, but repeaters are not.
	
	FUNCTIONS
	---------
	
	Functions are specific network tasks such as:
	
	- Remote file access
	
	- Password encryption and decryption
	
	- Inter-process session establishment
	
	- Message segmentation and de-segmentation
	
	- Frame routing to off-segment networks
	
	- Frame delimiting and media access arbitration
	
	- Pulse encoding of bits
	
	To reduce network design complexity, functions are organized into groups, which
	are then allocated to a series of layers implemented in software that runs on
	the network nodes.
	
	LAYER SERVICES
	--------------
	
	The purpose of each network layer is to offer specific services to the higher
	layers and to shield them from the details of how services are implemented. The
	services provided by a given layer are a product of the network functions
	allocated to and performed by that layer.
	
	LAYER RELATIONSHIPS
	-------------------
	
	Peer Relationship--Protocols:
	
	The rules and conventions that allow layer N on one node to carry on a
	conversation with layer N on another node are collectively known as the layer N
	protocol.
	
	Vertical Relationship--Interfaces:
	
	Except at the lowest level (the physical medium) no data moves directly from
	layer N on one node to layer N on another node. Instead, each layer passes data
	to the layer below it, until the physical medium is reached. The data is then
	transmitted to the destination node and back up through each higher layer to
	layer N. Control information attached to the data is used to navigate the path
	through the layers.
	
	Between each pair of adjacent layers there is a well defined interface that
	defines which services the lower layer offers to the upper one, and how those
	services are accessed.
	
	For example, peer processes in layer 4 communicate "horizontally" using the layer
	4 protocol. Each side is likely to have the procedures SendToOtherSide and
	GetFromOtherSide, even though these procedures actually communicate with lower
	layers across the 3 - 4 interface, not directly with the other side.
	
	NETWORK ARCHITECTURE
	--------------------
	
	A network's complete set of layers, allocated functions, peer protocols, and
	vertical interfaces constitutes its architecture.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Issue type        : kbinfo
	
	=============================================================================
	
