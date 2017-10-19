---
layout: page
title: "Q122164: WFWG Doesn't Run with Novell/Eagle NE200 PCMCIA Ethernet Card"
permalink: /kb/122/Q122164/
---

## Q122164: WFWG Doesn't Run with Novell/Eagle NE200 PCMCIA Ethernet Card

	Article: Q122164
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Eagle technical support reports that Windows for Workgroups does not work when
	you use either the Windows for Workgroups drivers supplied with the Novell/Eagle
	NE200 PCMCIA Ethernet cards or the drivers Eagle distributes on its bulletin
	board service (BBS). The Novell/Eagle EP2000 Plus also doesn't work with NDIS
	drivers.
	
	CAUSE
	=====
	
	Driver Disks Supplied with NE200 Card
	-------------------------------------
	
	At least some of the driver disks that Eagle distributes with the NE200 PCMCIA
	card incorrectly supply an OEMSETUP.INF file for the Eagle NE3210 card, which
	uses entirely different drivers and settings than the NE200.
	
	Drivers Supplied on Eagle BBS
	-----------------------------
	
	Even though the disk that Eagle distributes on its BBS includes an improved
	OEMSETUP.INF file, the supplied NDIS driver still does not load successfully
	under Windows for Workgroups.
	
	STATUS
	======
	
	Eagle is aware of these problems and is working on solutions. You can contact
	Eagle Technical Services at (800) 726-5267.
	
	MORE INFORMATION
	================
	
	The products included here are manufactured by Eagle, vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
