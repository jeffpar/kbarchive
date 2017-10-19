---
layout: page
title: "Q104544: Cannot Uncompress Some Floppy Disks Without Removing Data"
permalink: /kb/104/Q104544/
---

## Q104544: Cannot Uncompress Some Floppy Disks Without Removing Data

	Article: Q104544
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	If you compress a floppy disk and immediately try to uncompress the disk, you may
	receive the following error message:
	
	  DoubleSpace cannot uncompress drive <letter> because there is not
	  enough space on drive <host letter> to hold all of the uncompressed
	  files.
	
	  To uncompress drive <letter>, you must remove at least <xxx,xxx>
	  bytes of files from either drive.
	
	CAUSE
	=====
	
	This occurs because DoubleSpace is very conservative in estimating the space
	required to hold the uncompressed files. The estimate is based in part on a
	worst-case scenario in which the data on the floppy disk is stored at a 16:1
	compression ratio and DoubleSpace must convert the drive from a 16-bit file
	allocation table (FAT) to a 12-bit FAT.
	
	RESOLUTION
	==========
	
	To work around this problem, remove <xxx,xxx> bytes of data from either
	the compressed drive or the host drive.
	
	Additional query words: 6.20 diskette
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
