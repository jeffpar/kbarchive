---
layout: page
title: "Q77426: Setup /F on Machines Without a Formatted Hard Disk"
permalink: /kb/077/Q77426/
---

## Q77426: Setup /F on Machines Without a Formatted Hard Disk

{% raw %}

	Article: Q77426
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
	
	One common cause of the Setup error message
	
	  An error occurred while reading or writing to Drive C:
	
	when running Setup with the /F switch is that the system's hard disk is
	partitioned but not formatted.
	
	MORE INFORMATION
	================
	
	If the system's hard disk is formatted and partitioned, Setup /F will work
	correctly. If the hard disk on the system is not partitioned, Setup /F will also
	work.
	
	However, if the hard disk is partitioned but not formatted, Setup /F will report
	the "An error occurred while reading or writing to drive C:" error message. You
	then have the option to "Try operation again" or "Fail the operation." In most
	cases, if you fail the operation several times in a row, it will setup to floppy
	disks anyway. If not, you must either format the hard disk or remove the
	partitions.
	
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
