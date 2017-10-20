---
layout: page
title: "Q73410: MS-DOS 5.x and 6.x Install to Drive C Only"
permalink: /kb/073/Q73410/
---

## Q73410: MS-DOS 5.x and 6.x Install to Drive C Only

{% raw %}

	Article: Q73410
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MS-DOS Upgrade Setup makes the first primary partition on the first fixed disk
	the active partition and assigns it the letter C. This makes it the bootable
	partition.
	
	As a result, MS-DOS Upgrade Setup cannot install MS-DOS files to a drive other
	than C.
	
	MORE INFORMATION
	================
	
	If you have your MS-DOS files on a drive other than C, Setup reports the
	following (even if the directory that contains your MS-DOS files is not \DOS):
	
	  Setup has determined that your current DOS files are in the following
	  directory:
	
	  C:\DOS
	
	If you have more than two floppy disk drives before upgrading, the drive letters
	assigned to the floppy disk drives will be the first available letters after all
	the logical drives on all the fixed disks have been named.
	
	If a partition other than drive C was the active partition before the upgrade,
	the Setup program reassigns the partitions so that the first primary MS-DOS
	partition on the first physical hard disk drive is active.
	
	This scheme standardizes the way MS-DOS is placed on the hard disk drive to
	enable developers to have a standard for writing installation programs.
	Programmers know that MS-DOS, by default, is installed on the C partition.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
