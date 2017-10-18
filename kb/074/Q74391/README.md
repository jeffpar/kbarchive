---
layout: page
title: "Q74391: HDRSTORE May Restore Previous DOS Files into the DOS Directory"
permalink: kb/074/Q74391/
---

## Q74391: HDRSTORE May Restore Previous DOS Files into the DOS Directory

	Article: Q74391
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you receive an "Incorrect DOS version" error message while attempting to
	invoke a DOS command after using HDRSTORE, it is likely that files from the
	previous DOS version have been added to the DOS directory. If this has occurred,
	it is recommended that you rerun the MS-DOS 5.0 Setup program and reinstall
	MS-DOS 5.0 to the hard disk drive.
	
	MORE INFORMATION
	================
	
	The MS-DOS 5.0 HDRSTORE.EXE command restores files (with the exception of
	IO.SYS, MSDOS.SYS, and COMMAND.COM) and directories from the backup disks
	created with the HDBKUP.EXE command. If a previous version of DOS was present on
	the hard disk when HDBKUP was run, these files will be restored into the DOS
	directory regardless of what DOS 5.0 files currently reside within that
	directory.
	
	If you want to use HDBKUP.EXE to back up the hard disk while a previous version
	of DOS resides in the DOS directory, it is recommended that you first restore
	the hard disk with HDRSTORE.EXE, then run the Setup program.
	
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
