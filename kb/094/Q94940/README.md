---
layout: page
title: "Q94940: Interlnk Cannot Access CD-ROM Drives or Network Drives"
permalink: /kb/094/Q94940/
---

## Q94940: Interlnk Cannot Access CD-ROM Drives or Network Drives

	Article: Q94940
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Interlnk cannot access CD-ROM drives or network drives.
	
	Interlnk accesses drives using a block device driver. This means that Interlnk
	can recognize standard drives, but not network drives. Because CD-ROM drives use
	a network interface, Interlnk cannot be used to access them.
	
	NOTE: The MS-DOS SUBST utility uses the redirector hooks introduced in MS-DOS
	version 3.3 and later; therefore, SUBST drives are treated (in most respects) as
	network drives, and Interlnk cannot access them.
	
	Additional query words: 6.22 6.00 interlink inter link 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
