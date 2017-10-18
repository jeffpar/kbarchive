---
layout: page
title: "Q99924: Inaccurate DoubleSpace Help Message: There Is No Disk in..."
permalink: kb/099/Q99924/
---

## Q99924: Inaccurate DoubleSpace Help Message: There Is No Disk in...

	Article: Q99924
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If DoubleSpace finds a disk in drive A while examining the system before
	beginning compression, it displays the following message:
	
	  If the power fails during this operation, DoubleSpace will recover
	  automatically and restart your computer. To make sure your computer restarts
	  properly, remove the floppy disk from drive A, and then choose the Retry
	  button.
	
	If you press the F1 function key at this point, DoubleSpace displays the
	following inaccurate help message:
	
	  There is no disk in the drive you selected.
	
	  To continue, insert the disk in the drive, and then choose the Retry button.
	
	STATUS
	======
	
	This problem was corrected in later versions of MS-DOS.
	
	WORKAROUND
	==========
	
	The actual solution to this problem is to remove the disk from drive A, as is
	reflected in the original error message.
	
	Additional query words: 6.00 dblspace double space
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
