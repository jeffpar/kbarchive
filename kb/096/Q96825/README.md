---
layout: page
title: "Q96825: DIR and CHKDSK Report Different Amounts of Free Space"
permalink: /kb/096/Q96825/
---

## Q96825: DIR and CHKDSK Report Different Amounts of Free Space

	Article: Q96825
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SUMMARY
	=======
	
	Delete Sentry increases the amount of free space that MS-DOS reports (through
	interrupt 21h function 36h) to programs by the size of all deleted files stored
	in the hidden SENTRY directory. This affects the amount of free space reported
	by the DIR command, Windows File Manager, and many other programs.
	
	To determine the amount of disk space that is actually free, run CHKDSK and look
	at the "bytes available on disk" value. CHKDSK correctly determines the disk
	free space because it bypasses Delete Sentry and examines the MS-DOS file
	allocation table (FAT) directly.
	
	To determine how much disk space is free if all Delete Sentry files are purged,
	use the DIR command.
	
	MORE INFORMATION
	================
	
	Delete Sentry automatically purges deleted files if more disk space is required.
	For more information, see "Purging Files Protected by Delete Sentry" in the
	"Managing Your System" chapter of the "Microsoft MS-DOS User's Guide" for
	version 6 or 6.2.
	
	Delete Sentry may increase the disk free space on DoubleSpace drives by too
	little if the data being added to the drive is less compressible than the data
	being purged from the hidden SENTRY directory.
	
	
	Additional query words: 6.00 6.20 dblspace double space undelete
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
