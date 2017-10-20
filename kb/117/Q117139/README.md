---
layout: page
title: "Q117139: Hard Disk Access Disappears with Ultrastor 34F Local Bus"
permalink: /kb/117/Q117139/
---

## Q117139: Hard Disk Access Disappears with Ultrastor 34F Local Bus

{% raw %}

	Article: Q117139
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you add the line DOS=UMB to the CONFIG.SYS file, only one MS-DOS command
	can be executed before hard disk access is lost on a SCSI hard disk drive
	controlled by a Ultrastor 34F local bus SCSI controller.
	
	CAUSE
	=====
	
	This behavior occurs if DOS=UMB appears in the CONFIG.SYS file before the
	Ultrastor SCSI device driver, USPI14.SYS.
	
	RESOLUTION
	==========
	
	To correct this problem, edit the CONFIG.SYS file and add USPI14.SYS before the
	line DOS=UMB.
	
	If the USPI14.SYS file is not currently available, remark out the DOS=UMB line in
	the CONFIG.SYS until the file can be loaded.
	
	Additional query words: 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21
	
	=============================================================================
	

{% endraw %}
