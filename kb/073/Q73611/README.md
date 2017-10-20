---
layout: page
title: "Q73611: Everex, Priam Partitions, and MS-DOS 5.0"
permalink: /kb/073/Q73611/
---

## Q73611: Everex, Priam Partitions, and MS-DOS 5.0

{% raw %}

	Article: Q73611
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to Everex technical support, the only way to upgrade to MS-DOS version
	5.0 if the partition is not accessible by MS-DOS 5.0 is to low- level format the
	drive. This applies to drives partitioned with Everex or Priam partitioning
	software prior to upgrading to MS-DOS 5.0.
	
	MORE INFORMATION
	================
	
	Section 2.1 of the README.TXT file that comes with Microsoft MS-DOS 5 Upgrade
	discusses Priam and Everex partitioning software. It suggests installing to
	floppy disks and then checking to see if the partitions are accessible by MS-DOS
	5.0. It does not explain what to do in the event that the partitions are
	inaccessible. Before trying a low-level format, do the following:
	
	1. Back up the hard drive using the previous version of MS-DOS, or a third party
	  backup/restore utility such as Norton's Backup, PC Tools Backup, or FastBack.
	
	2. Attempt to delete the partitions with MS-DOS 5.0 FDISK.EXE.
	
	3. If you can delete the partitions, re-create new ones using FDISK.EXE, and
	  then format the drive. If you cannot delete the partitions, low-level format
	  the drive and then partition the disk.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 5.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
