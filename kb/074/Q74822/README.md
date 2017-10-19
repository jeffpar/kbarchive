---
layout: page
title: "Q74822: Sperry AT Doesn't Format High-Density Disks"
permalink: /kb/074/Q74822/
---

## Q74822: Sperry AT Doesn't Format High-Density Disks

	Article: Q74822
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install MS-DOS on a Sperry AT, your machine may be unable to format
	high-density (1.2-megabyte) disks. The disks may appear to format correctly, but
	they do not write correctly (you receive "Sector not found" errors if you try to
	use them).
	
	WORKAROUND
	==========
	
	Ensure the CMOS is set correctly, and possibly try using DRIVPARM or DRIVER.SYS,
	but if your ROM BIOS is earlier than 1.58, you need to upgrade your BIOS.
	
	To get the latest ROM versions, contact Unisys at (800) 448-1424 and select
	option 4. Unisys will ask you for the BIOS "feature" appropriate to the specific
	machine.
	
	
	Look on the back of the machine by the serial number for a TYPE CODE. The
	following applies, providing you have version 1.58 (the latest) AT ROM BIOS:
	
	  If the code is            The BIOS "style" is
	  --------------            -------------------
	
	  PC-IT type 3126-00        F4964-00
	  Micro-IT type 3137-00     A5222-00
	
	MORE INFORMATION
	================
	
	The Sperry product included here is manufactured by Unisys, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 3rdparty phoneref testwin4
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	
