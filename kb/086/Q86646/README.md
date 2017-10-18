---
layout: page
title: "Q86646: How to Restore Backed-up Files to a Different Directory"
permalink: kb/086/Q86646/
---

## Q86646: How to Restore Backed-up Files to a Different Directory

	Article: Q86646
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.3,3.30a,4.x,5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.3, 3.30a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MS-DOS RESTORE command will only place backed-up files into the directory
	where they were backed up from. If you do not want to restore the files you
	backed up with the MS-DOS BACKUP utility to the same directory, you can either:
	
	- RESTORE to a different drive.
	
	-or-
	
	- Fool RESTORE using the SUBST command.
	
	NOTE: This information applies to MS-DOS Restore (RESTORE.EXE). It does not apply
	to Microsoft Backup for MS-DOS (MSBACKUP.EXE) or Microsoft Backup for Windows
	(MWBACKUP.EXE).
	
	MORE INFORMATION
	================
	
	Example
	-------
	
	If you want to restore the files backed up from the C:\DATA directory but don't
	want to mix them with the files currently in the C:\DATA directory, and you have
	another hard drive on your system, you can restore to drive D with the following
	command:
	
	  restore a: d:\data\*.*
	
	RESTORE would place all files backed up from the \DATA directory into the D:\DATA
	directory.
	
	However, if you do not have another hard drive, you can use the following
	commands:
	
	  md c:\old
	  subst d: c:\old
	  restore a: d:\data\*.*
	
	RESTORE will place all files backed up from the \DATA directory into the D:\DATA
	directory, which is actually the C:\OLD\DATA directory.
	
	Explanation
	-----------
	
	The MS-DOS BACKUP utility stores the full path of each file that is backed up
	(for example, \DATA\INFO.DAT). This allows RESTORE to recreate your entire
	subdirectory structure, if necessary.
	
	When you specify "RESTORE A: D:\DATA\*.*", RESTORE searches for the files backed
	up from the \DATA directory, and copies them to the \DATA directory on drive D.
	Because the drive letter is not saved by BACKUP, RESTORE is able to place the
	file in a \DATA directory on any MS-DOS logical drive (but only in a the \DATA
	directory).
	
	SUBST allows you (and many utilities, including RESTORE) to substitute a drive
	designator (such as D) for a directory path (such as C:\OLD).
	
	Notes
	-----
	
	SUBST can be used to substitute any drive designator up to drive Z. However, if
	the drive you are "creating" with SUBST is F through Z, you will usually need to
	have a LASTDRIVE= command in your CONFIG.SYS file. For example, if you want to
	be able to use SUBST with drive M, add the following command to CONFIG.SYS:
	
	  " lastdrive=m " (without the quotation marks)
	
	(Note: You can use any letter after M in the alphabet.)
	
	It is recommended that you not add or delete any drives created with SUBST while
	running Microsoft Windows.
	
	Additional query words: 3.30 3.30a 4.00 4.00a 5.00 5.00a 6.00 6.20 6.21 6.22
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.3,3.30a,4.x,5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	
