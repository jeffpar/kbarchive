---
layout: page
title: "Q104532: Norton Speed Disk May Not Recognize DoubleSpace Floppy Disk"
permalink: /kb/104/Q104532/
---

## Q104532: Norton Speed Disk May Not Recognize DoubleSpace Floppy Disk

{% raw %}

	Article: Q104532
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	When you run Symantec Norton Utilities Speed Disk (SPEEDISK.EXE) and choose to
	optimize a previously unmounted DoubleSpace-compressed floppy disk, Speed Disk
	does not display the floppy disk as a DoubleSpace-compressed disk.
	
	The DoubleSpace-compressed floppy disk is automatically mounted, but Speed Disk
	does not update its display correctly. Also, the DoubleSpace-compressed floppy
	disk's host drive is not displayed.
	
	RESOLUTION
	==========
	
	To make Speed Disk correctly display the DoubleSpace-compressed floppy disk and
	its host drive:
	
	- Access the floppy disk before you run Speed Disk. For example, type "dir a:"
	  (without the quotation marks) at the MS-DOS command prompt and then press
	  ENTER before you run Speed Disk.
	
	-or-
	
	- Exit Speed Disk and then restart it.
	
	Additional query words: 6.20 speedisk speeddisk sd.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	

{% endraw %}
