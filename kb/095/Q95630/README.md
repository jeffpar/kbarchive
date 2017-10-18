---
layout: page
title: "Q95630: Windows for Workgroups and NetBEUI Protocol"
permalink: kb/095/Q95630/
---

## Q95630: Windows for Workgroups and NetBEUI Protocol

	Article: Q95630
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	1.00 3.10 3.11
	
	WINDOWS
	
	kbnetwork
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Workgroup Connections, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows for Workgroups is a peer-to-peer networking operating system.
	Every network operating system must provide a way to organize the data that is
	to be sent and received over the network. The primary way Windows for Workgroups
	accomplishes this is through the NetBEUI protocol.
	
	NOTE: In addition to NetBEUI, Windows for Workgroups version 3.11 has a routable
	protocol that you can use with routers.
	
	MORE INFORMATION
	================
	
	Some protocols are aided by a transport. A transport handles the organization of
	application messages, leaving the protocol to handle only data. NetBEUI (NetBIOS
	Extended User Interface) is a protocol that manages the packaging of both data
	and application messages.
	
	NetBEUI and the Sliding Window Algorithm
	----------------------------------------
	
	NetBEUI, developed by IBM in 1985, is a windowing protocol. It uses an adaptive
	sliding window algorithm, enabling it to determine how to balance the load
	between sending and receiving data based on the size of the network.
	
	For example, when a workstation sends information over the network, an
	acknowledgment is sent back telling the workstation the data reached its
	destination. By utilizing adaptive windowing provided by NetBEUI, the
	workstation can send additional information before it receives an
	acknowledgment. With NetBEUI, it is possible to send more data overall and
	increase throughput. This must be done on a controlled level so no data is
	lost.
	
	NetBEUI and Data Loss
	---------------------
	
	NetBEUI controls data loss in two ways:
	
	- By limiting the amount of data a receiver can store before it sends an
	  acknowledgment. This is called the "receive window."
	
	- By limiting the amount of data that can be sent by the sending workstation
	  before it must send an acknowledgment. This is referred to as a "send
	  window."
	
	To increase network throughput, the send window is sized greater than or equal to
	the receive window. Having a larger send window increases the chance of losing
	data. The lost data causes the sender to resend the data and could potentially
	slow down the network. NetBEUI adjusts these parameters dynamically so that the
	network load is optimized for the size of the network.
	
	Reliable Connection-Oriented vs. Unreliable Connectionless-Oriented
	-------------------------------------------------------------------
	
	The sliding window algorithm provides increased performance for a type of network
	traffic called "reliable connection-oriented," or session meaning that data is
	sent to a specific address on the network and it must be acknowledged.
	
	The other kind of traffic, "unreliable connectionless-oriented" or datagram, does
	not require an acknowledgment. It is not sent to an individual address. A
	datagram is broadcast to either a group of workstations on the network
	(multicast address), or to everyone on the network that understands the data
	(broadcast address). The benefit of using a datagram is that it provides the
	ability to communicate with a workstation without knowing its exact address. It
	can be used as a precursor to the reliable connection-oriented method of
	exchanging data.
	
	NetBEUI and Routing
	-------------------
	
	NetBEUI is not a routable protocol. A routable protocol has the ability to
	communicate with servers on networks in different cities, or on different
	networks within the same city via routers or bridges. NetBEUI can be routable
	only if it is on a Token Ring network. It can accomplish this due to built-in
	Token Ring source routing. Not as sophisticated as conventional routing, Token
	Ring source routing does not include the ability to control the path that the
	data takes to other networks. NetBEUI is optimized for the local area network
	environment.
	
	NetBEUI in Microsoft LAN Manager and Windows for Workgroups
	-----------------------------------------------------------
	
	If you load NetBEUI services from MS-DOS in Windows for Workgroups, the
	functionality is the same as with LAN Manager.
	
	In each implementation of the NetBEUI protocol, the services are achieved through
	NetBIOS services provided to the presentation layer of the OSI model, they all
	provide windowing services to optimize throughput, and they all implement their
	session layer services via DLC CCB2 and CCB3 protocols. They are functionally
	equivalent.
	
	Loading NetBEUI at MS-DOS (before Windows)
	------------------------------------------
	
	NetBEUI is limited by static resources when loaded at the MS-DOS level. Two
	examples of resources are the number of network connections that can be made and
	the number of drives that can be shared. These network resources are controlled
	by the SESSIONS= entry in the PROTOCOL.INI file. If the line reads SESSIONS=6,
	no more than six connections can be established.
	
	Within windows, there are two settings which also must be pre- allocated. They
	are NETHEAPSIZE=, for both standard and enhanced mode, and NETDMASIZE= for
	enhanced mode only. These settings are in the SYSTEM.INI file. The NETHEAPSIZE=
	setting controls the buffers windows sets up in conventional memory for
	transferring data over the network. Increasing this value decreases available
	conventional memory in MS- DOS sessions. The NETDMASIZE= setting specifies the
	direct memory access buffer size for NetBIOS transport software.
	
	Loading NetBEUI from Windows
	----------------------------
	
	Loading NetBEUI from Windows is also referred to as loading the protected mode
	protocol. VNB.386 is the virtual device driver that is responsible for providing
	NetBEUI services in enhanced mode. VNB.386 allocates resources dynamically, so
	the static settings discussed above are ignored. This means that if you have six
	network connections, and you want a seventh it is possible even though your
	SESSIONS= entry is set to 6.
	
	One additional advantage is memory. VNB.386 starts with Windows, and, as a
	result, does not use conventional memory; it loads into protected mode. This
	means more memory at the MS-DOS command prompt in Windows.
	
	Additional query words: WC 1.00 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11; :1.0
	
	=============================================================================
	
