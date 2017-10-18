---
layout: page
title: "Q31906: Booting from Other DOS Partitions"
permalink: kb/031/Q31906/
---

## Q31906: Booting from Other DOS Partitions

	Article: Q31906
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Even though MS-DOS versions 3.x and later allow multiple logical drives on a
	single hard drive through the implementation of an extended DOS partition, they
	do not allow this extended partition to be bootable. In most hardware
	situations, any primary DOS partitions on other physical hard disks cannot be
	booted.
	
	MORE INFORMATION
	================
	
	Each ROM BIOS that follows the IBM specifications for PC, XT, or AT ROM BIOS is
	programmed to look at bootup for a bootable partition (80H in the boot
	indicator) on the following physical drives:
	
	1. The first physical floppy drive (logical Drive A)
	
	2. The first physical hard drive (logical Drive C)
	
	If the floppy partition (which is examined first) or one of the four fixed- disk
	partitions are marked bootable (also called active), the boot sector is loaded
	into memory and execution begins at that location in memory. If no bootable
	partitions are marked active, the computer boots into ROM BASIC. Since only IBM
	systems have ROM BASIC, what happens when no bootable partitions are marked
	active is an OEM-specific issue. The implementation of extended DOS partitions
	does not allow this partition type to be marked active by FDISK. The extended
	DOS partition does not contain a valid loader routine in its boot record even if
	the partition is marked active.
	
	Any primary DOS partitions on other physical hard disks will not be encountered
	due to the limitations of the hardware boot routine. Your hardware manufacturer
	should be able to provide any additional information on your machine's hardware
	boot routine.
	
	Additional query words: 6.22 3.30 3.30a 4.00 4.01 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x,5.0,6.0,6.2,6.21,6.22
	
	=============================================================================
	
