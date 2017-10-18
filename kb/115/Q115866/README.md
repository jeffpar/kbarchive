---
layout: page
title: "Q115866: Err Msg After Installing MS-DOS: Your Computer Is Running..."
permalink: kb/115/Q115866/
---

## Q115866: Err Msg After Installing MS-DOS: Your Computer Is Running...

	Article: Q115866
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message is displayed when you try to run DriveSpace:
	
	  Your computer is running with an incompatible version of the DRVSPACE.BIN
	  file. You must update DRVSPACE.BIN on the root directory of drive <drive
	  letter>.
	
	This error message is also displayed if you try to run DoubleSpace; however,
	<drive letter> is replaced by an at symbol (@) rather than the actual
	drive letter.
	
	At this point, your DoubleSpace-compressed volumes may be inaccessible.
	
	CAUSE
	=====
	
	This error occurs after you install MS-DOS 6.22 to a directory other than the
	one that contains your MS-DOS 6.0 DoubleSpace files (typically C:\DOS). In this
	situation, the DBLSPACE.BIN file is not properly updated.
	
	RESOLUTION
	==========
	
	To correct this problem, uninstall MS-DOS 6.22 and then reinstall MS-DOS 6.22
	into the directory that contains your MS-DOS files.
	
	Additional query words: setup err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	
