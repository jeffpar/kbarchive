---
layout: page
title: "Q73716: BACKUP Deletes Files from Root of Destination Disk"
permalink: /kb/073/Q73716/
---

## Q73716: BACKUP Deletes Files from Root of Destination Disk

{% raw %}

	Article: Q73716
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To minimize confusion and reduce the number of disks required for backups,
	destination disks should not contain subdirectories.
	
	The MS-DOS BACKUP utility deletes files from the destination disk before it
	starts backing up to that disk. However, files are deleted only from the root of
	the backup destination disk. Files contained in subdirectories on the
	destination disk are not be detected by BACKUP. This can cause confusion when
	backing up or looking at a directory listing of the backup disks.
	
	Note: The RESTORE command works correctly if the destination backup disk had or
	has subdirectories.
	
	Additional query words: 3.20 3.21 3.30 3.30a 4.00 4.01 4.01a 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x,5.0
	
	=============================================================================
	

{% endraw %}
