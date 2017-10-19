---
layout: page
title: "Q95883: DEC Network Interface Card Naming Conventions"
permalink: /kb/095/Q95883/
---

## Q95883: DEC Network Interface Card Naming Conventions

	Article: Q95883
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the naming conventions for network interface cards (NICs)
	manufactured by Digital Equipment Corporation (DEC). These conventions are used
	to identify various information about the network cards, including the class,
	architecture, and connections of the card.
	
	MORE INFORMATION
	================
	
	DEC NICs are stamped with a product number on the bracket. (For example, the DEC
	Etherworks Turbo/TP has the product number DE201.) This number is visible from
	the back of the computer. The meaning of the different name and number mappings
	are as follows:
	
	  DE10x - Etherworks LC
	  DE20x - Etherworks Turbo
	  DE21x - Etherworks MC
	
	NOTE: "DE" indicates a DEC Etherworks card.
	
	The number in the first position (1, 2, or 4) indicates the class of the network
	card. The classes are as follows:
	
	  1 - Standard
	  2 - Turbo
	  4 - EISA
	
	The number in the middle position (0, 1, or 2) indicates the bus architecture as
	follows:
	
	  0 - ISA
	  1 - Microchannel
	  2 - EISA
	
	The number in the last position ("x") indicates the type of connectors on the
	card and the card name as follows:
	
	  0 - AUI and BNC
	  1 - AUI and TP
	  2 - BNC and TP
	
	Originally, DEC manufactured a card with the name "DEPCA." This card was an 8-bit
	net/mouse full-length card. It had a connector for the mouse and a BNC connector
	only for the network connection on the card.
	
	Since this card was produced, all network cards subsequently produced by DEC have
	been supersets of this original DEPCA card. These cards all use the same NDIS
	driver (DEPCA.DOS) and therefore have been erroneously called "DEPCA" cards. All
	DEC cards excluding the original DEPCA card has been given a product name and a
	product number as described above.
	
	
	For additional information, contact Digital Equipment Corporation Technical
	Support at (800) 332-8000.
	
	The products included here are manufactured by Digital Equipment Corporation, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: 3.10 3rdparty interface depka de2o de1o thinnet twisted pair
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
