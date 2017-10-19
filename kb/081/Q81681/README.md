---
layout: page
title: "Q81681: Windows 3.1 32-Bit Disk Access Not Compatible with DISCTEC"
permalink: /kb/081/Q81681/
---

## Q81681: Windows 3.1 32-Bit Disk Access Not Compatible with DISCTEC

	Article: Q81681
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Informal testing of Microsoft Windows 3.1 and 3.11 has found 32-Bit Disk Access
	to be incompatible with the DISCTEC removable storage drive.
	
	MORE INFORMATION
	================
	
	DISCTEC makes a removable hard-disk drive based on the IDE drive interface.
	These drives appear to be Western Digital compatible drives; however, because
	the drive is removable, a device driver is required to monitor for media changes
	and report to MS-DOS when new media is inserted. This system is not compatible
	with 32-Bit Disk Access.
	
	DISCTEC installs a DEVICE= line in the CONFIG.SYS file similar to the following:
	
	     DEVICE=DISCTEC.SYS /0/1/2/B
	
	For additional information, contact DISCTEC.
	
	The DISCTEC product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: fastdisk 3.10 fast disk 3rdparty 3.11 tech tec disktech
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
