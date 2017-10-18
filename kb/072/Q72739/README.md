---
layout: page
title: "Q72739: The Difference Between HDBKUP.EXE and BACKUP.EXE"
permalink: kb/072/Q72739/
---

## Q72739: The Difference Between HDBKUP.EXE and BACKUP.EXE

	Article: Q72739
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
	
	The Microsoft MS-DOS 5 Upgrade Disk 1 contains a program called HDBKUP.EXE. This
	utility was designed for backing up hard drives prior to installing the
	Microsoft MS-DOS 5 Upgrade. Backing up a hard drive is one of the first options
	presented when running the MS-DOS 5 Upgrade program. HDBKUP.EXE is not copied to
	the DOS directory on the hard drive during installation.
	
	MORE INFORMATION
	================
	
	HDBKUP.EXE is not a compressed file and can be copied to the hard drive and run
	independently of the MS-DOS version 5.0 installation. HDRSTORE.EXE is not a
	compressed file and can also be copied to the hard drive. HDBKUP will only do
	full backups of hard disks and can be run under MS-DOS versions 2.11 and later.
	Backing up from floppy disks and/or RAM drives is not an option under HDBKUP.
	Backups made with HDBKUP can be restored with RESTORE or HDRSTORE. Backups made
	with BACKUP.EXE can be restored with HDRSTORE.EXE. HDRSTORE.EXE is located on
	the Microsoft MS-DOS 5 Upgrade Disk 2 (720K disk size) or Disk 3 (360K disk
	size).
	
	HDBKUP.EXE can format a disk during the backup process, even if FORMAT.COM is not
	in the path. HDBKUP can also format different density disks during backup. The
	standard BACKUP.EXE cannot do either of these.
	
	The following are the two backup utilities included with MS-DOS 5.0:
	
	  HDBKUP   EXE     42698 04-09-91   5:00a
	  BACKUP   EXE     36092 04-09-91   5:00a
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
