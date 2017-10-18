---
layout: page
title: "Q104543: MemMaker Truncates Lines Longer than 101 Characters"
permalink: kb/104/Q104543/
---

## Q104543: MemMaker Truncates Lines Longer than 101 Characters

	Article: Q104543
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	If you have long lines in your CONFIG.SYS and AUTOEXEC.BAT files, they may be
	truncated when you run MemMaker.
	
	CAUSE
	=====
	
	MemMaker truncates lines longer than 128 characters. If you have lines that are
	close to 128 characters long, they are still truncated because MemMaker
	temporarily adds SIZER information to the front of the lines when it tries to
	determine the size of your device drivers and terminate-and-stay-resident (TSR)
	programs. If your MS-DOS files are stored in C:\DOS (or any 3-character name
	directory), MemMaker typically adds 26 or 27 characters to each device driver
	and TSR command.
	
	RESOLUTION
	==========
	
	To work around or avoid this problem, make sure all the lines in your CONFIG.SYS
	and AUTOEXEC.BAT files are no longer than 101 characters in length.
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
