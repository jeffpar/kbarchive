---
layout: page
title: "Q74931: Cannot Do a Minimal Setup to Floppy Disks in MS-DOS 5.0"
permalink: kb/074/Q74931/
---

## Q74931: Cannot Do a Minimal Setup to Floppy Disks in MS-DOS 5.0

	Article: Q74931
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you try to do a minimal setup to floppies with the Setup /M /F command, the
	first setup disk will be read, but it will not prompt for the floppy disk to
	install the system onto. Setup will terminate assuming that the setup has been
	successfully completed.
	
	Microsoft has confirmed this to be a problem with Microsoft MS-DOS version 5.0.
	This problem was corrected in MS-DOS version 5.0a.
	
	MORE INFORMATION
	================
	
	This problem occurs because the /M and /F options are not meant to work
	together. A workaround is to setup to a floppy disk, then exit after the first
	disk is done. This will give you a bootable MS-DOS 5.0 disk; however, it will
	not give you access to many MS-DOS 5.0 commands.
	
	This problem was resolved in the 5.0a release of the MS-DOS 5 Upgrade (file dates
	of 11/11/91). The /F and /M options work together properly to create a bootable
	floppy containing the MS-DOS FDISK, FORMAT, SYS, EDLIN, and DEBUG commands. The
	/F /M combination is intended to be used primarily by Microsoft to assist in
	troubleshooting problems, and so it is not specifically documented (for example,
	it is not included in the Help information displayed by typing "setup /?"
	(without the quotation marks). However, the version 5.0a "Microsoft MS-DOS
	Getting Started" manual does address the /F /M options during an explanation of
	repartitioning on page 95.
	
	Additional query words: 5.00 5.00a noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a
	
	=============================================================================
	
