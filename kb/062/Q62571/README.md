---
layout: page
title: "Q62571: Converting Drive Letters to MS-DOS INT 13H Disk Drive Numbers"
permalink: kb/062/Q62571/
---

## Q62571: Converting Drive Letters to MS-DOS INT 13H Disk Drive Numbers

	Article: Q62571
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The BIOS Interrupt 13H uses a zero-based number for floppy disk drives ("A"= 0,
	"B"= 1, and so on), and a zero-based number with the high bit (bit 7) set for
	hard disks ("C"= 80H, "D"= 81H, and so on).
	
	MORE INFORMATION
	================
	
	You can use the following algorithm to convert any logical drive letter (ASCII)
	to the drive numbers that Interrupt 13H uses:
	
	1. Identify the block device with Interrupt 21H IOCTL function 44H, subfunction
	  0dH, minor code 60H (Get Device Parameters), as either a floppy disk drive or
	  a hard disk drive by checking the returned parameter block "device type"
	  field byte at offset +1. A value of 0-4 or 7 indicates that it is a floppy
	  disk drive. A value of 5 indicates that it is a hard disk drive.
	
	2. If the device is a floppy disk drive, subtract 1 from the BL drive number
	  input to the function Get Device Parameters to make it zero based, or take
	  the uppercase ASCII logical drive letter and subtract the value of "A". For
	  example:
	
	     Drive letter "A" - "A" = 0,  "B" - "A" = 1, and so on
	
	3. If the device is a hard disk drive, you need to interpret the hard disk
	  partition table to differentiate between a primary partition and a logical
	  partition because the ordering of logical drive numbers does not necessarily
	  reflect the physical order and corresponding BIOS physical drive number.
	
	  For more information, query on the following keywords:
	
	  prod(msdos) and driver.sys and order
	
	  Once you know how MS-DOS assigns logical drive letters on system
	  initialization, you need to address the correct physical hard disk and
	  compute the offset (starting sector number) of any logical drive by using the
	  starting sector values supplied in the hard disk's partition table. These
	  starting sector numbers would be supplied to the BIOS Int 13H function to
	  access those sectors representing a logical drive. "Advanced MS-DOS
	  Programming" by Ray Duncan has more information on the boot record and
	  partition tables.
	
	  Example
	  -------
	
	  HD 1: Bios# 80H      HD 2: Bios# 81H      HD X: Bios# X...
	
	  C: (primary)         E: (logical)
	  -----------          -----------
	  D: (logical)         F: (logical)
	
	  To access logical drive D, address HD 1: Bios# 80H, but sectors starting at
	  logical partition D:.
	
	Additional query words: 6.22 3.30 4.01 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
