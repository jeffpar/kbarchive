---
layout: page
title: "Q74422: MS-DOS Does Not Upgrade from Compaq DOS 2.11"
permalink: /kb/074/Q74422/
---

## Q74422: MS-DOS Does Not Upgrade from Compaq DOS 2.11

	Article: Q74422
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
	
	Compaq DOS version 2.11 is equivalent to MS-DOS version 2.1. Microsoft MS-DOS 5
	or later Upgrade requires MS-DOS 2.11 or later to upgrade DOS to version 5.0 or
	later. The following error message is likely to occur when upgrading from Compaq
	DOS 2.11:
	
	  YOUR VERSION OF DOS CANNOT BE UPGRADED BY SETUP
	
	MORE INFORMATION
	================
	
	You may receive this message when installing to the hard disk or to the floppy
	drive. To upgrade to MS-DOS 5.0 or later, use the following steps:
	
	1. Install MS-DOS 5.0 or later on another computer by typing "setup/f" (without
	  the quotation marks).
	
	2. Boot the original computer using the startup disk.
	
	3. Verify that the hard disk is functional under MS-DOS 5.0 or later (the CHKDSK
	  [no /f] command will verify proper disk access by the current DOS version).
	
	4. Use the SYS command to copy the system files onto the hard drive.
	
	5. Copy the MS-DOS 5.0 files or later from the working disks to the DOS
	  directory on the hard drive.
	
	6. Restart the computer from the hard disk.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
