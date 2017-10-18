---
layout: page
title: "Q93166: Secure PC May Prevent HIMEM.SYS from Loading"
permalink: kb/093/Q93166/
---

## Q93166: Secure PC May Prevent HIMEM.SYS from Loading

	Article: Q93166
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
	
	If you try to load HIMEM.SYS onto a system that contains Secure PC by Hughes
	Data systems, HIMEM.SYS may be unable to load.
	
	MORE INFORMATION
	================
	
	Secure PC sets up a secure area on the hard disk drive that contains the files
	loaded during startup. To load HIMEM.SYS or any other system file in the
	CONFIG.SYS file, the configuration update program from Secure PC must be run in
	order to transfer HIMEM.SYS or the system files to the secure area so that it
	can load.
	
	To transfer HIMEM.SYS into the secure area, it is recommended that customers
	contact Hughes Data Systems.
	
	Secure PC is manufactured by Hughes Data Systems, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
