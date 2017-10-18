---
layout: page
title: "Q100941: How Setup Determines Where to Place SETVER.EXE in CONFIG.SYS"
permalink: kb/100/Q100941/
---

## Q100941: How Setup Determines Where to Place SETVER.EXE in CONFIG.SYS

	Article: Q100941
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In most cases, MS-DOS Upgrade Setup places SETVER.EXE on the first line of the
	CONFIG.SYS file. However, if you are loading ASPI4DOS.SYS, Setup places the
	command for SETVER.EXE after the command for ASPI4DOS.SYS.
	
	MORE INFORMATION
	================
	
	If you have a DEVICEHIGH command for SETVER.EXE in your CONFIG.SYS file before
	you run Setup, Setup removes that command and adds the following one to the top
	of the file:
	
	     DEVICE=C:\DOS\SETVER.EXE
	
	If you are loading ASPI4DOS.SYS, the above line is added after the command for
	ASPI4DOS. In either case, SETVER is loaded into conventional memory.
	
	To optimize your memory configuration after installing MS-DOS 6, run MemMaker.
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
