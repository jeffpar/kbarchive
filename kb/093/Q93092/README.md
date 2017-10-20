---
layout: page
title: "Q93092: Novell NetWare, Windows for Workgroups and ArcNet Cards"
permalink: /kb/093/Q93092/
---

## Q93092: Novell NetWare, Windows for Workgroups and ArcNet Cards

{% raw %}

	Article: Q93092
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you choose the Novell NetWare option in the Networks dialog box of Control
	Panel and you are using an ArcNet network interface card (NIC), you receive the
	following error message:
	
	  The network Novell NetWare cannot be added because Windows for Workgroups
	  does not support this network with your ArcNet adapter.
	
	CAUSE
	=====
	
	Using an ArcNet NIC to connect to your Novell NetWare network from a Windows for
	Workgroups workstation is not supported in the current version of Windows for
	Workgroups. This is because Windows for Workgroups and Novell NetWare handle
	ArcNet data packets somewhat differently.
	
	MORE INFORMATION
	================
	
	Windows for Workgroups is implemented to fully support Novell NetWare
	connectivity. You can upgrade a Novell NetWare client workstation to a Windows
	for Workgroups workstation, or configure a Windows for Workgroups workstation to
	access a Novell NetWare server. Windows for Workgroups supports the Microsoft
	network transport protocol (NetBEUI) and the Novell network transport protocol
	(IPX) on the same network adapter card by including a Novell-compatible
	protocol, MSIPX.
	
	MSIPX supports Token Ring and Ethernet MAC* header formats, but not token-passing
	bus network header formats, such as ArcNet. When you use an ArcNet NIC with
	Windows for Workgroups, the ArcNet NDIS (MAC-level) driver emulates Ethernet
	protocol and uses Ethernet header formats. That is how Windows for Workgroups
	recognizes data packets sent along the ArcNet network.
	
	NOTE: *MAC is the Media Access Control layer, a sublayer of the data-link level
	in the OSI model. The MAC layer communicates directly with the network adapter
	card.
	
	Novell NetWare's IPX protocol handles ArcNet data packets by "fragmenting" them
	at the sending end, and then reconstructing them at the receiver end. NetWare
	does this because ArcNet protocol creates packets that are smaller than the
	minimum size that NetWare protocol supports.
	
	The problem occurs when you use an ArcNet card with Windows for Workgroups over a
	Novell NetWare network. The Novell network protocol expects to see a fragmented
	ArcNet data packet; however, since the ArcNet NDIS driver encapsulates data
	packets in an Ethernet-type header so that Windows for Workgroups can read them,
	the Novell NetWare network no longer recognizes them.
	
	Additional query words: 3.10 arcnet
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
