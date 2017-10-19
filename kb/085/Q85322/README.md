---
layout: page
title: "Q85322: Genius 1000 Requires Updated ROM and G2BIOS.SYS 1.5 or Later"
permalink: /kb/085/Q85322/
---

## Q85322: Genius 1000 Requires Updated ROM and G2BIOS.SYS 1.5 or Later

	Article: Q85322
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you install Microsoft Windows version 3.1 on a computer with a Genius 1000
	monitor, you must have version 2.2 or greater of the Tiga video ROM and Ran-Ger
	driver version 1.5 or later to work with a permanent swap file.
	
	You may receive the following error message if you do not have the updated
	drivers:
	
	  Your CONFIG.SYS file contains a device driver that is incompatible with swap
	  file.
	
	MORE INFORMATION
	================
	
	To work with Windows, the Genius 1000 monitor requires the G2BIOS.SYS driver
	version 1.5 or later to create a permanent swap file, along with Tiga ROM
	version 2.2. Windows is still able to create a temporary swap file with versions
	1.4 and later of the Ran-Ger driver, but needs at least version 2.0 or later of
	the Tiga ROM.
	
	To obtain the current G2BIOS.SYS driver, contact Ran-Ger technical support.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 Micro RanGer err msg 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
