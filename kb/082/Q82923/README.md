---
layout: page
title: "Q82923: Methods to Detect a Boot-Sector Virus"
permalink: /kb/082/Q82923/
---

## Q82923: Methods to Detect a Boot-Sector Virus

	Article: Q82923
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Boot-sector viruses infect computer systems by copying code either to the boot
	sector on a floppy disk or the partition table on a hard disk. During startup,
	the virus is loaded into memory. Once in memory, the virus will infect any
	non-infected disks accessed by the system. Examples of boot- sector viruses are
	Michelangelo and Stoned.
	
	MORE INFORMATION
	================
	
	Boot-sector viruses are spread to computer systems by booting, or attempting to
	boot, from an infected floppy disk. Even if the disk does not contain the MS-DOS
	system files needed to successfully boot, an attempt to boot from an infected
	disk will load the virus into memory. The virus hooks itself into memory as if
	it were a device driver. The virus moves the Interrupt 12 return, allowing
	itself to remain in memory even after a warm boot. The virus will then infect
	the first hard disk in the system.
	
	Because the virus moves the Interrupt 12 return, the MS-DOS system memory will be
	2K (2048 bytes) smaller than normal. This can be verified by running the MS-DOS
	CHKDSK command.
	
	For example, if your system has 640K, CHKDSK will report:
	
	  655360 Total Bytes Memory
	
	If the system is infected with a boot-sector virus, CHKDSK will report:
	
	  653312 Total Bytes Memory
	
	Some systems use 1K (1024 bytes) of memory for the BIOS. Other systems use 2K
	(2048 bytes) of memory for shadow RAM. You must take this into account before
	CHKDSK can be used as an accurate measure of whether or not a system is infected
	with a virus. Please refer to the hardware manufacturer to see if the system
	uses part of the MS-DOS 640K of memory.
	
	Once a system is infected with a boot-sector virus, any non-write-protected disk
	accessed by this system will become infected. For example, simply doing a DIR
	command on a floppy disk will cause the disk to become infected with the virus.
	
	
	Note: MS-DOS version 5.0 disks are shipped without a notch; therefore, they are
	write-protected. The chances of these disks containing a virus are close to
	none. The MS-DOS 5.0 disk files are compressed, so the actual file sizes are
	different. You can determine a compressed file by the underscore character (_)
	that is the last character of the filename extension. To expand a compressed
	file, use the EXPAND utility on Disk 5 (5.25-inch disk set) or Disk 3 (3.5-inch
	disk set).
	
	Additional query words: 6.22 3.20 3.30 3.30a 4.00 4.00a 5.00 5.00a MBR 6.00 6.20
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
