---
layout: page
title: "Q68986: Change-Line Support and XT-Class Computers"
permalink: /kb/068/Q68986/
---

## Q68986: Change-Line Support and XT-Class Computers

{% raw %}

	Article: Q68986
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a 3.5-inch floppy disk drive attached to an XT-class computer
	system, when you change disks and use the DIR command, you may see the directory
	from the previous disk.
	
	CAUSE
	=====
	
	This occurs because MS-DOS assumes that the 3.5-inch drive has change-line error
	detection. Most 3.5-inch drives provide change-line support; however, due to XT
	architecture, the change-line signal is not passed to MS-DOS.
	
	WORKAROUND
	==========
	
	Adding a DRIVPARM command to the CONFIG.SYS file may correct this problem. The
	following is sample DRIVPARM command to specify a 720-kilobyte 3.5-inch B
	drive:
	
	  DRIVPARM=/D:1 /F:2
	
	Please note that the /C change-line support switch is omitted. When MS-DOS
	updates the drive parameters, it may remove the change-line support
	requirement.
	
	The floppy disk drive manufacturer may be able to provide a device driver that
	corrects the change-line problem. A last option is to install a floppy drive
	controller and BIOS that fully support change-line error detection.
	
	Additional query words: 6.22 3.3 3.30 3.3a 3.30a 4.0 4.00 4.01 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
