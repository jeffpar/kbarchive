---
layout: page
title: "Q107135: Using a RAM Drive to Enhance Performance of DISKCOPY"
permalink: /kb/107/Q107135/
---

## Q107135: Using a RAM Drive to Enhance Performance of DISKCOPY

{% raw %}

	Article: Q107135
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In MS-DOS 6.2 and later, the DISKCOPY command uses your hard disk drive to
	temporarily store the data copied from the source disk. This enables single-
	pass disk copies. If you install a RAM drive, you can increase the performance
	of this operation.
	
	MORE INFORMATION
	================
	
	DISKCOPY uses the location defined by the SET TEMP statement to determine where
	the data from the source disk should be temporarily stored before it is written
	to the destination disk.
	
	If you install a RAM drive and define it as your temporary (TEMP) directory, you
	can redirect the data accessed from the source disk into RAM, thus eliminating
	the time required for the system to perform read and write operations to the
	hard disk drive.
	
	To do this:
	
	1. Set up a RAM drive in your CONFIG.SYS file using the following parameters:
	
	  " device=c:\dos\ramdrive.sys 1480 /e " (without the quotation marks)
	
	  NOTE: Make sure the RAM drive is large enough to hold all data from the
	  largest floppy disk drive on your system. (The size given here sets up a
	  1.44-megabyte RAM drive.
	
	2. In your AUTOEXEC.BAT file, change the SET TEMP line to point to the RAM drive
	  as follows
	
	  " set temp=<x>:\ " (without the quotation marks)
	
	  where <x> is the drive letter assigned by the system to the new RAM
	  drive.
	
	The performance gain is not significant on high performance systems with fast
	processors and hard disk drives; however, it does increase the overall speed of
	this process on older systems.
	
	Additional query words: 6.22 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
