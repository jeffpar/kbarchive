---
layout: page
title: "Q93234: How a CD-ROM Drive Letter Is Assigned"
permalink: /kb/093/Q93234/
---

## Q93234: How a CD-ROM Drive Letter Is Assigned

	Article: Q93234
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
	
	The drive letter for a CD-ROM drive is assigned by the MSCDEX.EXE command in the
	AUTOEXEC.BAT file, not by the device specific driver in the CONFIG.SYS file.
	MSCDEX.EXE loads the Microsoft CD-ROM Extensions.
	
	MORE INFORMATION
	================
	
	MSCDEX.EXE assigns a CD-ROM the next available drive letter. For example, if a
	computer has two floppy drives (drives A and B) and one physical hard drive with
	two partitions (drives C and D), then MSCDEX will assign the CD- ROM the drive
	letter E. It is possible to specify a drive letter to the CD- ROM by using a
	command line switch on the MSCDEX.EXE of /L:x, where x is the drive letter you
	want to assign. To assign a CD-ROM the drive letter H, you would use the
	following command:
	
	  MSCDEX /L:H
	
	When using a RAM Drive along with a CD-ROM, the RAM Drive will be assigned the
	first available drive letter, because RAMDRIVE.SYS (which loads in the
	CONFIG.SYS) is loaded before MSCDEX. The CD-ROM will then be assigned the second
	available drive letter.
	
	Additional query words: 6.22 cdrom ramdrive
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
