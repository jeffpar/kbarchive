---
layout: page
title: "Q77542: Norton Speed Disk Not Compatible with SMARTDrive"
permalink: /kb/077/Q77542/
---

## Q77542: Norton Speed Disk Not Compatible with SMARTDrive

{% raw %}

	Article: Q77542
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Norton Speed Disk versions 6.0 and 6.01 run optimally with MS-DOS version 5.0.
	However, Symantec states that using Norton Speed Disk with MS-DOS SMARTDrive
	cache loaded may cause corruption to the FAT (file allocation table).
	Apparently, SMARTDrive cannot keep up with the read-write activity of Speed
	Disk.
	
	Norton Speed Disk versions 6.0 and 6.01 are the only Speed Disk versions that are
	fully compatible with MS-DOS version 5.0.
	
	MORE INFORMATION
	================
	
	Speed Disk reorganizes the physical layout of all files and directories on a
	disk so as to minimize movement of the read-write head. It defragments files and
	puts all of the unused disk space on the inner tracks of the hard disk.
	
	Speed Disk has a number of different optimization methods including variances of
	a full optimization, unfragmenting files only, and unfragmenting free space
	only. No matter which Speed Disk method you use, don't use SMARTDrive
	simultaneously. Symantec states that their caching utility, NCACHE, is fully
	compatible with Speed Disk.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	
	Additional query words: 5.00 5.00a 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
