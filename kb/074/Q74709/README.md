---
layout: page
title: "Q74709: Cannot Format High Density Floppy Disk as Low Density"
permalink: /kb/074/Q74709/
---

## Q74709: Cannot Format High Density Floppy Disk as Low Density

	Article: Q74709
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When attempting to format a 3.5-inch high density (1.44 MB) floppy disk as a low
	density (720K) disk, the following error message may be displayed:
	
	  Invalid Media or Track 0 Bad - Disk Unusable.
	
	This is due to the ability of some floppy drives to sense the media type of
	3.5-inch disks. High density 3.5-inch disks have two holes in the disk shell.
	Low density 3.5-inch disks have only the write- protected hole. The disk will
	format correctly as a 1.44 MB disk.
	
	MORE INFORMATION
	================
	
	To make a floppy drive recognize a high density disk as a low density disk,
	cover the second hole (not the write-protected hole) in the disk shell.
	
	Additional query words: 3.20 3.30 3.31 4.00 4.01 4.01a 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x,5.0
	
	=============================================================================
	
