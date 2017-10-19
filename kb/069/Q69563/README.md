---
layout: page
title: "Q69563: Maximum Line Length and Count for Batch Files &amp; CONFIG.SYS"
permalink: /kb/069/Q69563/
---

## Q69563: Maximum Line Length and Count for Batch Files &amp; CONFIG.SYS

	Article: Q69563
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on the maximum number of lines and line length
	allowed for batch files (including the AUTOEXEC.BAT file) and the CONFIG.SYS
	file.
	
	MORE INFORMATION
	================
	
	Batch Files
	-----------
	
	There is no apparent limit. A test batch file with 67,000 lines and a total of
	804,000 bytes ran all the way through (but it took 15 minutes to do so on a
	386/33 machine). COMMAND.COM reads one batch line at a time, and only retains a
	file pointer for the batch file, so it does not require a large buffer to hold
	batch file commands before processing them. This should allow for batch files
	that span an entire disk, if so desired.
	
	Each batch file line does have a limit, however. Any batch file line exceeding
	127 bytes is truncated at 127 bytes before it is processed.
	
	CONFIG.SYS File
	---------------
	
	There is no limit on lines, but there is a 64-kilobyte (65,534 byte) limit on the
	overall file size. A test with a CONFIG.SYS that contained only 76- byte long
	REM statements (except for the last line, which loaded a device driver) loaded
	properly. There do appear to be some problems on the boundary condition when the
	CONFIG.SYS file size reaches 65,535 bytes.
	
	Each CONFIG.SYS line does not appear to have a limit. The device driver INIT code
	is given a pointer to a read-only buffer, which contains the remainder of the
	CONFIG.SYS file, not just the command line. With this pointer, you can access a
	command line of any length.
	
	Additional query words: 6.22 3.20 3.21 3.30 3.30a 4.00 4.01 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
