---
layout: page
title: "Q78573: The Second Parameter of the BUFFERS Command"
permalink: /kb/078/Q78573/
---

## Q78573: The Second Parameter of the BUFFERS Command

	Article: Q78573
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The second parameter on the BUFFERS line represents the secondary cache. It
	basically performs a pre-read of sectors, and therefore provides better disk
	performance. This functionality was introduced in MS-DOS 4.0, and it works the
	same way in later versions of MS-DOS.
	
	MORE INFORMATION
	================
	
	When an application starts reading from disk, it is likely that the application
	will continue reading more sectors from the same area. If MS-DOS pre-reads
	beyond the read issued into the buffers, when the user asks for them, they are
	already in the buffers. This improves disk performance considerably, especially
	during file loads.
	
	The syntax for the BUFFERS command is:
	
	  buffers=n[,m]
	
	The "m" can have a value between 1 and 8.
	
	If a second value ("m") is specified, it activates the operation of the secondary
	cache, and "m" sectors are pre-read. If the second parameter is not specified,
	the secondary cache is not activated.
	
	If you specify to buffers values, extra buffers are then allocated during MS-DOS
	initialization for the secondary cache. As a result, MS-DOS takes up more memory
	since the secondary cache is present.
	
	NOTE: Under MS-DOS 5.0 and later, the secondary cache is not loaded into the high
	memory area (HMA) even if MS-DOS is loaded high; the secondary cache is always
	allocated in conventional memory.
	
	Additional query words: 6.22 4.00 4.00a 4.01 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
