---
layout: page
title: "Q96518: Differences Between DOSSHELL.INI in MS-DOS Versions 5 and 6"
permalink: /kb/096/Q96518/
---

## Q96518: Differences Between DOSSHELL.INI in MS-DOS Versions 5 and 6

	Article: Q96518
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the differences between the DOSSHELL.INI file in MS-DOS
	versions 5.0 and 6.0.
	
	MORE INFORMATION
	================
	
	The DOSSHELL.INI file in MS-DOS 6.0 does not contain references to the MS-DOS
	5.0 BACKUP and RESTORE commands.
	
	Since Setup doesn't update a existing DOSSHELL.INI file, the existing references
	to Backup Fixed Disk and Restore Fixed Disk are not updated. BACKUP.EXE is
	copied to the OLD_DOS directory so that the Backup Fixed Disk option no longer
	works. You can either copy the MS-DOS 5.0 BACKUP command (BACKUP.COM) to the DOS
	directory or modify the Backup Fixed Disk properties to reference the new backup
	program, Microsoft Backup (MSBACKUP.EXE).
	
	If you don't have an existing DOSSHELL.INI file, Setup creates a new one with the
	following default items:
	
	  Main Menu
	  ---------
	  Command Prompt
	  Editor
	  MS-DOS QBasic
	  Disk Utilities Menu
	  -------------------
	  MS Anti-Virus
	  MS Backup
	  Quick Format
	  Format
	  Undelete
	
	Setup leaves the RESTORE command (RESTORE.EXE) from MS-DOS 5.0 in the DOS
	directory even though it does not appear as an item in MS-DOS 6 Shell. The
	BACKUP command (BACKUP.EXE) from MS-DOS 5.0 is available on the supplemental
	disk or in the OLD_DOS directory as described above.
	
	To replace your existing DOSSHELL.INI file, you can expand the appropriate .IN_
	file from the original MS-DOS 6 Upgrade disks. For example, if you have an EGA
	or VGA video display card, expand EGA.IN_ from the MS-DOS 6 Upgrade disks (Disk
	2 of the 1.2-megabyte (MB) set or Disk 1 of the 1.44-MB set). For example, if
	you insert the Setup disk in drive A, you would type the following command:
	
	  " expand a:ega.in_ c:\dos\dosshell.ini" (without the quotation marks)
	
	If the new utilities made available by the MS-DOS 6.0 DOSSHELL.INI file are not
	installed, you must install them using the SETUP command with the /E parameter.
	
	Additional query words: 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
