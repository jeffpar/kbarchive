---
layout: page
title: "Q103520: MS-DOS 6.2 Defrag Uses XMS Memory When Available"
permalink: /kb/103/Q103520/
---

## Q103520: MS-DOS 6.2 Defrag Uses XMS Memory When Available

	Article: Q103520
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
	
	Microsoft MS-DOS 6.0 Defragmenter (Defrag) relies exclusively on conventional
	memory to hold all drive file allocation table (FAT) data and the disk directory
	structure.
	
	Both MS-DOS 6.0, 6.2, and 6.21 Defrag use a 12,000-byte upper memory block (UMB)
	for data storage if it is available. MS-DOS 6.2 Defrag uses up to 384 kilobytes
	(K) of extended (XMS) memory, when available, to hold the FAT data for the
	drive. If you receive "out of memory" errors with MS-DOS 6.2 Defrag, increase
	conventional memory and/or XMS memory up to 384K.
	
	NOTE: If /SKIPHIGH is specified, the 12,000-byte UMB and the 384K free XMS memory
	are not used.
	
	If you have 384K of XMS memory and Defrag still does not run, free more
	conventional memory. If you cannot free more conventional memory by using a
	memory manager (such as EMM386.EXE) or by removing optional device drivers, you
	must reduce the number of files and directories on your drive to allow Defrag to
	run. This requires transferring, orbacking up and removing, files from your disk
	drive.
	
	MORE INFORMATION
	================
	
	
	Additional query words: 6.22 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
