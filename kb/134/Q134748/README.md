---
layout: page
title: "Q134748: Using NDIS 2 PCMCIA Network Card Drivers in Windows 95"
permalink: kb/134/Q134748/
---

## Q134748: Using NDIS 2 PCMCIA Network Card Drivers in Windows 95

	Article: Q134748
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how NDIS 2 PCMCIA drivers must load and bind in real mode
	to work in Windows 95.
	
	MORE INFORMATION
	================
	
	Microsoft does not include NDIS 2 or ODI drivers for PCMCIA cards in Windows 95.
	You must obtain the correct real-mode or NDIS 2 drivers from the card's
	manufacturer.
	
	Windows 95 support for NDIS 2 protocols is the same as in Windows for Workgroups
	3.11. An NDIS 2 protocol driver must use an NDIS 2 network adapter driver.
	
	Both the protocol drivers and the network adapter drivers must load and bind in
	real mode before Windows 95 starts. As with protected-mode network components,
	real-mode network components in Windows 95 use the registry for configuration
	and binding information. Earlier versions of Microsoft real-mode network
	components, such as those included with Windows for Workgroups, use the
	Protocol.ini file for configuration and binding information.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
