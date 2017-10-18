---
layout: page
title: "Q90927: WFWG Servers Cannot Act as a Gateway, Router, or Bridge"
permalink: kb/090/Q90927/
---

## Q90927: WFWG Servers Cannot Act as a Gateway, Router, or Bridge

	Article: Q90927
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows for Workgroups (WFWG) version 3.1 does not include the
	functionality to join network segments, regardless of topology or operating
	system.
	
	MORE INFORMATION
	================
	
	Windows for Workgroups includes the functionality to connect a Windows for
	Workgroups workstation to one or more separate network segments through separate
	network interface cards. It does not include the functionality to join these
	separate segments to each other.
	
	Example of Connecting to Two Different Topologies
	-------------------------------------------------
	
	A Windows for Workgroups machine cannot be used to join multiple network segments
	of different types. However, you can connect a single workstation to two
	different networks. For example, you can use one network card to connect a
	Windows for Workgroups workstation to a LAN Manager Ethernet network using the
	NetBEUI protocol and then use a second network card to connect to a Novell
	network using the MSIPX and NetBEUI protocols. This workstation can communicate
	with (and use and share resources on) both networks, but it cannot join the two
	networks together.
	
	This type of connection is sometimes referred to as internal bridging or routing.
	To connect networks of different topologies or operating systems, you must use
	the correct hardware device. For example, to connect an Ethernet network to a
	Token Ring network, you must use a device called a gateway (which supports this
	function).
	
	Example of Connecting to Two Different Segments
	-----------------------------------------------
	
	You cannot use a Windows for Workgroups machine to join multiple network segments
	of the same type. If, for example, a workstation has two network cards installed
	(both of the same type, such as Ethernet), you can connect 1 to 10 workstations
	on one segment (Segment 1) and 20 workstations on the other (Segment 2). The 10
	workstations on Segment 1 will be able to communicate with each other, as will
	the 20 workstations on Segment 2. The machine that is connected to both segments
	(through the two separate network cards) can communicate with all 30
	workstations, but it does not join the segments together in a way that enables
	them to share and use resources on the other segment.
	
	In other words, a Windows for Workgroups machine can connect to different
	segments of a network, but it cannot replace a hardware device designed to join
	network segments. To connect multiple network segments, a device that supports
	this function is required, such as a multiport repeater or Multistation Access
	Unit (MAU). The device is specific to the network topology and existing network.
	
	Additional query words: 3.1 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
