---
layout: page
title: "Q78720: PRINTQ Version 4.0 Requires STACKS Statement"
permalink: kb/078/Q78720/
---

## Q78720: PRINTQ Version 4.0 Requires STACKS Statement

	Article: Q78720
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
	
	Running MS-DOS 5.0 or later with Software Directions Incorporated's PRINTQ
	version 4.0 may produce the following error message:
	
	  Internal Stack Overflow
	
	To resolve this error, use the STACKS command in the CONFIG.SYS file.
	
	MORE INFORMATION
	================
	
	PrintQ is a terminate-and-stay-resident (TSR) print spooler that intercepts data
	being sent from applications to the parallel and serial ports.
	
	Software Directions Incorporated states that you should add the following line to
	the CONFIG.SYS file to resolve the above problem:
	
	  STACKS=0,0
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
