---
layout: page
title: "Q186607: Understanding the Remote Desktop Protocol (RDP)"
permalink: /kb/186/Q186607/
---

## Q186607: Understanding the Remote Desktop Protocol (RDP)

	Article: Q186607
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the Remote Desktop Protocol (RDP) used for communication
	between the Terminal Server and the Terminal Server Client. RDP is encapsulated
	and encrypted within TCP.
	
	MORE INFORMATION
	================
	
	Understanding the Remote Desktop Protocol (RDP)
	-----------------------------------------------
	
	Remote Desktop Protocol is based on, and is an extension of, the T-120 family of
	protocol standards. A multichannel capable protocol allows for separate virtual
	channels for carrying presentation data, serial device communication, licensing
	information, highly encrypted data (keyboard, mouse activity), and so on. As RDP
	is an extension of the core T.Share protocol, several other capabilities are
	retained as part of the RDP, such as the architectural features necessary to
	support multipoint (multiparty sessions). Multipoint data delivery allows data
	from an application to be delivered in "real-time" to multiple parties without
	having to send the same data to each session individually (for example, Virtual
	Whiteboards).
	
	In this first release of Windows Terminal Server, however, we are concentrating
	on providing reliable and fast point-to-point (single- session) communications.
	Only one data channel will be used in the initial release of Terminal Server 4.0
	However, the flexibility of RDP gives plenty of room for functionality in future
	products.
	
	One reason that Microsoft decided to implement RDP for connectivity purposes
	within Windows NT Terminal Server is that it provides a very extensible base
	from which to build many more capabilities. This is because RDP provides 64,000
	separate channels for data transmission. However, current transmission
	activities are only using a single channel (for keyboard, mouse, and
	presentation data).
	
	Also, RDP is designed to support many different types of Network topologies (such
	as ISDN, POTS, and many LAN protocols such as IPX, NetBIOS, TCP/IP, and so on).
	The current version of RDP will only run over TCP/IP but, with customer
	feedback, other protocol support may be added in future versions.
	
	The activity involved in sending and receiving data through the RDP stack is
	essentially the same as the seven-layer OSI model standards for common LAN
	networking today. Data from an application or service to be transmitted is
	passed down through the protocol stacks, sectioned, directed to a channel
	(through MCS), encrypted, wrapped, framed, packaged onto the network protocol,
	and finally addressed and sent over the wire to the client. The returned data
	works the same way only in reverse, with the packet being stripped of its
	address, then unwrapped, decrypted, and so on until the data is presented to the
	application for use. Key portions of the protocol stack modifications occur
	between the fourth and seventh layers, where the data is encrypted, wrapped and
	framed, directed to a channel and prioritized.
	
	One of the key points for application developers is that, in using RDP, Microsoft
	has abstracted away the complexities of dealing with the protocol stack. This
	allows them to simply write clean, well-designed, well-behaved 32-bit
	applications, and then the RDP stack implemented by the Terminal Server and its
	client connections takes care of the rest.
	
	For more information on how applications interact on the Terminal Server and what
	to be aware of when developing applications for a Windows Terminal Server
	infrastructure, look at the "Optimizing Applications for Windows NT Server 4.0,
	Terminal Server Edition" white paper available on the following Microsoft Web
	site:
	
	  http://www.microsoft.com/ntserver/ProductInfo/default.asp
	
	Four components worth discussing within the RDP stack instance are the Multipoint
	Communication Service (MCSMUX), the Generic Conference Control (GCC),
	Wdtshare.sys, and Tdtcp.sys. MCSmux and GCC are part of the International
	Telecommunication Union (ITU) T.120 family. The MCS is made up of two standards:
	T.122, which defines the multipoint services, and T.125, which specifies the
	data transmission protocol. MCSMux controls channel assignment (by multiplexing
	data onto predefined virtual channels within the protocol), priority levels, and
	segmentation of data being sent. It essentially abstracts the multiple RDP
	stacks into a single entity, from the perspective of the GCC. GCC is responsible
	for management of those multiple channels. The GCC allows the creation and
	deletion of session connections and controls resources provided by MCS. Each
	Terminal Server protocol (currently, only RDP and Citrix's ICA are supported)
	will have a protocol stack instance loaded (a listener stack awaiting a
	connection request). The Terminal Server device driver coordinates and manages
	the RDP protocol activity and is made up of smaller components, an RDP driver
	(Wdtshare.sys) for UI transfer, compression, encryption, framing, and so on, and
	a transport driver (Tdtcp.sys) to package the protocol onto the underlying
	network protocol, TCP/IP.
	
	RDP was developed to be entirely independent of its underlying transport stack,
	in this case TCP/IP. RDP, being completely independent of its transport stack,
	means that we can add other transport drivers for other network protocols as
	customers needs for them grow, with little or no significant changes to the
	foundational parts of the protocol. These are key elements to the performance
	and extendibility of RDP on the network.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
