---
layout: page
title: "Q96329: How MemMaker Finds Current Files and Buffers Settings"
permalink: kb/096/Q96329/
---

## Q96329: How MemMaker Finds Current Files and Buffers Settings

	Article: Q96329
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MemMaker scans memory to determine the current settings for the following four
	environment variables set in the CONFIG.SYS file:
	
	  Buffers=
	  FCBS=
	  Files=
	  Lastdrive=
	
	MemMaker searches memory instead of reading the CONFIG.SYS file because a
	third-party memory manager may be loading these commands into upper memory. This
	is necessary because MemMaker may not recognize your third-party memory
	management loading scheme.
	
	Additional query words: 6.22 6.00 uma umb 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
