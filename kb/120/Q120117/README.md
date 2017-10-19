---
layout: page
title: "Q120117: DBLSPACE /LIST &amp; DRVSPACE /LIST Report 4096-MB Hard Disk"
permalink: /kb/120/Q120117/
---

## Q120117: DBLSPACE /LIST &amp; DRVSPACE /LIST Report 4096-MB Hard Disk

	Article: Q120117
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you check the size of a compressed or uncompressed drive with the DBLSPACE
	/LIST or DRVSPACE /LIST command, an incorrect amount of disk space (4096
	megabytes [MB]) is reported.
	
	CAUSE
	=====
	
	This situation can occur if the drive in question is not formatted.
	
	RESOLUTION
	==========
	
	Format the drive that is being misreported with the following steps:
	
	1. Boot from a bootable floppy disk that contains FORMAT.COM.
	
	2. Type the following command at the a:> prompt:
	
	  " format <drive letter>: " (without the quotation marks)
	
	  NOTE: If the drive in question is C, add the /S parameter to the FORMAT
	  command (FORMAT C: /S).
	
	Additional query words: 6.00 6.20 6.21 6.22 doublespace drivespace
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
