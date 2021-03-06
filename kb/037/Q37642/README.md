---
layout: page
title: "Q37642: Copying a File Between Disks on a Single Drive"
permalink: /kb/037/Q37642/
---

## Q37642: Copying a File Between Disks on a Single Drive

{% raw %}

	Article: Q37642
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you have two different, and possibly incompatible, floppy disk drive types,
	you can use one floppy disk drive to copy a file between two floppy disks if you
	install DRIVER.SYS with the appropriate switches in your CONFIG.SYS file.
	
	MORE INFORMATION
	================
	
	For example, if the line
	
	  DEVICE=DRIVER.SYS /D:0 /F:1
	
	is present in the CONFIG.SYS file, the following message is issued when the
	driver is installed
	
	  Loaded external disk driver for drive <x>
	
	where <x> is the new logical drive letter associated with drive A. You can
	then use the single floppy disk drive and the MS-DOS COPY command to copy files
	between disks (swapping disks when prompted), as in the following example:
	
	  copy a:one.txt x:
	
	DRIVER.SYS is only needed if you have two different, and possibly incompatible,
	floppy disk drive types; however, you still need to use two floppies of the same
	media type (for example, 360K to 360K).
	
	NOTE: If your PC machine has only one floppy drive, MS-DOS uses a similar method
	and the B drive letter to allow you to copy files from floppy disk to floppy
	disk. For example, the following COPY example accomplishes the same results:
	
	  copy a:one.txt b:
	
	Additional query words: 6.22 3.20 3.21 3.30 3.30a 4.00 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
