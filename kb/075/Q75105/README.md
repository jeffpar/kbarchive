---
layout: page
title: "Q75105: Award BIOS Earlier than 3.1 Not Compatible with MS-DOS"
permalink: kb/075/Q75105/
---

## Q75105: Award BIOS Earlier than 3.1 Not Compatible with MS-DOS

	Article: Q75105
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Award Software specifically states that versions of the Award BIOS earlier than
	version 3.1 should not be considered compatible with MS-DOS versions 5.0 and
	later. Customers with versions 3.05 or earlier should contact Award Software to
	purchase version 3.1 or later (3.2 and 4.2 are in the process of being
	released).
	
	For 286, 386sx, 386, and 486 processors, releases of the Award BIOS version 3.1
	are available that include optional code capabilities, chip set support, and a
	new enhanced setup menu.
	
	MORE INFORMATION
	================
	
	New features (beginning with 3.1) include the following:
	
	- EMS in ROM: Provides an LIM EMS 4.0 expanded memory emulation in the same ROM
	  as the BIOS (available for all 386sx, 386, and 486 machines).
	
	- User definable drive tables: In addition to 47 preset drive types in CMOS
	  setup, two additional selections (#48, #49) can be programmed by the user to
	  add hard drives not supported by the preset table (allows for specification
	  of number of cylinders, number of heads, number of sectors per track, write
	  precomp, and landing zone).
	
	- CMOS-based password: A password scheme is now available that can selected
	  through the CMOS setup. The password can be established for the entire system
	  of the CMOS setup only.
	
	- Wider chip set support: In addition to the standard BIOS to support many
	  discrete component designs, Award's new release offers support for integrated
	  chip sets including those from Intel, Headland, VLSI, Chips and Technologies,
	  Faraday/Western Digital, Suntac, ZyMOS, Trident, OPTi, and others.
	
	- Extensive POST: Version 3.1 includes POST capabilities for new features, such
	  as the internal cache controller detect and initialization for 486 systems.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
