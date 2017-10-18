---
layout: page
title: "Q139515: Defrag Cluster Size Changes When 50 Percent Finished"
permalink: kb/139/Q139515/
---

## Q139515: Defrag Cluster Size Changes When 50 Percent Finished

	Article: Q139515
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run Disk Defragmenter on a compressed volume, the Show Details screen
	shows the system cluster size changing from a uniform size to varying sizes
	after Disk Defragmenter is 50 percent finished.
	
	MORE INFORMATION
	================
	
	When you run Disk Defragmenter on a compressed volume, you see uniform boxes on
	the Show Details screen until Disk Defragmenter is 50 percent finished. After 50
	percent, you see boxes of various sizes. This occurs because Disk Defragmenter
	is defragmenting the actual physical hard disk during the first 50 percent, and
	the compressed volume during the second 50 percent.
	
	You see boxes of different sizes because of the way Disk Defragmenter reflects
	how files are stored on an uncompressed drive and on a DriveSpace compressed
	volume.
	
	For additional information about clusters and DriveSpace, Please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q67321 FAT Type and Cluster Size Depends on Logical Drive Size
	
	  Q98407 How DoubleSpace Uses Sector Allocation
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
