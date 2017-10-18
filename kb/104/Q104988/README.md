---
layout: page
title: "Q104988: How to Recover from a Failed MS-DOS 6.2 Step-Up Installation"
permalink: kb/104/Q104988/
---

## Q104988: How to Recover from a Failed MS-DOS 6.2 Step-Up Installation

	Article: Q104988
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	If MS-DOS 6.2 Step-Up Setup is interrupted before the update is finished, restart
	your computer with your Uninstall disk in drive A, uninstall MS-DOS 6.2, and
	then run Step-Up Setup again.
	
	If your Uninstall disk is unavailable for some reason, you can use the following
	procedure to work around this problem:
	
	1. Copy all files from the C:\OLD_DOS.1 directory to your original MS-DOS
	  directory (typically C:\DOS).
	
	2. Start (boot) your computer from an MS-DOS 6.0 floppy disk.
	
	3. Use the SYS program to transfer the MS-DOS 6.0 system files to drive C (or
	  the host drive for C if C is compressed).
	
	4. Run MS-DOS 6.2 Step-Up Setup again.
	
	If Step-Up cannot run because it does not recognize your MS-DOS 6.0 files, you
	may have to install MS-DOS 6.0 before you run Step-Up again. For more
	information, see section 4 of the MS-DOS 6.2 Step-Up README.NOW file.
	
	
	Additional query words: 6.20 stepup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : MS-DOS:6.2
	
	=============================================================================
	
