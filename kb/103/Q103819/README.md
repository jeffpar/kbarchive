---
layout: page
title: "Q103819: ScanDisk Fails to Remount DoubleSpace-Compressed Drive"
permalink: /kb/103/Q103819/
---

## Q103819: ScanDisk Fails to Remount DoubleSpace-Compressed Drive

{% raw %}

	Article: Q103819
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ScanDisk may report an error when mounting a compressed drive and leave the
	compressed drive unmounted after ScanDisk completes its repairs.
	
	CAUSE
	=====
	
	This problem occurs when both the compressed drive and its host drive contain
	errors, and the errors on the compressed drive prevent it from being mounted.
	ScanDisk unmounts the compressed drive when it repairs the host but is unable to
	remount the drive after fixing the host. When mounting the compressed drive
	fails, ScanDisk checks and repairs the DBLSPACE.<nnn> file. However,
	ScanDisk does not mount the DBLSPACE.<nnn> file after scanning it.
	
	RESOLUTION
	==========
	
	To work around this problem, reboot your computer.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : MS-DOS:6.2
	
	=============================================================================
	

{% endraw %}
