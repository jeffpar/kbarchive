---
layout: page
title: "Q96200: DoubleSpace Cannot Mount Compressed Write-Protected Disk"
permalink: kb/096/Q96200/
---

## Q96200: DoubleSpace Cannot Mount Compressed Write-Protected Disk

	Article: Q96200
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2; WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kbtool msdos
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to mount a write-protected disk with DoubleSpace, you receive the
	following error message:
	
	  DoubleSpace cannot mount drive <x> because the file
	  <x>:\DBLSPACE.nnn is not a valid compressed volume file.
	
	where <x> is the floppy disk drive letter.
	
	When you try to mount a write-protected removable media disk under MS-DOS 6.2,
	you receive the following error:
	
	  Dblspace cannot mount drive <drive letter>:
	  The <drive letter>:\Dblspace.000 file is not a valid compressed
	  volume file. To fix it, type scandisk X:\Dblspace.000 at the
	  command prompt.
	
	WORKAROUND
	==========
	
	To work around this problem, remove the write protection for the disk.
	
	MORE INFORMATION
	================
	
	When DoubleSpace mounts a compressed volume file (CVF), it ensures the Microsoft
	DoubleSpace BIOS parameter block (MDBPB) (the overall configuration sector) and
	the BitFAT (a table of available heap sectors) are current. To do this,
	DoubleSpace must write to the disk. This feature is under review and will be
	considered for inclusion in a future release.
	
	You can mount a floppy disk by running DoubleSpace, or you can mount the floppy
	disk with the MS-DOS DBLSPACE /MOUNT command. For example, type the following
	command at the MS-DOS command prompt and press ENTER if your floppy disk drive
	is drive A:
	
	  "dblspace /mount a:" (without the quotation marks)
	
	For more information on DoubleSpace, type "help dblspace" (without the quotation
	marks) at the MS-DOS command prompt and press ENTER.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 6.00 6.20 win95 win95x read-only read only drivespace drvspace
	
	======================================================================
	Keywords          : kbenv kbtool msdos 
	Technology        : kbWin95search kbZNotKeyword3 kbMSDOSSearch kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2; WINDOWS:95
	
	=============================================================================
	
