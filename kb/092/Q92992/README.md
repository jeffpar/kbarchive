---
layout: page
title: "Q92992: Thomas Conrad 5043 May Not Emulate NE2000 Properly"
permalink: /kb/092/Q92992/
---

## Q92992: Thomas Conrad 5043 May Not Emulate NE2000 Properly

{% raw %}

	Article: Q92992
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Thomas Conrad TC5043 series of network adapters are built to be 100- percent
	compatible with the Novell NE1000 and NE2000 network interface cards.
	
	The NDIS driver provided with Windows for Workgroups (WFWG) does not function
	properly with revision A of this board when operating in NE2000 compatibility
	mode. Thomas Conrad now has ROM upgrade that works with one version of this
	board.
	
	As a temporary workaround for this problem, place the adapter in NE1000
	compatibility mode and then use the NE1000 NDIS driver from Windows for
	Workgroups.
	
	MORE INFORMATION
	================
	
	Thomas Conrad has confirmed this to be a problem with revision A of this series
	of network adapters. For additional information, contact Thomas Conrad technical
	support.
	
	You can determine the revision number of the TC5043 series adapters by examining
	the Serial number on the back edge of the network adapter. The revision letter
	is located at the end of the serial number.
	
	Updated ROM
	-----------
	
	Thomas Conrad has an updated ROM for the TC5043 that allows the board to operate
	as fully NE2000-compatible. The problem with revision A of this board resulted
	from 2 bytes of code that had to be corrected in their ROM.
	
	Contact Thomas Conrad technical support to obtain this ROM update.
	
	NOTE: There are two versions of the TC5043: one uses SMT (Surface Mount
	Technology) and one uses the standard DIP (Dual Inline Package) technology. The
	SMT boards CANNOT be upgraded, since the ROM is not a removable chip. The cards
	that can be upgraded have the ROM chip in a socket on the left side of the card,
	just above center. The ROM has a white sticker on it with a number. Thomas
	Conrad needs this number when you request your update.
	
	The TC5043 series of network adapters are manufactured by Thomas Conrad, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.10 novell nic
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
