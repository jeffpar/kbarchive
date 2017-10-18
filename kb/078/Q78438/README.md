---
layout: page
title: "Q78438: Newer Epson Computers Use A20 Handler 1 with HIMEM.SYS"
permalink: kb/078/Q78438/
---

## Q78438: Newer Epson Computers Use A20 Handler 1 with HIMEM.SYS

	Article: Q78438
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
	
	According to Epson, older Epson computers require various different A20 handlers
	(machine switches) with the HIMEM.SYS device driver. More recent Epson computers
	use A20 handler number 1.
	
	MORE INFORMATION
	================
	
	The following computers use the HIMEM.SYS driver with an A20 handler (machine
	switch) of one (/M:1):
	
	- Epson Equity 286 Plus
	
	- Epson Equity 386SX Plus
	
	- Epson Equity 386SX/20 Plus
	
	- Epson Equity 386/25 Plus
	
	HIMEM.SYS is loaded through the CONFIG.SYS file as follows:
	
	  device=<drive>:\<dir>\himem.sys
	
	  -or-
	
	  device=<drive>:\<dir>\himem.sys /m:1
	
	where <drive> and <dir> are the drive and directory location of the
	HIMEM.SYS file (typically C:\DOS).
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
