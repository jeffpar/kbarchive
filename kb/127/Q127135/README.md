---
layout: page
title: "Q127135: Setup Error 402 with Ositech PCMCIA Network Card"
permalink: /kb/127/Q127135/
---

## Q127135: Setup Error 402 with Ositech PCMCIA Network Card

	Article: Q127135
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you load version 1.04 of the driver for the Ositech Jack of Diamonds PCMCIA
	network and modem card, you receive the following error message:
	
	  Setup Error 402: An information (.INF) file is damaged.
	
	CAUSE
	=====
	
	The OEMSETUP.INF file that was shipped with this card contains incorrect
	information about real-mode and enhanced-mode driver types.
	
	RESOLUTION
	==========
	
	When you are setting up Windows to use this card, override the default value of
	"Real and Enhanced Mode NDIS Driver." Change the setting to "Real Mode NDIS
	Driver" in the Drivers portion of Network Setup.
	
	MORE INFORMATION
	================
	
	Ositech originally planned to ship a real-mode and enhanced-mode driver for this
	card, and shipped the correct OEMSETUP.INF file for this driver. The driver that
	comes with the card, however, is a real-mode driver only.
	
	This problem is corrected in version 2.1 of the drivers. To obtain the updated
	drivers, contact Ositech Technical Support.
	
	The third-party products discussed here are manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 3.11 ositek osi tech
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
