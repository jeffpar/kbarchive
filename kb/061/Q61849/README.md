---
layout: page
title: "Q61849: Viewing Contents of BACKUP Disks from MS-DOS 3.3, 4.x, and 5.0"
permalink: /kb/061/Q61849/
---

## Q61849: Viewing Contents of BACKUP Disks from MS-DOS 3.3, 4.x, and 5.0

	Article: Q61849
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.3,3.3a,4.x,5.0
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.3, 3.3a, 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Information regarding which files are stored on a BACKUP disk created by MS-DOS
	version 3.3, 4.x, or 5.0 is contained in the file CONTROL.<xxx> (where
	<xxx> is the number of the BACKUP disk).
	
	MORE INFORMATION
	================
	
	The BACKUP command included with MS-DOS versions earlier than 3.3 saves each
	file as a separate file on the BACKUP disk. You can use the DIR command to see
	which file is on which BACKUP disk.
	
	A DIR of a backup disk created with the MS-DOS version 3.3x, 4.x, or 5.0 BACKUP
	command only lists two files: BACKUP.xxx and CONTROL.xxx (where xxx is the
	number of the disk in the BACKUP sequence). The BACKUP file contains the files
	that have been backed up; each file's name, size, place in the directory
	structure, and so in is stored in a file called CONTROL.xxx.
	
	The backup disks created with the Microsoft MS-DOS 5 Upgrade utility HDBKUP.EXE
	are the same format as those created by the MS-DOS versions 3.3 and later BACKUP
	command, and can be viewed with BACKINFO.EXE.
	
	MS-DOS 5.0 includes the RESTORE option "/D" (without the quotation marks), which
	displays similar information as BACKINFO. However, if there is more than one
	disk in the backup sequence, RESTORE will end with an error when a second disk
	is inserted. This problem can be avoided by using BACKINFO, or by issuing a
	separate RESTORE command for each disk in the backup sequence.
	
	Additional query words: appnote 3.30 3.30a 4.00 5.00
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS330a kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.3,3.3a,4.x,5.0
	
	=============================================================================
	
