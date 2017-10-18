---
layout: page
title: "Q75226: Upgrading Toshiba T1000 Laptop to MS-DOS 5.0 and later"
permalink: kb/075/Q75226/
---

## Q75226: Upgrading Toshiba T1000 Laptop to MS-DOS 5.0 and later

	Article: Q75226
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
	
	The Toshiba T1000 laptop uses ROM DOS Toshiba MS-DOS version 2.11, which is
	configured as a 256K read-only drive C. At this time, there is no ROM DOS
	upgrade available from Toshiba.
	
	You can use Microsoft MS-DOS 5.0 or later with the Toshiba T1000 laptop. The
	T1000 boots from a MS-DOS 5.0 or later system floppy disk. However, you will be
	unable to access the ROM DOS drive C. The HARD RAM drive D or the RAM expanded
	memory (which is the same thing, just configured differently) is accessible if
	you do ONE of the following:
	
	1. Run FDISK. From fixed disk drive 2, delete the two non-DOS partitions and the
	  Novell partition, then create a primary DOS partition. Format drive C.
	
	  The HARD RAM drive will now be usable as drive C.
	
	-or-
	
	2. Boot on the ROM DOS. Copy the file EMM.SYS to the MS-DOS 5.0 system disk. Run
	  the T1000 SETUP10.EXE program and configure the HARD RAM drive so that there
	  is at least 64K bytes not used. On the MS-DOS 5.0 system disk, include MS-DOS
	  5.0's RAMDRIVE.SYS and a CONFIG.SYS file that contains at least the
	  following:
	
	     CONFIG.SYS
	     ----------
	
	     device=emm.sys
	     device=ramdrive.sys /a
	
	  The HARD RAM drive will now be accessible as a normal RAM drive.
	
	MORE INFORMATION
	================
	
	The T1000 will NOT boot from the HARD RAM drive using MS-DOS 5.0 or later.
	
	The Toshiba T1000 laptop should not be confused with the Toshiba T1000 desktop.
	
	The specifications for the Toshiba T1000 laptop are as follows:
	
	  CPU:              80C88 4.77 MHz
	  Operating system: MS-DOS 2.11 in 256K ROM
	  Drives:           One 720K 3.5-inch drive
	  Memory:           512K RAM
	                    Optional 768K LIM EMS 3.2 memory card available
	  Keyboard:         82 key
	  Display:          CGA-compatible LCD
	
	STATUS
	======
	
	The product included here is manufactured by Toshiba, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
