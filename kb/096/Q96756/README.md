---
layout: page
title: "Q96756: MS-DOS Fails to Detect Floppy Disk Change"
permalink: /kb/096/Q96756/
---

## Q96756: MS-DOS Fails to Detect Floppy Disk Change

	Article: Q96756
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MS-DOS does not recognize when a floppy disk has been changed in your floppy
	disk drive.
	
	CAUSE
	=====
	
	This problem occurs when the disk does not have a volume identification (ID).
	The following disks may have this problem:
	
	- Disks formatted with MS-DOS version 3.x
	
	- Disks formatted with Symantec Norton Safe Format (SF)
	
	- Pre-formatted disks
	
	If the disk does not have a volume ID, the MS-DOS media-change logic cannot
	detect the disk change.
	
	Additional query words: 6.22 6.00 6.20 change line support same file no list changes
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
