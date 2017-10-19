---
layout: page
title: "Q69767: Information on MS-DOS FORMAT, UNFORMAT, and MIRROR Utilities"
permalink: /kb/069/Q69767/
---

## Q69767: Information on MS-DOS FORMAT, UNFORMAT, and MIRROR Utilities

	Article: Q69767
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
	
	The following is a brief explanation of the MS-DOS FORMAT, UNFORMAT, and MIRROR
	commands and how these three utilities interact with one another.
	
	NOTE: MIRROR does not come with Microsoft MS-DOS 6.0, 6.2, or 6.21.
	
	MORE INFORMATION
	================
	
	When you format a floppy disk in MS-DOS, the FORMAT command has a built-in
	feature that creates an image of the system area of the disk. This file contains
	a copy of the disk's boot sector, file allocation table (FAT), and root
	directory.
	
	WARNING: If insufficient space is available on the disk to create this file, the
	UNFORMAT information will not be saved.
	
	This information is intended to be used for recovering from accidental formats.
	UNFORMATting should be done as soon as possible after the accidental format
	because each subsequent write to the disk reduces the likelihood of a successful
	recovery.
	
	The process of creating this UNFORMAT information is identical to running the
	MIRROR program on the disk. If MIRROR has been run prior to executing the FORMAT
	command, both images are saved (once again, space permitting), and the UNFORMAT
	command will give you the option of choosing the MIRROR save file to use for
	rebuilding. (Your options will be the LAST MIRROR image created or the PRIOR
	MIRROR image created.) MIRROR files retain their location on the disk even
	during the formatting procedure.
	
	MIRROR tracks the image file with a control file (MIRORSAV.FIL). If no MIRROR
	control file can be located on a disk, UNFORMAT scans the disk for a MIRROR
	image file (MIRROR.FIL). If an image file cannot be located, UNFORMAT scans the
	disk for old subdirectories. Any subdirectories that are located are attached to
	the disk's root directory and given a name such as SUBDIR.1, SUBDIR.2, and so
	forth. The files within these subdirectories may remain intact. (This is a
	last-resort recovery technique.)
	
	When you format a disk using the /u switch, or if you perform a format that
	changes the size of the disk, all information on the disk is erased. In cases
	such as these, no UNFORMAT information is saved, and any MIRROR control/image
	files that were on the disk are erased. As a result, it is not possible to
	UNFORMAT this disk.
	
	For specific information on using the FORMAT, UNFORMAT, and MIRROR commands,
	please see your printed MS-DOS documentation or MS-DOS Help.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
