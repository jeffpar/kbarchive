---
layout: page
title: "Q94331: Disk Error Messages with ASPI2DOS.SYS Device Driver"
permalink: /kb/094/Q94331/
---

## Q94331: Disk Error Messages with ASPI2DOS.SYS Device Driver

{% raw %}

	Article: Q94331
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ASPI2DOS.SYS is an Adaptec driver for the Adaptec AHA 1520 and AHA 1522 SCSI
	controllers. If SMARTDrive is used to cache a drive when ASPI2DOS.SYS is
	installed, you may receive the following error message from the Adaptec
	controller:
	
	  A serious disk error has occurred while writing to drive C.
	
	When you run Microsoft Anti-Virus (MSAV.EXE), you receive the following error
	message:
	
	  Not ready reading (or writing) drive C:
	
	Similar errors may also occur while running Microsoft Defragmenter (DEFRAG.EXE)
	and Microsoft Undelete (UNDELETE.EXE).
	
	NOTE: The SMARTDrive double-buffer driver does not prevent these errors.
	
	CAUSE
	=====
	
	This problem occurs if you use the ASPI2DOS drivers shipped with EZSCSI versions
	2.02 and 2.03.
	
	RESOLUTION
	==========
	
	This problem was corrected in EZSCSI versions 2.04, 3.0, and later. These are
	available for free from Adaptec.
	
	MORE INFORMATION
	================
	
	This problem usually occurs during frequent alternating reads and writes by
	programs such as Microsoft Anti-Virus and SMARTDrive.
	
	Additional query words: 6.22 6.00 6.20 uma double_buffer external
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
