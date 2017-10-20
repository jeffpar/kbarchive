---
layout: page
title: "Q127021: SMARTDrive Version History"
permalink: /kb/127/Q127021/
---

## Q127021: SMARTDrive Version History

{% raw %}

	Article: Q127021
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.0,5.x,6.0,6.2,6.21,6.22; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	3.00 3.00a 3.10 3.11 | 4.01 5.00 5.00a 6.00 6.20 6.21 6.22
	WINDOWS              | MS-DOS
	kbtool kbref
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.0a, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the version history for Microsoft SMARTDrive.
	
	MORE INFORMATION
	================
	
	Version   Specifications
	----------------------------------------------------------------------
	2.1       Ships with Microsoft MS-DOS version 4.01.
	
	          - Loads in CONFIG.SYS as SMARTDRV.SYS.
	          - Provides read cache for BIOS-supported hard disks only.
	          - Can use extended or expanded memory for cache.
	
	3.0       Ships with Microsoft Windows versions 3.0 and 3.0a.
	
	          - Same as SMARTDrive 2.1, plus:
	          - Provides support for double-buffering.
	
	3.13      Ships with Microsoft MS-DOS versions 5.0 and 5.0a.
	
	          - Same as SMARTDrive 3.0, plus:
	          - Provides added detection for logical partitioning.
	          - Includes code tuning.
	
	4.0       Ships with Microsoft Windows versions 3.1 and 3.11.
	
	          - Same as SMARTDrive 3.13, plus:
	          - Cache loads in AUTOEXEC.BAT as SMARTDRV.EXE and
	            automatically attempts to load high.
	          - Double-buffering support loads in CONFIG.SYS as:
	
	               Device=<drive>\<path>\SMARTDRV.EXE /Double_Buffer
	
	          - Read and write cache for all drives supported by the
	            device driver interface, including floppy drives.
	
	4.1       Ships with Microsoft MS-DOS version 6.0.
	
	          - Same as SMARTDrive 4.0, plus:
	          - Includes support for DoubleSpace drives.
	
	4.2       Available through online services only.
	
	          - Same as SMARTDrive 4.1, plus:
	          - Includes support to clear the cache at an MS-DOS prompt.
	          - Global write cache disabled by default.
	
	5.0       Ships with Microsoft MS-DOS versions 6.20 and 6.21, and with
	         Microsoft Windows for Workgroups version 3.11.
	
	          - Same as SMARTDrive 4.2, plus:
	          - Supports read-caching CD-ROM drives.
	          - Supports the /u switch to not cache CD-ROM drives.
	
	5.01      Ships with Microsoft MS-DOS version 6.22.
	
	          - Same as SMARTDrive 5.0, plus:
	          - Fixes problems with Kodak Photo CDs.
	          - Includes support for DoubleSpace and DriveSpace drives.
	
	Additional query words: 3.00 3.00a 3.10 3.11 4.01 5.00 5.00a 6.00 6.20 6.21 6.22 smartdrv dblspace drvspace
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:4.x,5.0,5.x,6.0,6.2,6.21,6.22; WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
