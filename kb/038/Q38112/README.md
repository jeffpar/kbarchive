---
layout: page
title: "Q38112: Backing up to Floppy Disks in MS-DOS 4.0 and 5.0"
permalink: /kb/038/Q38112/
---

## Q38112: Backing up to Floppy Disks in MS-DOS 4.0 and 5.0

{% raw %}

	Article: Q38112
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using a floppy-disk drive as the destination drive, MS-DOS versions 4.x and
	5.x BACKUP.COM automatically format the destination disk if necessary. To format
	the disk, BACKUP executes FORMAT.COM.
	
	To find FORMAT.COM, BACKUP first searches the current directory, and then uses
	the PATH environment variable for search paths if FORMAT.COM is not found in the
	current directory. When BACKUP finds FORMAT.COM, it checks to see if FORMAT.COM
	is on the destination disk. If FORMAT.COM is on the BACKUP destination disk,
	BACKUP continues the search. If FORMAT.COM is not found, or if it is found only
	on the destination disk, BACKUP gives the following message and terminates:
	
	  FORMAT.COM not found
	
	MORE INFORMATION
	================
	
	The following are workarounds for this problem:
	
	- If more than one drive is available, make sure that either the second drive
	  contains FORMAT.COM and is in the PATH, or the second drive is the
	  destination drive.
	
	- If the system has only one disk drive, the following statement will cause the
	  destination drive to be the same physical drive, but a different logical
	  drive:
	
	  backup a:\<file specification> b: <possible switches>
	
	- If the destination disk has a different capacity than the destination disk
	  drive (for example, a 360K disk in a 1.2-megabyte disk drive), you need to
	  specify this using the /f: switch with the BACKUP command. For example,
	  suppose drive B is a 1.2-megabyte drive, and the destination disk is a 360K
	  disk. To back up all the files on drive A to drive B, the following command
	  is needed:
	
	  backup a:\*.* b: /f:360k
	
	
	Additional query words: 4.00 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS500
	Version           : MS-DOS:4.0,5.0
	
	=============================================================================
	

{% endraw %}
