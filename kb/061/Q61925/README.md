---
layout: page
title: "Q61925: The Effect of Replacement Parameters in PATH Statement"
permalink: kb/061/Q61925/
---

## Q61925: The Effect of Replacement Parameters in PATH Statement

	Article: Q61925
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the "Incorrect DOS Version" error if you execute an MS-DOS
	command (MODE, for example) and your AUTOEXEC.BAT file has two PATH statements
	similar to the following:
	
	     PATH=C:\DOS;
	     PATH=C:\P3;%PATH%
	
	Recopying the MODE.COM file from your MS-DOS floppy disk to your DOS subdirectory
	does not correct the error.
	
	CAUSE
	=====
	
	This problem occurs because MS-DOS is looking for the command in the wrong
	directory.
	
	RESOLUTION
	==========
	
	To correct this problem, you need to rewrite your PATH statement.
	
	MORE INFORMATION
	================
	
	When your AUTOEXEC.BAT file is run, the path is set to C:\DOS (the DOS
	subdirectory). When it executes the second path statement (PATH=C:\P3;%PATH%),
	the path is reset to C:\P3 (the P3 subdirectory) and the C:\DOS path is appended
	to this. When the AUTOEXEC.BAT file is finished running, your path is set to
	C:\P3;C:\DOS, in this order.
	
	When you issue a command (in this case, the MODE command) with the above path
	set, MS-DOS searches the current directory. If the command isn't found in the
	current directory, MS-DOS searches the P3 subdirectory. If the command still
	isn't found, MS-DOS searches the MS-DOS subdirectory.
	
	The "Incorrect DOS version" error occurs because there is a MODE command in your
	P3 subdirectory. When the MODE command is issued, MS-DOS is finding the MODE
	command in the P3 subdirectory rather than the MODE command in the DOS
	subdirectory. To avoid this, you can do either of the following:
	
	- Combine the two PATH statements so that one of them reads as follows
	
	        PATH=C:\DOS;C:\P3;
	
	  then delete the second PATH statement.
	
	-or-
	
	- Change the second PATH statement to read as follows:
	
	        PATH=%PATH%;C:\P3
	
	Either of these solutions forces MS-DOS to search the DOS subdirectory before the
	P3 subdirectory.
	
	Additional query words: 6.22 3.2x 3.30 3.30a 4.00 4.00a 4.01 5.00 5.00a 6.00 6.20 \* yeswin4
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
