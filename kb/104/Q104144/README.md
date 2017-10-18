---
layout: page
title: "Q104144: Drive-Mapping Problems When Using Interlnk and Stacker"
permalink: kb/104/Q104144/
---

## Q104144: Drive-Mapping Problems When Using Interlnk and Stacker

	Article: Q104144
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	On a computer using Stacker version 3.0 or earlier, you may encounter
	drive-mapping problems or other unpredictable behavior when using Interlnk.
	
	CAUSE
	=====
	
	Interlnk maps drive letters based on what is available when it loads. If the
	INTERLNK.EXE driver loads before the Stacker drivers, it may map over the drive
	letter used by Stacker for its host drive. This can cause the Stacker host drive
	to map to a different location or not mount at all.
	
	RESOLUTION
	==========
	
	To work around this problem, make certain the DEVICE=C:\DOS\INTERLNK.EXE line
	follows all the Stacker DEVICE= lines in your CONFIG.SYS file.
	
	NOTE: This problem does not occur with DoubleSpace or Stacker 3.1.
	
	MORE INFORMATION
	================
	
	Stacker is manufactured by STAC Electronics, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 6.00 6.20 dblspace unavailable interlink
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
