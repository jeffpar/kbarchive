---
layout: page
title: "Q82776: Setup Hangs After Successful Boot into Windows"
permalink: kb/082/Q82776/
---

## Q82776: Setup Hangs After Successful Boot into Windows

	Article: Q82776
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In a few rare circumstances, when Setup attempts to switch from the MS-
	DOS-character portion of Setup to the graphical-mode Windows portion of the
	installation, the hourglass cursor may disappear and Setup will stop responding
	(hang) or Windows will exit to MS-DOS.
	
	CAUSE
	=====
	
	This may indicate a corrupt SETUP.INF or SETUP.EXE file.
	
	WORKAROUND
	==========
	
	To troubleshoot this problem:
	
	1. Change to the Windows directory and delete SETUP.EXE.
	
	2. Change to the Windows\System directory and delete SETUP.INF (and SETUP.EXE if
	  a copy is there).
	
	3. Clean the AUTOEXEC.BAT and CONFIG.SYS files of any TSR
	  (terminate-and-stay-resident) programs by using an ASCII text editor and
	  inserting "REM" (without the quotation marks) and a space in front of TSR
	  lines. For example:
	
	  REM share.exe
	
	  Save the file and restart the computer.
	
	4. Use the MS-DOS CHKDSK command on the Windows floppy disks:
	
	  chkdsk a:
	
	  If errors are found, then the disk has been damaged.
	
	5. Compare the files on the Setup disk with another copy of the Setup disk. If
	  the number of files or number of free bytes do not match, then the disk has
	  been damaged.
	
	Additional query words: 3.10 3.11 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
