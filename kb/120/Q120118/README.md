---
layout: page
title: "Q120118: WinLAN Network Overview"
permalink: kb/120/Q120118/
---

## Q120118: WinLAN Network Overview

	Article: Q120118
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11; :3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Workgroup Add-On for MS-DOS, version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	WinLAN is a proprietary network using proprietary network adapters. Apexx
	Technology packages Windows for Workgroups version 3.11 in a bundle with these
	network cards.
	
	This article provides information about the hardware and configuration options
	available with the WinLAN bundles.
	
	
	MORE INFORMATION
	================
	
	Network Software
	----------------
	
	The WinLAN network cards are designed to work with both Windows for Workgroups
	and Workgroup Add-On for MS-DOS.
	
	Cabling
	-------
	
	The network uses 802.3 packets and RJ-11 phone cable or twisted-pair cable
	(RJ-45) if an RJ-11 end is installed. The network works with or without a hub.
	The cards can be daisy-chained together. Apexx does sell a hub, which allows you
	to connect daisy-chains of up to eight computers per hub connection.
	
	NOTE: You cannot use a 10baseT (twisted-pair) hub.
	
	Each NIC has two RJ-11 ports similar to a modem. It does not matter which plug is
	used for "in" or which is used for "out." The cable plugs into one computer and
	then daisy-chains to the next computer. Each computer on the end of a chain
	should have a terminator plug (an RJ-11 plug with an 120-ohm terminating
	resistor).
	
	The network transmits at 1 MPS. It has a total cable length specification of 600
	feet.
	
	Since WinLAN network cards do not classify as Ethernet, ArcNet, or token ring, a
	bridge must be used to communicate with a network using one of these
	topologies.
	
	WinLAN Instant Networking Kit Contents
	--------------------------------------
	
	  1 WinLAN Adapter
	  1 Microsoft Windows for Workgroups Add-On version 3.11
	  1 WinLAN driver disk
	  1 WinLAN documentation
	  1 25 feet RJ-11 phone cable
	  1 terminator plugged in the card
	
	The products included here are manufactured by Appex Technology, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311 kbWFW311DOS
	Version           : WINDOWS:3.11; :3.11
	
	=============================================================================
	
