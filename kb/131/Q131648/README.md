---
layout: page
title: "Q131648: Description of Percent Complete Values in Disk Defragmenter"
permalink: kb/131/Q131648/
---

## Q131648: Description of Percent Complete Values in Disk Defragmenter

	Article: Q131648
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): scandisk diskmem win95 defrag kbDefrag kbDiskMemory kbScanDisk
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the meaning of the values in the Percent Complete status
	bar when you are running Disk Defragmenter.
	
	MORE INFORMATION
	================
	
	The following table describes the meaning of the values in the Percent Complete
	status bar:
	
	  Value      Description
	  ----------------------------------------------------------------------
	  0%-4%      Defrag is running a special version of ScanDisk for Windows
	             to check for errors before doing anything with the disk.
	
	  5%-9%      Defrag is making a "road map" of the best locations for the
	             data on the drive which it will use when actually moving the
	             files.
	
	  10%-100%   Defrag is moving the data on the disk.
	
	On a drive compressed with DoubleSpace or DriveSpace, the following meanings
	apply:
	
	  Value      Description
	  ---------------------------------------------------------------------
	  10%-49%    This is the first optimization pass through the compressed
	             file.
	
	  50%        Defrag is checking the internal compression structures of
	             the drive.
	
	  51%-100%   This is the second and fastest optimization pass on the
	             compressed file.
	
	If the percentage jumps from 0 to 5 percent without any drive activity, the Check
	Drive For Errors option is probably not enabled.
	
	The ScanDisk activity from 0 to 4 percent occurs only when Defrag is started. The
	ScanDisk activity is not repeated if Defrag is forced to restart because of disk
	activity.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : scandisk diskmem win95 defrag kbDefrag kbDiskMemory kbScanDisk 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
