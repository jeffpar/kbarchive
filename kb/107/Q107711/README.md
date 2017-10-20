---
layout: page
title: "Q107711: ScanDisk Reports Compressed Floppy Too Full for Undo"
permalink: /kb/107/Q107711/
---

## Q107711: ScanDisk Reports Compressed Floppy Too Full for Undo

{% raw %}

	Article: Q107711
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When ScanDisk finds errors, it prompts you to create an Undo disk before
	correcting the errors. (You also have the option to skip the Undo disk step.) If
	you choose to create an Undo disk, you must save the information to a floppy
	disk. If you insert a disk that has been compressed by DoubleSpace, the
	following message may appear
	
	  The disk in drive <x> is too full to be used as an Undo disk. To ensure
	  that there is enough room for all the Undo information, make sure the floppy
	  disk has at least 300,000 bytes of free space.
	
	where drive <x> is the DoubleSpace-compressed floppy disk.
	
	CAUSE
	=====
	
	ScanDisk cannot mount a compressed disk for use as the Undo disk, even if
	Automount is enabled in DoubleSpace Manager.
	
	RESOLUTION
	==========
	
	Before you run ScanDisk, be sure the potential Undo disk is mounted. The
	compressed floppy disk must be inserted in the disk drive prior to starting
	ScanDisk. Any action (such as DIR or CHKDSK) you run on that floppy disk drive
	causes the system to mount the disk. ScanDisk then recognizes the compressed
	free space on that disk.
	
	STATUS
	======
	
	This situation does not occur in MS-DOS version 6.22. DriveSpace functionality
	was enhanced to correctly deal with ScanDisk Undo disk.
	
	
	Additional query words: dblspace 6.20 insufficient disk enough
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : MS-DOS:6.2
	
	=============================================================================
	

{% endraw %}
