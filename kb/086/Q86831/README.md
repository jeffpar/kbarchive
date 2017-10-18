---
layout: page
title: "Q86831: 32-Bit Disk Access and Western Digital 1003 Controller Cards"
permalink: kb/086/Q86831/
---

## Q86831: 32-Bit Disk Access and Western Digital 1003 Controller Cards

	Article: Q86831
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows version 3.1 32-Bit Disk Access feature actually performs
	16-bit input/output with the Western Digital 1003 hard drive controller card and
	compatibles.
	
	MORE INFORMATION
	================
	
	Microsoft Windows 3.1 ships with one Virtual Hard Disk Controller Device, which
	is WDCTRL. WDCTRL supports hard-drive controllers that are compatible with the
	Western Digital 1003 standard. This standard is a 16-bit standard.
	
	The 32-Bit Disk Access feature is a series of layered virtual device drivers. The
	higher-level virtual device drivers send their requests down to the virtual
	device driver, which actually talks to the hard disk controller, that is,
	WDCTRL. The communication between virtual device drivers is 32-bit data. The
	virtual device driver that communicates to the hard disk controller can use
	16-bit or 32-bit input/output.
	
	Currently WDCTRL is using 16-bit input/output because it was written specifically
	for the Western Digital 1003 16-bit standard. To achieve true 32-bit
	input/output, a hardware manufacturer would have to write a low-level virtual
	device driver that communicates to a specific hard drive controller that is
	32-bit. Currently Microsoft only provides the WDCTRL.
	
	Additional query words: fastdisk 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
