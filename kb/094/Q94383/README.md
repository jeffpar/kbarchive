---
layout: page
title: "Q94383: Error Copying Files with Interlnk on Stacker Volume"
permalink: /kb/094/Q94383/
---

## Q94383: Error Copying Files with Interlnk on Stacker Volume

	Article: Q94383
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	Using Interlnk's INTERSVR command on a volume that has been compressed using
	Stacker version 2.0 may fail if INTERSVR incorrectly calculates the amount of
	free disk space. If this is the case and you attempt to copy a file to the
	compressed volume, you will receive the following error message:
	
	  Error writing drive <drive>:
	
	MORE INFORMATION
	================
	
	When you run INTERSVR on a compressed Stacker volume, Interlnk may incorrectly
	calculate the amount of free disk space on the server machine. Although the DIR
	command (when issued locally) may report little or no free disk space, the DIR
	command issued through Interlnk may report several megabytes of free disk
	space.
	
	This may potentially cause data corruption, but a reproducible case hasn't been
	found.
	
	This problem occurs with Stacker; this problem does not occur with Microsoft
	DoubleSpace.
	
	Stacker is manufactured by STAC Electronics, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 6.0 3rdparty dblspace 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
