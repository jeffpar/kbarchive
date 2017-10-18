---
layout: page
title: "Q122162: SMC9000.DOS Doesn't Activate Megahertz PCMCIA Ethernet Card"
permalink: kb/122/Q122162/
---

## Q122162: SMC9000.DOS Doesn't Activate Megahertz PCMCIA Ethernet Card

	Article: Q122162
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you load the SMC9000.DOS driver version 1.03 (dated 3/23/94) supplied with
	the Megahertz PCMCIA Ethernet card, the driver appears to load successfully, but
	it does not activate the PCMCIA card. When the driver loads, the Link light on
	the card's transceiver turns off.
	
	CAUSE
	=====
	
	Microsoft has confirmed this to be a problem with the version 1.03 of the
	SMC9000.DOS driver dated 3/23/94.
	
	NOTE: The OEMSETUP.INF file, supplied with the Megahertz card, loads the
	incompatible SMC9000.DOS driver.
	
	RESOLUTION
	==========
	
	An updated release of SMC9000.DOS version 1.03 that corrects this problem is
	available. The file date is 11/24/93. This updated driver is located in the
	\MSLANMAN.DOSDRIVERS\ETHERNET\MEGAHRTZ subdirectory of the Megahertz driver
	distribution disk.
	
	IMPORTANT: Neither the 3/23/94 nor the 11/24/93 version of SMC9000.DOS version
	1.03 works correctly if you are using the Phoenix 3.0 card and socket services
	in place of the Cardsoft services supplied with the Megahertz card.
	
	MORE INFORMATION
	================
	
	The Megahertz PCMCIA Ethernet card is identical to the SMC 9000 card. Both use
	the SMC9000.DOS Network Device Interface Specification (NDIS) driver.
	
	The Megahertz PCMCIA Ethernet and SMC 9000 products included here are
	manufactured by vendors independent of Microsoft; we make no warranty, implied
	or otherwise, regarding these products' performance or reliability.
	
	Additional query words: 3rdparty 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
