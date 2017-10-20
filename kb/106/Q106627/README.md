---
layout: page
title: "Q106627: PC Shell 6.0 Problems with DoubleSpace-Compressed Drives"
permalink: /kb/106/Q106627/
---

## Q106627: PC Shell 6.0 Problems with DoubleSpace-Compressed Drives

{% raw %}

	Article: Q106627
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	Central Point Software PC Tools version 6.0 PC Shell may not be able to reliably
	read DoubleSpace drives. If it cannot, it may show no files or directories on
	the compressed drive, or it may show a corrupted directory tree.
	
	When this problem occurs, if you use PC Shell to perform any actions that write
	to the drive, the drive may become corrupted.
	
	CAUSE
	=====
	
	
	RESOLUTION
	==========
	
	If you encounter this problem, do not try to write to or modify the drive. Exit
	PC Shell and contact Central Point Software Technical Support for additional
	information.
	
	NOTE: This problem can also affect uncompressed drives that have 256 sectors per
	FAT. This includes uncompressed drives that are 128 MB, 256 MB, 512 MB, 1024 MB,
	or 2048 MB in size.
	
	Additional query words: 6.00 6.20 cps pc-shell pcshell
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
