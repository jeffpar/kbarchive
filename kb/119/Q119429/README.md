---
layout: page
title: "Q119429: ScanDisk Marks Valid Clusters Bad with Incorrect CMOS Settings"
permalink: /kb/119/Q119429/
---

## Q119429: ScanDisk Marks Valid Clusters Bad with Incorrect CMOS Settings

{% raw %}

	Article: Q119429
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a surface scan with ScanDisk, some valid, usable clusters are
	designated as bad (unusable).
	
	CAUSE
	=====
	
	This problem occurs if your CMOS settings are set incorrectly for your hard disk
	drive. For example, if you have a 150-megabyte (MB) hard disk and the CMOS is
	set for a 20-MB hard disk, ScanDisk scans the first 20 MB correctly, but the
	remaining 130 MB are mark as bad.
	
	RESOLUTION
	==========
	
	To correct your cluster entries:
	
	1. Back up your files.
	
	2. Correct your CMOS settings. (For more information, contact your hardware
	  vendor.)
	
	3. Run FORMAT /C /S to reformat the drive. (The /C parameter tells FORMAT to
	  reexamine each cluster, and the /S parameter makes the drive bootable.)
	
	  NOTE: Use the /S parameter only if the hard disk is your C drive.
	
	4. Reinstall MS-DOS and Microsoft Backup.
	
	5. Restore your data.
	
	
	MORE INFORMATION
	================
	
	Running ScanDisk after you correct the CMOS settings does not correct the
	problem. To avoid corrupting protection schemes that mark clusters bad, ScanDisk
	does not change usable clusters marked as bad back to good.
	
	Additional query words: 6.20 6.21 6.22 unused
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
