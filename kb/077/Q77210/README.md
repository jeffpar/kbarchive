---
layout: page
title: "Q77210: Loading MS-DOS High on Zenith SuperSport 286 with 1 MB RAM"
permalink: kb/077/Q77210/
---

## Q77210: Loading MS-DOS High on Zenith SuperSport 286 with 1 MB RAM

	Article: Q77210
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a Zenith SuperSport 80286 computer with 1 MB of memory, you may not
	be able to load MS-DOS 5.0 or later into the high memory area (HMA).
	
	CAUSE
	=====
	
	This is not a limitation of MS-DOS 5.0 or later, but an incompatibility with the
	hardware design of the Zenith SuperSport 80286.
	
	MORE INFORMATION
	================
	
	The Zenith SuperSport 80286 with 1 MB of memory is configured for 640K base,
	128K for video/ROM BIOS, and 256K reserved for expanded memory. With this
	hardware design, contiguous extended memory is not present for MS-DOS to load
	into the HMA.
	
	Expanded memory can be accessed through the expanded memory manager provided by
	Zenith Data Systems. This memory manager would be loaded in the CONFIG.SYS file
	as follows:
	
	  device=[drive:][path]emm.sys
	
	Without the use of this driver, expanded memory services are unavailable, and
	256K of memory will not be used. This memory cannot be reconfigured as extended
	memory.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
