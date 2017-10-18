---
layout: page
title: "Q73323: Packard Bell SPEED.COM and MS-DOS 5.0 and Later"
permalink: kb/073/Q73323/
---

## Q73323: Packard Bell SPEED.COM and MS-DOS 5.0 and Later

	Article: Q73323
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
	
	Some Packard-Bell 8086 machines running MS-DOS versions 3.x have a utility
	called SPEED.COM that changes the clock speed of the processor from the standard
	4.77 megahertz to 8 or 9 megahertz, depending upon the model. This utility must
	be copied into the new DOS directory from either the OLD_DOS.1 directory or the
	original DOS 3.x floppy disks.
	
	MORE INFORMATION
	================
	
	SPEED.COM does not require addition to the SETVER table, but the MS-DOS 5.0 or
	later Setup program does not recognize SPEED.COM as an add-in utility that must
	remain in the DOS directory. Therefore, it must be manually copied to the DOS
	directory.
	
	Many Packard-Bell 8086 machines have this command in the AUTOEXEC.BAT file.
	MS-DOS 5.0 or later Setup does not place this command in the new AUTOEXEC.BAT,
	so you may notice decidedly slower performance when upgrading to MS-DOS 5.0 or
	later. Copying SPEED.COM into the DOS directory and adding SPEED.COM to
	AUTOEXEC.BAT should correct the problem.
	
	The products included here are manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.22 5.00 6.00 5.00a oem hardware 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
