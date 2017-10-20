---
layout: page
title: "Q96836: Using Disk Change Detection with Backup for MS-DOS or Windows"
permalink: /kb/096/Q96836/
---

## Q96836: Using Disk Change Detection with Backup for MS-DOS or Windows

{% raw %}

	Article: Q96836
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Backup for MS-DOS and Microsoft Backup for Windows both use "disk
	change detection" to speed up the backup process. This article discusses this
	feature.
	
	MORE INFORMATION
	================
	
	Disk change detection is enabled during the configuration process for Backup.
	During the configuration process, Backup prompts you to remove all floppy disks
	from your disk drives so that it can test whether the drives can automatically
	detect when a disk is inserted. If the floppy disk drives pass this test, disk
	change detection is enabled.
	
	During subsequent floppy-disk backups, you are prompted to insert the next disk
	while the drive light is still on. This may be confusing to users who think that
	removing floppy disks while the light is on may damage the disk drive or the
	disk itself. This is part of the disk change detection process and removing the
	disk when prompted does not damage either the disk or the disk drive. You also
	have the option to wait until the disk drive light goes off; at that point, you
	are again prompted to insert the next disk and instructed to press the ENTER key
	to continue. If you wait until the drive light goes out and prompts you to
	insert the next disk, Microsoft Backup appears to finish normally; however, the
	second (or subsequent) disk may be blank. During a large backup, however, the
	ability to swap disks "on the fly" can greatly reduce the total time you spend
	backing up.
	
	Additional query words: 6.00 6.20 msbackup back up mwbackup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
