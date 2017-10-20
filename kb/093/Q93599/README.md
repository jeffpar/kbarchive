---
layout: page
title: "Q93599: Difference Between DBLSPACE /CHKDSK and CHKDSK"
permalink: /kb/093/Q93599/
---

## Q93599: Difference Between DBLSPACE /CHKDSK and CHKDSK

{% raw %}

	Article: Q93599
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run DoubleSpace with the /CHKDSK switch (for example, type DBLSPACE
	/CHKDSK) on a DoubleSpace partition, it analyzes the DoubleSpace file allocation
	table (FAT) for consistency. The DoubleSpace FAT is a separate data structure
	from the MS-DOS FAT.
	
	To check the DoubleSpace FAT and the MS-DOS FAT, you must run both DBLSPACE
	/CHKDSK and CHKDSK on the DoubleSpace drive. To analyze and repair any problems,
	add the /F switch to both commands.
	
	NOTE: If CHKDSK, or CHKDSK /F, is run on a compressed drive, it automatically
	runs DBLSPACE /CHKDSK, or DBLSPACE /CHKDSK /F,when finished. If DBLSPACE /CHKDSK
	is not invoked, check to make sure DBLSPACE.EXE is located in the same directory
	as CHKDSK.EXE.
	
	MORE INFORMATION
	================
	
	MS-DOS maintains a data structure for the FAT that maintains a "map" of the disk
	usage (both files and free space) recording the status of each sector on the
	disk. When DoubleSpace is installed, it creates its own FAT and maps the MS-DOS
	FAT to the DoubleSpace FAT.
	
	
	Additional query words: 6.00 double space
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	

{% endraw %}
