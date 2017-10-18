---
layout: page
title: "Q104531: DoubleSpace Fails to Mount Compressed Disk in BackPack Drive"
permalink: kb/104/Q104531/
---

## Q104531: DoubleSpace Fails to Mount Compressed Disk in BackPack Drive

	Article: Q104531
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
	
	DoubleSpace may fail to automatically mount compressed floppy disks in BackPack
	drives.
	
	CAUSE
	=====
	
	This problem occurs when the BACKPACK.SYS device driver is loaded after the
	DBLSPACE.SYS driver in the CONFIG.SYS file.
	
	The DoubleSpace Automount code works on block device drivers only when they are
	loaded before DBLSPACE.SYS.
	
	RESOLUTION
	==========
	
	Load BACKPACK.SYS before DBLSPACE.SYS in the CONFIG.SYS file.
	
	Additional query words: 6.20 automount
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
