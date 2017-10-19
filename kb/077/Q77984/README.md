---
layout: page
title: "Q77984: Which MS-DOS Version Should I Boot to Run MS-DOS Setup?"
permalink: /kb/077/Q77984/
---

## Q77984: Which MS-DOS Version Should I Boot to Run MS-DOS Setup?

	Article: Q77984
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
	
	When upgrading to MS-DOS 5.0 or later on a hard drive, the Microsoft MS-DOS
	Upgrade SETUP.EXE program should be run in the version of MS-DOS that is
	currently installed on the machine. Booting the machine with another version of
	MS-DOS may cause improper access of the hard drive, leading to file corruption.
	Additionally, SETUP may make incorrect assumptions about which OEM-modified
	utilities to preserve.
	
	MORE INFORMATION
	================
	
	If you are reinstalling MS-DOS 5 or later, you do not need to reinstall your
	previous MS-DOS version before running SETUP.
	
	If the hard drive has MS-DOS 2.1 or earlier installed, contact your OEM (original
	equipment manufacturer) as to the availability of a version of their MS-DOS 5.0
	or later for your machine. If you have version 2.11 or later, you can boot with
	this version and install MS-DOS 5.0 or later to floppy disks using the SETUP /F
	command. MS-DOS 5.0 or later can then be installed manually from this working
	set of disks. However, this may require reformatting the hard disk, depending on
	the partition structure currently in use.
	
	If installing MS-DOS version 5.0 or later (not MS-DOS Upgrade), boot from disk 1
	to install MS-DOS. The original equipment manufacturer (OEM) version of MS-DOS
	has a different Setup program that requires MS-DOS to be booted before
	installing it.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 5.0 5.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
