---
layout: page
title: "Q100938: Using Microsoft Anti-Virus to Scan Multiple Floppy Disks"
permalink: /kb/100/Q100938/
---

## Q100938: Using Microsoft Anti-Virus to Scan Multiple Floppy Disks

{% raw %}

	Article: Q100938
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
	
	After you replace a floppy disk, Microsoft Anti-Virus and Microsoft Anti-Virus
	for Windows scan only the root directory of the second disk.
	
	CAUSE
	=====
	
	If you don't reselect the drive, Microsoft Anti-Virus does not have the
	opportunity to build a new directory list.
	
	WORKAROUND
	==========
	
	To correctly scan subsequent disks that have subdirectories, reselect the floppy
	disk drive before choosing Scan.
	
	Additional query words: 6.22 6 6.00 6.20 removable media drives drive swap msav.exe mwav.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
