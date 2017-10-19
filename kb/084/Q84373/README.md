---
layout: page
title: "Q84373: Wang PC with BIOS 1.14 Requires /M:2 Switch in DEVICE="
permalink: /kb/084/Q84373/
---

## Q84373: Wang PC with BIOS 1.14 Requires /M:2 Switch in DEVICE=

	Article: Q84373
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): MS-DOS:5.0,5.0a; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to Wang technical support, if you use the Microsoft Windows 3.1 or the
	MS-DOS version 5.0 HIMEM.SYS file with a Wang 350/33C or 380/33c computer that
	has a BIOS version of 1.14, you must add the machine switch 2 (/m:2) to the
	HIMEM.SYS command line in your CONFIG.SYS file. For example:
	
	  device=c:\windows\himem.sys /m:2
	
	MORE INFORMATION
	================
	
	The Wang products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311 kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a; WINDOWS:3.1,3.11
	
	=============================================================================
	
