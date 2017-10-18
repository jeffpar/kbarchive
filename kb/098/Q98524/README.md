---
layout: page
title: "Q98524: HIMEM.SYS Can Access Only 16 Megabytes on an IBM PS/2"
permalink: kb/098/Q98524/
---

## Q98524: HIMEM.SYS Can Access Only 16 Megabytes on an IBM PS/2

	Article: Q98524
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If HIMEM.SYS can access only 16 megabytes (MB) of memory on a IBM PS/2 that has
	more than 16 MB of memory installed, you may need an updated PS/2 reference
	disk. This situation applies only to versions of HIMEM.SYS that support more
	than 16 MB of memory (versions 3.07 and later).
	
	MORE INFORMATION
	================
	
	According to IBM Technical Support, you should use the following procedure to
	determine if a new reference disk is required:
	
	1. Boot your computer from the reference disk.
	
	2. Select "Set Configuration."
	
	3. Select "View Configuration."
	
	4. Under the "Total System Memory" heading, compare the "Installed Memory" and
	  the "Usable Memory" values. If the "Installed Memory" amount is correct (20
	  MB, 24 MB, and so forth) but the value for "Usable Memory" is 16 MB, an
	  updated reference disk is probably required.
	
	NOTE: IBM recommends that before you obtain the updated reference disk, you first
	run the diagnostics to make sure there is not a hardware problem.
	
	You can download the updated reference disk from the NSC bulletin board service
	(BBS) at (919) 517-0001. For more information, call IBM at (800) 426-9397.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.22 6.00 6.20 3.10 3.11 3.09 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	
	=============================================================================
	
