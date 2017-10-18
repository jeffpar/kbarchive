---
layout: page
title: "Q102813: Backup Err Msg: Incorrect DOS Version"
permalink: kb/102/Q102813/
---

## Q102813: Backup Err Msg: Incorrect DOS Version

	Article: Q102813
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run the BACKUP command from an MS-DOS command prompt or a
	third-party application, you may receive the following error message:
	
	  Incorrect DOS Version
	
	CAUSE
	=====
	
	This error can be caused any of the following conditions:
	
	- You upgraded to MS-DOS 6.0 or 6.2 from MS-DOS 5.0.
	
	  The BACKUP command in MS-DOS 5.0 is an .EXE file. In all previous versions of
	  MS-DOS, BACKUP is a .COM file. When you install MS-DOS 6 Upgrade or MS-DOS
	  6.2 Upgrade, Microsoft Backup removes only those files that it is replacing.
	  Therefore, both the BACKUP.EXE and BACKUP.COM files may remain in the MS-DOS
	  directory. MS-DOS looks for files to execute in the following order: .COM,
	  .EXE, and lastly .BAT. The error occurs because the BACKUP.COM file from a
	  previous version of MS-DOS is still somewhere on the system and MS-DOS is
	  attempting to execute it.
	
	- The SETVER version table has the wrong version listed for Backup.
	
	- The number "1" is the last digit in the SETVER entry. For example, the
	  following entry causes the above error message:
	
	  setver backup.com 4.01
	
	- You manually expanded BACKUP.EXE from the MS-DOS 6.0 or 6.2 Supplemental
	  Disks (instead of running the SETUP.BAT file.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Type the following from the root directory to display the directory listing
	  of all files named BACKUP on the drive:
	
	  " dir backup /s " (without the quotation marks)
	
	2. If you have a BACKUP.EXE file, delete any BACKUP.COM files on your system.
	
	3. If you do not have a BACKUP.EXE file, use the SETVER command to set the
	  correct version for BACKUP.COM. Set the version to your previous version of
	  MS-DOS or to the version of MS-DOS that matches your MS-DOS Supplemental
	  Disk. For example, type "setver backup.com 4.00" (without the quotation
	  marks) at the MS-DOS command prompt and then press ENTER.
	
	  If you expanded Backup from the MS-DOS Supplemental disks, delete BACKUP.EXE
	  from the SETVER version table. For example, type "setver backup.exe /d"
	  (without the quotation marks) at the MS-DOS command prompt, press ENTER, and
	  then restart your computer.
	
	Additional query words: msbackup 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
