---
layout: page
title: "Q77400: Incompatible XENIX Partition Detected with SMARTDrive"
permalink: /kb/077/Q77400/
---

## Q77400: Incompatible XENIX Partition Detected with SMARTDrive

{% raw %}

	Article: Q77400
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you attempt to load SMARTDRV.SYS on a computer with both MS-DOS and XENIX
	partitions, or MS-DOS and UNIX partitions, the following error message will be
	displayed:
	
	  Incompatible Partition Detected
	
	If the hard drive contains less than 1024 cylinders, you can use the /P switch to
	eliminate the error message and allow SMARTDrive to load.
	
	MORE INFORMATION
	================
	
	SMARTDrive will detect an incompatible partition if a XENIX or UNIX partition
	has been allocated on the hard disk, and will not load. This is because the
	partitioning utility SpeedStor, from Storage Dimensions, sometimes uses the same
	partition identifier as XENIX and UNIX. SMARTDrive cannot tell a XENIX or UNIX
	partition from a SpeedStor partition.
	
	To force SMARTDRV.SYS to load, add the /P switch to the device statement for
	SMARTDrive in the CONFIG.SYS file as follows:
	
	  device=[drive]:\[path]\smartdrv.sys /p
	
	(Where [drive] is the drive containing SMARTDRV.SYS and [path] is the
	subdirectory in which it is located.)
	
	WARNING: If the hard drive has more than 1024 cylinders, do not use the /P
	switch. A severe loss of data may occur.
	
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
