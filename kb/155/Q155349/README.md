---
layout: page
title: "Q155349: &quot;Invalid Media&quot; Error Message Formatting FAT32 Partition"
permalink: /kb/155/Q155349/
---

## Q155349: &quot;Invalid Media&quot; Error Message Formatting FAT32 Partition

{% raw %}

	Article: Q155349
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to format a FAT32 file system partition larger than 8025 MB from
	within Windows 95, you may receive the following error message
	
	  Verifying <xxx.xx>M
	  Invalid media or track 0 bad-disk unusable
	  Format terminated
	
	where <xxx.xx> is the size of the partition.
	
	CAUSE
	=====
	
	This error occurs if there is a non-DOS partition preceding the extended DOS
	partition and the primary DOS partition has been formatted using the real-mode
	FORMAT.EXE command.
	
	RESOLUTION
	==========
	
	To resolve this issue, format the volume using the following steps:
	
	1. Click the Start button, click Shut Down, click Restart The Computer In MS-DOS
	  Mode, and then click Yes.
	
	2. Type the following command and then press ENTER
	
	  " format <drive>: " (without the quotation marks)
	
	  where <drive> is the drive letter for the partition you want to format.
	
	3. When the partition is formatted, type "exit" (without the quotation marks) to
	  restart Windows 95.
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
