---
layout: page
title: "Q99495: EMM386.EXE with AUTO Switch Causes MemMaker to Hang"
permalink: kb/099/Q99495/
---

## Q99495: EMM386.EXE with AUTO Switch Causes MemMaker to Hang

	Article: Q99495
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MS-DOS MemMaker may stop responding (hang) on a system that includes the line
	DEVICE=C:\DOS\EMM386.EXE AUTO in the CONFIG.SYS file. When you run MemMaker with
	this line active, it hangs on a blue screen that says "Microsoft MemMaker." At
	this point, you must turn off your computer and then turn it on again. Pressing
	CTRL+ALT+DEL does not work.
	
	CAUSE
	=====
	
	The EMM386.EXE AUTO switch enables expanded memory support only if a program
	calls for it. Therefore, EMM386.EXE is essentially on hold if you are using the
	AUTO switch. MemMaker tries to determine the status of EMM386.EXE, but it cannot
	do so when the AUTO switch is active.
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
