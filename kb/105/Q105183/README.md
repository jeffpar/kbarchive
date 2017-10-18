---
layout: page
title: "Q105183: Backup Overwrites DoubleSpace-Compressed Floppy Disks"
permalink: kb/105/Q105183/
---

## Q105183: Backup Overwrites DoubleSpace-Compressed Floppy Disks

	Article: Q105183
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
	
	If you try to back up to a DoubleSpace-compressed floppy disk using Microsoft
	Backup or Microsoft Backup for Windows, you receive the following message:
	
	  You have inserted a diskette which contains existing directories and files.
	  Please insert an empty diskette or choose "Overwrite" to use the current
	  diskette.
	
	  Partial file list
	  dblspace.000
	  readthis.txt
	
	NOTE: If you choose "MS-DOS Drive and Path" instead on drive A or drive B, you
	receive the message "insufficient disk space in <drive letter>: Backup to
	DOS path cannot be completed."
	
	CAUSE
	=====
	
	Microsoft Backup writes over your DoubleSpace-compressed floppy disk, making it
	an uncompressed disk.
	
	Since Backup compresses data, there is no benefit to writing compressed data to a
	compressed disk. Once the data has been compressed once, it cannot be compressed
	again.
	
	WORKAROUND
	==========
	
	You may be able to work around this problem by choosing MS-DOS Path for your
	destination.
	
	Additional query words: MWBackup 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
