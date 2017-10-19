---
layout: page
title: "Q93019: No Drop Cables Allowed from Thin Ethernet T-Connector to NIC"
permalink: /kb/093/Q93019/
---

## Q93019: No Drop Cables Allowed from Thin Ethernet T-Connector to NIC

	Article: Q93019
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following configuration is not supported by 802.3 10BASE2 (Thin Ethernet)
	cable:
	
	   tT ----RG58/u (Main Cable)-------------Tt
	    |            |
	    |<---RG58/u (Drop Cable) |
	    |            |
	   NIC               NIC
	
	Key
	
	t = terminator
	T = T-connector
	NIC = network interface card
	
	The additional drop cable depicted in the above diagram should not be used. The
	T-connector should be connected directly to the network interface card.
	
	MORE INFORMATION
	================
	
	Because Thin Ethernet network interface cards are not impedance matched, some of
	the signal coming off the main cable reflects off the network interface card and
	back on to the main cable.
	
	If the distance is short (less than one to two inches), the echo lands right on
	top of the main signal and no distortion occurs.
	
	If the distance is long (more than one to two inches), the time taken for the
	signal to travel down the drop cable, bounce off the card, and come back, is
	significant and can make the echo land on top of the next pulse, which can
	result in scrambled signals.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
