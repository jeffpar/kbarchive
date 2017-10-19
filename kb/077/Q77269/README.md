---
layout: page
title: "Q77269: Setup May Give Disk Errors with Plus Passport Hard Drive"
permalink: /kb/077/Q77269/
---

## Q77269: Setup May Give Disk Errors with Plus Passport Hard Drive

	Article: Q77269
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
	
	If your system has a Plus Development Passport hard drive as the second physical
	hard drive, the MS-DOS 5.0 and later Setup program may stop responding (hang) or
	give disk errors when setup is 99 percent complete.
	
	WORKAROUND
	==========
	
	According to Plus technical support, to successfully install MS-DOS, you must
	remove the Passport driver (PLUSDRV.SYS) from CONFIG.SYS, reboot the system,
	then run the MS-DOS Setup program. This makes the Passport drive invisible to
	Setup. After Setup is complete, place PLUSDRV.SYS back in the CONFIG.SYS file.
	
	MORE INFORMATION
	================
	
	NOTE: Because the Passport hard drive is removable, it is usually the second
	hard drive.
	
	For more information, contact Plus Development.
	
	The Plus Development product included here are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 6.22 5.00 6.00 6.20 3rdparty hardware
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
