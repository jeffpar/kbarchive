---
layout: page
title: "Q97026: MemMaker Error: MEMMAKER cannot continue: Your computer's..."
permalink: /kb/097/Q97026/
---

## Q97026: MemMaker Error: MEMMAKER cannot continue: Your computer's...

	Article: Q97026
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start MS-DOS MemMaker you may receive the following error message:
	
	  MemMaker cannot continue: Your computer's startup drive is write-protected,
	  or its drive letter is being used by a network drive. Exit Memmaker and
	  remove the write protection or disconnect from the network drive. Then,
	  restart MemMaker.
	
	CAUSE
	=====
	
	This error occurs because of one of the following conditions:
	
	- The SET TMP and / or SET TEMP statements in the AUTOEXEC.BAT file point to an
	  invalid directory name.
	
	- A file exists in the hard disk's root directory that has the same name as the
	  directory specified in the TMP or TEMP variables.
	
	- There are 512 files in the root directory.
	
	WORKAROUND
	==========
	
	To solve the problem, change the SET TMP= and / or SET TEMP= variables in the
	AUTOEXEC.BAT file to point to a valid directory, or rename a file in your hard
	disk's root directory, or delete/move some of the files in the root directory.
	
	Additional query words: 6.22 6.00 memory 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
