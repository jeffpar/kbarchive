---
layout: page
title: "Q73416: Uninstall Disk Must Be the Same Media as Drive A"
permalink: /kb/073/Q73416/
---

## Q73416: Uninstall Disk Must Be the Same Media as Drive A

	Article: Q73416
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
	
	If the Uninstall disk you create (labeled "Uninstall Disk") is not the same
	media (density) as drive A, you receive the following error message:
	
	  error reading or writing to drive a:
	
	MORE INFORMATION
	================
	
	Because Uninstall Disk 1 must be a bootable disk, it must be the same density as
	drive A. For example, if drive A is a 1.2-megabyte floppy disk drive, only a
	high-density 1.2-megabyte disk should be used for the Uninstall Disk 1.
	
	The ROM bootstrap routine is executed when the computer is booted. It checks to
	see if a disk is in drive A; if there is no disk in drive A, it checks the
	active partition on the hard disk drive. Note that it never checks drive B;
	therefore, it is not possible to boot from drive B.
	
	This behavior is a function of the BIOS, not MS-DOS.
	
	For more information on the ROM bootstrap routine, query on the following word in
	the Microsoft Knowledge Base:
	
	  " bootstrap " (without the quotation marks)
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 low density, double "Uninstall Disk 1" 2" 720K, 360K, error reading or writing to drive a:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
