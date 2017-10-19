---
layout: page
title: "Q76899: Restoring Boot Partition Boot Sector Using Uninstall"
permalink: /kb/076/Q76899/
---

## Q76899: Restoring Boot Partition Boot Sector Using Uninstall

	Article: Q76899
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
	
	The primary DOS partition on a hard disk has its own boot sector that contains
	information on the format of the partition and the boot strap code. If the
	Uninstall program does not complete successfully, this boot sector may not be
	restored, which can cause an error message (for example, "non-system disk
	error") to be displayed. The primary partition's boot sector can be restored
	from the Uninstall disk using Debug.
	
	
	MORE INFORMATION
	================
	
	The primary partition boot sector describes the partition format and contains
	boot strap code. This sector is the first logical sector on the partition. The
	old primary partition's boot sector is stored in the PBOOT.DAT file on the
	Uninstall disk. DOS interrupt 26H (absolute disk write) can be used to write
	this information back to the first sector of the boot partition.
	
	CAUTION: Use this procedure with caution and only as a last resort. In most
	cases, the SYS command is adequate.
	
	To write the old primary partition boot sector back to the first sector of the
	boot partition, do the following:
	
	1. Place the Uninstall disk #1 into drive A.
	
	2. Start the Debug program by entering the following at the command prompt:
	
	  " debug a:\pboot.dat" (without the quotation marks)
	
	3. At the hyphen (the Debug prompt), enter the following commands:
	
	  Debug        Command
	  Prompt       to Enter           Comments
	
	-            w cs:100 2 0 1     Write pboot.dat (at cs:100) to C;
	                                   execute the command at cs:ip.
	
	-            q                  Exit Debug
	
	The boot sector on the primary DOS partition is now replaced by the boot sector
	that was there before the MS-DOS 5, 6, or 6.2 Upgrade was installed.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 memmaker
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
