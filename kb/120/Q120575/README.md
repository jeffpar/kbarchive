---
layout: page
title: "Q120575: IBM Token Ring Adapter Problems with Base I/O Address"
permalink: /kb/120/Q120575/
---

## Q120575: IBM Token Ring Adapter Problems with Base I/O Address

	Article: Q120575
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.1,3.5,3.51,4.0; :
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1,3.5,3.51,4.0 
	- Microsoft Windows NT Workstation version 3.1,3.5,3.51,4.0 
	- Microsoft Windows NT Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing two IBM Token Ring network cards, the following event message
	appears in Event Viewer:
	
	  Event ID: 5012, Source: IbmTok01, Type: Error
	  Description: The I/O base address supplied does not match jumpers on adapter.
	
	CAUSE
	=====
	
	The IBM Token Ring network adapter driver, IBMTOK.SYS, is looking for specific
	Primary and Secondary Base I/O addresses which must match the switches set on
	the adapter (Switch 9).
	
	RESOLUTION
	==========
	
	Configure the Base I/O ROM addresses and corresponding switches listed below on
	the adapter for the following switch 9 positions:
	
	  Switch 9           Base I/O Address   Base I/O Switches
	  (Position)         (Size = 8K)
	  -------------------------------------------------------
	  Primary            CC00               1, 4, 5 - up
	  (Switch 9 = up)                       2, 3, 6 - down
	  Secondary          DC00               1, 3, 4, 5 - up
	  (Switch 9 = down)                     2, 6 - down
	
	NOTE: Although the adapter supports other base I/O addresses, the IBM Token Ring
	driver supplied with Windows NT only supports the addresses of CC00 and DC00. If
	either of these addresses conflict with other installed base I/O addresses,
	reconfigure other adapters in order to accommodate the required I/O base
	addresses of the IBM Token Ring driver. This adapter reserves two separate
	address ranges - One for base I/O and one for Shared RAM. Make sure that these
	two address ranges do not overlap by using the WinMSD utility.
	
	MORE INFORMATION
	================
	
	Dip-switch settings for the IBM Token Ring adapter are:
	
	  Switches 1-6     Base I/O ROM Address
	  Switches 7,8     Interrupt Level (valid interrupts are 2, 3, 6, 7)
	                   For IRQ 2 Jumper, these switches are down.
	  Switches 9       Primary / Secondary adapter
	  Switches 10,11   Shared RAM Size 8K , 16K, 32K, 64K
	                   For 8K shared memory, 10 and 11 are down;
	                   for 16K shared memory, 10 is up and 11 is down.
	                   Shared RAM size addresses are reserved as follows:
	                   - Primary adapter (Switch 9 = up) starts at D0000.
	                   - Secondary adapter (Switch 9 = down) starts at E0000.
	                   Listed below is a Length and Size equivalency chart:
	
	                   Length        Size
	                   ------------------
	                   0x2000         8K
	                   0x4000        16K
	                   0x8000        32K
	                   0x10000       64K
	
	  Switches 12      4Mbs / 16Mbs network
	                   For 4 MB, Jumper 12 is down.
	
	The IBM products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTSsearch kbWinNTAdvSerSearch
	Version           : winnt:3.1,3.5,3.51,4.0; :
	
	=============================================================================
	
