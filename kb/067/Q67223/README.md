---
layout: page
title: "Q67223: What Does RECOVER Do?"
permalink: kb/067/Q67223/
---

## Q67223: What Does RECOVER Do?

	Article: Q67223
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.20,3.21,3.3,3.3a,3.x,4.01,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a file or part of a file on a disk is located on a bad sector, the RECOVER
	command is designed to retrieve the undamaged portion(s) of the file. The data
	that was in the bad sector will be gone. To recover a file named A:\MYFILE.TXT,
	type the following from the C:\DOS> prompt:
	
	  " RECOVER A:\MYFILE.TXT " (without the quotation marks)
	
	If the root directory of a disk is damaged, RECOVER can also be run on an entire
	disk. DO NOT, however, run RECOVER on the entire disk unless the root directory
	IS damaged. When RECOVER is run on an entire disk drive, it assumes that the
	current root directory is damaged and useless. ALL of the files on the entire
	disk are recovered, renamed, and placed in the root directory. The entire
	subdirectory structure of the disk is destroyed by this process.
	
	Each subdirectory is converted into a file that contains the data about that
	subdirectory and is placed in the root directory as well.
	
	The root directory of a disk has a limit to the number of files it can contain,
	and on most hard disks this limit is 512. It is not always possible for all
	files to be recovered, and the nonrecovered files become lost chains. The 512
	recovered files should be copied to floppy disks and then deleted from the hard
	disk, and CHKDSK can then be used to convert the lost chains into files.
	
	The "Microsoft MS-DOS User's Reference" for versions 3.x and 4.x incorrectly
	states that RECOVER should be run if CHKDSK reports bad sectors. For more
	information on this topic and on using RECOVER on hard disks, query on the
	following words:
	
	  " ms-dos and recover and chkdsk " (without the quotation marks)
	
	Additional query words: 3.20 3.21 3.30 3.30a 4.00 4.01 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.20,3.21,3.3,3.3a,3.x,4.01,5.0
	
	=============================================================================
	
