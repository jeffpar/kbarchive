---
layout: page
title: "Q82415: Banyan VINES Overwrites CMOS Settings"
permalink: kb/082/Q82415/
---

## Q82415: Banyan VINES Overwrites CMOS Settings

	Article: Q82415
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): MS-DOS:6.0,6.2,6.21; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If there is not enough free upper memory block (UMB) space for Banyan VINES
	network software, it may overwrite the current CMOS settings. To work around
	this problem, free up additional UMB space.
	
	MORE INFORMATION
	================
	
	For example, if SMARTDrive (SMARTDRV.EXE) is loaded in upper memory, there may
	not be enough UMB space for Banyan VINES. To work around this problem and avoid
	Banyan VINES overwriting the CMOS settings, free up additional UMB space or load
	Banyan VINES in conventional memory and use MS-DOS MemMaker to optimize the UMB
	space.
	
	For additional information, contact Banyan VINES.
	
	Banyan VINES is manufactured by Banyan Systems, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 6.00 6.20 loadhigh load high lh uma area dos winfest
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311 kbMSDOSSearch kbMSDOS621 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21; WINDOWS:3.1,3.11
	
	=============================================================================
	
