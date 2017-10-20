---
layout: page
title: "Q106094: Err Msg: ScanDisk Encountered a Data Error While Reading (128)"
permalink: /kb/106/Q106094/
---

## Q106094: Err Msg: ScanDisk Encountered a Data Error While Reading (128)

{% raw %}

	Article: Q106094
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run ScanDisk on a 1.44-megabyte (MB) floppy disk that is formatted as a
	720-kilobyte (K) disk, you receive the following error:
	
	  ScanDisk encountered a data error while reading root directory entry number
	  128.
	
	CAUSE
	=====
	
	On some machines running MS-DOS 6.2, you can format a 1.44-MB disk as a 720K
	disk by using the "format a: /f:720 /u" command.
	
	Whether or not you can format a 1.44-MB disk as a 720K disk depends on the BIOS
	in your machine.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	

{% endraw %}
