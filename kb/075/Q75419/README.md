---
layout: page
title: "Q75419: Create a Bootable Floppy Disk Without Running Setup"
permalink: /kb/075/Q75419/
---

## Q75419: Create a Bootable Floppy Disk Without Running Setup

	Article: Q75419
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can create a bootable MS-DOS version 5.0 floppy disk without running the
	Setup program.
	
	If there are problems running Setup, this method can be used to continue a manual
	installation of the Microsoft MS-DOS 5 Upgrade. For more information on manual
	installation, query on the following words:
	
	  " manual and install and MS-DOS and 5.00 and upgrade " (without the quotation
	  marks)
	
	MORE INFORMATION
	================
	
	To create a bootable MS-DOS 5.0 floppy disk from the Microsoft MS-DOS 5 Upgrade
	disks, do the following:
	
	1. Use the DISKCOPY command from the current version of MS-DOS to copy all of
	  the files from the first Upgrade disk to the new floppy disk.
	
	  There must be a direct match between the new floppy disk, the Upgrade disks
	  that were received, and the bootable floppy drive on the machine. For
	  example, if the Upgrade disks are low-density 5.25-inch disks, then a
	  low-density 5.25-inch disk must be used for the boot up disk and the bootable
	  floppy drive must be 5.25-inch. (This procedure copies the boot sector onto
	  the new floppy disk.)
	
	2. Delete all of the files on the new disk with the following command:
	
	     del a:*.*
	
	3. Create a temporary directory on the hard drive. For example, BOOT.
	
	     C:
	     cd\ 
	     md boot
	
	4. Copy the file EXPAND.EXE to the temporary directory just created using the
	  following command:
	
	     copy a:expand.exe c:\boot
	
	  Note: EXPAND.EXE is on disk 6 (5.25-inch disks) or disk 3 (3.5-inch disks).
	
	5. Copy the three files listed here from the Setup disk included with the MS-DOS
	  5 Upgrade into the temporary directory created in step 3:
	
	     copy a:io.sy_ c:\boot
	     copy a:msdos.sy_ c:\boot
	     copy a:command.co_ c:\boot
	
	  Note: These files must be copied in the order listed.
	
	6. From the temporary directory, expand each of the three files onto the new
	  floppy disk:
	
	     expand c:\boot\io.sy_ a:io.sys
	     expand c:\boot\msdos.sy_ a:msdos.sys
	     expand c:\boot\command.co_ a:command.com
	
	This new floppy disk is now bootable with MS-DOS 5.0.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
